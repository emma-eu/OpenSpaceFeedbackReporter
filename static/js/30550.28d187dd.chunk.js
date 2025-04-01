"use strict";(self.webpackChunkopenspace=self.webpackChunkopenspace||[]).push([[30550],{30550:(e,t,a)=>{a.r(t),a.d(t,{createArcadeExecutor:()=>R,createArcadeProfile:()=>F});var r=a(39356),n=a(46405),o=a(98264),c=(a(81806),a(63241)),i=a(50076),l=a(53084),s=a(76460),p=a(16503),u=a(14902),m=a(38451),y=a(65308),d=a(77725),f=a(98976);let b=null;function v(e,t,a){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const n=t.elementType,c="value",i="array"===n.type?[{name:c,type:n.type,elementType:n.elementType}]:"dictionary"===n.type?[{name:c,type:n.type,properties:n.properties}]:[{name:c,type:n.type}];return new o.A(e.map((e=>{const t={};return S(t,i,{[c]:e},a,r),t[c]})))}function g(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=e instanceof d.A?new m.default({source:e.features,geometryType:e.geometryType,fields:e.fields,spatialReference:e.spatialReference}):e;return t.constructFeatureSet(r,a.spatialReference,null,!0,a.lruCache,a.interceptor)}function h(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{spatialReference:r,interceptor:n,lruCache:o}=a;return"string"==typeof e?t.createFeatureSetCollectionFromService(e,r,o,n):t.createFeatureSetCollectionFromMap(e,r,o,n)}function w(e,t,a){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const n={};return S(n,t.properties,e,a,r),new b.Dictionary(n)}function S(e,t,a,r){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};const c={};for(const n of Object.keys(a))c[n.toLowerCase()]=a[n];for(const i of t){const t=i.name.toLowerCase();if(o.variablesPreProcessed)e[t]=c[t];else switch(i.type){case"array":{const a=c[t];e[t]=null==a?null:v(a,i,r,o);break}case"feature":{const a=c[t];e[t]=null==a?null:b.Feature.createFromGraphic(a,o?.timeZone);break}case"featureSet":{const a=c[t];e[t]=null==a?null:r?g(a,r,o):null;break}case"featureSetCollection":{const a=c[t];e[t]=null==a?null:r?h(a,r,o):null;break}case"dictionary":{const a=c[t];e[t]=null==a?null:w(a,i,r,o);break}case"date":{const a=c[t];e[t]=a?a instanceof n.lY?a:o?.timeZone?n.lY.dateJSAndZoneToArcadeDate(a,o?.timeZone):n.lY.dateJSToArcadeDate(a):null;break}case"dateOnly":{const a=c[t];e[t]=a?a instanceof p.n?a:p.n.fromReader(a):null;break}case"time":{const a=c[t];e[t]=a?a instanceof u.k?a:u.k.fromReader(a):null;break}case"knowledgeGraph":case"geometry":case"boolean":case"text":case"number":e[t]=c[t];break;case"voxel":{const a=c[t];e[t]=null==a?null:new b.Voxel(a,o?.timeZone);break}}}}function $(e,t){for(const a of e)t.push(a),"dictionary"===a.type&&$(a.properties,t);return t}function A(e,t,a,r,n){const{spatialReference:o,interceptor:c,lruCache:i,console:l,abortSignal:s,timeZone:p,services:u={portal:y.A.getDefault()}}=a,m={vars:{},spatialReference:o,interceptor:c,timeZone:p,lrucache:i,useAsync:n,services:u,console:l,abortSignal:s};return t?(S(m.vars,e.variables,t,r,a),m):m}function C(e,t){switch(t.getArcadeType(e)){case"number":case"text":case"boolean":case"point":case"polygon":case"polyline":case"multipoint":case"extent":return e;case"date":return e.toJSDate();case"time":case"dateOnly":return e.toString();case"feature":{const t=(e.type,e),a="geometry"in t?t.geometry():null,n="readAttributes"in t?t.readAttributes():t.attributes;return new r.A({geometry:a,attributes:n})}case"dictionary":{const a=e,r=a.attributes,n={};for(const e of Object.keys(r))n[e]=C(a.field(e),t);return n}case"array":return("toArray"in e?e.toArray():e).map((e=>C(e,t)))}return e}const k={variables:[{name:"$feature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$userInput",type:"geometry"},{name:"$graph",type:"knowledgeGraph"},{name:"$view",type:"dictionary",properties:[{name:"scale",type:"number"},{name:"timeProperties",type:"dictionary",properties:[{name:"currentStart",type:"date"},{name:"currentEnd",type:"date"},{name:"startIncluded",type:"boolean"},{name:"endIncluded",type:"boolean"}]}]}]},x={variables:[{name:"$feature",type:"feature"},{name:"$aggregatedFeatures",type:"featureSet"},{name:"$view",type:"dictionary",properties:[{name:"scale",type:"number"},{name:"timeProperties",type:"dictionary",properties:[{name:"currentStart",type:"date"},{name:"currentEnd",type:"date"},{name:"startIncluded",type:"boolean"},{name:"endIncluded",type:"boolean"}]}]}]},T={variables:[{name:"$voxel",type:"voxel"}]},I=new Map([["aggregate-field",{variables:[{name:"$feature",type:"feature"}]}],["form-constraint",{variables:[{name:"$feature",type:"feature"}]}],["feature-z",{variables:[{name:"$feature",type:"feature"}]}],["field-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$datastore",type:"featureSetCollection"}]}],["form-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$originalFeature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$featureSet",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$editContext",type:"dictionary",properties:[{name:"editType",type:"text"}]}]}],["labeling",{variables:[{name:"$feature",type:"feature"},{name:"$view",type:"dictionary",properties:[{name:"scale",type:"number"},{name:"timeProperties",type:"dictionary",properties:[{name:"currentStart",type:"date"},{name:"currentEnd",type:"date"},{name:"startIncluded",type:"boolean"},{name:"endIncluded",type:"boolean"}]}]}]}],["popup",k],["popup-element",k],["popup-feature-reduction",x],["popup-element-feature-reduction",x],["visualization",{variables:[{name:"$feature",type:"feature"},{name:"$view",type:"dictionary",properties:[{name:"scale",type:"number"},{name:"timeProperties",type:"dictionary",properties:[{name:"currentStart",type:"date"},{name:"currentEnd",type:"date"},{name:"startIncluded",type:"boolean"},{name:"endIncluded",type:"boolean"}]}]}]}],["popup-voxel",T],["popup-element-voxel",T]]);function F(e){"feature-reduction-popup"===e?((0,c.io)(s.A.getLogger("esri.arcade"),'profile name: "feature-reduction-popup"',{replacement:'"popup-feature-reduction"',version:"4.32",warnOnce:!0}),e="popup-feature-reduction"):"feature-reduction-popup-element"===e&&((0,c.io)(s.A.getLogger("esri.arcade"),'profile name: "feature-reduction-popup-element"',{replacement:'"popup-element-feature-reduction"',version:"4.32",warnOnce:!0}),e="popup-element-feature-reduction");const t=I.get(e);if(!t){const t=Array.from(I.keys()).map((e=>`'${e}'`)).join(", ");throw new i.A("createArcadeProfile:invalid-profile-name",`Invalid profile name '${e}'. You must specify one of the following values: ${t}`)}return(0,l.o8)(t)}async function R(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};b||(b=await(0,f.lw)());const{arcade:r,arcadeUtils:n}=b,{loadScriptDependencies:o,referencesMember:c,scriptIsAsync:l}=r,s=$(t.variables,[]),p=s.filter((e=>"featureSet"===e.type||"featureSetCollection"===e.type)).map((e=>e.name.toLowerCase())),u=r.parseScript(e,p);if(!u)throw new i.A("arcade:invalid-script","Unable to create SyntaxTree");const m=n.extractFieldNames(u),y=r.scriptTouchesGeometry(u),d=s.map((e=>e.name.toLowerCase())).filter((e=>c(u,e))),v=l(u,p);await o(u,v,p);const g={vars:{},spatialReference:null,useAsync:v};for(const i of d)g.vars[i]="any";const{lruCache:h}=a,w=r.compileScript(u,g),S=r.featureSetUtils(),{services:k}=a;return{execute:function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(v)throw new i.A("arcade:invalid-execution-mode","Cannot execute the script in synchronous mode");const r=w(A(t,e,{lruCache:h,...a},S,v));return a.rawOutput?r:C(r,n)},executeAsync:async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=await w(A(t,e,{lruCache:h,services:k,...a},S,v));return a.rawOutput?r:C(r,n)},isAsync:v,variablesUsed:d,fieldsUsed:m,geometryUsed:y,syntaxTree:u}}},98264:(e,t,a)=>{a.d(t,{A:()=>r});class r{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this._elements=e}length(){return this._elements.length}get(e){return this._elements[e]}toArray(){return this.slice()}slice(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.length();const a=[];for(let r=e;r<t;r++)a.push(this.get(r));return a}}}}]);
//# sourceMappingURL=30550.28d187dd.chunk.js.map