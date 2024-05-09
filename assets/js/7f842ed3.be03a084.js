"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[1120],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=u(t),d=r,m=g["".concat(s,".").concat(d)]||g[d]||c[d]||o;return t?a.createElement(m,i(i({ref:n},p),{},{components:t})):a.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[g]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5112:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=t(8168),r=(t(6540),t(5680));const o={},i="Resource page",l={unversionedId:"extensions/api/nav/resource-page",id:"extensions/api/nav/resource-page",title:"Resource page",description:"Defining a kubernetes resource as a page for an Extension (configureType)",source:"@site/docs/extensions/api/nav/resource-page.md",sourceDirName:"extensions/api/nav",slug:"/extensions/api/nav/resource-page",permalink:"/dashboard/extensions/api/nav/resource-page",draft:!1,tags:[],version:"current",lastUpdatedAt:1715265677,formattedLastUpdatedAt:"May 9, 2024",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Custom page",permalink:"/dashboard/extensions/api/nav/custom-page"},next:{title:"Side menu",permalink:"/dashboard/extensions/api/nav/side-menu"}},s={},u=[{value:"Defining a kubernetes resource as a page for an Extension (configureType)",id:"defining-a-kubernetes-resource-as-a-page-for-an-extension-configuretype",level:2}],p={toc:u},g="wrapper";function c(e){let{components:n,...t}=e;return(0,r.yg)(g,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"resource-page"},"Resource page"),(0,r.yg)("h2",{id:"defining-a-kubernetes-resource-as-a-page-for-an-extension-configuretype"},"Defining a kubernetes resource as a page for an Extension (configureType)"),(0,r.yg)("p",null,"One of the most common view types in Rancher Dashboard is the list view for a kubernetes resource. What if you wanted to include a similiar view on your Extension product for a given resource? For that we can use the function ",(0,r.yg)("inlineCode",{parentName:"p"},"configureType")," coming from ",(0,r.yg)("inlineCode",{parentName:"p"},"$plugin.DSL"),". As an example usage of that method, one could do the following:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"import { IPlugin } from '@shell/core/types';\n\n// this is the definition of a \"blank cluster\" for Rancher Dashboard\n// definition of a \"blank cluster\" in Rancher Dashboard\nconst BLANK_CLUSTER = '_';\n\n\nexport function init($plugin: IPlugin, store: any) {\n  const YOUR_PRODUCT_NAME = 'myProductName';\n  // example of using an existing k8s resource as a page\n  const YOUR_K8S_RESOURCE_NAME = 'provisioning.cattle.io.cluster';\n  \n  const { \n    product,\n    configureType\n  } = $plugin.DSL(store, YOUR_PRODUCT_NAME);\n\n  // registering a top-level product\n  product({\n    icon: 'gear',\n    inStore: 'management',\n    weight: 100,\n    to: {\n      name: `${ YOUR_PRODUCT_NAME }-c-cluster-resource`,\n      params: {\n        product: YOUR_PRODUCT_NAME,\n        cluster: BLANK_CLUSTER,\n        resource: YOUR_K8S_RESOURCE_NAME\n      }\n    }\n  });\n\n  // => => => defining a k8s resource as page\n  configureType(YOUR_K8S_RESOURCE_NAME, {\n    displayName: 'some-custom-name-you-wish-to-assign-to-this-resource',\n    isCreatable: true,\n    isEditable:  true,\n    isRemovable: true,\n    showAge:     true,\n    showState:   true,\n    canYaml:     true,\n    customRoute: {\n      name: `${ YOUR_PRODUCT_NAME }-c-cluster-resource`,\n      params: {\n        product: YOUR_PRODUCT_NAME,\n        cluster: BLANK_CLUSTER,\n        resource: YOUR_K8S_RESOURCE_NAME\n      }\n    }\n  });\n}\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Note: We strongly encourange the usage of the ",(0,r.yg)("inlineCode",{parentName:"p"},"customRoute")," to make sure we follow the same route structure as the other routes on the same Extension product. Check pattern ",(0,r.yg)("a",{parentName:"p",href:"#overview-on-routing-structure-for-a-top-level-extension-product"},"here"),".")),(0,r.yg)("p",null,"The acceptable parameters for the ",(0,r.yg)("inlineCode",{parentName:"p"},"configureType")," function are defined here:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"displayName")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Display name for the given resource. Defaults to ",(0,r.yg)("inlineCode",{parentName:"td"},"YOUR_K8S_RESOURCE_NAME")," (based on example) if you haven't defined a ",(0,r.yg)("inlineCode",{parentName:"td"},"displayName"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"isCreatable")),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"If the 'create' button is available on the list view")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"isEditable")),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"If a resource instance is editable")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"isRemovable")),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"If a resource instance is deletable")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"showAge")),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"If the 'age' column is available on the list view")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"showState")),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"If the 'state' column is available on the list view")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"canYaml")),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"If the k8s resource can be edited/created via YAML editor")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"customRoute")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://v3.router.vuejs.org/api/#routes"},"Vue Router route config")),(0,r.yg)("td",{parentName:"tr",align:null},"Route for this resource page")))))}c.isMDXComponent=!0}}]);