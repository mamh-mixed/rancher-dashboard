import {
  getBlockDescriptor,
  dumpBlock,
  createYaml,
} from '@shell/utils/create-yaml';
import jsyaml from 'js-yaml';
import SteveSchema from '@shell/models/steve-schema';

const key = 'example';
const randomData = '\n      foo\n      bar\n';

const scalarStyles = ['>', '|'];
const chomping = ['+', '-', ''];
const indentations = ['4', '2', ''];

describe('fx: getBlockDescriptor', () => {
  describe('should parse blocks header for all block indicators combo', () => {
    scalarStyles.forEach((scalar) => {
      chomping.forEach((chomping) => {
        indentations.forEach((indentation) => {
          const combo = `${ scalar }${ indentation }${ chomping }`;

          it(`combo: ${ combo }`, () => {
            const toParse = `${ key }: ${ combo }${ randomData }`;

            const desc = getBlockDescriptor(toParse, key);

            expect(desc?.header).toBe(`${ key }: ${ combo }`);
            expect(desc?.indentation).toBe(indentation);
          });
        });
      });
    });
  });
});

describe('fx: dumpBlock', () => {
  describe('should create a data block replacing indicators with blocks indicator from options', () => {
    const key = 'example';

    scalarStyles.forEach((scalarStyle) => {
      chomping.forEach((chomping) => {
        const options: any = {
          [key]: {
            chomping,
            scalarStyle
          },
          lineWidth: -1
        };

        it(`options: { scalarStyle: ${ scalarStyle }, chomping: ${ chomping } } with indentation`, () => {
          const data = { [key]: ' foo  \n bar   \n   \n   foo\n   bar\n   ' };
          const block = dumpBlock(data, options);

          expect(block.includes(`example: ${ scalarStyle }${ chomping }2`)).toBeTruthy();
        });

        it(`options: { scalarStyle: ${ scalarStyle }, chomping: ${ chomping } } without indentation`, () => {
          const data = { [key]: 'foo  \nbar   \n\nfoo\nbar\n   ' };
          const block = dumpBlock(data, options);

          expect(block.includes(`example: ${ scalarStyle }${ chomping }`)).toBeTruthy();
        });
      });
    });
  });

  it('should not create a data block when the value of a key is not a string', () => {
    const data = { key: { test: 'test' } };

    const expectedResult = jsyaml.dump(data);
    const result = dumpBlock(data);

    expect(result).toStrictEqual(expectedResult);
  });

  it('should retain line breaks when a line longer than 80 characters exists', () => {
    const data = {
      'managerApiConfiguration.properties': `# Sample XPlanManagerAPI Configuration (if this comment is longer than 80 characters, the output should remain the same)

apiUrl=https://example.com/xplan-api-manager
contactEmailAddress=contact@example.com
termsOfServiceUrl=https://example.com/terms
documentationUrl=https://example.com/docs
wmsUrl=https://example.com/xplan-wms/services
skipSemantic=false
skipGeometric=true`
    };

    const expectedResult = `managerApiConfiguration.properties: >+
  # Sample XPlanManagerAPI Configuration (if this comment is longer than 80 characters, the output should remain the same)

  apiUrl=https://example.com/xplan-api-manager
  contactEmailAddress=contact@example.com
  termsOfServiceUrl=https://example.com/terms
  documentationUrl=https://example.com/docs
  wmsUrl=https://example.com/xplan-wms/services
  skipSemantic=false
  skipGeometric=true
`;

    const yamlModifiers = {
      lineWidth:                            -1,
      'managerApiConfiguration.properties': {
        chomping:    '+',
        scalarStyle: '>',
      }
    };

    const result = dumpBlock(data, yamlModifiers);

    expect(result).toStrictEqual(expectedResult);
  });

  it('should not attempt to replace indicators when a header cannot be found', () => {
    const data = {
      a: 'a\nb\tc',
      b: 'a\nb\tc',
      c: `a
b c`
    };

    const expectedResult = `a: "a\\nb\\tc"\nb: "a\\nb\\tc"\nc: |+\n  a\n  b c\n`;

    const yamlModifiers = {
      lineWidth: -1,
      a:         { chomping: '+' },
      b:         { chomping: '+' },
      c:         { chomping: '+' },
    };

    const result = dumpBlock(data, yamlModifiers);

    expect(result).toStrictEqual(expectedResult);
  });

  it('should default to unlimited width for blocks', () => {
    const block = { test: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' };
    const expected = 'test: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n';

    const result = dumpBlock(block);

    expect(result).toStrictEqual(expected);
  });
});

describe('fx: resourceFields', () => {
  const configMap = {
    type:     'configmap',
    metadata: {
      namespace: 'default', annotations: {}, labels: {}
    },
    __clone: true
  };

  const configMapSchema = {
    id:             'configmap',
    type:           'schema',
    resourceFields: null,
    attributes:     {
      columns: [
        {
          name:        'Name',
          type:        'string',
          format:      'name',
          description: 'Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names',
          priority:    0,
          field:       '$.metadata.fields[0]'
        },
        {
          name:        'Data',
          type:        'string',
          format:      '',
          description: "Data contains the configuration data. Each key must consist of alphanumeric characters, '-', '_' or '.'. Values with non-UTF-8 byte sequences must use the BinaryData field. The keys stored in Data must not overlap with the keys in the BinaryData field, this is enforced during validation process.",
          priority:    0,
          field:       '$.metadata.fields[1]'
        },
        {
          name:        'Age',
          type:        'string',
          format:      '',
          description: 'CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.\n\nPopulated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata',
          priority:    0,
          field:       '$.metadata.fields[2]'
        }
      ],
      group:      '',
      kind:       'ConfigMap',
      namespaced: true,
      resource:   'configmaps',
      verbs:      [
        'create',
        'delete',
        'deletecollection',
        'get',
        'list',
        'patch',
        'update',
        'watch'
      ],
      version: 'v1'
    }
  };

  const configMapSchemaDefinition = {
    id:             'configmap',
    type:           'schemaDefinition',
    links:          { self: '…/v1/schemaDefinitions/configmap' },
    definitionType: 'io.k8s.api.core.v1.ConfigMap',
    definitions:    {
      'io.k8s.api.core.v1.ConfigMap': {
        resourceFields: {
          apiVersion: {
            type:        'string',
            description: 'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources'
          },
          binaryData: {
            type:        'map',
            subtype:     'string',
            description: "BinaryData contains the binary data. Each key must consist of alphanumeric characters, '-', '_' or '.'. BinaryData can contain byte sequences that are not in the UTF-8 range. The keys stored in BinaryData must not overlap with the ones in the Data field, this is enforced during validation process. Using this field will require 1.10+ apiserver and kubelet."
          },
          data: {
            type:        'map',
            subtype:     'string',
            description: "Data contains the configuration data. Each key must consist of alphanumeric characters, '-', '_' or '.'. Values with non-UTF-8 byte sequences must use the BinaryData field. The keys stored in Data must not overlap with the keys in the BinaryData field, this is enforced during validation process."
          },
          immutable: {
            type:        'boolean',
            description: 'Immutable, if set to true, ensures that data stored in the ConfigMap cannot be updated (only object metadata can be modified). If not set to true, the field can be modified at any time. Defaulted to nil.'
          },
          kind: {
            type:        'string',
            description: 'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds'
          },
          metadata: {
            type:        'io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta',
            description: "Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata"
          }
        },
        type:        'io.k8s.api.core.v1.ConfigMap',
        description: 'ConfigMap holds configuration data for pods to consume.'
      },
      'io.k8s.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry': {
        resourceFields: {
          apiVersion: {
            type:        'string',
            description: 'APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.'
          },
          fieldsType: {
            type:        'string',
            description: 'FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1"'
          },
          fieldsV1: {
            type:        'map',
            subtype:     'int',
            description: 'FieldsV1 holds the first JSON version format as described in the "FieldsV1" type.'
          },
          manager: {
            type:        'string',
            description: 'Manager is an identifier of the workflow managing these fields.'
          },
          operation: {
            type:        'string',
            description: "Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'."
          },
          subresource: {
            type:        'string',
            description: 'Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource.'
          },
          time: {
            type:        'string',
            description: 'Time is the timestamp of when the ManagedFields entry was added. The timestamp will also be updated if a field is added, the manager changes any of the owned fields value or removes a field. The timestamp does not update when a field is removed from the entry because another manager took it over.'
          }
        },
        type:        'io.k8s.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry',
        description: 'ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to.'
      },
      'io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta': {
        resourceFields: {
          annotations: {
            type:        'map',
            subtype:     'string',
            description: 'Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations'
          },
          creationTimestamp: {
            type:        'string',
            description: 'CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.\n\nPopulated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata'
          },
          deletionGracePeriodSeconds: {
            type:        'int',
            description: 'Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.'
          },
          deletionTimestamp: {
            type:        'string',
            description: 'DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.\n\nPopulated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata'
          },
          finalizers: {
            type:        'array',
            subtype:     'string',
            description: 'Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.'
          },
          generateName: {
            type:        'string',
            description: 'GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.\n\nIf this field is specified and the generated name exists, the server will return a 409.\n\nApplied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency'
          },
          generation: {
            type:        'int',
            description: 'A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.'
          },
          labels: {
            type:        'map',
            subtype:     'string',
            description: 'Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels'
          },
          managedFields: {
            type:        'array',
            subtype:     'io.k8s.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry',
            description: "ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like \"ci-cd\". The set of fields is always in the version that the workflow used when modifying the object."
          },
          name: {
            type:        'string',
            description: 'Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names'
          },
          namespace: {
            type:        'string',
            description: 'Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.\n\nMust be a DNS_LABEL. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/namespaces'
          },
          ownerReferences: {
            type:        'array',
            subtype:     'io.k8s.apimachinery.pkg.apis.meta.v1.OwnerReference',
            description: 'List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.'
          },
          resourceVersion: {
            type:        'string',
            description: 'An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.\n\nPopulated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency'
          },
          selfLink: {
            type:        'string',
            description: 'Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.'
          },
          uid: {
            type:        'string',
            description: 'UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.\n\nPopulated by the system. Read-only. More info: http://kubernetes.io/docs/user-guide/identifiers#uids'
          }
        },
        type:        'io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta',
        description: 'ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.'
      },
      'io.k8s.apimachinery.pkg.apis.meta.v1.OwnerReference': {
        resourceFields: {
          apiVersion: {
            type:        'string',
            description: 'API version of the referent.',
            required:    true
          },
          blockOwnerDeletion: {
            type:        'boolean',
            description: 'If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.'
          },
          controller: {
            type:        'boolean',
            description: 'If true, this reference points to the managing controller.'
          },
          kind: {
            type:        'string',
            description: 'Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
            required:    true
          },
          name: {
            type:        'string',
            description: 'Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names',
            required:    true
          },
          uid: {
            type:        'string',
            description: 'UID of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#uids',
            required:    true
          }
        },
        type:        'io.k8s.apimachinery.pkg.apis.meta.v1.OwnerReference',
        description: 'OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field.'
      }
    }
  };

  afterEach(() => { // eslint-disable-line jest/no-hooks
    SteveSchema.reset('');
  });

  it('schema has empty resource fields', () => {
    const configMapSteveSchema = new SteveSchema(configMapSchema, {});

    configMapSteveSchema['cacheSchemaDefinitionResponse']({
      ...configMapSchemaDefinition,
      definitions: {
        'io.k8s.api.core.v1.ConfigMap': {
          ...configMapSchemaDefinition.definitions['io.k8s.api.core.v1.ConfigMap'],
          resourceFields: {}
        }
      }
    });

    // The data passed in and some 'ALWAYS_ADD' fields make it in
    const expected =
      `metadata:
  namespace: default
  annotations: {}
  labels: {}
__clone: true
apiVersion: v1
kind: ConfigMap`;

    const actual = createYaml(
      [configMapSteveSchema],
      configMapSchema.id,
      configMap
    );

    expect(actual).toStrictEqual(expected);
  });

  it('schema has one resource field', () => {
    const configMapSteveSchema = new SteveSchema(configMapSchema, {});

    configMapSteveSchema['cacheSchemaDefinitionResponse']({
      ...configMapSchemaDefinition,
      definitions: {
        'io.k8s.api.core.v1.ConfigMap': {
          ...configMapSchemaDefinition.definitions['io.k8s.api.core.v1.ConfigMap'],
          resourceFields: {
            immutable: {
              type:        'boolean',
              description: 'Immutable, if set to true, ensures that data stored in the ConfigMap cannot be updated (only object metadata can be modified). If not set to true, the field can be modified at any time. Defaulted to nil.'
            },
          }
        }
      }
    });

    // The data passed in and some defaults from the schema make it in
    const expected =
      `metadata:
  namespace: default
  annotations: {}
  labels: {}
__clone: true
apiVersion: v1
kind: ConfigMap
#immutable: boolean`;

    const actual = createYaml(
      [configMapSteveSchema],
      configMapSchema.id,
      configMap
    );

    expect(actual).toStrictEqual(expected);
  });

  it('schema has nested resource fields', () => {
    const configMapSteveSchema = new SteveSchema(configMapSchema, {});

    configMapSteveSchema['cacheSchemaDefinitionResponse'](configMapSchemaDefinition);

    const expected =
      `apiVersion: v1
kind: ConfigMap
metadata:
  name: #string
  annotations:
    {}
    #  key: string
  labels:
    {}
    #  key: string
  namespace: default
__clone: true
#binaryData:  key: string
#data:  key: string
#immutable: boolean`;

    const actual = createYaml(
      [configMapSteveSchema],
      configMapSchema.id,
      configMap
    );

    expect(actual).toStrictEqual(expected);
  });
});

describe('fx: createYaml', () => {
  interface CommentFieldsOption {
    path: string;
    key: string;
  }

  const schemas = [
    {
      id:             'provisioning.cattle.io.cluster',
      resourceFields: {
        apiVersion: {
          type:   'string',
          create: false,
          update: false
        },
        kind: {
          type:   'string',
          create: false,
          update: false
        },
        metadata: {
          type:   'io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta',
          create: true,
          update: true
        },
        spec: {
          type:     'provisioning.cattle.io.v1.cluster.spec',
          nullable: true,
          create:   true,
          update:   true
        }
      }
    },
    {
      id:             'io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta',
      resourceFields: {
        annotations: {
          type:   'map[string]',
          create: true,
          update: true
        },
        labels: {
          type:   'map[string]',
          create: true,
          update: true
        },
        namespace: {
          type:   'string',
          create: true,
          update: true
        }
      }
    },
    {
      id:             'provisioning.cattle.io.v1.cluster.spec',
      resourceFields: {
        localClusterAuthEndpoint: {
          type:     'provisioning.cattle.io.v1.cluster.spec.localClusterAuthEndpoint',
          nullable: true,
          create:   true,
          update:   true
        },
        rkeConfig: {
          type:     'provisioning.cattle.io.v1.cluster.spec.rkeConfig',
          nullable: true,
          create:   true,
          update:   true
        },
        foo: {
          type:     'array[string]',
          nullable: true,
          create:   true,
          update:   true
        },
      }
    },
    {
      id:             'provisioning.cattle.io.v1.cluster.spec.localClusterAuthEndpoint',
      resourceFields: {
        caCerts: {
          type:     'string',
          nullable: true,
          create:   true,
          update:   true
        },
        enabled: {
          type:     'boolean',
          nullable: true,
          create:   true,
          update:   true
        },
        fqdn: {
          type:     'string',
          nullable: true,
          create:   true,
          update:   true
        }
      }
    },
    {
      id:             'provisioning.cattle.io.v1.cluster.spec.rkeConfig',
      resourceFields: {
        additionalManifest: {
          type:     'string',
          nullable: true,
          create:   true,
          update:   true
        },
        chartValues: {
          type:     'provisioning.cattle.io.v1.cluster.spec.rkeConfig.chartValues',
          nullable: true,
          create:   true,
          update:   true
        },
        machineGlobalConfig: {
          type:     'provisioning.cattle.io.v1.cluster.spec.rkeConfig.machineGlobalConfig',
          nullable: true,
          create:   true,
          update:   true
        }
      }
    },
    {
      id:             'provisioning.cattle.io.v1.cluster.spec.rkeConfig.chartValues',
      resourceFields: {}
    },
    {
      id:             'provisioning.cattle.io.v1.cluster.spec.rkeConfig.machineGlobalConfig',
      resourceFields: {}
    }
  ];

  it('should comment out fields when specific properties are defined on the model with commentFieldsOptions', () => {
    const obj = {
      type:     'provisioning.cattle.io.cluster',
      metadata: {
        namespace:   'fleet-default',
        annotations: { someannotation: 'test' },
        labels:      {}
      },
      __clone: true,
      spec:    {
        localClusterAuthEndpoint: {
          caCerts: '',
          enabled: false,
          fqdn:    ''
        },
        rkeConfig: {
          machineGlobalConfig: {
            cni:                   'calico',
            'disable-kube-proxy':  false,
            'etcd-expose-metrics': false,
            profile:               null
          },
          chartValues: {}
        },
        foo: [
          'bar',
          'bar2'
        ],
      },
      apiVersion: 'provisioning.cattle.io/v1',
      kind:       'Cluster'
    };

    const objResult = {
      metadata: {
        namespace:   'fleet-default',
        annotations: { someannotation: 'test' },
        labels:      {}
      },
      __clone: true,
      spec:    {
        rkeConfig: {
          machineGlobalConfig: {
            cni:                   'calico',
            'disable-kube-proxy':  false,
            'etcd-expose-metrics': false,
          },
          chartValues: {}
        },
      },
      apiVersion: 'provisioning.cattle.io/v1',
      kind:       'Cluster'
    };

    const type = 'provisioning.cattle.io.cluster';
    const commentFieldsOptions: CommentFieldsOption[] = [
      { path: 'spec.rkeConfig.machineGlobalConfig', key: 'profile' },
      { path: 'spec', key: 'localClusterAuthEndpoint' },
      { path: 'spec', key: 'foo' },
    ];

    // Define the expected YAML output as a string, adjusted for correct spacing
    const expectedYaml = `
apiVersion: provisioning.cattle.io/v1
kind: Cluster
metadata:
  annotations:
    someannotation: test
    #  key: string
  labels:
    {}
    #  key: string
  namespace: fleet-default
spec:
#  localClusterAuthEndpoint:
#    caCerts: ''
#    enabled: false
#    fqdn: ''
  rkeConfig:
    chartValues:
      {}
    machineGlobalConfig:
      cni: calico
      disable-kube-proxy: false
      etcd-expose-metrics: false
#       profile: null
#    additionalManifest: string
#  foo:
#    - bar
#    - bar2
#    - string
__clone: true`.trim();

    const result = createYaml(schemas, type, obj, true, 0, '', null, {}, commentFieldsOptions as any);

    // Check if result is a valid YAML
    expect(jsyaml.load(result.trim())).toStrictEqual(objResult);

    // Check if properties are commented out
    expect(result.trim()).toStrictEqual(expectedYaml);
  });
});
