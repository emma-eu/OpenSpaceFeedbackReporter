"use strict";(self.webpackChunkopenspace=self.webpackChunkopenspace||[]).push([[48988,52629,69679],{28660:(e,t,s)=>{s.d(t,{B1:()=>n,ab:()=>a,bR:()=>o,mK:()=>i});var r=s(81806);function i(){return(0,r.A)("curve-densification-coarse-segments")}function n(){return(0,r.A)("curve-densification-max-segments")}function o(){return(0,r.A)("curve-densification-min-segments")}function a(){return(0,r.A)("curve-densification-pixels-per-segment")}},44680:(e,t,s)=>{function r(){return[1,0,0,0,1,0,0,0,1]}function i(e,t,s,r,i,n,o,a,c){return[e,t,s,r,i,n,o,a,c]}s.d(t,{fA:()=>i,vt:()=>r,zK:()=>n});const n=[1,0,0,0,1,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:n,clone:function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]},create:r,createView:function(e,t){return new Float64Array(e,t,9)},fromValues:i},Symbol.toStringTag,{value:"Module"}))},48988:(e,t,s)=>{s.d(t,{OverrideHelper:()=>l});var r=s(69539),i=s(59784),n=s(53084),o=s(98976),a=s(97763),c=s(52629);const h=e=>{if(!e)return[0,0,0,0];const{r:t,g:s,b:r,a:i}=e;return[t,s,r,255*i]};class l{static findApplicableOverrides(e,t,s){if(e&&t){if(e.primitiveName){let r=!1;for(const t of s)if(t.primitiveName===e.primitiveName){r=!0;break}if(!r)for(const i of t)i.primitiveName===e.primitiveName&&s.push(i)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const r of e.effects)l.findApplicableOverrides(r,t,s);if(e.symbolLayers)for(const r of e.symbolLayers)l.findApplicableOverrides(r,t,s);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMSolidFill":case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":if(e.effects)for(const r of e.effects)l.findApplicableOverrides(r,t,s);if(e.markerPlacement&&l.findApplicableOverrides(e.markerPlacement,t,s),"CIMVectorMarker"===e.type){if(e.markerGraphics)for(const r of e.markerGraphics)l.findApplicableOverrides(r,t,s),l.findApplicableOverrides(r.symbol,t,s)}else"CIMCharacterMarker"===e.type?l.findApplicableOverrides(e.symbol,t,s):"CIMHatchFill"===e.type?l.findApplicableOverrides(e.lineSymbol,t,s):"CIMPictureMarker"===e.type&&l.findApplicableOverrides(e.animatedSymbolProperties,t,s)}}}static findEffectOverrides(e,t){if(!e)return null;if("CIMGeometricEffectDashes"===e.type&&(0,a.FH)(e),!t||!e.primitiveName)return{type:"cim-effect-param",effect:e,overrides:[]};const s=(0,a.rB)(e),r=e.primitiveName,i=[];for(const n of t)n.primitiveName===r&&i.push((0,a.rB)(n));return{type:"cim-effect-param",effect:s,overrides:(0,a.pk)(i)}}static async resolveSymbolOverrides(e,t,s,r,i,o,c){if(!e?.symbol)return null;let{symbol:h,primitiveOverrides:u}=e;const d=!!u;if(!d&&!r)return h;h=(0,n.o8)(h),u=(0,n.o8)(u);let p=!0;if(t||(t={attributes:{}},p=!1),d){if(p||(u=u.filter((e=>!e.valueExpressionInfo?.expression.includes("$feature")))),c||(u=u.filter((e=>!e.valueExpressionInfo?.expression.includes("$view")))),u.length>0){const e={spatialReference:s,fields:(0,a.O2)(t.attributes),geometryType:i};await l.createRenderExpressions(u,e),l.evaluateOverrides(u,t,i??"esriGeometryPoint",o,c)}l.applyOverrides(h,u)}return r&&l.applyDictionaryTextOverrides(h,t,r,null),h}static async createRenderExpressions(e,t){const s=[];for(const r of e){const e=r.valueExpressionInfo;if(!e||l._expressionToRenderExpression.has(e.expression))continue;const i=(0,o.Ad)(e.expression,t.spatialReference,t.fields);s.push(i),i.then((t=>l._expressionToRenderExpression.set(e.expression,t)))}s.length>0&&await Promise.all(s)}static evaluateOverrides(e,t,s,r,n){const o={$view:{scale:n?.scale}};for(const a of e){a.value&&"object"==typeof a.value&&(0,i.IB)(a.value)&&("Color"===a.propertyName||"StrokeColor"===a.propertyName)&&(a.value=h(a.value));const e=a.valueExpressionInfo;if(!e)continue;const n=l._expressionToRenderExpression.get(e.expression);n&&(a.value=(0,c.default)(n,t,o,s,r))}}static applyDictionaryTextOverrides(e,t,s,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"Normal";if(e?.type)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":case"CIMTextSymbol":{const n=e.symbolLayers;if(!n)return;for(const o of n)o&&"CIMVectorMarker"===o.type&&l.applyDictionaryTextOverrides(o,t,s,r,"CIMTextSymbol"===e.type?e.textCase:i)}break;case"CIMVectorMarker":{const i=e.markerGraphics;if(!i)return;for(const e of i)e&&l.applyDictionaryTextOverrides(e,t,s,r)}break;case"CIMMarkerGraphic":{const n=e.textString;if(n&&n.includes("[")){const o=(0,a.gQ)(n,s);e.textString=(0,a.FM)(t,o,r,i)}}}}static applyOverrides(e,t,s,r){if(e.primitiveName)for(const i of t)if(i.primitiveName===e.primitiveName){const t=(0,a.YF)(i.propertyName);if(r&&r.push({cim:e,nocapPropertyName:t,value:e[t]}),s){let t=!1;for(const r of s)r.primitiveName===e.primitiveName&&(t=!0);t||s.push(i)}null!=i.value&&(e[t]=i.value)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const i of e.effects)l.applyOverrides(i,t,s,r);if(e.symbolLayers)for(const i of e.symbolLayers)l.applyOverrides(i,t,s,r);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(e.effects)for(const i of e.effects)l.applyOverrides(i,t,s,r);if("CIMVectorMarker"===e.type&&e.markerGraphics)for(const i of e.markerGraphics)l.applyOverrides(i,t,s,r),l.applyOverrides(i.symbol,t,s,r)}}static restoreOverrides(e){for(const t of e)t.cim[t.nocapPropertyName]=t.value}static buildOverrideKey(e){let t="";for(const s of e)void 0!==s.value&&(t+=`${s.primitiveName}${s.propertyName}${JSON.stringify(s.value)}`);return t}static toValue(e,t){if("DashTemplate"===e)return t.split(" ").map((e=>Number(e)));if("Color"===e){const e=new r.A(t).toRgba();return e[3]*=255,e}return t}}l._expressionToRenderExpression=new Map},52629:(e,t,s)=>{s.d(t,{default:()=>o});var r=s(50076),i=s(76460),n=s(76279);function o(e,t,s,r,n){if(null==e)return null;const o=e.references("geometry")&&n?c(t,r,n):t,a=e.repurposeFeature(o);try{return e.evaluate({...s,$feature:a},e.services)}catch(h){return i.A.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",h),null}}const a=new Map;function c(e,t,s){const{transform:o,hasZ:c,hasM:h}=s;a.has(t)||a.set(t,function(e){const t={};switch(e){case"esriGeometryPoint":return(e,s,r,i)=>(0,n.Tr)(s,t,e,r,i);case"esriGeometryPolygon":return(e,s,r,i)=>(0,n.$X)(s,t,e,r,i);case"esriGeometryPolyline":return(e,s,r,i)=>(0,n.P5)(s,t,e,r,i);case"esriGeometryMultipoint":return(e,s,r,i)=>(0,n.SW)(s,t,e,r,i);default:return i.A.getLogger("esri.views.2d.support.arcadeOnDemand").error(new r.A("mapview-arcade",`Unable to handle geometryType: ${e}`)),e=>e}}(t));const l=a.get(t)(e.geometry,o,c,h);return{...e,geometry:l}}},69679:(e,t,s)=>{s.d(t,{A:()=>Se});var r=s(35143),i=s(91967),n=s(18690),o=s(81806),a=s(5632),c=s(30726),h=s(50346),l=s(68134),u=s(46053),d=(s(76460),s(85842)),p=s(2413),m=s(19902),f=s(1900),y=s(401),g=s(48988),_=s(84202),b=s(5095),v=s(93691),I=s(31612),w=s(62924),S=s(15698),M=s(3289);var x=s(13618),C=s(86289),R=s(69369),T=s(77408),P=s(205),k=s(98618),G=s(1484),A=s(93210);class O extends A.Y{static from(e,t,s){return new O(e,t,s)}constructor(e,t,s){super(s),this._items=e,this._tile=t,this._index=-1,this._cachedGeometry=null;const r=t.lod;r.wrap&&(this._wrappingInfo={worldSizeX:r.worldSize[0]})}get _current(){return this._items[this._index]}getItem(){return this._current}getZOrder(){return this._current.zOrder}getMeshWriters(){return this._current.symbolResource?.symbolInfo.meshWriters??[]}hasField(e){return null!=this._current.attributes[e]}field(e){return this.readAttribute(e)}get geometryType(){const e=(0,m.$B)(this._current.geometry);return"esriGeometryPoint"===e?"esriGeometryMultipoint":e}getCursor(){return this.copy()}copy(){const e=new O(this._items,this._tile,this.metadata);return this.copyInto(e),e}copyInto(e){super.copyInto(e),e._cachedGeometry=this._cachedGeometry,e._index=this._index}get fields(){throw new Error("Fields reading not supported to graphics.")}get hasFeatures(){return!!this._items.length}get hasNext(){return this._index+1<this._items.length}get exceededTransferLimit(){throw new Error("InternalError: exceededTransferLimit not implemented for graphics.")}get hasZ(){return!1}get hasM(){return!1}get usedMemory(){return this._current.usedMemory}getInTransform(){return this._tile.transform}getSize(){return this._items.length}getAttributeHash(){let e="";for(const t in this._current.attributes)e+=this._current.attributes[t];return e}getObjectId(){return this._items[this._index].objectId}getDisplayId(){return this._current.displayId}setDisplayId(e){throw new Error("InternalError: Setting displayId not supported for graphics.")}setIndex(e){this._index=e}getIndex(){return this._index}next(){for(this._cachedGeometry=null;++this._index<this._items.length&&!this._getExists(););return this._index<this._items.length}readGeometryArea(){throw new Error("InternalError: readGeometryArea not supported for graphics.")}_readGeometry(){if(!this._cachedGeometry){let e=(0,k.Ux)(this._current.projectedGeometry,this.hasZ,this.hasM);if("esriGeometryPolyline"===this.geometryType&&(e=(0,k.kz)(new G.A,e,this.hasZ,this.hasM,this.geometryType,this._tile.transform.scale[0])),this._cachedGeometry=(0,k.Nl)(new G.A,e,this.hasZ,this.hasM,this.geometryType,this._tile.transform),!this._cachedGeometry)return null;this._wrapGeometry(this._cachedGeometry)}return this._cachedGeometry}_wrapGeometry(e){if(!this._wrappingInfo)return;const{worldSizeX:t}=this._wrappingInfo;if(e.isPoint)return 1===t?(e.coords.push(b.CQ,0),e.coords.push(-1024,0),void e.lengths.push(3)):2===t?(e.coords.push(2*b.CQ,0),e.coords.push(-2048,0),void e.lengths.push(3)):void this._wrapVertex(e.coords,0,2,t);if("esriGeometryMultipoint"!==this.geometryType);else{if(1===t){const t=e.coords.slice();t[0]-=512;const s=e.coords.slice();s[0]+=512,e.coords.push(...t,...s);const r=e.lengths[0];return void e.lengths.push(r,r)}this._wrapVertex(e.coords,0,2,t)}}_wrapVertex(e,t,s,r){const i=t*s,n=e[i];n<-b.CQ*(r-2)?e[i]=n+b.CQ*r:n>b.CQ*(r-1)&&(e[i]=n-b.CQ*r)}_readX(){const e=this._readGeometry();return null!=e?e.coords[0]:0}_readY(){const e=this._readGeometry();return null!=e?e.coords[1]:0}_readServerCentroid(){switch(this.geometryType){case"esriGeometryPolygon":{const e=(0,P.l8)(this._current.projectedGeometry),t=new G.A([],e);return(0,k.Nl)(new G.A,t,this.hasZ,this.hasM,this.geometryType,this._tile.transform)}case"esriGeometryPolyline":{const e=this._current.projectedGeometry,t=(0,P.S8)(e.paths,this.hasZ),s=new G.A([],t);return(0,k.Nl)(new G.A,s,this.hasZ,this.hasM,this.geometryType,this._tile.transform)}}return null}_readAttribute(e,t){const s=this._current.attributes[e];if(void 0!==s)return s;const r=e.toLowerCase();for(const i in this._current.attributes)if(i.toLowerCase()===r)return this._current.attributes[i]}_readAttributes(){return this._current.attributes}}var D=s(76931),z=s(15863),F=s(1438),L=s(80963),j=s(94110),E=s(97255),N=s(65391),U=s(5262);function B(e){return"curveRings"in e&&!!e.curveRings?.length||"curvePaths"in e&&!!e.curvePaths?.length}function Z(e){return"b"in e}function V(e){return"c"in e}function q(e){return"a"in e}function $(e){return Z(e)?e.b[0]:V(e)?e.c[0]:q(e)?e.a[0]:e}var H=s(15941),Q=s(63919),J=s(44680),K=s(19555);const W={maxSegmentLength:1/0,maxSegmentsPerCurve:12e3,minSegmentsPerCurve:1},Y=1e-6,X=(0,J.vt)();function ee(e,t){return(0,K.hG)(e,t)}function te(e,t){const s=Math.atan2(e,t);return s<0?s+2*Math.PI:s}function se(e,t,s,r,i){let{maxSegmentLength:n,maxSegmentsPerCurve:o,minSegmentsPerCurve:a}=r;const c=n*n,h=1/o,l=i(0),u=i(1);ee(t,l)>Y&&e.push(l);const d=[1],p=[u],m=1/a;for(let g=a-1;g>0;g--){const e=g*m;d.push(e),p.push(i(e))}let f=0,y=l;for(;d.length>0;){const t=d.pop(),s=p.pop();if(ee(y,s)<c||f===t||t-f<h)e.push(s),f=t,y=s;else{d.push(t),p.push(s);const e=(f+t)/2;d.push(e),p.push(i(e))}}return ee(s,u)>Y&&e.push([...s]),e}function re(e,t,s,r){const[i,n]=t,[o,a]=s,[c,h]=r,l=i*i+n*n,u=o*o+a*a,d=c*c+h*h;(0,Q.hZ)(X,i,o,c,n,a,h,1,1,1);const p=(0,Q.a4)(X);if(0===p)return null;(0,Q.hZ)(X,l,u,d,n,a,h,1,1,1);const m=(0,Q.a4)(X);(0,Q.hZ)(X,l,u,d,i,o,c,1,1,1);const f=m/p*.5,y=(0,Q.a4)(X)/p*-.5;return e[0]=f,e[1]=y,e}function ie(e,t,s,r,i,n,o,a,c){let{maxSegmentLength:h,maxSegmentsPerCurve:l,minSegmentsPerCurve:u}=c;const d=2*n,p=[r+n*Math.cos(o),i+n*Math.sin(o)],m=[r+n*Math.cos(a),i+n*Math.sin(a)];ee(t,p)>Y&&e.push(p);const f=a-o,y=h<d?2*Math.asin(h/d):f,g=Math.min(l,Math.max(u,Math.ceil(Math.abs(f/y)))),_=1/g;for(let b=1;b<g;b++){const t=b*_,s=o*(1-t)+a*t;e.push([r+n*Math.cos(s),i+n*Math.sin(s)])}return e.push(m),ee(s,m)>Y&&e.push([...s]),e}function ne(e,t,s){const[r,i,n,o]=s.a,a=Math.abs(e-t),c=a>Math.PI,h=a<Math.PI,l=(0,H.Sp)(a,Math.PI);return(!l&&(c&&n||h&&!n)||l&&(e>t&&o||e<t&&!o))&&(e+=2*(Math.sign(t-e)||1)*Math.PI),e}function oe(e,t,s,r){return Z(s)?function(e,t,s,r){const[i,n,o]=s.b;return se(e,t,i,r,(e=>function(e,t,s,r,i){const n=1-i,o=n*n,a=i*i,c=o*n,h=3*i*o,l=3*a*n,u=a*i;return[e[0]*c+t[0]*h+s[0]*l+r[0]*u,e[1]*c+t[1]*h+s[1]*l+r[1]*u]}(t,n,o,i,e)))}(e,t,s,r):V(s)?function(e,t,s,r){const[i,n]=s.c,o=re([],t,n,i);if(null==o)return e.push([...i]),e;const[a,c]=t,[h,l]=n,[u,d]=i,[p,m]=o,f=a-p,y=c-m,g=Math.sqrt(f*f+y*y),_=te(c-m,a-p),b=te(l-m,h-p);let v=te(d-m,u-p);return(b-_)*(v-b)<0&&(v+=2*Math.sign(_-v)*Math.PI),ie(e,t,i,p,m,g,_,v,r)}(e,t,s,r):q(s)?function(e){return 4===e.a.length}(s)?function(e,t,s,r){const[i,n]=s.a,[o,a]=t,[c,h]=i,[l,u]=n,d=o-l,p=a-u,m=Math.sqrt(d*d+p*p),f=te(a-u,o-l);return ie(e,t,i,l,u,m,f,ne(te(h-u,c-l),f,s),r)}(e,t,s,r):function(e,t,s,r){const[i,n,o,a,c,h,l]=s.a,[u,d]=t,[p,m]=i,[f,y]=n,g=h*l,_=Math.cos(c),b=Math.sin(c),v=te(1/g*(d-y)*_-1/g*(u-f)*b,1/h*(d-y)*b+1/h*(u-f)*_),I=ne(te(1/g*(m-y)*_-1/g*(p-f)*b,1/h*(m-y)*b+1/h*(p-f)*_),v,s);return se(e,t,i,r,(e=>{const t=v*(1-e)+I*e,s=Math.cos(t),r=Math.sin(t);return[h*s*_-g*r*b+f,h*s*b+g*r*_+y]}))}(e,t,s,r):function(e){return Array.isArray(e)}(s)?(e.push([...s]),e):e}function ae(e,t){if(!B(e))return e;const s=function(e){return"curveRings"in e?e.curveRings:e.curvePaths}(e),r=[];for(const i of s){const e=[];for(let s=0,r=1;r<i.length;s=r++){const n=$(i[s]);0===s&&e.push(n),oe(e,n,i[r],{maxSegmentLength:t.maxSegmentLength??W.maxSegmentLength,maxSegmentsPerCurve:t.maxSegmentsPerCurve??W.maxSegmentsPerCurve,minSegmentsPerCurve:Math.max(t.minSegmentsPerCurve??W.minSegmentsPerCurve,1)})}r.push(e)}return"curvePaths"in e?{paths:r,spatialReference:e.spatialReference}:{rings:r,spatialReference:e.spatialReference}}var ce=s(54222),he=s(99784),le=s(24586),ue=s(28660),de=s(97683);class pe{static fromGraphic(e,t,s,r){return new pe(e.geometry,t,e.attributes,e.visible,e.uid,e.version,s,r)}constructor(e,t,s,r,i,n,o,a){this.geometry=e,this.symbol=t,this.attributes=s,this.visible=r,this.objectId=i,this._version=n,this.zOrder=o,this.displayId=a,this.symbolBounds=(0,p.Ie)(),this.prevSymbolBounds=(0,p.Ie)(),this.size=[0,0,0,0],this.geometryBounds=(0,p.Ie)(),this._isDensificationDirty=!1,this._densificationSegmentLength=1/0}get projectedGeometry(){return this._projectedGeometry}get linearCIM(){return this.symbolResource?.symbolInfo.linearCIM}get usedMemory(){return 128+(0,E.lM)(this.attributes)+(0,he.gR)(this.geometry)}get hasAnimations(){const{linearCIM:e}=this;return!!e&&e.some((e=>"animationParams"in e&&!!e.animationParams))}get hasCurvedGeoemtry(){return null!=this.geometry&&"mesh"!==this.geometry.type&&B(this.geometry)}update(e,t,s){return(this._version!==e.version||this.zOrder!==s||this.symbol!==t)&&(this.prevSymbolBounds=this.symbolBounds,this.symbolBounds=(0,p.Ie)(),this.zOrder=s,this.geometry=e.geometry,this.attributes=e.attributes,this.symbol=t,this.visible=e.visible,this._version=e.version,this.symbolResource=null,this._projectedGeometry=null,(0,p.Ie)(this.geometryBounds),this._minDensificationSegmentLength=null,!0)}updateDensificationResolution(e){if(!this.hasCurvedGeoemtry)return!1;const t=Math.max(function(e){return 2**Math.round(Math.log2(e))*(0,ue.ab)()}(e),this._minDensificationSegmentLength??0);return t!==this._densificationSegmentLength&&(this._densificationSegmentLength=t,this._isDensificationDirty=!0,!0)}async projectAndNormalize(e){let t,s=this.geometry;if(s&&s.spatialReference&&"mesh"!==s.type&&("extent"===s.type&&(s=(0,de.DF)(s)),t=B(s)?ae(s,{maxSegmentLength:1/0,minSegmentsPerCurve:(0,ue.mK)()}):s.toJSON(),this._projectedGeometry=await me(t,s.spatialReference,e),(0,N.Rg)(this.geometryBounds,this._projectedGeometry),this.hasCurvedGeoemtry&&null!=this._projectedGeometry)){const e=(0,p.VL)(this.geometryBounds),t=(0,p.uJ)(this.geometryBounds);(e||t)&&(this._minDensificationSegmentLength=Math.max(e,t)/(0,ue.B1)())}}async densifyCurvedGeometryForDisplay(e){if(!this.hasCurvedGeoemtry||!this._isDensificationDirty)return;this._isDensificationDirty=!1;const t=this.geometry;if(!t||!t.spatialReference||"mesh"===t.type)return;const s=e.metersPerUnit/t.spatialReference.metersPerUnit,r=ae(t,{maxSegmentLength:this._densificationSegmentLength*s,minSegmentsPerCurve:(0,ue.bR)()});this._projectedGeometry=await me(r,t.spatialReference,e)}}async function me(e,t,s){await(0,le.Nk)(e.spatialReference,s);const r=(0,ce.b3)(e);if(!r)return;const i=(0,le.Cv)(r,t,s);return i&&(0,U.uC)(i),(0,m.ZC)(i)?(0,de.DF)(i):i}class fe{constructor(e,t,s){this.added=e,this.updated=t,this.removed=s}hasAnyUpdate(){return!!(this.added.length||this.updated.length||this.removed.length)}}const ye=1e-5;function ge(e,t){return t.zOrder-e.zOrder}class _e{constructor(e,t,s,r,i){this._items=new Map,this._boundsDirty=!1,this._outSpatialReference=e,this._cimResourceManager=t,this._hittestDrawHelper=new j.CK(t),this._tileInfoView=s,this._store=i;const n=s.getClosestInfoForScale(r);this._resolution=this._tileInfoView.getTileResolution(n.level)}destroy(){this._hittestDrawHelper.destroy()}items(){return this._items.values()}getItem(e){return this._items.get(e)}async update(e,t,s){const r=[],i=[],n=[],o=new Set,a=[];let c=0;for(const h of e.items){c++;const e=h.uid,n=this._items.get(e),l=t(h);if(o.add(e),n){const e=n.update(h,l,c),t=n.updateDensificationResolution(this._resolution);e&&a.push(this._updateItem(n,s)),(e||t)&&i.push(n);continue}const u=this._store.createDisplayIdForObjectId(e),d=pe.fromGraphic(h,l,c,u);d.updateDensificationResolution(this._resolution),a.push(this._updateItem(d,s)),this._items.set(d.objectId,d),r.push(d)}for(const[h,l]of this._items.entries())o.has(h)||(this._store.releaseDisplayIdForObjectId(h),this._items.delete(h),n.push(l));return await Promise.all(a),this._index=null,new fe(r,i,n)}updateLevel(e){if(this._resolution===e)return!1;this._index=null,this._boundsDirty=!0,this._resolution=e;for(const t of this.items())if(t.hasCurvedGeoemtry)return!0;return!1}hitTest(e,t,s,r,i){const n=(0,o.A)("esri-mobile"),a=n?b.fy:b.V3,c=a+(n?0:b._M);e=(0,F.mT)(e,this._tileInfoView.spatialReference);const h=r*window.devicePixelRatio*c,l=(0,p.vt)();l[0]=e-h,l[1]=t-h,l[2]=e+h,l[3]=t+h;const u=r*window.devicePixelRatio*a,d=(0,p.vt)();d[0]=e-u,d[1]=t-u,d[2]=e+u,d[3]=t+u;const m=.5*r*(c+de.RA),f=this._searchIndex(e-m,t-m,e+m,t+m);if(!f||0===f.length)return[];const y=[],g=(0,p.vt)(),_=(0,p.vt)();for(const o of f){if(!o.visible)continue;const{geometryBounds:e,symbolResource:t}=o;this._getSymbolBounds(g,t,e,_,i),_[3]=_[2]=_[1]=_[0]=0,(0,p.HY)(g,l)&&y.push(o)}if(0===y.length)return[];const v=this._hittestDrawHelper,I=[];for(const o of y){const{projectedGeometry:e,symbolResource:t}=o;if(!t)continue;const{textInfo:s,symbolInfo:n}=t,a=n.cimSymbol;v.hitTest(d,a.symbol,e,s,i,r)&&I.push(o)}return I.sort(ge),I.map((e=>e.objectId))}queryItems(e){return 0===this._items.size?[]:this._searchForItems(e)}clear(){this._items.clear(),this._index=null}async _updateItem(e,t){await e.projectAndNormalize(this._outSpatialReference),await t(e);const{size:s}=e;s[0]=s[1]=s[2]=s[3]=0,this._getSymbolBounds(e.symbolBounds,e.symbolResource,e.geometryBounds,e.size,0)}_searchIndex(e,t,s,r){return this._boundsDirty&&(this._items.forEach((e=>this._getSymbolBounds(e.symbolBounds,e.symbolResource,e.geometryBounds,e.size,0))),this._boundsDirty=!1),this._index||(this._index=(0,z.r)(9,(e=>({minX:e.symbolBounds[0],minY:e.symbolBounds[1],maxX:e.symbolBounds[2],maxY:e.symbolBounds[3]}))),this._index.load(Array.from(this._items.values()))),this._index.search({minX:e,minY:t,maxX:s,maxY:r})}_searchForItems(e){const t=this._tileInfoView.spatialReference,s=e.bounds,r=(0,L.Vp)(t);if(r&&t.isWrappable){const[t,i]=r.valid,n=Math.abs(s[2]-i)<ye,o=Math.abs(s[0]-t)<ye;if((!n||!o)&&(n||o)){const r=e.resolution;let o;o=(0,p.vt)(n?[t,s[1],t+r*de.RA,s[3]]:[i-r*de.RA,s[1],i,s[3]]);const a=this._searchIndex(s[0],s[1],s[2],s[3]),c=this._searchIndex(o[0],o[1],o[2],o[3]);return[...new Set([...a,...c])]}}return this._searchIndex(s[0],s[1],s[2],s[3])}_getSymbolBounds(e,t,s,r,i){if(!t||!t.symbolInfo.linearCIM)return null;if(e||(e=(0,p.vt)()),(0,p.C)(e,s),!r||0===r[0]&&0===r[1]&&0===r[2]&&0===r[3]){const{textInfo:e,symbolInfo:s}=t,n=s.cimSymbol;r||(r=[0,0,0,0]);const o=y.Sc.getSymbolInflateSize(r,n.symbol,this._cimResourceManager,i,e);r[0]=(0,D.Lz)(o[0]),r[1]=(0,D.Lz)(o[1]),r[2]=(0,D.Lz)(o[2]),r[3]=(0,D.Lz)(o[3])}const n=this._resolution,o=y.Sc.safeSize(r);return e[0]-=o*n,e[1]-=o*n,e[2]+=o*n,e[3]+=o*n,e}}var be=s(60401),ve=s(33817);class Ie{static getOrCreate(e,t,s){let r=t.get(e.id);return r||(r=new Ie(e,s),t.set(e.id,r)),r}static fromItems(e,t,s){const r=new Ie(e,s);for(const i of t)r.append(i);return r}constructor(e,t){this.tile=e,this.metadata=t,this.addedOrModified=[],this.removed=[],this.objectIdMap=null}get reader(){return this._reader||(this._reader=O.from(this.addedOrModified,this.tile,this.metadata)),this._reader}append(e){this.addedOrModified.push(e),e.hasAnimations&&(this.objectIdMap=this.objectIdMap||{},this.objectIdMap[e.displayId]=e.objectId)}}let we=class extends(a.A.IdentifiableMixin(i.A)){constructor(e){super(e),this._attached=!1,this._tiles=new Map,this._controller=new AbortController,this._hashToSymbolInfo=new Map,this._lastCleanup=performance.now(),this._cleanupRequired=!0,this.lastUpdateId=-1,this.renderer=null,this._updateTracking=new ve.F({debugName:"GraphicsView2D"}),this.updateRequested=!1,this.defaultPointSymbolEnabled=!0,this._commandQueue=new be.j({process:e=>{if("update"===e.type)return this._update();throw new Error("InternalError: Unsupported command")}}),this.graphicUpdateHandler=this.graphicUpdateHandler.bind(this)}destroy(){this.container.destroy(),this.view=null,this.renderer=null,this._set("graphics",null),this._controller.abort(),this._graphicStore.clear(),this._graphicStore.destroy(),this._attributeStore=null,this._hashToSymbolInfo.clear(),this._updateTracking.destroy(),this._commandQueue.destroy()}_initAttributeStore(){this._storage=new R.l({spatialReference:this.view.spatialReference,fields:new f.A}),this._attributeStore=new C.K({isLocal:!0,update:e=>{(0,o.A)("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView2D.AttributeStoreView.updateStart`,{message:e}),this.container.attributeView.requestUpdate(e),this.container.requestRender(),(0,o.A)("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView2D.AttributeStoreView.updateEnd`,{message:e})}});const e=(0,x.T9)(null,[]);this._attributeStore.update(e,this._storage,null),this.container.checkHighlight=()=>this._attributeStore.hasHighlight}initialize(){this._initAttributeStore(),this._metadata=T.h.createGraphics(this.view.spatialReference),this._resourceProxy=new w.J({fetch:e=>Promise.all(e.map((e=>this.view.stage.textureManager.rasterizeItem(e)))),fetchDictionary:e=>{throw new Error("InternalError: Graphics do not support Dictionary requests")}}),this.addHandles([(0,l.wB)((()=>this._effectiveRenderer),(()=>this._pushUpdate())),this.view.graphicsTileStore.on("update",this._onTileUpdate.bind(this)),this.container.on("attach",(()=>{this.addHandles([this.graphics.on("change",(()=>this._pushUpdate()))]),this._graphicStore?.destroy(),this._graphicStore=new _e(this.view.spatialReference,this._cimResourceManager,this.view.featuresTilingScheme,this.view.state.scale,this._attributeStore),this._attached=!0,this.requestUpdate(),this._pushUpdate()}))]),this._updateTracking.addUpdateTracking("CommandQueue",this._commandQueue.updateTracking);const e=this.view.graphicsTileStore.tiles;this._onTileUpdate({added:e,removed:[]})}get _effectiveRenderer(){return"function"==typeof this.renderer?this.renderer():this.renderer}get _cimResourceManager(){return this.view.stage.textureManager.resourceManager}get updating(){const e=!this._attached||this._updateTracking.updating;return(0,o.A)("esri-2d-log-updating")&&console.log(`Updating GraphicsView2D: ${e}\n  -> attaching ${!this._attached}\n  -> updateTracking ${this._updateTracking.updating}`),e}hitTest(e){if(!this.view||this.view.suspended)return[];const{resolution:t,rotation:s}=this.view.state,r=this._graphicStore.hitTest(e.x,e.y,2,t,s),i=new Set(r),o=this.graphics.items.reduce(((e,t)=>(i.has(t.uid)&&e.set(t.uid,t),e)),new Map);return r.map((e=>o.get(e))).filter(n.Ru)}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.requestUpdateCallback()),this.notifyChange("updating")}processUpdate(e){this.updateRequested&&(this.updateRequested=!1,this.update(e))}viewChange(){this.requestUpdate()}setHighlight(e){const t=[];for(const{objectId:s,highlightFlags:r}of e){const e=this._graphicStore.getItem(s)?.displayId;t.push({objectId:s,highlightFlags:r,displayId:e})}this._attributeStore.setHighlight(t,e),this._pushUpdate()}graphicUpdateHandler(e){this._pushUpdate()}update(e){this.updateRequested=!1,this._attached&&this._graphicStore.updateLevel(e.state.resolution)&&this.pushUpdate()}pushUpdate(){this._pushUpdate()}_pushUpdate(){(0,h.QZ)(this._commandQueue.push({type:"update"}))}async _update(){try{(0,o.A)("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView._update start`);const e=await this._graphicStore.update(this.graphics,(e=>this._getSymbolForGraphic(e)),(e=>this._ensureSymbolResource(e)));for(const s of e.updated)this.container.restartAnimation(s.objectId);if(!e.hasAnyUpdate())return void this._attributeStore.sendUpdates();e.removed.length&&(this._cleanupRequired=!0),(0,o.A)("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView updateMessage`,e);const t=this._createTileMessages(e);await this._densifyItemsForDisplay(t),await this._fetchResources(t),this._write(t);for(const s of e.added)this._setFilterState(s);for(const s of e.updated)this._setFilterState(s);(0,o.A)("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView sendUpdate`,e),this._attributeStore.sendUpdates(),(0,o.A)("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView sendUpdate.await`,e)}catch(e){}this._cleanupSharedResources()}_createTileMessages(e){const t=new Map;for(const s of e.added){const e=this.view.graphicsTileStore.getIntersectingTiles(s.symbolBounds);for(const r of e)Ie.getOrCreate(r,t,this._metadata).append(s)}for(const s of e.updated){const e=this.view.graphicsTileStore.getIntersectingTiles(s.prevSymbolBounds),r=this.view.graphicsTileStore.getIntersectingTiles(s.symbolBounds);for(const i of e)Ie.getOrCreate(i,t,this._metadata).removed.push(s.displayId);for(const i of r)Ie.getOrCreate(i,t,this._metadata).append(s)}for(const s of e.removed){const e=this.view.graphicsTileStore.getIntersectingTiles(s.symbolBounds);for(const r of e)Ie.getOrCreate(r,t,this._metadata).removed.push(s.displayId)}return Array.from(t.values())}async _densifyItemsForDisplay(e){const t=new Map;for(const s of e)for(const e of s.addedOrModified)t.has(e)||t.set(e,e.densifyCurvedGeometryForDisplay(this.view.spatialReference));await Promise.all(t.values())}async _fetchResources(e){const t={timeZone:null,timeExtent:null};for(const{tile:s,reader:r}of e){(0,o.A)("esri-2d-update-debug")&&console.debug(`Id[${this.layerId}] Tile[${s.id}] GraphicsView fetchResources`,e);const i=r.getCursor();for(;i.next();)for(const e of i.getMeshWriters())e.enqueueRequest(this._resourceProxy,i,s.createArcadeEvaluationOptions(t))}await this._resourceProxy.fetchEnqueuedResources()}_write(e){for(const t of e){(0,o.A)("esri-2d-update-debug")&&console.debug(`Id[${this.layerId}] Tile[${t.tile.id}] GraphicsView write`,t);const e=this._writeMeshes(t);let s=this._tiles.get(t.tile.key);s||(s=this._createFeatureTile(t.tile.key)),(0,o.A)("esri-2d-update-debug")&&console.debug(`Id[${this.layerId}] Tile[${t.tile.id}] GraphicsView onTileData`,t),this.container.onTileData(s,{type:"update",modify:e,remove:t.removed,end:!1,attributeEpoch:this._attributeStore.epoch,objectIdMap:t.objectIdMap}),this.container.requestRender()}}_writeMeshes(e){const t={timeZone:null,timeExtent:null},s=new I.U(e.tile.id),r=e.reader.getCursor();for(;r.next();){s.entityStart(r.getDisplayId(),r.getZOrder());for(const i of r.getMeshWriters())i.write(s,this._resourceProxy,r,e.tile.createArcadeEvaluationOptions(t),e.tile.level);s.entityEnd()}return{...s.serialize().message,tileId:e.tile.id}}_setFilterState(e){const t=e.displayId,s=this._attributeStore.getHighlightFlags(e.objectId);this._attributeStore.setData(t,0,0,s|(e.visible?b.LY:0))}_getSymbolForGraphic(e){return null!=e.symbol?e.symbol:null!=this._effectiveRenderer?this._effectiveRenderer.getSymbol(e):this._getNullSymbol(e)}async _ensureSymbolResource(e){if(!e.symbol)return;const t=await this._getSymbolInfo(e.symbol);if(!t)return;const s=t.linearCIM.filter((e=>"text"===e.type));if(s.length>0){const r=await this._getTextResources(e,s);e.symbolResource={symbolInfo:t,textInfo:r}}else e.symbolResource={symbolInfo:t}}_getSymbolInfo(e){const t=e.hash();return this._hashToSymbolInfo.has(t)||this._hashToSymbolInfo.set(t,this._createSymbolInfo(t,e).catch((e=>null))),this._hashToSymbolInfo.get(t)}async _createSymbolInfo(e,t){const s=await this._convertToCIMSymbol(t),r=await this._createLinearCIM(s);return{hash:e,cimSymbol:s,linearCIM:r,meshWriters:await this._createMeshWriters(s,r)}}async _convertToCIMSymbol(e){const t=(0,y.Vb)(e);return"web-style"===t.type?(await t.fetchCIMSymbol()).data:t}async _createLinearCIM(e){return await Promise.all(y.wp.fetchResources(e.symbol,this._cimResourceManager,[])),this.view.stage.cimAnalyzer.analyzeSymbolReference(e,!1)}async _createMeshWriters(e,t){(0,h.Te)(this._controller.signal);const s=this.container.instanceStore,r=this.view.stage.meshWriterRegistry,i=await async function(e,t,s){const r=[],i={scaleInfo:(0,M.TY)(e),scaleExpression:null};for(const n of t)switch(n.type){case"marker":if(n.animationParams){r.push(...(0,M.gF)(s.instances.animatedMarker,n,S.Dk,i));break}r.push(...(0,M.Zi)(s.instances.marker,n,S.Dk,i));break;case"fill":null==n.spriteRasterizationParam?r.push(...(0,M.Gn)(s.instances.fill,n,i)):r.push(...(0,M.oF)(s.instances.complexFill,n,!1,i));break;case"line":n.spriteRasterizationParam?r.push(...(0,M.EM)(s.instances.texturedLine,n,!1,i)):r.push(...(0,M.NZ)(s.instances.line,n,!1,i));break;case"text":r.push(...(0,M.IQ)(s.instances.text,n,S.Dk,i));break;case"gradientFill":r.push(...(0,M.mp)(s.instances.gradientFill,n,i));break;case"gradientStroke":r.push(...(0,M.Dr)(s.instances.gradientStroke,n,i))}return r}(e,t,s);return Promise.all(i.map((e=>r.createMeshWriter(this._storage,this._resourceProxy,{tileInfo:this.view.featuresTilingScheme.tileInfo},e))))}_onTileUpdate(e){if(e.added&&e.added.length>0)for(const t of e.added)this._updateTracking.addPromise(this._addTile(t));if(e.removed&&e.removed.length>0)for(const t of e.removed)this._removeTile(t.key)}_createFeatureTile(e){const t=this.view.featuresTilingScheme.getTileBounds((0,p.vt)(),e),s=this.view.featuresTilingScheme.getTileResolution(e.level),r=new v.R(e,s,t[0],t[3]);return this._tiles.set(e,r),this.container.addChild(r),r}async _addTile(e){if(!this._attached)return;const t=this._graphicStore.queryItems(e);if(!t.length)return;const s=this._createFeatureTile(e.key),r=Ie.fromItems(e,t,this._metadata);await this._densifyItemsForDisplay([r]),await this._fetchResources([r]);const i=this._writeMeshes(r);s.onMessage({type:"append",append:i,clear:!1,end:!0,attributeEpoch:this._attributeStore.epoch,objectIdMap:r.objectIdMap})}_removeTile(e){if(!this._tiles.has(e))return;const t=this._tiles.get(e);this.container.removeChild(t),t.destroy(),this._tiles.delete(e)}_getNullSymbol(e){const t=e.geometry;return(0,m.Rg)(t)?_.x3:(0,m.Bi)(t)||(0,m.ZC)(t)?_.JJ:this.defaultPointSymbolEnabled?_.jM:null}async _getTextResources(e,t){const s=new Array,r=new Array;for(let a=0;a<t.length;a++){const i=t[a],{resource:n,overrides:o}=i.textRasterizationParam;if(o?.length>0){const t=g.OverrideHelper.resolveSymbolOverrides({type:"CIMSymbolReference",primitiveOverrides:o,symbol:{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,size:n.symbol.height,anchorPointUnits:"Relative",frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{x:0,y:0},symbol:n.symbol,textString:n.textString}],scaleSymbolsProportionally:!0,respectFrame:!0}]}},e,this.view.spatialReference,null,(0,m.$B)(e.projectedGeometry),null,null);t.then((e=>{const t=e.symbolLayers[0],{textString:s}=t.markerGraphics[0];r.push({type:"cim-rasterization-info",resource:{type:"text",textString:s||"",font:n.font}}),i.text=n.textString=s||""})),s.push(t)}else r.push({type:"cim-rasterization-info",resource:n})}s.length>0&&await Promise.all(s);const i=r.map((e=>this.view.stage.textureManager.rasterizeItem(e))),n=await Promise.all(i);(0,c.Lw)(n);const o=new Map;for(let a=0;a<t.length;a++){const e=t[a];o.set(e.textRasterizationParam.resource.symbol,{text:e.text,glyphMosaicItems:n[a]})}return o}_cleanupSharedResources(){if(!this._cleanupRequired)return;const e=performance.now();if(e-this._lastCleanup<5e3)return;this._cleanupRequired=!1,this._lastCleanup=e;const t=new Set;for(const r of this._graphicStore.items()){const e=r.symbolResource?.symbolInfo.hash;t.add(e)}const s=new Set(this._hashToSymbolInfo.keys());for(const r of s.values())t.has(r)||this._hashToSymbolInfo.delete(r)}};(0,r._)([(0,u.MZ)()],we.prototype,"_effectiveRenderer",null),(0,r._)([(0,u.MZ)({constructOnly:!0})],we.prototype,"layerId",void 0),(0,r._)([(0,u.MZ)({constructOnly:!0})],we.prototype,"requestUpdateCallback",void 0),(0,r._)([(0,u.MZ)()],we.prototype,"container",void 0),(0,r._)([(0,u.MZ)({constructOnly:!0})],we.prototype,"graphics",void 0),(0,r._)([(0,u.MZ)()],we.prototype,"renderer",void 0),(0,r._)([(0,u.MZ)()],we.prototype,"_updateTracking",void 0),(0,r._)([(0,u.MZ)()],we.prototype,"updating",null),(0,r._)([(0,u.MZ)()],we.prototype,"view",void 0),(0,r._)([(0,u.MZ)()],we.prototype,"updateRequested",void 0),(0,r._)([(0,u.MZ)()],we.prototype,"defaultPointSymbolEnabled",void 0),we=(0,r._)([(0,d.$)("esri.views.2d.layers.graphics.GraphicsView2D")],we);const Se=we},74e3:(e,t,s)=>{s.d(t,{CI:()=>n,fk:()=>o});s(81806);var r=s(15941),i=s(80963);function n(e,t){return e===t||null!=e&&null!=t&&(0,i.aI)(e.spatialReference,t.spatialReference)&&e.x===t.x&&e.y===t.y&&e.z===t.z&&e.m===t.m}function o(e,t,s){return e===t||null!=e&&null!=t&&(0,i.aI)(e.spatialReference,t.spatialReference)&&(0,r.Sp)(e.x,t.x,s)&&(0,r.Sp)(e.y,t.y,s)&&(0,r.Sp)(e.z??0,t.z??0,s)&&(0,r.Sp)(e.m??0,t.m??0,s)}},99784:(e,t,s)=>{s.d(t,{HP:()=>a,N3:()=>c,RW:()=>p,Uz:()=>m,gR:()=>l,iQ:()=>d,jy:()=>h,w9:()=>u});s(81806);var r=s(97255),i=(s(13312),s(42294)),n=s(2413),o=(s(76279),s(31608),s(44135),s(28660));s(74e3);class a{constructor(e,t,s){this.uid=e,this.geometry=t,this.attributes=s,this.visible=!0,this.objectId=null,this.centroid=null}}function c(e){return null!=e.geometry}class h{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}}function l(e){if(null==e)return 0;switch(e.type){case"point":return r.qK+10+8+24;case"polyline":case"polygon":{let t=0;const s=2+(e.hasZ?1:0)+(e.hasM?1:0),i="polyline"===e.type?e.paths:e.rings,n="polyline"===e.type?e.curvePaths:e.curveRings;if(n?.length){const e=3*(0,o.B1)()*128;t=8*e*s+128*e+32*(i.length+1)}else t=(0,r.Qh)(i);return r.qK+64+t+34}case"multipoint":{const t=(0,r.Qh)(e.points);return r.qK+t+64+34+32}case"extent":return r.qK+10+64+34;case"mesh":{const t=e.vertexAttributes;return r.qK+(0,r.Qf)(t.position,t.normal,t.uv,t.tangent)}default:return r.qK}}function u(e,t){switch((0,i.Ie)(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[3]=e.x,t[1]=t[4]=e.y,e.hasZ&&(t[2]=t[5]=e.z);break;case"polyline":for(let s=0;s<e.paths.length;s++)(0,i.Jf)(t,e.paths[s],!!e.hasZ);break;case"polygon":for(let s=0;s<e.rings.length;s++)(0,i.Jf)(t,e.rings[s],!!e.hasZ);break;case"multipoint":(0,i.Jf)(t,e.points,!!e.hasZ);break;case"extent":t[0]=e.xmin,t[1]=e.ymin,t[3]=e.xmax,t[4]=e.ymax,null!=e.zmin&&(t[2]=e.zmin),null!=e.zmax&&(t[5]=e.zmax)}}function d(e,t){switch((0,n.Ie)(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[2]=e.x,t[1]=t[3]=e.y;break;case"polyline":for(let s=0;s<e.paths.length;s++)(0,n.Jf)(t,e.paths[s]);break;case"polygon":for(let s=0;s<e.rings.length;s++)(0,n.Jf)(t,e.rings[s]);break;case"multipoint":(0,n.Jf)(t,e.points);break;case"extent":t[0]=e.xmin,t[1]=e.ymin,t[2]=e.xmax,t[3]=e.ymax}}function p(e,t){return null!=e.objectId?e.objectId:e.attributes&&t?e.attributes[t]:null}function m(e,t,s,r){if(t?.size&&null!=s&&e)for(const i in e){if(!t.has(i))continue;const n=e[i];"string"==typeof n&&n.length>s&&(r(i),e[i]="")}}}}]);
//# sourceMappingURL=69679.9f3b6e94.chunk.js.map