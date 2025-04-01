"use strict";(self.webpackChunkopenspace=self.webpackChunkopenspace||[]).push([[74874],{20665:(e,t,r)=>{r.d(t,{A:()=>f});var n=r(35143),s=r(91967),i=r(98773),o=r(94643),a=r(46053),l=(r(81806),r(76460),r(47249),r(85842)),p=r(53430),u=r(98976);let c=class extends s.A{constructor(e){super(e),this._featureUtils=null,this.effectivePopupTemplate=null}get _arcadeTask(){return this.expressionsUsedInTitle.length>0?this._get("_arcadeTask")||(0,i.UT)((()=>(0,u.lw)())):null}get featureUtilsPromise(){return this._get("featureUtilsPromise")??r.e(9912).then(r.bind(r,9912)).then((e=>this._featureUtils=e))}get calculatedExpressions(){const e=new o.A;if(!this.expressionsUsedInTitle.length)return e;if(!this._arcadeTask?.value){for(const t of this.expressionsUsedInTitle??[])e.push({name:t.name,invalid:!0});return e}for(const t of this.expressionsUsedInTitle)try{const r=this._arcadeTask.value.arcade.parseScript(t.expression,["$layer","$map","$datastore"]);if(r.isAsync){e.push({name:t.name,invalid:!0});break}e.push({name:t.name,syntax:r,invalid:!1,func:this._arcadeTask.value.arcade.compileScript(r,{vars:{$feature:"any"}})})}catch{e.push({name:t.name,invalid:!0});break}return e}get expressionsUsedInTitle(){let e=this.effectivePopupTemplate?.title??"";return"string"!=typeof e?[]:(e=e.toLowerCase(),this.effectivePopupTemplate?.expressionInfos?.filter((t=>e.includes(`{expression/${t.name.toLowerCase()}}`)))??[])}get fieldInfoMap(){return this._featureUtils?this._createFieldInfoMap(this._featureUtils.getAllFieldInfos(this.effectivePopupTemplate)):null}get hasBadExpressions(){return this.calculatedExpressions.some((e=>!0===e.invalid))}get requiredFields(){const e=new Set;if(this._arcadeTask?.value&&!this.hasBadExpressions)for(const r of this.calculatedExpressions?.toArray()??[])try{const t=this._arcadeTask.value.arcade.extractFieldLiterals(r.syntax);for(const r of t){const t=r.split("."),n=this.fieldsIndex.get(t.at(-1)??"");n&&e.add(n.name)}}catch{}const t=this._extractFieldNames(this.workingTitle);for(const r of t){const t=this.fieldsIndex.get(r);t&&e.add(t.name)}return e}get titleFromDisplayField(){let e="";return this.displayField&&(e=this.fieldsIndex.get(this.displayField)?.name??""),e||(e=this.fieldsIndex.get(this.objectIdField)?.name??""),e?`{${e}}`:""}get workingTitle(){const e=this.effectivePopupTemplate?this.effectivePopupTemplate.title:"";return""===e||null==e||this.hasBadExpressions||"string"!=typeof e?this.titleFromDisplayField:e}async getTitle(e,t,r){try{const{attributes:n}=t,s=r?.timeZone??"system",[{substituteFieldsInLinksAndAttributes:i}]=await Promise.all([this.featureUtilsPromise,this._arcadeTask?.promise]);if(r.fetchMissingFields&&(t=await this._checkAndReQueryGraphic(e,t)),this.workingTitle&&this.fieldInfoMap){const r=this._createFormattedAttributes(e,t,s).global;return i({attributes:n,expressionAttributes:null,fieldInfoMap:this.fieldInfoMap,globalAttributes:r,layer:e,text:this.workingTitle})}return""}catch{}return""}async _checkAndReQueryGraphic(e,t){const r=t.getObjectId();if(null==r)return t;if(!(0,p.Kl)(this.requiredFields,t)){const t=e.createQuery();t.where="1=1",t.outFields=[...this.requiredFields],t.objectIds=[r];const n=await e.queryFeatures(t);if(1===n?.features.length)return n.features[0]}return t}_createFieldInfoMap(e){const t=new Map;if(!e)return t;for(const r of e){if(!r.fieldName)continue;const e=this.fieldsIndex.get(r.fieldName),n=e?.name??r.fieldName;r.fieldName=n,t.set(n.toLowerCase(),r)}return t}_createFormattedAttributes(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"system";const n=this.effectivePopupTemplate?.fieldInfos??[],s={};if(!this._featureUtils)return{};if(!this.hasBadExpressions&&this.calculatedExpressions.length>0&&this._arcadeTask?.value){const r=this._arcadeTask.value.Feature.createFromGraphicLikeObject(t.geometry,t.attributes,e,null);for(const e of this.calculatedExpressions)try{s[`expression/${e.name}`]=e.func({vars:{$feature:r}})}catch{}}const i={...t.attributes,...s};return{global:this._featureUtils.formatAttributes({fieldInfos:n,attributes:i,graphic:t,timeZone:r,layer:e,fieldInfoMap:this.fieldInfoMap}),content:[]}}_extractFieldNames(e){return(0,p.nw)(e).filter((e=>!(0===e.indexOf("relationships/")||0===e.indexOf("expression/"))))}};(0,n._)([(0,a.MZ)({readOnly:!0})],c.prototype,"_arcadeTask",null),(0,n._)([(0,a.MZ)()],c.prototype,"_featureUtils",void 0),(0,n._)([(0,a.MZ)({readOnly:!0})],c.prototype,"featureUtilsPromise",null),(0,n._)([(0,a.MZ)({readOnly:!0})],c.prototype,"calculatedExpressions",null),(0,n._)([(0,a.MZ)()],c.prototype,"displayField",void 0),(0,n._)([(0,a.MZ)()],c.prototype,"effectivePopupTemplate",void 0),(0,n._)([(0,a.MZ)()],c.prototype,"expressionsUsedInTitle",null),(0,n._)([(0,a.MZ)()],c.prototype,"fieldsIndex",void 0),(0,n._)([(0,a.MZ)()],c.prototype,"fieldInfoMap",null),(0,n._)([(0,a.MZ)()],c.prototype,"fields",void 0),(0,n._)([(0,a.MZ)()],c.prototype,"objectIdField",void 0),(0,n._)([(0,a.MZ)()],c.prototype,"requiredFields",null),c=(0,n._)([(0,l.$)("esri.layers.support.TitleCreator")],c);const f=c},37534:(e,t,r)=>{r.d(t,{Rr:()=>l,fY:()=>u,ne:()=>p});var n=r(35143),s=r(48611),i=r(46053),o=(r(81806),r(76460),r(47249),r(85842)),a=r(51162);function l(e,t,r){if(!e)return null;const n=e.find((e=>!!e.field));if(!n)return null;const s=new a.A;return s.read(n,r),[s]}const p={type:[a.A],json:{origins:{"web-scene":{write:!1,read:!1}},name:"layerDefinition.orderBy",read:{reader:l},write:{writer:function(e,t,r,n){const i=e.find((e=>!!e.field));i&&(0,s.sM)(r,[i.toJSON()],t)}}}},u=e=>{let t=class extends e{constructor(){super(...arguments),this.orderBy=null}};return(0,n._)([(0,i.MZ)(p)],t.prototype,"orderBy",void 0),t=(0,n._)([(0,o.$)("esri.layers.mixins.OrderedLayer")],t),t}},51162:(e,t,r)=>{r.d(t,{A:()=>c});var n,s=r(35143),i=r(45802),o=r(42553),a=r(46053),l=(r(81806),r(76460),r(47249),r(85842));const p=new i.J({asc:"ascending",desc:"descending"});let u=n=class extends o.A{constructor(e){super(e),this.field=null,this.valueExpression=null,this.order="ascending"}clone(){return new n({field:this.field,valueExpression:this.valueExpression,order:this.order})}};(0,s._)([(0,a.MZ)({type:String,json:{write:!0}})],u.prototype,"field",void 0),(0,s._)([(0,a.MZ)({type:String,json:{write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],u.prototype,"valueExpression",void 0),(0,s._)([(0,a.MZ)({type:p.apiValues,json:{type:p.jsonValues,read:p.read,write:p.write}})],u.prototype,"order",void 0),u=n=(0,s._)([(0,l.$)("esri.layers.support.OrderByInfo")],u);const c=u},57831:(e,t,r)=>{r.d(t,{q:()=>s});var n=r(86729);function s(e,t,r){if(!r?.features||!r.hasZ)return;const s=(0,n.N)(r.geometryType,t,e.outSpatialReference);if(null!=s)for(const n of r.features)s(n.geometry)}},61701:(e,t,r)=>{var n;r.d(t,{X:()=>n}),function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS"}(n||(n={}))},65460:(e,t,r)=>{r.d(t,{BI:()=>h,D3:()=>y,XJ:()=>m,lc:()=>d,mX:()=>x,rU:()=>g,tH:()=>T});var n=r(88685);const s="__begin__",i="__end__",o=new RegExp(s,"ig"),a=new RegExp(i,"ig"),l=new RegExp("^"+s,"i"),p=new RegExp(i+"$","i"),u='"',c=u+" + ",f=" + "+u;function d(e){return e.replaceAll(new RegExp("\\[","g"),"{").replaceAll(new RegExp("\\]","g"),"}")}function y(e){return e.replaceAll(new RegExp("\\{","g"),"[").replaceAll(new RegExp("\\}","g"),"]")}function m(e){const t={expression:"",type:"none"};return e.labelExpressionInfo?e.labelExpressionInfo.value?(t.expression=e.labelExpressionInfo.value,t.type="conventional"):e.labelExpressionInfo.expression&&(t.expression=e.labelExpressionInfo.expression,t.type="arcade"):null!=e.labelExpression&&(t.expression=d(e.labelExpression),t.type="conventional"),t}function h(e){const t=m(e);switch(t.type){case"conventional":return x(t.expression);case"arcade":return t.expression}return null}function g(e){const t=m(e);switch(t.type){case"conventional":return function(e){const t=e?.match(_);return t?.[1].trim()||null}(t.expression);case"arcade":return T(t.expression)}return null}function x(e){let t;return e?(t=(0,n.HC)(e,(e=>s+'$feature["'+e+'"]'+i)),t=l.test(t)?t.replace(l,""):u+t,t=p.test(t)?t.replace(p,""):t+u,t=t.replaceAll(o,c).replaceAll(a,f)):t='""',t}const _=/^\s*\{([^}]+)\}\s*$/i;const v=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])(.+)(\2)\]));?\s*$/i,w=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])(.+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,M=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(.+)(\1)\s*\));?\s*$/i;function T(e){if(!e)return null;let t=v.exec(e)||w.exec(e);return t?t[1]||t[3]:(t=M.exec(e),t?t[2]:null)}},77725:(e,t,r)=>{r.d(t,{A:()=>_});var n,s=r(35143),i=r(39356),o=r(45802),a=r(42553),l=r(53084),p=r(46053),u=(r(81806),r(76460),r(28379)),c=r(85842),f=r(17707),d=r(13312),y=r(19902),m=r(31608),h=r(44135);const g=new o.J({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let x=n=class extends a.A{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){return this.readFeaturesWithClass(e,t,i.A)}writeGeometryType(e,t,r,n){if(e)return void g.write(e,t,r,n);const{features:s}=this;if(s)for(const i of s)if(null!=i?.geometry)return void g.write(i.geometry.type,t,r,n)}readQueryGeometry(e,t){if(!e)return null;const r=!!e.spatialReference,n=(0,y.rS)(e);return n&&!r&&t.spatialReference&&(n.spatialReference=d.A.fromJSON(t.spatialReference)),n}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:r}=this;if(r)for(const n of r)if(n&&null!=n.geometry&&n.geometry.spatialReference)return void(t.spatialReference=n.geometry.spatialReference.toJSON())}clone(){return new n(this.cloneProperties())}cloneProperties(){return(0,l.o8)({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(e){const t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(let r=0;r<t.features.length;r++){const n=t.features[r];if(n.geometry){const t=e?.[r];n.geometry=t?.toJSON()||n.geometry}}return t}quantize(e){const{scale:[t,r],translate:[n,s]}=e,i=this.features,o=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-n)/t)),(e=>Math.round((s-e)/r)));for(let a=0,l=i.length;a<l;a++)o?.(i[a].geometry)||(i.splice(a,1),a--,l--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:r}=this;if(!r)return this;const{translate:[n,s],scale:[i,o]}=r;let a=null,l=null;if(this.hasZ&&null!=r?.scale?.[2]){const{translate:[,,e],scale:[,,t]}=r;a=r=>r*t+e}if(this.hasM&&null!=r?.scale?.[3]){const{translate:[,,,e],scale:[,,,t]}=r;l=r=>null==r?r:r*t+e}const p=this._getHydrationFunction(e,(e=>e*i+n),(e=>s-e*o),a,l);for(const{geometry:u}of t)null!=u&&p&&p(u);return this.transform=null,this}readFeaturesWithClass(e,t,r){const n=d.A.fromJSON(t.spatialReference),s=[];for(let i=0;i<e.length;i++){const t=e[i],o=r.fromJSON(t),a=t.geometry?.spatialReference;null==o.geometry||a||(o.geometry.spatialReference=n);const l=t.aggregateGeometries,p=o.aggregateGeometries;if(l&&null!=p)for(const e in p){const t=p[e],r=l[e],s=r?.spatialReference;null==t||s||(t.spatialReference=n)}s.push(o)}return s}_quantizePoints(e,t,r){let n,s;const i=[];for(let o=0,a=e.length;o<a;o++){const a=e[o];if(o>0){const e=t(a[0]),o=r(a[1]);e===n&&o===s||(i.push([e-n,o-s]),n=e,s=o)}else n=t(a[0]),s=r(a[1]),i.push([n,s])}return i.length>0?i:null}_getQuantizationFunction(e,t,r){return"point"===e?e=>(e.x=t(e.x),e.y=r(e.y),e):"polyline"===e||"polygon"===e?e=>{const n=(0,y.Bi)(e)?e.rings:e.paths,s=[];for(let i=0,o=n.length;i<o;i++){const e=n[i],o=this._quantizePoints(e,t,r);o&&s.push(o)}return s.length>0?((0,y.Bi)(e)?e.rings=s:e.paths=s,e):null}:"multipoint"===e?e=>{const n=this._quantizePoints(e.points,t,r);return n&&n.length>0?(e.points=n,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,r,n,s){return"point"===e?e=>{e.x=t(e.x),e.y=r(e.y),n&&(e.z=n(e.z))}:"polyline"===e||"polygon"===e?e=>{const i=(0,y.Bi)(e)?e.rings:e.paths;let o,a;for(let n=0,s=i.length;n<s;n++){const e=i[n];for(let n=0,s=e.length;n<s;n++){const s=e[n];n>0?(o+=s[0],a+=s[1]):(o=s[0],a=s[1]),s[0]=t(o),s[1]=r(a)}}if(n&&s)for(let t=0,r=i.length;t<r;t++){const e=i[t];for(let t=0,r=e.length;t<r;t++){const r=e[t];r[2]=n(r[2]),r[3]=s(r[3])}}else if(n)for(let t=0,r=i.length;t<r;t++){const e=i[t];for(let t=0,r=e.length;t<r;t++){const r=e[t];r[2]=n(r[2])}}else if(s)for(let t=0,r=i.length;t<r;t++){const e=i[t];for(let t=0,r=e.length;t<r;t++){const r=e[t];r[2]=s(r[2])}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax),n&&null!=e.zmax&&null!=e.zmin&&(e.zmax=n(e.zmax),e.zmin=n(e.zmin)),s&&null!=e.mmax&&null!=e.mmin&&(e.mmax=s(e.mmax),e.mmin=s(e.mmin))}:"multipoint"===e?e=>{const i=e.points;let o,a;for(let n=0,s=i.length;n<s;n++){const e=i[n];n>0?(o+=e[0],a+=e[1]):(o=e[0],a=e[1]),e[0]=t(o),e[1]=r(a)}if(n&&s)for(let t=0,r=i.length;t<r;t++){const e=i[t];e[2]=n(e[2]),e[3]=s(e[3])}else if(n)for(let t=0,r=i.length;t<r;t++){const e=i[t];e[2]=n(e[2])}else if(s)for(let t=0,r=i.length;t<r;t++){const e=i[t];e[2]=s(e[2])}}:null}};(0,s._)([(0,p.MZ)({type:String,json:{write:!0}})],x.prototype,"displayFieldName",void 0),(0,s._)([(0,p.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],x.prototype,"exceededTransferLimit",void 0),(0,s._)([(0,p.MZ)({type:[i.A],json:{write:!0}})],x.prototype,"features",void 0),(0,s._)([(0,u.w)("features")],x.prototype,"readFeatures",null),(0,s._)([(0,p.MZ)({type:[h.A],json:{write:!0}})],x.prototype,"fields",void 0),(0,s._)([(0,p.MZ)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:g.read}}})],x.prototype,"geometryType",void 0),(0,s._)([(0,f.K)("geometryType")],x.prototype,"writeGeometryType",null),(0,s._)([(0,p.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],x.prototype,"hasM",void 0),(0,s._)([(0,p.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],x.prototype,"hasZ",void 0),(0,s._)([(0,p.MZ)({types:m.yR,json:{write:!0}})],x.prototype,"queryGeometry",void 0),(0,s._)([(0,u.w)("queryGeometry")],x.prototype,"readQueryGeometry",null),(0,s._)([(0,p.MZ)({type:d.A,json:{write:!0}})],x.prototype,"spatialReference",void 0),(0,s._)([(0,f.K)("spatialReference")],x.prototype,"writeSpatialReference",null),(0,s._)([(0,p.MZ)({json:{write:!0}})],x.prototype,"transform",void 0),x=n=(0,s._)([(0,c.$)("esri.rest.support.FeatureSet")],x),x.prototype.toJSON.isDefaultToJSON=!0;const _=x},91485:(e,t,r)=>{r.d(t,{A:()=>d});var n=r(35143),s=r(69098),i=r(42553),o=r(46053),a=(r(81806),r(76460),r(47249),r(28379)),l=r(85842),p=r(17707),u=r(76866),c=r(15427);let f=class extends(s.A.ClonableMixin(i.A)){constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={};for(const r of Object.keys(e))t[r]=(0,u.rS)(e[r]);return t}writeDomains(e,t){const r={};for(const n of Object.keys(e))e[n]&&(r[n]=e[n]?.toJSON());t.domains=r}};(0,n._)([(0,o.MZ)({json:{write:!0}})],f.prototype,"id",void 0),(0,n._)([(0,o.MZ)({json:{write:!0}})],f.prototype,"name",void 0),(0,n._)([(0,o.MZ)({json:{write:!0}})],f.prototype,"domains",void 0),(0,n._)([(0,a.w)("domains")],f.prototype,"readDomains",null),(0,n._)([(0,p.K)("domains")],f.prototype,"writeDomains",null),(0,n._)([(0,o.MZ)({type:[c.A],json:{write:!0}})],f.prototype,"templates",void 0),f=(0,n._)([(0,l.$)("esri.layers.support.FeatureType")],f);const d=f},91524:(e,t,r)=>{r.d(t,{K:()=>f,Q:()=>p});var n=r(35143),s=r(45802),i=r(76460),o=r(46053),a=(r(81806),r(47249),r(6409)),l=r(85842);const p=(0,s.O)()({naturalLog:"natural-log",squareRoot:"square-root",percentOfTotal:"percent-of-total",log:"log",field:"field"}),u="percent-of-total",c="field",f=e=>{let t=class extends e{constructor(){super(...arguments),this.normalizationField=null,this.normalizationMaxValue=null,this.normalizationMinValue=null,this.normalizationTotal=null}get normalizationType(){let e=this._get("normalizationType");const t=!!this.normalizationField,r=null!=this.normalizationTotal;return t||r?(e=t&&c||r&&u||null,t&&r&&i.A.getLogger(this).warn("warning: both normalizationField and normalizationTotal are set!")):e!==c&&e!==u||(e=null),e}set normalizationType(e){this._set("normalizationType",e)}};return(0,n._)([(0,o.MZ)({type:String,json:{name:"parameters.normalizationField",write:!0}})],t.prototype,"normalizationField",void 0),(0,n._)([(0,o.MZ)({type:Number,json:{name:"parameters.normalizationMaxValue",write:!0}})],t.prototype,"normalizationMaxValue",void 0),(0,n._)([(0,o.MZ)({type:Number,json:{name:"parameters.normalizationMinValue",write:!0}})],t.prototype,"normalizationMinValue",void 0),(0,n._)([(0,o.MZ)({type:Number,json:{name:"parameters.normalizationTotal",write:!0}})],t.prototype,"normalizationTotal",void 0),(0,n._)([(0,a.e)(p,{name:"parameters.normalizationType"})],t.prototype,"normalizationType",null),t=(0,n._)([(0,l.$)("esri.rest.support.NormalizationBinParametersMixin")],t),t}}}]);
//# sourceMappingURL=74874.06c26ccf.chunk.js.map