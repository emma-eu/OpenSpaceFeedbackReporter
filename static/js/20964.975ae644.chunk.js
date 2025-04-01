"use strict";(self.webpackChunkopenspace=self.webpackChunkopenspace||[]).push([[20964],{20964:(e,t,r)=>{r.d(t,{save:()=>w,saveAs:()=>v});var a=r(97924),n=r(72945);const i="Image Service",o="imagery-layer-save",s="imagery-layer-save-as",l="imagery-tile-layer-save",p="imagery-tile-layer-save-as",u="WCS",c="wcs-layer-save",m="wcs-layer-save-as";function d(e){if("imagery"===e.type||"wcs"===e.type)return{isValid:!0};const{raster:t}=e,r="Function"===t?.datasetFormat?t.primaryRasters?.rasters[0]:t;return{isValid:"RasterTileServer"===r?.datasetFormat&&("Raster"===r.tileType||"Map"===r.tileType),errorMessage:"imagery tile layer should be created from a tiled image service."}}function y(e){const t=e.layerJSON;return Promise.resolve(t&&Object.keys(t).length?t:null)}async function f(e,t){const{parsedUrl:r,title:a,fullExtent:i}=e;t.url=r.path,t.title||=a;try{t.extent=await(0,n.sQ)(i)}catch{t.extent=void 0}(0,n.OM)(t,n.mm.METADATA),(0,n.Sm)(t,n.mm.TILED_IMAGERY,"imagery-tile"===e.type)}async function w(e,t){const r="imagery"===e.type?o:"imagery-tile"===e.type?l:c,n="wcs"===e.type?u:i;return(0,a.UN)({layer:e,itemType:n,validateLayer:d,createItemData:y,errorNamePrefix:r},t)}async function v(e,t,r){const n="imagery"===e.type?s:"imagery-tile"===e.type?p:m,o="wcs"===e.type?u:i;return(0,a.Uh)({layer:e,itemType:o,validateLayer:d,createItemData:y,errorNamePrefix:n,newItem:t,setItemProperties:f},r)}},24387:(e,t,r)=>{function a(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{H:()=>a})},24907:(e,t,r)=>{r.d(t,{c:()=>o,d:()=>n});var a=r(50076);async function n(e){const t=[];for(const r of e.allLayers)if("beforeSave"in r&&"function"==typeof r.beforeSave){const e=r.beforeSave();e&&t.push(e)}await Promise.allSettled(t)}const i=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function o(e,t,r){let n=(e.messages??[]).filter((e=>{let{type:t}=e;return"error"===t})).map((e=>{let{name:t,message:r,details:n}=e;return new a.A(t,r,n)}));if(e.blockedRelativeUrls&&(n=n.concat(e.blockedRelativeUrls.map((e=>new a.A("url:unsupported",`Relative url '${e}' is not supported`))))),r){const{ignoreUnsupported:e,supplementalUnsupportedErrors:t=[],requiredPropertyChecksDisabled:a}=r;e&&(n=n.filter((e=>{let{name:r}=e;return!(i.has(r)||t.includes(r))}))),a&&(n=n.filter((e=>"web-document-write:property-required"!==e.name)))}if(n.length>0)throw new a.A(t.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:n})}},37888:(e,t,r)=>{r.d(t,{v:()=>n});var a=r(24387);function n(e){e?.writtenProperties&&e.writtenProperties.forEach((e=>{let{target:t,propName:r,newOrigin:n}=e;(0,a.H)(t)&&n&&t.originOf(r)!==n&&t.updateOrigin(r,n)}))}},79942:(e,t,r)=>{r.d(t,{m:()=>o,v:()=>i});var a=r(90534),n=r(65308);function i(e,t){return{...s(e,t),readResourcePaths:[]}}function o(e,t,r){const n=(0,a.An)(e.itemUrl);return{...s(e,t),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:n?{rootPath:n.path,writtenUrls:[]}:null,resources:r?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function s(e,t){return{origin:t,url:(0,a.An)(e.itemUrl),portal:e.portal||n.A.getDefault(),portalItem:e}}},97924:(e,t,r)=>{r.d(t,{UN:()=>g,Uh:()=>h});var a=r(50076),n=r(37888),i=r(65308),o=r(70652),s=r(79942),l=r(72945),p=r(24907);async function u(e){const{layer:t,errorNamePrefix:r,validateLayer:n}=e;await t.load(),function(e,t,r){const n=r(e);if(!n.isValid)throw new a.A(`${t}:invalid-parameters`,n.errorMessage,{layer:e})}(t,r,n)}function c(e,t){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`}function m(e){const{item:t,errorNamePrefix:r,layer:n,validateItem:i}=e;if(function(e){const{item:t,itemType:r,additionalItemType:n,errorNamePrefix:i,layer:o}=e,s=[r];if(n&&s.push(n),!s.includes(t.type)){const e=s.map((e=>`'${e}'`)).join(", ");throw new a.A(`${i}:portal-item-wrong-type`,`Portal item type should be one of: "${e}"`,{item:t,layer:o})}}(e),i){const e=i(t);if(!e.isValid)throw new a.A(`${r}:invalid-parameters`,e.errorMessage,{layer:n})}}function d(e){const{layer:t,errorNamePrefix:r}=e,{portalItem:n}=t;if(!n)throw new a.A(`${r}:portal-item-not-set`,c(t,"requires the portalItem property to be set"));if(!n.loaded)throw new a.A(`${r}:portal-item-not-loaded`,c(t,"cannot be saved to a portal item that does not exist or is inaccessible"));m({...e,item:n})}function y(e){const{newItem:t,itemType:r}=e;let a=o.default.from(t);return a.id&&(a=a.clone(),a.id=null),a.type??=r,a.portal??=i.A.getDefault(),m({...e,item:a}),a}function f(e){return(0,s.m)(e,"portal-item")}async function w(e,t,r){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const a=e.write({},t);return await Promise.all(t.resources?.pendingOperations??[]),(0,p.c)(t,{errorName:"layer-write:unsupported"},r),a}function v(e){(0,l.LG)(e,l.mm.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)))}async function g(e,t){const{layer:r,createItemData:a,createJSONContext:i,setItemProperties:o,saveResources:s,supplementalUnsupportedErrors:l}=e;await u(e),d(e);const p=r.portalItem,c=i?i(p):f(p),m=await w(r,c,{...t,supplementalUnsupportedErrors:l}),y=await a({layer:r,layerJSON:m},p);return await(o?.(r,p,y)),v(p),await p.update({data:y}),(0,n.v)(c),await(s?.(p,c)),p}async function h(e,t){const{layer:r,createItemData:a,createJSONContext:i,setItemProperties:o,saveResources:s,supplementalUnsupportedErrors:l}=e;await u(e);const p=y(e),c=i?i(p):f(p),m=await w(r,c,{...t,supplementalUnsupportedErrors:l}),d=await a({layer:r,layerJSON:m},p);return await o(r,p,d),v(p),await async function(e,t,r){const a=e.portal;await a.signIn(),await a.user.addItem({item:e,data:t,folder:r?.folder})}(p,d,t),r.portalItem=p,(0,n.v)(c),await(s?.(p,c)),p}}}]);
//# sourceMappingURL=20964.975ae644.chunk.js.map