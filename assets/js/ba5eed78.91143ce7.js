"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9654],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6206:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={title:"store"},l=void 0,c={unversionedId:"reference/store",id:"reference/store",title:"store",description:"store is a helper object for working with Jan app's local storage database.",source:"@site/docs/reference/04_store.md",sourceDirName:"reference",slug:"/reference/store",permalink:"/reference/store",draft:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/reference/04_store.md",tags:[],version:"current",lastUpdatedBy:"Daniel",lastUpdatedAt:1699783905,formattedLastUpdatedAt:"Nov 12, 2023",sidebarPosition:4,frontMatter:{title:"store"},sidebar:"devSidebar",previous:{title:"events",permalink:"/reference/events"},next:{title:"filesystem",permalink:"/reference/filesystem"}},i={},s=[{value:"Usage",id:"usage",level:2},{value:"Insert Data",id:"insert-data",level:2},{value:"Get Data",id:"get-data",level:2},{value:"Update Data",id:"update-data",level:2},{value:"Delete Data",id:"delete-data",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"store")," is a helper object for working with Jan app's local storage database."),(0,r.kt)("p",null,"By default, Jan ships with a ",(0,r.kt)("a",{parentName:"p",href:"https://pouchdb.com/"},"pouchDB")," client side noSQL db to persist usage state."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: default ",(0,r.kt)("inlineCode",{parentName:"em"},"store")," logic is from ",(0,r.kt)("a",{parentName:"em",href:"https://www.npmjs.com/package/@janhq/data-plugin"},"@data-plugin")," which implements ",(0,r.kt)("inlineCode",{parentName:"em"},"StoreService"),".")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { store } from "@janhq/core";\n')),(0,r.kt)("h2",{id:"insert-data"},"Insert Data"),(0,r.kt)("p",null,"You can use the store.insertOne function to insert data into a specific collection in the local data store."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { store } from "@janhq/core";\n\nfunction insertData() {\n  store.insertOne("conversations", { name: "meow" });\n  // Insert a new document with { name: "meow" } into the "conversations" collection.\n}\n')),(0,r.kt)("h2",{id:"get-data"},"Get Data"),(0,r.kt)("p",null,"To retrieve data from a collection in the local data store, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"store.findOne")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"store.findMany")," function. It allows you to filter and retrieve documents based on specific criteria."),(0,r.kt)("p",null,"store.getOne(collectionName, key) retrieves a single document that matches the provided key in the specified collection.\nstore.getMany(collectionName, selector, sort) retrieves multiple documents that match the provided selector in the specified collection."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { store } from "@janhq/core";\n\nfunction getData() {\n  const selector = { name: "meow" };\n  const data = store.findMany("conversations", selector);\n  // Retrieve documents from the "conversations" collection that match the filter.\n}\n')),(0,r.kt)("h2",{id:"update-data"},"Update Data"),(0,r.kt)("p",null,"You can update data in the local store using these functions:"),(0,r.kt)("p",null,"store.updateOne(collectionName, key, update) updates a single document that matches the provided key in the specified collection.\nstore.updateMany(collectionName, selector, update) updates multiple documents that match the provided selector in the specified collection."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function updateData() {\n  const selector = { name: "meow" };\n  const update = { name: "newName" };\n  store.updateOne("conversations", selector, update);\n  // Update a document in the "conversations" collection.\n}\n')),(0,r.kt)("h2",{id:"delete-data"},"Delete Data"),(0,r.kt)("p",null,"You can delete data from the local data store using these functions:"),(0,r.kt)("p",null,"store.deleteOne(collectionName, key) deletes a single document that matches the provided key in the specified collection.\nstore.deleteMany(collectionName, selector) deletes multiple documents that match the provided selector in the specified collection."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function deleteData() {\n  const selector = { name: "meow" };\n  store.deleteOne("conversations", selector);\n  // Delete a document from the "conversations" collection.\n}\n')))}u.isMDXComponent=!0}}]);