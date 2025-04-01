"use strict";(self.webpackChunkopenspace=self.webpackChunkopenspace||[]).push([[48988,52629],{48988:(e,r,t)=>{t.d(r,{OverrideHelper:()=>p});var i=t(69539),s=t(59784),a=t(53084),o=t(98976),n=t(97763),c=t(52629);const l=e=>{if(!e)return[0,0,0,0];const{r:r,g:t,b:i,a:s}=e;return[r,t,i,255*s]};class p{static findApplicableOverrides(e,r,t){if(e&&r){if(e.primitiveName){let i=!1;for(const r of t)if(r.primitiveName===e.primitiveName){i=!0;break}if(!i)for(const s of r)s.primitiveName===e.primitiveName&&t.push(s)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const i of e.effects)p.findApplicableOverrides(i,r,t);if(e.symbolLayers)for(const i of e.symbolLayers)p.findApplicableOverrides(i,r,t);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMSolidFill":case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":if(e.effects)for(const i of e.effects)p.findApplicableOverrides(i,r,t);if(e.markerPlacement&&p.findApplicableOverrides(e.markerPlacement,r,t),"CIMVectorMarker"===e.type){if(e.markerGraphics)for(const i of e.markerGraphics)p.findApplicableOverrides(i,r,t),p.findApplicableOverrides(i.symbol,r,t)}else"CIMCharacterMarker"===e.type?p.findApplicableOverrides(e.symbol,r,t):"CIMHatchFill"===e.type?p.findApplicableOverrides(e.lineSymbol,r,t):"CIMPictureMarker"===e.type&&p.findApplicableOverrides(e.animatedSymbolProperties,r,t)}}}static findEffectOverrides(e,r){if(!e)return null;if("CIMGeometricEffectDashes"===e.type&&(0,n.FH)(e),!r||!e.primitiveName)return{type:"cim-effect-param",effect:e,overrides:[]};const t=(0,n.rB)(e),i=e.primitiveName,s=[];for(const a of r)a.primitiveName===i&&s.push((0,n.rB)(a));return{type:"cim-effect-param",effect:t,overrides:(0,n.pk)(s)}}static async resolveSymbolOverrides(e,r,t,i,s,o,c){if(!e?.symbol)return null;let{symbol:l,primitiveOverrides:f}=e;const m=!!f;if(!m&&!i)return l;l=(0,a.o8)(l),f=(0,a.o8)(f);let y=!0;if(r||(r={attributes:{}},y=!1),m){if(y||(f=f.filter((e=>!e.valueExpressionInfo?.expression.includes("$feature")))),c||(f=f.filter((e=>!e.valueExpressionInfo?.expression.includes("$view")))),f.length>0){const e={spatialReference:t,fields:(0,n.O2)(r.attributes),geometryType:s};await p.createRenderExpressions(f,e),p.evaluateOverrides(f,r,s??"esriGeometryPoint",o,c)}p.applyOverrides(l,f)}return i&&p.applyDictionaryTextOverrides(l,r,i,null),l}static async createRenderExpressions(e,r){const t=[];for(const i of e){const e=i.valueExpressionInfo;if(!e||p._expressionToRenderExpression.has(e.expression))continue;const s=(0,o.Ad)(e.expression,r.spatialReference,r.fields);t.push(s),s.then((r=>p._expressionToRenderExpression.set(e.expression,r)))}t.length>0&&await Promise.all(t)}static evaluateOverrides(e,r,t,i,a){const o={$view:{scale:a?.scale}};for(const n of e){n.value&&"object"==typeof n.value&&(0,s.IB)(n.value)&&("Color"===n.propertyName||"StrokeColor"===n.propertyName)&&(n.value=l(n.value));const e=n.valueExpressionInfo;if(!e)continue;const a=p._expressionToRenderExpression.get(e.expression);a&&(n.value=(0,c.default)(a,r,o,t,i))}}static applyDictionaryTextOverrides(e,r,t,i){let s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"Normal";if(e?.type)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":case"CIMTextSymbol":{const a=e.symbolLayers;if(!a)return;for(const o of a)o&&"CIMVectorMarker"===o.type&&p.applyDictionaryTextOverrides(o,r,t,i,"CIMTextSymbol"===e.type?e.textCase:s)}break;case"CIMVectorMarker":{const s=e.markerGraphics;if(!s)return;for(const e of s)e&&p.applyDictionaryTextOverrides(e,r,t,i)}break;case"CIMMarkerGraphic":{const a=e.textString;if(a&&a.includes("[")){const o=(0,n.gQ)(a,t);e.textString=(0,n.FM)(r,o,i,s)}}}}static applyOverrides(e,r,t,i){if(e.primitiveName)for(const s of r)if(s.primitiveName===e.primitiveName){const r=(0,n.YF)(s.propertyName);if(i&&i.push({cim:e,nocapPropertyName:r,value:e[r]}),t){let r=!1;for(const i of t)i.primitiveName===e.primitiveName&&(r=!0);r||t.push(s)}null!=s.value&&(e[r]=s.value)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const s of e.effects)p.applyOverrides(s,r,t,i);if(e.symbolLayers)for(const s of e.symbolLayers)p.applyOverrides(s,r,t,i);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(e.effects)for(const s of e.effects)p.applyOverrides(s,r,t,i);if("CIMVectorMarker"===e.type&&e.markerGraphics)for(const s of e.markerGraphics)p.applyOverrides(s,r,t,i),p.applyOverrides(s.symbol,r,t,i)}}static restoreOverrides(e){for(const r of e)r.cim[r.nocapPropertyName]=r.value}static buildOverrideKey(e){let r="";for(const t of e)void 0!==t.value&&(r+=`${t.primitiveName}${t.propertyName}${JSON.stringify(t.value)}`);return r}static toValue(e,r){if("DashTemplate"===e)return r.split(" ").map((e=>Number(e)));if("Color"===e){const e=new i.A(r).toRgba();return e[3]*=255,e}return r}}p._expressionToRenderExpression=new Map},52629:(e,r,t)=>{t.d(r,{default:()=>o});var i=t(50076),s=t(76460),a=t(76279);function o(e,r,t,i,a){if(null==e)return null;const o=e.references("geometry")&&a?c(r,i,a):r,n=e.repurposeFeature(o);try{return e.evaluate({...t,$feature:n},e.services)}catch(l){return s.A.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",l),null}}const n=new Map;function c(e,r,t){const{transform:o,hasZ:c,hasM:l}=t;n.has(r)||n.set(r,function(e){const r={};switch(e){case"esriGeometryPoint":return(e,t,i,s)=>(0,a.Tr)(t,r,e,i,s);case"esriGeometryPolygon":return(e,t,i,s)=>(0,a.$X)(t,r,e,i,s);case"esriGeometryPolyline":return(e,t,i,s)=>(0,a.P5)(t,r,e,i,s);case"esriGeometryMultipoint":return(e,t,i,s)=>(0,a.SW)(t,r,e,i,s);default:return s.A.getLogger("esri.views.2d.support.arcadeOnDemand").error(new i.A("mapview-arcade",`Unable to handle geometryType: ${e}`)),e=>e}}(r));const p=n.get(r)(e.geometry,o,c,l);return{...e,geometry:p}}}}]);
//# sourceMappingURL=48988.bb957aef.chunk.js.map