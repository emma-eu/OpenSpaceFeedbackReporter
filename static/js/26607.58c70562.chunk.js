"use strict";(self.webpackChunkopenspace=self.webpackChunkopenspace||[]).push([[26607,48988,52629],{48988:(e,t,r)=>{r.d(t,{OverrideHelper:()=>f});var n=r(69539),s=r(59784),o=r(53084),i=r(98976),a=r(97763),l=r(52629);const c=e=>{if(!e)return[0,0,0,0];const{r:t,g:r,b:n,a:s}=e;return[t,r,n,255*s]};class f{static findApplicableOverrides(e,t,r){if(e&&t){if(e.primitiveName){let n=!1;for(const t of r)if(t.primitiveName===e.primitiveName){n=!0;break}if(!n)for(const s of t)s.primitiveName===e.primitiveName&&r.push(s)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const n of e.effects)f.findApplicableOverrides(n,t,r);if(e.symbolLayers)for(const n of e.symbolLayers)f.findApplicableOverrides(n,t,r);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMSolidFill":case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":if(e.effects)for(const n of e.effects)f.findApplicableOverrides(n,t,r);if(e.markerPlacement&&f.findApplicableOverrides(e.markerPlacement,t,r),"CIMVectorMarker"===e.type){if(e.markerGraphics)for(const n of e.markerGraphics)f.findApplicableOverrides(n,t,r),f.findApplicableOverrides(n.symbol,t,r)}else"CIMCharacterMarker"===e.type?f.findApplicableOverrides(e.symbol,t,r):"CIMHatchFill"===e.type?f.findApplicableOverrides(e.lineSymbol,t,r):"CIMPictureMarker"===e.type&&f.findApplicableOverrides(e.animatedSymbolProperties,t,r)}}}static findEffectOverrides(e,t){if(!e)return null;if("CIMGeometricEffectDashes"===e.type&&(0,a.FH)(e),!t||!e.primitiveName)return{type:"cim-effect-param",effect:e,overrides:[]};const r=(0,a.rB)(e),n=e.primitiveName,s=[];for(const o of t)o.primitiveName===n&&s.push((0,a.rB)(o));return{type:"cim-effect-param",effect:r,overrides:(0,a.pk)(s)}}static async resolveSymbolOverrides(e,t,r,n,s,i,l){if(!e?.symbol)return null;let{symbol:c,primitiveOverrides:u}=e;const p=!!u;if(!p&&!n)return c;c=(0,o.o8)(c),u=(0,o.o8)(u);let h=!0;if(t||(t={attributes:{}},h=!1),p){if(h||(u=u.filter((e=>!e.valueExpressionInfo?.expression.includes("$feature")))),l||(u=u.filter((e=>!e.valueExpressionInfo?.expression.includes("$view")))),u.length>0){const e={spatialReference:r,fields:(0,a.O2)(t.attributes),geometryType:s};await f.createRenderExpressions(u,e),f.evaluateOverrides(u,t,s??"esriGeometryPoint",i,l)}f.applyOverrides(c,u)}return n&&f.applyDictionaryTextOverrides(c,t,n,null),c}static async createRenderExpressions(e,t){const r=[];for(const n of e){const e=n.valueExpressionInfo;if(!e||f._expressionToRenderExpression.has(e.expression))continue;const s=(0,i.Ad)(e.expression,t.spatialReference,t.fields);r.push(s),s.then((t=>f._expressionToRenderExpression.set(e.expression,t)))}r.length>0&&await Promise.all(r)}static evaluateOverrides(e,t,r,n,o){const i={$view:{scale:o?.scale}};for(const a of e){a.value&&"object"==typeof a.value&&(0,s.IB)(a.value)&&("Color"===a.propertyName||"StrokeColor"===a.propertyName)&&(a.value=c(a.value));const e=a.valueExpressionInfo;if(!e)continue;const o=f._expressionToRenderExpression.get(e.expression);o&&(a.value=(0,l.default)(o,t,i,r,n))}}static applyDictionaryTextOverrides(e,t,r,n){let s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"Normal";if(e?.type)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":case"CIMTextSymbol":{const o=e.symbolLayers;if(!o)return;for(const i of o)i&&"CIMVectorMarker"===i.type&&f.applyDictionaryTextOverrides(i,t,r,n,"CIMTextSymbol"===e.type?e.textCase:s)}break;case"CIMVectorMarker":{const s=e.markerGraphics;if(!s)return;for(const e of s)e&&f.applyDictionaryTextOverrides(e,t,r,n)}break;case"CIMMarkerGraphic":{const o=e.textString;if(o&&o.includes("[")){const i=(0,a.gQ)(o,r);e.textString=(0,a.FM)(t,i,n,s)}}}}static applyOverrides(e,t,r,n){if(e.primitiveName)for(const s of t)if(s.primitiveName===e.primitiveName){const t=(0,a.YF)(s.propertyName);if(n&&n.push({cim:e,nocapPropertyName:t,value:e[t]}),r){let t=!1;for(const n of r)n.primitiveName===e.primitiveName&&(t=!0);t||r.push(s)}null!=s.value&&(e[t]=s.value)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const s of e.effects)f.applyOverrides(s,t,r,n);if(e.symbolLayers)for(const s of e.symbolLayers)f.applyOverrides(s,t,r,n);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(e.effects)for(const s of e.effects)f.applyOverrides(s,t,r,n);if("CIMVectorMarker"===e.type&&e.markerGraphics)for(const s of e.markerGraphics)f.applyOverrides(s,t,r,n),f.applyOverrides(s.symbol,t,r,n)}}static restoreOverrides(e){for(const t of e)t.cim[t.nocapPropertyName]=t.value}static buildOverrideKey(e){let t="";for(const r of e)void 0!==r.value&&(t+=`${r.primitiveName}${r.propertyName}${JSON.stringify(r.value)}`);return t}static toValue(e,t){if("DashTemplate"===e)return t.split(" ").map((e=>Number(e)));if("Color"===e){const e=new n.A(t).toRgba();return e[3]*=255,e}return t}}f._expressionToRenderExpression=new Map},52629:(e,t,r)=>{r.d(t,{default:()=>i});var n=r(50076),s=r(76460),o=r(76279);function i(e,t,r,n,o){if(null==e)return null;const i=e.references("geometry")&&o?l(t,n,o):t,a=e.repurposeFeature(i);try{return e.evaluate({...r,$feature:a},e.services)}catch(c){return s.A.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",c),null}}const a=new Map;function l(e,t,r){const{transform:i,hasZ:l,hasM:c}=r;a.has(t)||a.set(t,function(e){const t={};switch(e){case"esriGeometryPoint":return(e,r,n,s)=>(0,o.Tr)(r,t,e,n,s);case"esriGeometryPolygon":return(e,r,n,s)=>(0,o.$X)(r,t,e,n,s);case"esriGeometryPolyline":return(e,r,n,s)=>(0,o.P5)(r,t,e,n,s);case"esriGeometryMultipoint":return(e,r,n,s)=>(0,o.SW)(r,t,e,n,s);default:return s.A.getLogger("esri.views.2d.support.arcadeOnDemand").error(new n.A("mapview-arcade",`Unable to handle geometryType: ${e}`)),e=>e}}(t));const f=a.get(t)(e.geometry,i,l,c);return{...e,geometry:f}}},76279:(e,t,r)=>{r.d(t,{$X:()=>N,B2:()=>i,Gy:()=>k,IE:()=>o,P5:()=>A,Q1:()=>s,QE:()=>O,SW:()=>P,Tr:()=>S,VV:()=>n,wp:()=>w});r(19902);function n(e){return e?{originPosition:"upper-left"===e.originPosition?"upperLeft":"lower-left"===e.originPosition?"lowerLeft":e.originPosition,scale:e.tolerance?[e.tolerance,e.tolerance,1,1]:[1,1,1,1],translate:null!=e.extent?[e.extent.xmin,e.extent.ymax,e.extent.zmin??0,e.extent.mmin??0]:[0,0,0,0]}:null}function s(e){if(function(e){return"lowerLeft"===e.originPosition&&4===e.scale.length&&4===e.translate.length}(e))return e;const{originPosition:t,scale:r,translate:n}=e,s=r[0]??1,o=r[1]??1;return{originPosition:"lowerLeft",scale:[s,"lowerLeft"===t?o:-o,r[2]??1,r[3]??1],translate:[n[0]??0,n[1]??0,n[2]??0,n[3]??0]}}function o(e,t){let{scale:r,translate:n}=e;return Math.round((t-n[0])/r[0])}function i(e,t){let{scale:r,translate:n}=e;return Math.round((t-n[1])/r[1])}function a(e,t){let{scale:r,translate:n}=e;return Math.round(((t??0)-n[2])/r[2])}function l(e,t){let{scale:r,translate:n}=e;return t?Math.round((t-n[3])/r[3]):0}function c(e,t){return e&&t?h:e&&!t?u:!e&&t?p:f}const f=(e,t)=>{const r=[];if(!t.length)return null;const n=t[0];let s=o(e,n[0]),a=i(e,n[1]);r.push([s,a]);for(let l=1;l<t.length;l++){const[n,c]=t[l],f=o(e,n),u=i(e,c);f===s&&u===a||r.push([f-s,u-a]),s=f,a=u}return r},u=(e,t)=>{const r=[];if(!t.length)return null;const n=t[0];let s=o(e,n[0]),l=i(e,n[1]),c=a(e,n[2]);r.push([s,l,c]);for(let f=1;f<t.length;f++){const[n,u,p]=t[f],h=o(e,n),m=i(e,u),y=a(e,p);h===s&&m===l&&y===c||r.push([h-s,m-l,y]),s=h,l=m,c=y}return r},p=(e,t)=>{const r=[];if(!t.length)return null;const n=t[0];let s=o(e,n[0]),a=i(e,n[1]),c=l(e,n[2]);r.push([s,a,c]);for(let f=1;f<t.length;f++){const[n,u,p]=t[f],h=o(e,n),m=i(e,u),y=l(e,p);h===s&&m===a&&y===c||r.push([h-s,m-a,y]),s=h,a=m,c=y}return r},h=(e,t)=>{const r=[];if(!t.length)return null;const n=t[0];let s=o(e,n[0]),c=i(e,n[1]),f=a(e,n[2]),u=l(e,n[3]);r.push([s,c,f,u]);for(let p=1;p<t.length;p++){const[n,h,m,y]=t[p],d=o(e,n),v=i(e,h),g=a(e,m),M=l(e,y);d===s&&v===c&&g===f&&M===u||r.push([d-s,v-c,g,M]),s=d,c=v,f=g,u=M}return r};function m(e,t){let{scale:r,translate:n}=e;return t*r[0]+n[0]}function y(e,t){let{scale:r,translate:n}=e;return t*r[1]+n[1]}function d(e,t){let{scale:r,translate:n}=e;return(t??0)*r[2]+n[2]}function v(e,t){let{scale:r,translate:n}=e;return t?t*r[3]+n[3]:0}function g(e,t){return e&&t?x:e&&!t?b:!e&&t?C:M}const M=(e,t)=>{const r=new Array(t.length);if(!t.length)return r;const n=t[0];let s=m(e,n[0]),o=y(e,n[1]);r[0]=[s,o];const{scale:i,originPosition:a}=e,l=i[0],c="lowerLeft"===a?i[1]:-i[1];for(let f=1;f<t.length;f++){const[e,n]=t[f];s+=l*e,o+=c*n,r[f]=[s,o]}return r},b=(e,t)=>{const r=new Array(t.length);if(!t.length)return r;const n=t[0];let s=m(e,n[0]),o=y(e,n[1]);r[0]=[s,o,d(e,n[2])];const{scale:i,originPosition:a}=e,l=i[0],c="lowerLeft"===a?i[1]:-i[1];for(let f=1;f<t.length;f++){const[n,i,a]=t[f];s+=l*n,o+=c*i,r[f]=[s,o,d(e,a)]}return r},C=(e,t)=>{const r=new Array(t.length);if(!t.length)return r;const n=t[0];let s=m(e,n[0]),o=y(e,n[1]);r[0]=[s,o,v(e,n[2])];const{scale:i,originPosition:a}=e,l=i[0],c="lowerLeft"===a?i[1]:-i[1];for(let f=1;f<t.length;f++){const[n,i,a]=t[f];s+=l*n,o+=c*i,r[f]=[s,o,v(e,a)]}return r},x=(e,t)=>{const r=new Array(t.length);if(!t.length)return r;const n=t[0];let s=m(e,n[0]),o=y(e,n[1]);r[0]=[s,o,d(e,n[2]),v(e,n[3])];const{scale:i,originPosition:a}=e,l=i[0],c="lowerLeft"===a?i[1]:-i[1];for(let f=1;f<t.length;f++){const[n,i,a,u]=t[f];s+=l*n,o+=c*i,r[f]=[s,o,d(e,a),v(e,u)]}return r};function I(e,t,r){const n=new Array(r.length);for(let s=0;s<r.length;s++)n[s]=t(e,r[s]);return n}function k(e,t,r){const n=s(e);return t.x=o(n,r.x),t.y=i(n,r.y),null!=r.z&&(t.z=a(n,r.z)),null!=r.m&&(t.m=l(n,r.m)),t}function w(e,t,r){const n=function(e,t,r,n){const s=[],o=c(r,n);for(let i=0;i<t.length;i++){const r=o(e,t[i]);r&&r.length>=3&&s.push(r)}return s.length?s:null}(s(e),r.rings,r.hasZ,r.hasM);return n?(t.rings=n,t.hasZ=r.hasZ??!1,t.hasM=r.hasM??!1,t):null}function O(e,t,r){const n=function(e,t,r,n){const s=[],o=c(r,n);for(let i=0;i<t.length;i++){const r=o(e,t[i]);r&&r.length>=2&&s.push(r)}return s.length?s:null}(s(e),r.paths,r.hasZ,r.hasM);return n?(t.paths=n,t.hasZ=r.hasZ??!1,t.hasM=r.hasM??!1,t):null}function P(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r?.hasZ??!1,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r?.hasM??!1;if(null!=r){const i=s(e);t.points=g(n,o)(i,r.points),t.hasZ=n,t.hasM=o}return t}function S(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null!=r?.z,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null!=r?.m;if(null==r)return t;const i=s(e);return t.x=m(i,r.x),t.y=y(i,r.y),n&&(t.z=d(i,r.z)),o&&(t.m=v(i,r.m)),t}function N(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r?.hasZ??!1,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r?.hasM??!1;if(null!=r){const i=s(e);t.rings=I(i,g(n,o),r.rings),t.hasZ=n,t.hasM=o}return t}function A(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r?.hasZ??!1,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r?.hasM??!1;if(null!=r){const i=s(e);t.paths=I(i,g(n,o),r.paths),t.hasZ=n,t.hasM=o}return t}}}]);
//# sourceMappingURL=26607.58c70562.chunk.js.map