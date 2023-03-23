"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[981],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=d(n),h=r,u=m["".concat(p,".").concat(h)]||m[h]||c[h]||o;return n?a.createElement(u,l(l({ref:t},s),{},{components:n})):a.createElement(u,l({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={toc_max_heading_level:4},l="Extensions API",i={unversionedId:"extensions/extensions-api",id:"extensions/extensions-api",title:"Extensions API",description:"Introduction",source:"@site/docs/extensions/extensions-api.md",sourceDirName:"extensions",slug:"/extensions/extensions-api",permalink:"/dashboard/extensions/extensions-api",draft:!1,tags:[],version:"current",lastUpdatedAt:1679603940,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{toc_max_heading_level:4},sidebar:"mainSidebar",previous:{title:"Initializing Extensions",permalink:"/dashboard/extensions/initializing-extensions"},next:{title:"addAction",permalink:"/dashboard/extensions/extension-api-methods/add-action"}},p={},d=[{value:"Introduction",id:"introduction",level:2},{value:"<code>where</code> string definition",id:"where-string-definition",level:2},{value:"<code>LocationConfig</code> object definition (<code>when</code>)",id:"locationconfig-object-definition-when",level:2},{value:"<code>LocationConfig</code> Examples",id:"locationconfig-examples",level:2}],s={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"extensions-api"},"Extensions API"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Rancher Extensions provides a mechanism to add new functionality to the Dashboard UI at runtime. This is covered mostly by the Extensions API which provides several methods on the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin")," object to enhance the Rancher Dashboard UI in key areas of the interface. They should be defined where the extension is initialized."),(0,r.kt)("p",null,"You can find an installable extension providing some usage examples of the Extensions API here: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/ui-plugin-examples"},"https://github.com/rancher/ui-plugin-examples"),"."),(0,r.kt)("p",null,"These are the currently available methods of the Extension API:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Rancher Version support"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"extension-api-methods/add-action"},"addAction")),(0,r.kt)("td",{parentName:"tr",align:null},"v2.7.2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"extension-api-methods/add-card"},"addCard")),(0,r.kt)("td",{parentName:"tr",align:null},"v2.7.2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"extension-api-methods/add-panel"},"addPanel")),(0,r.kt)("td",{parentName:"tr",align:null},"v2.7.2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"extension-api-methods/add-tab"},"addTab")),(0,r.kt)("td",{parentName:"tr",align:null},"v2.7.2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"extension-api-methods/add-table-column"},"addTableColumn")),(0,r.kt)("td",{parentName:"tr",align:null},"v2.7.2")))),(0,r.kt)("br",null),(0,r.kt)("p",null,"To start off how to use the Extensions API, it's important to mention that most of these methods will need 3 arguments which are important to know:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"where")," - this defines which area of the UI the extension method will apply to."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"when")," - this defines the exact product, resource, cluster, mode, etc, which the extension method will apply to and it's based on a ",(0,r.kt)("inlineCode",{parentName:"p"},"LocationConfig")," object, which is explained on the next chapter."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"options")," - set of options needed for each specific method."),(0,r.kt)("p",null,"Example: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"plugin.addPanel(\n  where,\n  when,\n  options\n);\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"plugin.addPanel(\n  PanelLocation.DETAIL_TOP,\n  { resource: ['catalog.cattle.io.clusterrepo'] },\n  { component: () => import('./DetailTopComponent.vue') }\n);\n")),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"where-string-definition"},(0,r.kt)("inlineCode",{parentName:"h2"},"where")," string definition"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"where")," defines which area of the UI the extension method will apply to and they depend on which method they are applied to. This means that each method will only accept a given subset of the the following list (documented per each method)."),(0,r.kt)("p",null,"The admissable string values for the ",(0,r.kt)("inlineCode",{parentName:"p"},"where")," are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ActionLocation.HEADER")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Location for an action on the Header of Rancher Dashboard. Check ",(0,r.kt)("a",{parentName:"td",href:"extension-api-methods/add-action/#actionlocationheader-options"},"screenshot")," for location.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ActionLocation.TABLE")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Location for an action on a List View Table of Rancher Dashboard. Check ",(0,r.kt)("a",{parentName:"td",href:"extension-api-methods/add-action/#actionlocationtable-options"},"screenshot")," for location.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TabLocation.RESOURCE_DETAIL")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Location for a Tab on a Resource Detail page. Check ",(0,r.kt)("a",{parentName:"td",href:"extension-api-methods/add-tab/#tablocationresource_detail-options"},"screenshot")," for location.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PanelLocation.DETAILS_MASTHEAD")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Location for a panel on the Details Masthead area of a Resource Detail page. Check ",(0,r.kt)("a",{parentName:"td",href:"extension-api-methods/add-panel/#panellocationdetails_masthead-options"},"screenshot")," for location.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PanelLocation.DETAIL_TOP")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Location for a panel on the Detail Top area of a Resource Detail page. Check ",(0,r.kt)("a",{parentName:"td",href:"extension-api-methods/add-panel/#panellocationdetail_top-options"},"screenshot")," for location.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PanelLocation.RESOURCE_LIST")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Location for a panel on a Resource List View page (above the table area). Check ",(0,r.kt)("a",{parentName:"td",href:"extension-api-methods/add-panel/#panellocationresource_list-options"},"screenshot")," for location.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CardLocation.CLUSTER_DASHBOARD_CARD")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Location for a card on the Cluster Dashboard page. Check ",(0,r.kt)("a",{parentName:"td",href:"extension-api-methods/add-card/#cardlocationcluster_dashboard_card-options"},"screenshot")," for location.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TableColumnLocation.RESOURCE")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Location for a table column on a Resource List View page. Check ",(0,r.kt)("a",{parentName:"td",href:"extension-api-methods/add-table-column/#tablecolumnlocationresource-options"},"screenshot")," for location.")))),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"locationconfig-object-definition-when"},(0,r.kt)("inlineCode",{parentName:"h2"},"LocationConfig")," object definition (",(0,r.kt)("inlineCode",{parentName:"h2"},"when"),")"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"LocationConfig")," object defines ",(0,r.kt)("strong",{parentName:"p"},"when")," (product, resource, cluster...) these UI enhancement methods are applied on the UI. The ",(0,r.kt)("strong",{parentName:"p"},"when")," is based on the current routing system employed on Rancher Dashboard. Let's take on a simple example to try and understand the routing structure."),(0,r.kt)("p",null,"Example URL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<INSTANCE-BASE-URL>/dashboard/c/local/explorer/apps.deployment/cattle-system/rancher-webhook\n")),(0,r.kt)("p",null,"How to recognize the URL structure on the example above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<INSTANCE-BASE-URL>/dashboard/c/<CLUSTER-ID>/<PRODUCT-ID>/<RESOURCE-ID>/<NAMESPACE-ID>/<ID>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," There are Kubernetes resources that aren't namespaced, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"catalog.cattle.io.clusterrepo"),", and in those cases the following structure applies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<INSTANCE-BASE-URL>/dashboard/c/<CLUSTER-ID>/<PRODUCT-ID>/<RESOURCE-ID>/<ID>\n")),(0,r.kt)("p",null,'There is another different routing pattern for "extensions as products" which follows a slightly different convention of the core Rancher Dashboard routes. An example of this would be:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<INSTANCE-BASE-URL>/dashboard/elemental/c/local/elemental.cattle.io.machineinventory/nvxml-6mtga\n")),(0,r.kt)("p",null,"which translates to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<INSTANCE-BASE-URL>/dashboard/<PRODUCT-ID>/c/<CLUSTER-ID>/<RESOURCE-ID>/<ID>\n")),(0,r.kt)("p",null,"With this it's then possible to easily identify the parameters needed to populate the ",(0,r.kt)("inlineCode",{parentName:"p"},"LocationConfig")," and add the UI enhancements to the areas that you like. YES, it's also possible to enhance other extensions!"),(0,r.kt)("p",null,"The admissable parameters for the ",(0,r.kt)("inlineCode",{parentName:"p"},"LocationConfig")," object are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"product")),(0,r.kt)("td",{parentName:"tr",align:null},"Array"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of the product identifier. Ex: ",(0,r.kt)("inlineCode",{parentName:"td"},"fleet"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"manager")," (Cluster Management), ",(0,r.kt)("inlineCode",{parentName:"td"},"harvesterManager")," (Virtualization Management), ",(0,r.kt)("inlineCode",{parentName:"td"},"explorer")," (Cluster Explorer) or ",(0,r.kt)("inlineCode",{parentName:"td"},"home")," (Homepage)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"resource")),(0,r.kt)("td",{parentName:"tr",align:null},"Array"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of the identifier of the kubernetes resource to be bound to. Ex: ",(0,r.kt)("inlineCode",{parentName:"td"},"apps.deployment"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"storage.k8s.io.storageclass")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"secret"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"namespace")),(0,r.kt)("td",{parentName:"tr",align:null},"Array"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of the namespace identifier. Ex: ",(0,r.kt)("inlineCode",{parentName:"td"},"kube-system"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"cattle-global-data")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"cattle-system"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cluster")),(0,r.kt)("td",{parentName:"tr",align:null},"Array"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of the cluster identifier. Ex: ",(0,r.kt)("inlineCode",{parentName:"td"},"local"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"Array"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of the identifier for a given resource. Ex: ",(0,r.kt)("inlineCode",{parentName:"td"},"deployment-unt6xmz"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mode")),(0,r.kt)("td",{parentName:"tr",align:null},"Array"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of modes which relates to the type of view on which the given enhancement should be applied. Admissable values are: ",(0,r.kt)("inlineCode",{parentName:"td"},"edit"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"config"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"detail")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"list"))))),(0,r.kt)("h2",{id:"locationconfig-examples"},(0,r.kt)("inlineCode",{parentName:"h2"},"LocationConfig")," Examples"),(0,r.kt)("p",null,"Example 1:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{}\n")),(0,r.kt)("p",null,"Passing an empty object as a ",(0,r.kt)("inlineCode",{parentName:"p"},"LocationObject")," will apply a given extension enhancement to all locations where it can be apllied."),(0,r.kt)("p",null,"Example 2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{ product: ['home'] }\n")),(0,r.kt)("p",null,"Extension enhancement will be applied on the homepage of rancher dashboard (if applicable)."),(0,r.kt)("p",null,"Example 3:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{ resource: ['pod'], id: ['pod-nxr5vm'] }\n")),(0,r.kt)("p",null,"Extension enhancement will be applied on the resource ",(0,r.kt)("inlineCode",{parentName:"p"},"pod")," with id ",(0,r.kt)("inlineCode",{parentName:"p"},"pod-nxr5vm")," (if applicable)."),(0,r.kt)("p",null,"Example 4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{ \n  cluster:  ['local'], \n  resource: ['catalog.cattle.io.clusterrepo'], \n  mode:     ['edit'] \n}\n")),(0,r.kt)("p",null,"Extension enhancement will be applied on the ",(0,r.kt)("inlineCode",{parentName:"p"},"edit")," view/mode of the resource ",(0,r.kt)("inlineCode",{parentName:"p"},"catalog.cattle.io.clusterrepo")," inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"local")," cluster (if applicable)."))}c.isMDXComponent=!0}}]);