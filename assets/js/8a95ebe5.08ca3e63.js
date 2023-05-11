"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[462],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},680:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={},i="Metadata",p={unversionedId:"extensions/api/metadata",id:"extensions/api/metadata",title:"Metadata",description:"Extensions need to provide metadata so that can it be displayed in the Rancher UI.",source:"@site/docs/extensions/api/metadata.md",sourceDirName:"extensions/api",slug:"/extensions/api/metadata",permalink:"/dashboard/extensions/api/metadata",draft:!1,tags:[],version:"current",lastUpdatedAt:1683802822,formattedLastUpdatedAt:"May 11, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Concepts",permalink:"/dashboard/extensions/api/concepts"},next:{title:"Products",permalink:"/dashboard/extensions/api/nav/products"}},s={},l=[],c={toc:l};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"metadata"},"Metadata"),(0,r.kt)("p",null,"Extensions need to provide metadata so that can it be displayed in the Rancher UI."),(0,r.kt)("p",null,"This is done my setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata")," property on the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin")," object that is passed to the init function for an extension package."),(0,r.kt)("p",null,"This should pull metadata from the extension's ",(0,r.kt)("inlineCode",{parentName:"p"},"pacakge.json")," file, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { importTypes } from '@rancher/auto-import';\nimport { IPlugin } from '@shell/core/types';\n\n// Init the package\nexport default function(plugin: IPlugin) {\n  // Auto-import model, detail, edit from the folders\n  // importTypes(plugin);\n\n  // Provide extension metadata from package.json\n  plugin.metadata = require('./package.json');\n\n}\n")),(0,r.kt)("p",null,"In addition, if you add a ",(0,r.kt)("inlineCode",{parentName:"p"},"README.md")," file to your extension root folder, it's content will be used to populate the ",(0,r.kt)("inlineCode",{parentName:"p"},"detail")," portion of the product description."),(0,r.kt)("p",null,"Example of extension metadata shown in the Rancher Extensions UI:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Product Information",src:n(7835).Z,width:"1480",height:"838"})))}d.isMDXComponent=!0},7835:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/product-information-ac8d2051274918a775f1c7f811a3a43e.png"}}]);