"use strict";(self.webpackChunkopenspace=self.webpackChunkopenspace||[]).push([[17872],{14009:(e,t,r)=>{r.d(t,{e:()=>u,s:()=>a});var n=r(54994),i=r(36643),o=r(77725),s=r(97015);async function a(e,t,r){const n=await u(e,t,r);return o.A.fromJSON(n)}async function u(e,t,r){const o=(0,n.Dl)(e),a={...r},u=s.A.from(t),{data:l}=await(0,i.eW)(o,u,u.sourceSpatialReference,a);return l}},17872:(e,t,r)=>{r.d(t,{A:()=>P});var n=r(35143),i=r(91967),o=r(50076),s=r(81806),a=r(50346),u=r(90534),l=r(46053),c=(r(76460),r(47249),r(85842)),d=r(80963),h=r(19463),f=r(89551),y=r(54994),p=r(37713),m=r(76797),_=r(36643),S=r(97015);var g=r(53104),x=r(14009),b=r(78469),F=r(77725);let O=class extends i.A{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return(0,u.An)(this.url)}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){const r=this._normalizeQuery(e),n=null!=e.outStatistics?.[0],i=(0,s.A)("featurelayer-pbf-statistics"),o=(!n||i)&&!0!==e.returnTrueCurves;let a;if(this.pbfSupported&&o)try{a=await(0,b.S)(this.url,r,t)}catch(u){if("query:parsing-pbf"!==u.name)throw u;this.pbfSupported=!1}return this.pbfSupported&&o||(a=await(0,x.e)(this.url,r,t)),this._normalizeFields(a.fields),a}async featureSetFromJSON(e,t,n){if(!this._queryIs3DObjectFormat(e)||null==this.infoFor3D||!t.features)return F.A.fromJSON(t);const{meshFeatureSetFromJSON:i}=await(0,a.qr)(Promise.all([r.e(88105),r.e(74712),r.e(21821),r.e(58462),r.e(93640),r.e(38924)]).then(r.bind(r,10156)),n);return i(e,this.infoFor3D,t)}executeForCount(e,t){return(0,p.I)(this.url,this._normalizeQuery(e),t)}executeForExtent(e,t){return async function(e,t,r){const n=(0,y.Dl)(e),i=await(0,_.Jf)(n,S.A.from(t),{...r}),o=i.data.extent;return!o||isNaN(o.xmin)||isNaN(o.ymin)||isNaN(o.xmax)||isNaN(o.ymax)?{count:i.data.count,extent:null}:{count:i.data.count,extent:m.A.fromJSON(o)}}(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return(0,g.V)(this.url,this._normalizeQuery(e),t)}async executeRelationshipQuery(e,t){const[{default:n},{executeRelationshipQuery:i}]=await(0,a.qr)(Promise.all([Promise.resolve().then(r.bind(r,58289)),r.e(69437).then(r.bind(r,69437))]),t);return e=n.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),i(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:n},{executeRelationshipQueryForCount:i}]=await(0,a.qr)(Promise.all([Promise.resolve().then(r.bind(r,58289)),r.e(69437).then(r.bind(r,69437))]),t);return e=n.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),i(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:n,fetchAttachments:i,processAttachmentQueryResult:o}=await(0,a.qr)(r.e(55297).then(r.bind(r,55297)),t),s=(0,y.Dl)(this.url);return o(s,await(this.queryAttachmentsSupported?n(s,e,t):i(s,e,t)))}async executeAttributeBinsQuery(e,t){const{executeAttributeBinsQuery:n}=await(0,a.qr)(Promise.all([r.e(39729),r.e(56579)]).then(r.bind(r,56579)),t);return n(this.parsedUrl,e,t)}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:n}=await(0,a.qr)(r.e(63863).then(r.bind(r,63863)),t);return n(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:n}=await(0,a.qr)(r.e(69119).then(r.bind(r,69119)),t);return n(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:n}=await(0,a.qr)(r.e(12520).then(r.bind(r,12520)),t);return n(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:n}=await(0,a.qr)(r.e(36406).then(r.bind(r,36406)),t);return n(this.parsedUrl,e,t)}_normalizeQuery(e){let t=S.A.from(e);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?f.L.from(e.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:r}=this;if(null!=r&&this._queryIs3DObjectFormat(e)){if(t=t===e?t.clone():t,t.formatOf3DObjects=(0,h.Hz)(r),!t.formatOf3DObjects)throw new o.A("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t.outSpatialReference&&!(0,d.aI)(t.outSpatialReference,this.sourceSpatialReference))throw new o.A("query:unsupported-out-spatial-reference","3D object feature services do not support projection of geometries");if(null==t.outFields||!t.outFields.includes("*")){t=t===e?t.clone():t,null==t.outFields&&(t.outFields=[]);const{originX:n,originY:i,originZ:o,translationX:s,translationY:a,translationZ:u,scaleX:l,scaleY:c,scaleZ:d,rotationX:h,rotationY:f,rotationZ:y,rotationDeg:p}=r.transformFieldRoles;t.outFields.push(n,i,o,s,a,u,l,c,d,h,f,y,p)}}return t}_normalizeFields(e){if(null!=this.fieldsIndex&&null!=e)for(const t of e){const e=this.fieldsIndex.get(t.name);e&&Object.assign(t,e.toJSON())}}_queryIs3DObjectFormat(e){return null!=this.infoFor3D&&!0===e.returnGeometry&&"xyFootprint"!==e.multipatchOption&&!e.outStatistics}};(0,n._)([(0,l.MZ)({type:f.L})],O.prototype,"dynamicDataSource",void 0),(0,n._)([(0,l.MZ)()],O.prototype,"fieldsIndex",void 0),(0,n._)([(0,l.MZ)()],O.prototype,"gdbVersion",void 0),(0,n._)([(0,l.MZ)()],O.prototype,"infoFor3D",void 0),(0,n._)([(0,l.MZ)({readOnly:!0})],O.prototype,"parsedUrl",null),(0,n._)([(0,l.MZ)()],O.prototype,"pbfSupported",void 0),(0,n._)([(0,l.MZ)()],O.prototype,"queryAttachmentsSupported",void 0),(0,n._)([(0,l.MZ)()],O.prototype,"sourceSpatialReference",void 0),(0,n._)([(0,l.MZ)({type:String})],O.prototype,"url",void 0),O=(0,n._)([(0,c.$)("esri.layers.graphics.sources.support.QueryTask")],O);const P=O},36643:(e,t,r)=>{r.d(t,{IJ:()=>y,Jf:()=>S,Pk:()=>m,eW:()=>f,gW:()=>_,kS:()=>p});var n=r(3825),i=r(90534),o=r(19902),s=r(1438),a=r(80963),u=r(78238),l=r(89122),c=r(57831);const d="Layer does not support extent calculation.";function h(e,t){const r=e.geometry,n=e.toJSON();delete n.compactGeometryEnabled,delete n.defaultSpatialReferenceEnabled;const i=n;let s,u,l;if(null!=r&&(u=r.spatialReference,l=(0,a.YX)(u),i.geometryType=(0,o.$B)(r),i.geometry=function(e,t){if(t&&"extent"===e.type)return`${e.xmin},${e.ymin},${e.xmax},${e.ymax}`;if(t&&"point"===e.type)return`${e.x},${e.y}`;const r=e.toJSON();return delete r.spatialReference,JSON.stringify(r)}(r,e.compactGeometryEnabled),i.inSR=l),n.groupByFieldsForStatistics&&(i.groupByFieldsForStatistics=n.groupByFieldsForStatistics.join(",")),n.objectIds&&(i.objectIds=n.objectIds.join(",")),n.orderByFields&&(i.orderByFields=n.orderByFields.join(",")),!n.outFields||!n.returnDistinctValues&&(t?.returnCountOnly||t?.returnExtentOnly||t?.returnIdsOnly)?delete i.outFields:n.outFields.includes("*")?i.outFields="*":i.outFields=n.outFields.join(","),n.outSR?(i.outSR=(0,a.YX)(n.outSR),s=e.outSpatialReference):r&&(n.returnGeometry||n.returnCentroid)&&(i.outSR=i.inSR,s=u),n.returnGeometry&&delete n.returnGeometry,n.outStatistics&&(i.outStatistics=JSON.stringify(n.outStatistics)),n.fullText&&(i.fullText=JSON.stringify(n.fullText)),n.pixelSize&&(i.pixelSize=JSON.stringify(n.pixelSize)),n.quantizationParameters&&(e.defaultSpatialReferenceEnabled&&null!=u&&null!=e.quantizationParameters?.extent&&u.equals(e.quantizationParameters.extent.spatialReference)&&delete n.quantizationParameters.extent.spatialReference,i.quantizationParameters=JSON.stringify(n.quantizationParameters)),n.parameterValues&&(i.parameterValues=JSON.stringify(n.parameterValues)),n.rangeValues&&(i.rangeValues=JSON.stringify(n.rangeValues)),n.dynamicDataSource&&(i.layer=JSON.stringify({source:n.dynamicDataSource}),delete n.dynamicDataSource),n.timeExtent){const e=n.timeExtent,{start:t,end:r}=e;null==t&&null==r||(i.time=t===r?t:`${t??"null"},${r??"null"}`),delete n.timeExtent}return e.defaultSpatialReferenceEnabled&&null!=u&&null!=s&&u.equals(s)&&(i.defaultSR=i.inSR,delete i.inSR,delete i.outSR),i}async function f(e,t,r,n){const i=null!=t.timeExtent&&t.timeExtent.isEmpty?{data:{features:[]}}:await g(e,t,"json",n);return(0,c.q)(t,r,i.data),i}async function y(e,t,r,n){if(null!=t.timeExtent&&t.timeExtent.isEmpty)return{data:r.createFeatureResult()};const i=await p(e,t,n),o=i;return o.data=(0,l.m)(i.data,r),o}function p(e,t,r){return g(e,t,"pbf",r)}function m(e,t,r){return null!=t.timeExtent&&t.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):g(e,t,"json",r,{returnIdsOnly:!0})}function _(e,t,r){return null!=t.timeExtent&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):g(e,t,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}async function S(e,t,r){if(null!=t.timeExtent&&t.timeExtent.isEmpty)return{data:{count:0,extent:null}};const n=await g(e,t,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}),i=n.data;if(i.hasOwnProperty("extent"))return n;if(i.features)throw new Error(d);if(i.hasOwnProperty("count"))throw new Error(d);return n}async function g(e,t,r){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};const l="string"==typeof e?(0,i.An)(e):e,c=t.geometry?[t.geometry]:[],d=await(0,s.el)(c,null,{signal:o.signal}),f=d?.[0];null!=f&&((t=t.clone()).geometry=f);const y=(0,u.z)({...l.query,f:r,...a,...h(t,a)});return(0,n.A)((0,i.fj)(l.path,(p=a,null==t.formatOf3DObjects||p.returnCountOnly||p.returnExtentOnly||p.returnIdsOnly?"query":"query3d")),{...o,responseType:"pbf"===r?"array-buffer":"json",query:{...y,...o.query}});var p}},37713:(e,t,r)=>{r.d(t,{I:()=>s});var n=r(54994),i=r(36643),o=r(97015);async function s(e,t,r){const s=(0,n.Dl)(e),{data:a}=await(0,i.gW)(s,o.A.from(t),r);return a.count}},53104:(e,t,r)=>{r.d(t,{V:()=>s});var n=r(54994),i=r(36643),o=r(97015);async function s(e,t,r){const s=(0,n.Dl)(e),{data:a}=await(0,i.Pk)(s,o.A.from(t),r);return a.objectIds??[]}},78238:(e,t,r)=>{function n(e){const t={};for(const r in e){if("declaredClass"===r)continue;const i=e[r];if(null!=i&&"function"!=typeof i)if(Array.isArray(i)){t[r]=[];for(let e=0;e<i.length;e++)t[r][e]=n(i[e])}else"object"==typeof i?i.toJSON&&(t[r]=JSON.stringify(i)):t[r]=i}return t}r.d(t,{z:()=>n})},78469:(e,t,r)=>{r.d(t,{S:()=>m});var n=r(54994),i=r(30726),o=r(86729),s=r(98618);function a(e,t){return t}function u(e,t,r,n){switch(r){case 0:return h(e,t+n,0);case 1:return"lowerLeft"===e.originPosition?h(e,t+n,1):function(e,t,r){let{translate:n,scale:i}=e;return n[r]-t*i[r]}(e,t+n,1)}}function l(e,t,r,n){return 2===r?h(e,t,2):u(e,t,r,n)}function c(e,t,r,n){return 2===r?0===t?0:h(e,t,3):u(e,t,r,n)}function d(e,t,r,n){return 3===r?0===t?0:h(e,t,3):l(e,t,r,n)}function h(e,t,r){let{translate:n,scale:i}=e;return n[r]+t*i[r]}class f{constructor(e){this._options=e,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=a,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._mValueOffset=null,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{}}createFeatureResult(){return{fields:[],features:[]}}finishFeatureResult(e){if(this._options.applyTransform&&(e.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!e.hasZ)return;const t=(0,o.N)(e.geometryType,this._options.sourceSpatialReference,e.spatialReference);if(null!=t)for(const r of e.features)t(r.geometry)}createSpatialReference(){return{}}addField(e,t){const r=e.fields;(0,i.Lw)(r),r.push(t);const n=r.map((e=>e.name));this._attributesConstructor=function(){for(const e of n)this[e]=null}}addFeature(e,t){e.features.push(t)}prepareFeatures(e){switch(this._transform=e.transform,this._options.applyTransform&&e.transform&&(this._applyTransform=this._deriveApplyTransform(e)),this._mValueOffset=null,this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&(this._mValueOffset=this._vertexDimension,this._vertexDimension++),e.geometryType){case"esriGeometryPoint":this.addCoordinate=(e,t,r)=>this.addCoordinatePoint(e,t,r),this.createGeometry=e=>this.createPointGeometry(e);break;case"esriGeometryPolygon":this.addCoordinate=(e,t,r)=>this._addCoordinatePolygon(e,t,r),this.createGeometry=e=>this._createPolygonGeometry(e);break;case"esriGeometryPolyline":this.addCoordinate=(e,t,r)=>this._addCoordinatePolyline(e,t,r),this.createGeometry=e=>this._createPolylineGeometry(e);break;case"esriGeometryMultipoint":this.addCoordinate=(e,t,r)=>this._addCoordinateMultipoint(e,t,r),this.createGeometry=e=>this._createMultipointGeometry(e)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,{attributes:new this._attributesConstructor}}allocateCoordinates(){}addLength(e,t,r){0===this._lengths.length&&(this._toAddInCurrentPath=t),this._lengths.push(t)}addQueryGeometry(e,t){const{queryGeometry:r,queryGeometryType:n}=t,i=this._transform?(0,s.Ch)(r.clone(),r,!1,!1,this._transform):r.clone(),o=(0,s.zv)(i,n,!1,!1);e.queryGeometryType=n,e.queryGeometry={...o}}createPointGeometry(e){const t={x:0,y:0,spatialReference:e.spatialReference};return e.hasZ&&(t.z=0),e.hasM&&(t.m=0),t}addCoordinatePoint(e,t,r){const n=this._transform;switch(t=this._applyTransform(n,t,r,0),r){case 0:e.x=t;break;case 1:e.y=t;break;case 2:"z"in e?e.z=t:e.m=t;break;case 3:e.m=t}}_transformPathLikeValue(e,t){let r=0;t<=1&&(r=this._previousCoordinate[t],this._previousCoordinate[t]+=e);const n=this._transform;return null!==this._mValueOffset&&0===e&&t>0&&!(t%this._mValueOffset)?0:this._applyTransform(n,e,t,r)}_addCoordinatePolyline(e,t,r){this._dehydratedAddPointsCoordinate(e.paths,t,r)}_addCoordinatePolygon(e,t,r){this._dehydratedAddPointsCoordinate(e.rings,t,r)}_addCoordinateMultipoint(e,t,r){0===r&&e.points.push([]);const n=this._transformPathLikeValue(t,r);e.points[e.points.length-1].push(n)}_createPolygonGeometry(e){return{rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createPolylineGeometry(e){return{paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createMultipointGeometry(e){return{points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_dehydratedAddPointsCoordinate(e,t,r){0===r&&0==this._toAddInCurrentPath--&&(e.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const n=this._transformPathLikeValue(t,r),i=e[e.length-1];0===r&&(this._coordinateBufferPtr=0,this._coordinateBuffer=new Array(this._vertexDimension),i.push(this._coordinateBuffer)),this._coordinateBuffer[this._coordinateBufferPtr++]=n}_deriveApplyTransform(e){const{hasZ:t,hasM:r}=e;return t&&r?d:t?l:r?c:u}}var y=r(36643),p=(r(77725),r(97015));async function m(e,t,r){const i=(0,n.Dl)(e),o={...r},s=p.A.from(t),a=!s.quantizationParameters,{data:u}=await(0,y.IJ)(i,s,new f({sourceSpatialReference:s.sourceSpatialReference,applyTransform:a}),o);return u}}}]);
//# sourceMappingURL=17872.ce6e3d5a.chunk.js.map