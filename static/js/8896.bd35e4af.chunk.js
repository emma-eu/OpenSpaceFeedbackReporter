"use strict";(self.webpackChunkopenspace=self.webpackChunkopenspace||[]).push([[8896,25515],{8896:(t,e,r)=>{r.r(e),r.d(e,{default:()=>c});var i=r(35143),s=r(50076),n=r(77717),l=r(52394),o=r(46053),a=(r(81806),r(76460),r(47249),r(85842)),u=r(25515),p=r(94729);let d=class extends((0,p.A)((0,n.P)(u.A))){constructor(t){super(t),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise(((t,e)=>{(0,l._)((()=>{const t=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let r="Unknown layer type";t&&(r+=" "+t),e(new s.A("layer:unknown-layer-type",r,{layerType:t}))}))})))}read(t,e){super.read({resourceInfo:t},e)}write(t,e){return null}};(0,i._)([(0,o.MZ)({readOnly:!0})],d.prototype,"resourceInfo",void 0),(0,i._)([(0,o.MZ)({type:["show","hide"]})],d.prototype,"listMode",void 0),(0,i._)([(0,o.MZ)({json:{read:!1},readOnly:!0,value:"unknown"})],d.prototype,"type",void 0),d=(0,i._)([(0,a.$)("esri.layers.UnknownLayer")],d);const c=d},25515:(t,e,r)=>{r.d(e,{A:()=>w});var i=r(35143),s=r(3825),n=r(50076),l=r(54099),o=r(5632),a=r(49304),u=r(76460),p=r(50346),d=r(90534),c=r(46053),h=(r(81806),r(47249),r(85842)),y=r(76797),g=r(13312),f=r(86560);var m=r(59187);let v=0,_=class extends(l.A.EventedMixin(o.A.IdentifiableMixin(a.A))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new y.A(-180,-90,180,90,g.A.WGS84),this.id=Date.now().toString(16)+"-layer-"+v++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.persistenceEnabled=!1,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=g.A.WGS84,this.title=null,this.type=null,this.url=null,this.visibilityTimeExtent=null,this.visible=!0}static async fromArcGISServerUrl(t){const e="string"==typeof t?{url:t}:t;return(await Promise.all([r.e(70652),r.e(62544)]).then(r.bind(r,62544))).fromUrl(e)}static fromPortalItem(t){return async function(t){const e="portalItem"in t?t:{portalItem:t},{fromItem:i}=await Promise.all([r.e(9624),r.e(70652),r.e(2487)]).then(r.bind(r,2487));try{return await i(e)}catch(s){const t=e?.portalItem,r=t?.id||"unset",i=t?.portal?.url||f.A.portalUrl;throw u.A.getLogger("esri.layers.support.fromPortalItem").error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+i+"', id: '"+r+"')",s),s}}(t)}initialize(){this.when().catch((t=>{(0,p.zf)(t)||u.A.getLogger(this).error("#load()",`Failed to load layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}')`,{error:t})}))}destroy(){const t=this.parent;if(t){const e=this;"layers"in t&&t.layers.includes(e)?t.layers.remove(e):"tables"in t&&t.tables.includes(e)?t.tables.remove(e):"baseLayers"in t&&t.baseLayers.includes(e)?t.baseLayers.remove(e):"referenceLayers"in t&&t.referenceLayers.includes(e)&&t.referenceLayers.remove(e),this._set("parent",null)}}get effectiveVisible(){let t=this.visible;const e=this.parent;return t&&e&&"effectiveVisible"in e&&(t&&=e.effectiveVisible),t}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){return(0,d.An)(this.url)}createLayerView(t,e){return Promise.reject(new n.A("layer:create-layer-view","Layer does not support creating a layer view"))}async fetchAttributionData(){const t=this.attributionDataUrl;if(this.hasAttributionData&&t)return(await(0,s.A)(t,{query:{f:"json"},responseType:"json"})).data;throw new n.A("layer:no-attribution-data","Layer does not have attribution data")}};(0,i._)([(0,c.MZ)({type:String})],_.prototype,"attributionDataUrl",void 0),(0,i._)([(0,c.MZ)({readOnly:!0})],_.prototype,"effectiveVisible",null),(0,i._)([(0,c.MZ)({type:y.A})],_.prototype,"fullExtent",void 0),(0,i._)([(0,c.MZ)({readOnly:!0})],_.prototype,"hasAttributionData",null),(0,i._)([(0,c.MZ)({type:String,clonable:!1})],_.prototype,"id",void 0),(0,i._)([(0,c.MZ)({type:Boolean,nonNullable:!0})],_.prototype,"legendEnabled",void 0),(0,i._)([(0,c.MZ)({type:["show","hide","hide-children"]})],_.prototype,"listMode",void 0),(0,i._)([(0,c.MZ)({type:Number,range:{min:0,max:1},nonNullable:!0})],_.prototype,"opacity",void 0),(0,i._)([(0,c.MZ)({clonable:!1})],_.prototype,"parent",void 0),(0,i._)([(0,c.MZ)({readOnly:!0})],_.prototype,"parsedUrl",null),(0,i._)([(0,c.MZ)({type:Boolean,readOnly:!0})],_.prototype,"persistenceEnabled",void 0),(0,i._)([(0,c.MZ)({type:Boolean})],_.prototype,"popupEnabled",void 0),(0,i._)([(0,c.MZ)({type:Boolean})],_.prototype,"attributionVisible",void 0),(0,i._)([(0,c.MZ)({type:g.A})],_.prototype,"spatialReference",void 0),(0,i._)([(0,c.MZ)({type:String})],_.prototype,"title",void 0),(0,i._)([(0,c.MZ)({readOnly:!0,json:{read:!1}})],_.prototype,"type",void 0),(0,i._)([(0,c.MZ)()],_.prototype,"url",void 0),(0,i._)([(0,c.MZ)({type:m.A})],_.prototype,"visibilityTimeExtent",void 0),(0,i._)([(0,c.MZ)({type:Boolean,nonNullable:!0})],_.prototype,"visible",void 0),_=(0,i._)([(0,h.$)("esri.layers.Layer")],_);const w=_},59187:(t,e,r)=>{r.d(e,{A:()=>h});var i,s=r(35143),n=r(42553),l=r(18288),o=r(46053),a=(r(81806),r(76460),r(47249),r(28379)),u=r(85842),p=r(17707),d=r(36693);let c=i=class extends n.A{static get allTime(){return y}static get empty(){return g}static fromArray(t){return new i({start:null!=t[0]?new Date(t[0]):t[0],end:null!=t[1]?new Date(t[1]):t[1]})}constructor(t){super(t),this.end=null,this.start=null}readEnd(t,e){return null!=e.end?new Date(e.end):null}writeEnd(t,e){e.end=t?.getTime()??null}get isAllTime(){return this.equals(i.allTime)}get isEmpty(){return this.equals(i.empty)}readStart(t,e){return null!=e.start?new Date(e.start):null}writeStart(t,e){e.start=t?.getTime()??null}clone(){return new i({end:this.end,start:this.start})}equals(t){if(!t)return!1;const e=this.start?.getTime()??this.start,r=this.end?.getTime()??this.end,i=t.start?.getTime()??t.start,s=t.end?.getTime()??t.end;return e===i&&r===s}expandTo(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.qU;if(this.isEmpty||this.isAllTime)return this.clone();let r=this.start;r&&(r=(0,l.lL)(r,t,e));let s=this.end;if(s){const r=(0,l.lL)(s,t,e);s=s.getTime()===r.getTime()?r:(0,l.S1)(r,1,t,e)}return new i({start:r,end:s})}intersection(t){if(!t)return this.clone();if(this.isEmpty||t.isEmpty)return i.empty;if(this.isAllTime)return t.clone();if(t.isAllTime)return this.clone();const e=this.start?.getTime()??-1/0,r=this.end?.getTime()??1/0,s=t.start?.getTime()??-1/0,n=t.end?.getTime()??1/0;let l,o;return s>=e&&s<=r?l=s:e>=s&&e<=n&&(l=e),r>=s&&r<=n?o=r:n>=e&&n<=r&&(o=n),null==l||null==o||isNaN(l)||isNaN(o)?i.empty:new i({start:l===-1/0?null:new Date(l),end:o===1/0?null:new Date(o)})}offset(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:d.qU;if(this.isEmpty||this.isAllTime)return this.clone();const s=new i,{start:n,end:o}=this;return null!=n&&(s.start=(0,l.S1)(n,t,e,r)),null!=o&&(s.end=(0,l.S1)(o,t,e,r)),s}toArray(){return this.isEmpty?[void 0,void 0]:[this.start?.getTime()??null,this.end?.getTime()??null]}union(t){if(!t||t.isEmpty)return this.clone();if(this.isEmpty)return t.clone();if(this.isAllTime||t.isAllTime)return y.clone();const e=null!=this.start&&null!=t.start?new Date(Math.min(this.start.getTime(),t.start.getTime())):null,r=null!=this.end&&null!=t.end?new Date(Math.max(this.end.getTime(),t.end.getTime())):null;return new i({start:e,end:r})}};(0,s._)([(0,o.MZ)({type:Date,json:{write:{allowNull:!0}}})],c.prototype,"end",void 0),(0,s._)([(0,a.w)("end")],c.prototype,"readEnd",null),(0,s._)([(0,p.K)("end")],c.prototype,"writeEnd",null),(0,s._)([(0,o.MZ)({readOnly:!0,json:{read:!1}})],c.prototype,"isAllTime",null),(0,s._)([(0,o.MZ)({readOnly:!0,json:{read:!1}})],c.prototype,"isEmpty",null),(0,s._)([(0,o.MZ)({type:Date,json:{write:{allowNull:!0}}})],c.prototype,"start",void 0),(0,s._)([(0,a.w)("start")],c.prototype,"readStart",null),(0,s._)([(0,p.K)("start")],c.prototype,"writeStart",null),c=i=(0,s._)([(0,u.$)("esri.time.TimeExtent")],c);const h=c,y=new c,g=new c({start:void 0,end:void 0})},72945:(t,e,r)=>{r.d(e,{It:()=>h,LG:()=>l,OM:()=>u,Sm:()=>p,Y:()=>o,bK:()=>a,mm:()=>c,sQ:()=>d});var i=r(9624),s=r(13312),n=r(45417);function l(t,e){if(!o(t,e)){const r=t.typeKeywords;r?r.push(e):t.typeKeywords=[e]}}function o(t,e){return!!t.typeKeywords?.includes(e)}function a(t){return o(t,c.HOSTED_SERVICE)}function u(t,e){const r=t.typeKeywords;if(r){const t=r.indexOf(e);t>-1&&r.splice(t,1)}}function p(t,e,r){r?l(t,e):u(t,e)}async function d(t){const e=t.clone().normalize();let r;if(e.length>1)for(const i of e)r?i.width>r.width&&(r=i):r=i;else r=e[0];return async function(t){const e=t.spatialReference;if(e.isWGS84)return t.clone();if(e.isWebMercator)return(0,n.ci)(t);const r=s.A.WGS84;return await(0,i.initializeProjection)(e,r),(0,i.project)(t,r)}(r)}const c={DEVELOPER_BASEMAP:"DeveloperBasemap",GROUP_LAYER_MAP:"Map",HOSTED_SERVICE:"Hosted Service",JSAPI:"ArcGIS API for JavaScript",LOCAL_SCENE:"ViewingMode-Local",METADATA:"Metadata",MULTI_LAYER:"Multilayer",ORIENTED_IMAGERY_LAYER:"OrientedImageryLayer",SINGLE_LAYER:"Singlelayer",SUBTYPE_GROUP_LAYER:"SubtypeGroupLayer",SUBTYPE_GROUP_TABLE:"SubtypeGroupTable",TABLE:"Table",TILED_IMAGERY:"Tiled Imagery"};function h(t){const{portal:e,isOrgItem:r,itemControl:i}=t,s=e.user?.privileges;let n=!s||s.includes("features:user:edit"),l=!!r&&!!s?.includes("features:user:fullEdit");const o="update"===i||"admin"===i;return o?l=n=!0:l&&(n=!0),{features:{edit:n,fullEdit:l},content:{updateItem:o}}}},77717:(t,e,r)=>{r.d(e,{P:()=>_,L:()=>w});var i=r(35143),s=r(91967),n=r(60351),l=r(53084),o=r(49140);class a{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(o.AU),this._values=new Map,this.multipleOriginsSupported=!0}clone(t){const e=new a,r=this._originStores[o.Gr.DEFAULTS];r&&r.forEach(((t,r)=>{e.set(r,(0,l.o8)(t),o.Gr.DEFAULTS)}));for(let i=o.Gr.SERVICE;i<o.AU;i++){const r=this._originStores[i];r&&r.forEach(((r,s)=>{t&&t.has(s)||e.set(s,(0,l.o8)(r),i)}))}return e}get(t,e){const r=void 0===e?this._values:this._originStores[e];return r?r.get(t):void 0}keys(t){const e=null==t?this._values:this._originStores[t];return e?[...e.keys()]:[]}set(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.Gr.USER,i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(t,e),!this._values.has(t)||this._propertyOriginMap.get(t)<=r){const i=this._values.get(t);return this._values.set(t,e),this._propertyOriginMap.set(t,r),i!==e}return!1}delete(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.Gr.USER;const r=this._originStores[e];if(!r)return;const i=r.get(t);if(r.delete(t),this._values.has(t)&&this._propertyOriginMap.get(t)===e){this._values.delete(t);for(let r=e-1;r>=0;r--){const e=this._originStores[r];if(e&&e.has(t)){this._values.set(t,e.get(t)),this._propertyOriginMap.set(t,r);break}}}return i}has(t,e){const r=void 0===e?this._values:this._originStores[e];return!!r&&r.has(t)}revert(t,e){for(;e>0&&!this.has(t,e);)--e;const r=this._originStores[e],i=r?.get(t),s=this._values.get(t);return this._values.set(t,i),this._propertyOriginMap.set(t,e),s!==i}originOf(t){return this._propertyOriginMap.get(t)||o.Gr.DEFAULTS}forEach(t){this._values.forEach(t)}}var u=r(6527),p=r(39314),d=r(85842);const c=t=>{let e=class extends t{constructor(){super(...arguments);const t=(0,p.oY)(this),e=t.store,r=new a;t.store=r,(0,n.k)(t,e,r)}read(t,e){(0,u.L)(this,t,e)}getAtOrigin(t,e){const r=h(this),i=(0,o.aB)(e);if("string"==typeof t)return r.get(t,i);const s={};return t.forEach((t=>{s[t]=r.get(t,i)})),s}originOf(t){return(0,o.OL)(this.originIdOf(t))}originIdOf(t){return h(this).originOf(t)}revert(t,e){const r=h(this),i=(0,o.aB)(e),s=(0,p.oY)(this);let n;n="string"==typeof t?"*"===t?r.keys(i):[t]:t,n.forEach((t=>{s.invalidate(t),r.revert(t,i),s.commit(t)}))}};return e=(0,i._)([(0,d.$)("esri.core.ReadOnlyMultiOriginJSONSupport")],e),e};function h(t){return(0,p.oY)(t).store}let y=class extends(c(s.A)){};y=(0,i._)([(0,d.$)("esri.core.ReadOnlyMultiOriginJSONSupport")],y);var g=r(17879),f=r(29584);const m=t=>{let e=class extends t{constructor(){super(...arguments)}clear(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"user";return v(this).delete(t,(0,o.aB)(e))}write(t,e){return(0,f.M)(this,t=t||{},e),t}setAtOrigin(t,e,r){(0,p.oY)(this).setAtOrigin(t,e,(0,o.aB)(r))}removeOrigin(t){const e=v(this),r=(0,o.aB)(t),i=e.keys(r);for(const s of i)e.originOf(s)===r&&e.set(s,e.get(s,r),o.Gr.USER)}updateOrigin(t,e){const r=v(this),i=(0,o.aB)(e),s=(0,g.Jt)(this,t);for(let n=i+1;n<o.AU;++n)r.delete(t,n);r.set(t,s,i)}toJSON(t){return this.write({},t)}};return e=(0,i._)([(0,d.$)("esri.core.MultiOriginJSONSupport.WriteableMultiOriginJSONSupport")],e),e.prototype.toJSON.isDefaultToJSON=!0,e};function v(t){return(0,p.oY)(t).store}const _=t=>{let e=class extends(m(c(t))){constructor(){super(...arguments)}};return e=(0,i._)([(0,d.$)("esri.core.MultiOriginJSONSupport")],e),e};let w=class extends(_(s.A)){};w=(0,i._)([(0,d.$)("esri.core.MultiOriginJSONSupport")],w)},94729:(t,e,r)=>{r.d(e,{A:()=>A});var i=r(35143),s=r(86560),n=r(55171),l=r(3825),o=r(98773),a=r(50076),u=r(76460),p=r(30726),d=r(50346),c=r(90534),h=r(46053),y=(r(81806),r(47249),r(28379)),g=r(85842),f=r(17707),m=r(31933),v=r(65308),_=r(70652),w=r(38665),E=r(72945);const A=t=>{let e=class extends t{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=(0,p.pR)(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(t){t!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",t))}readPortalItem(t,e,r){if(e.itemId)return new _.default({id:e.itemId,portal:r?.portal})}writePortalItem(t,e){t?.id&&(e.itemId=t.id)}async loadFromPortal(t,e){if(this.portalItem?.id)try{const{load:i}=await r.e(73814).then(r.bind(r,73814));return(0,d.Te)(e),await i({instance:this,supportedTypes:t.supportedTypes,validateItem:t.validateItem,supportsData:t.supportsData,layerModuleTypeMap:t.layerModuleTypeMap,populateGroupLayer:t.populateGroupLayer},e)}catch(i){throw(0,d.zf)(i)||u.A.getLogger(this).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${i}`),i}}async finishLoadEditablePortalLayer(t){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(t).catch((t=>((0,d.QP)(t),!0))))}async setUserPrivileges(t,e){if(!s.A.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(e);if(this.url)try{const{features:{edit:r,fullEdit:i},content:{updateItem:s}}=await this._fetchUserPrivileges(t,e);this._set("userHasEditingPrivileges",r),this._set("userHasFullEditingPrivileges",i),this._set("userHasUpdateItemPrivileges",s)}catch(r){(0,d.QP)(r)}}async _fetchUserPrivileges(t,e){let r=this.portalItem;if(!t||!r||!r.loaded||r.sourceUrl)return this._fetchFallbackUserPrivileges(e);const i=!n.id?.findCredential(this.url),s=t===r.id;if(s&&r.portal.user)return this._getUserPrivileges(r,i);let l,o;if(s)l=r.portal.url;else try{l=await(0,m.wI)(this.url,e)}catch(h){(0,d.QP)(h)}if(!l||!(0,c.b8)(l,r.portal.url))return this._fetchFallbackUserPrivileges(e);try{const t=null!=e?e.signal:null;o=await(n.id?.getCredential(`${l}/sharing`,{prompt:!1,signal:t}))}catch(h){(0,d.QP)(h)}const a=!0,u=!1,p=!1;if(!o)return{features:{edit:a,fullEdit:u},content:{updateItem:p}};try{if(s?await r.reload():(r=new _.default({id:t,portal:{url:l}}),await r.load(e)),r.portal.user)return this._getUserPrivileges(r,i)}catch(h){(0,d.QP)(h)}return{features:{edit:a,fullEdit:u},content:{updateItem:p}}}_getUserPrivileges(t,e){const r=(0,E.It)(t);return e&&(r.features.edit=!0),r}async _fetchFallbackUserPrivileges(t){let e=!0;try{e=await this._fetchUserHasEditingPrivileges(t)}catch(r){(0,d.QP)(r)}return{features:{edit:e,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(t){const e=this.url?n.id?.findCredential(this.url):null;if(!e)return!0;const r=S.credential===e?S.user:await this._fetchEditingUser(t);return S.credential=e,S.user=r,null==r?.privileges||r.privileges.includes("features:user:edit")}async _fetchEditingUser(t){const e=this.portalItem?.portal?.user;if(e)return e;const r=n.id?.findServerInfo(this.url??"");if(!r?.owningSystemUrl)return null;const i=`${r.owningSystemUrl}/sharing/rest`,s=v.A.getDefault();if(s&&s.loaded&&(0,c.S8)(s.restUrl)===(0,c.S8)(i))return s.user;const a=`${i}/community/self`,u=null!=t?t.signal:null,p=await(0,o.Ke)((0,l.A)(a,{authMode:"no-prompt",query:{f:"json"},signal:u}));return p.ok?w.A.fromJSON(p.value.data):null}read(t,e){e&&(e.layer=this),super.read(t,e)}write(t,e){const r=e?.portal,i=this.portalItem?.id&&(this.portalItem.portal||v.A.getDefault());return r&&i&&!(0,c.ut)(i.restUrl,r.restUrl)?(e.messages&&e.messages.push(new a.A("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(t,{...e,layer:this})}};return(0,i._)([(0,h.MZ)({type:_.default})],e.prototype,"portalItem",null),(0,i._)([(0,y.w)("web-document","portalItem",["itemId"])],e.prototype,"readPortalItem",null),(0,i._)([(0,f.K)("web-document","portalItem",{itemId:{type:String}})],e.prototype,"writePortalItem",null),(0,i._)([(0,h.MZ)({clonable:!1})],e.prototype,"resourceReferences",void 0),(0,i._)([(0,h.MZ)({type:Boolean,readOnly:!0})],e.prototype,"userHasEditingPrivileges",void 0),(0,i._)([(0,h.MZ)({type:Boolean,readOnly:!0})],e.prototype,"userHasFullEditingPrivileges",void 0),(0,i._)([(0,h.MZ)({type:Boolean,readOnly:!0})],e.prototype,"userHasUpdateItemPrivileges",void 0),e=(0,i._)([(0,g.$)("esri.layers.mixins.PortalLayer")],e),e},S={credential:null,user:null}}}]);
//# sourceMappingURL=8896.bd35e4af.chunk.js.map