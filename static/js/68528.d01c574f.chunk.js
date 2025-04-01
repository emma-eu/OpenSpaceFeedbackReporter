"use strict";(self.webpackChunkopenspace=self.webpackChunkopenspace||[]).push([[68528],{31394:(e,t,r)=>{r.d(t,{A:()=>o});var s=r(61551),i=r(8995),n=r(13692);class o extends i.f{renderChildren(e){for(const t of this.children)t.setTransform(e.state);if(super.renderChildren(e),this._updateAttributeView(),this.children.some((e=>e.hasData))){switch(e.drawPhase){case s.S5.MAP:this._renderChildren(e,s.RI.All);break;case s.S5.HIGHLIGHT:this.hasHighlight&&this._renderHighlight(e)}this._boundsRenderer&&this._boundsRenderer.doRender(e)}}_renderHighlight(e){(0,n.lB)(e,!1,(e=>{this._renderChildren(e,s.RI.Highlight)}))}}},68528:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var s=r(35143),i=r(16868),n=r(94643),o=r(68134),l=(r(76460),r(81806),r(47249),r(50076),r(85842)),a=r(5766),p=r(86616),h=r(77725),y=r(56286),c=r(31394),u=r(69679),f=r(91196);let m=class extends((0,y.e)(f.A)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,t){if(!this.graphicsViews.length)return null;const r=this.layer;return this.graphicsViews.reverse().flatMap((t=>{const s=this._popupTemplates.get(t),i=t.hitTest(e);for(const e of i)e.layer=r,e.sourceLayer=r,e.popupTemplate=s;return i})).map((t=>({type:"graphic",graphic:t,layer:r,mapPoint:e})))}update(e){if(this.graphicsViews)for(const t of this.graphicsViews)t.processUpdate(e)}attach(){this.addAttachHandles([(0,o.wB)((()=>this.layer?.featureCollections),(e=>{this._clear();for(const{popupInfo:t,featureSet:r,layerDefinition:s}of e){const e=h.A.fromJSON(r),o=new n.A(e.features),l=s.drawingInfo,a=t?i.A.fromJSON(t):null,y=(0,p.r)(l.renderer),f=new u.A({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:o,renderer:y,container:new c.A(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=f,this._popupTemplates.set(f,a),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(f),this.container.addChild(f.container)}}),o.Vh),(0,o.wB)((()=>this.layer?.polygonSymbol),(e=>{this._graphicsViewMap.polygon.renderer=new a.A({symbol:e})}),o.Vh),(0,o.wB)((()=>this.layer?.lineSymbol),(e=>{this._graphicsViewMap.polyline.renderer=new a.A({symbol:e})}),o.Vh),(0,o.wB)((()=>this.layer?.pointSymbol),(e=>{this._graphicsViewMap.point.renderer=new a.A({symbol:e})}),o.Vh)])}detach(){this._clear()}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};m=(0,s._)([(0,l.$)("esri.views.2d.layers.GeoRSSLayerView2D")],m);const g=m},77725:(e,t,r)=>{r.d(t,{A:()=>_});var s,i=r(35143),n=r(39356),o=r(45802),l=r(42553),a=r(53084),p=r(46053),h=(r(81806),r(76460),r(28379)),y=r(85842),c=r(17707),u=r(13312),f=r(19902),m=r(31608),g=r(44135);const d=new o.J({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let w=s=class extends l.A{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){return this.readFeaturesWithClass(e,t,n.A)}writeGeometryType(e,t,r,s){if(e)return void d.write(e,t,r,s);const{features:i}=this;if(i)for(const n of i)if(null!=n?.geometry)return void d.write(n.geometry.type,t,r,s)}readQueryGeometry(e,t){if(!e)return null;const r=!!e.spatialReference,s=(0,f.rS)(e);return s&&!r&&t.spatialReference&&(s.spatialReference=u.A.fromJSON(t.spatialReference)),s}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:r}=this;if(r)for(const s of r)if(s&&null!=s.geometry&&s.geometry.spatialReference)return void(t.spatialReference=s.geometry.spatialReference.toJSON())}clone(){return new s(this.cloneProperties())}cloneProperties(){return(0,a.o8)({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(e){const t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(let r=0;r<t.features.length;r++){const s=t.features[r];if(s.geometry){const t=e?.[r];s.geometry=t?.toJSON()||s.geometry}}return t}quantize(e){const{scale:[t,r],translate:[s,i]}=e,n=this.features,o=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-s)/t)),(e=>Math.round((i-e)/r)));for(let l=0,a=n.length;l<a;l++)o?.(n[l].geometry)||(n.splice(l,1),l--,a--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:r}=this;if(!r)return this;const{translate:[s,i],scale:[n,o]}=r;let l=null,a=null;if(this.hasZ&&null!=r?.scale?.[2]){const{translate:[,,e],scale:[,,t]}=r;l=r=>r*t+e}if(this.hasM&&null!=r?.scale?.[3]){const{translate:[,,,e],scale:[,,,t]}=r;a=r=>null==r?r:r*t+e}const p=this._getHydrationFunction(e,(e=>e*n+s),(e=>i-e*o),l,a);for(const{geometry:h}of t)null!=h&&p&&p(h);return this.transform=null,this}readFeaturesWithClass(e,t,r){const s=u.A.fromJSON(t.spatialReference),i=[];for(let n=0;n<e.length;n++){const t=e[n],o=r.fromJSON(t),l=t.geometry?.spatialReference;null==o.geometry||l||(o.geometry.spatialReference=s);const a=t.aggregateGeometries,p=o.aggregateGeometries;if(a&&null!=p)for(const e in p){const t=p[e],r=a[e],i=r?.spatialReference;null==t||i||(t.spatialReference=s)}i.push(o)}return i}_quantizePoints(e,t,r){let s,i;const n=[];for(let o=0,l=e.length;o<l;o++){const l=e[o];if(o>0){const e=t(l[0]),o=r(l[1]);e===s&&o===i||(n.push([e-s,o-i]),s=e,i=o)}else s=t(l[0]),i=r(l[1]),n.push([s,i])}return n.length>0?n:null}_getQuantizationFunction(e,t,r){return"point"===e?e=>(e.x=t(e.x),e.y=r(e.y),e):"polyline"===e||"polygon"===e?e=>{const s=(0,f.Bi)(e)?e.rings:e.paths,i=[];for(let n=0,o=s.length;n<o;n++){const e=s[n],o=this._quantizePoints(e,t,r);o&&i.push(o)}return i.length>0?((0,f.Bi)(e)?e.rings=i:e.paths=i,e):null}:"multipoint"===e?e=>{const s=this._quantizePoints(e.points,t,r);return s&&s.length>0?(e.points=s,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,r,s,i){return"point"===e?e=>{e.x=t(e.x),e.y=r(e.y),s&&(e.z=s(e.z))}:"polyline"===e||"polygon"===e?e=>{const n=(0,f.Bi)(e)?e.rings:e.paths;let o,l;for(let s=0,i=n.length;s<i;s++){const e=n[s];for(let s=0,i=e.length;s<i;s++){const i=e[s];s>0?(o+=i[0],l+=i[1]):(o=i[0],l=i[1]),i[0]=t(o),i[1]=r(l)}}if(s&&i)for(let t=0,r=n.length;t<r;t++){const e=n[t];for(let t=0,r=e.length;t<r;t++){const r=e[t];r[2]=s(r[2]),r[3]=i(r[3])}}else if(s)for(let t=0,r=n.length;t<r;t++){const e=n[t];for(let t=0,r=e.length;t<r;t++){const r=e[t];r[2]=s(r[2])}}else if(i)for(let t=0,r=n.length;t<r;t++){const e=n[t];for(let t=0,r=e.length;t<r;t++){const r=e[t];r[2]=i(r[2])}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax),s&&null!=e.zmax&&null!=e.zmin&&(e.zmax=s(e.zmax),e.zmin=s(e.zmin)),i&&null!=e.mmax&&null!=e.mmin&&(e.mmax=i(e.mmax),e.mmin=i(e.mmin))}:"multipoint"===e?e=>{const n=e.points;let o,l;for(let s=0,i=n.length;s<i;s++){const e=n[s];s>0?(o+=e[0],l+=e[1]):(o=e[0],l=e[1]),e[0]=t(o),e[1]=r(l)}if(s&&i)for(let t=0,r=n.length;t<r;t++){const e=n[t];e[2]=s(e[2]),e[3]=i(e[3])}else if(s)for(let t=0,r=n.length;t<r;t++){const e=n[t];e[2]=s(e[2])}else if(i)for(let t=0,r=n.length;t<r;t++){const e=n[t];e[2]=i(e[2])}}:null}};(0,i._)([(0,p.MZ)({type:String,json:{write:!0}})],w.prototype,"displayFieldName",void 0),(0,i._)([(0,p.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],w.prototype,"exceededTransferLimit",void 0),(0,i._)([(0,p.MZ)({type:[n.A],json:{write:!0}})],w.prototype,"features",void 0),(0,i._)([(0,h.w)("features")],w.prototype,"readFeatures",null),(0,i._)([(0,p.MZ)({type:[g.A],json:{write:!0}})],w.prototype,"fields",void 0),(0,i._)([(0,p.MZ)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:d.read}}})],w.prototype,"geometryType",void 0),(0,i._)([(0,c.K)("geometryType")],w.prototype,"writeGeometryType",null),(0,i._)([(0,p.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],w.prototype,"hasM",void 0),(0,i._)([(0,p.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],w.prototype,"hasZ",void 0),(0,i._)([(0,p.MZ)({types:m.yR,json:{write:!0}})],w.prototype,"queryGeometry",void 0),(0,i._)([(0,h.w)("queryGeometry")],w.prototype,"readQueryGeometry",null),(0,i._)([(0,p.MZ)({type:u.A,json:{write:!0}})],w.prototype,"spatialReference",void 0),(0,i._)([(0,c.K)("spatialReference")],w.prototype,"writeSpatialReference",null),(0,i._)([(0,p.MZ)({json:{write:!0}})],w.prototype,"transform",void 0),w=s=(0,i._)([(0,y.$)("esri.rest.support.FeatureSet")],w),w.prototype.toJSON.isDefaultToJSON=!0;const _=w}}]);
//# sourceMappingURL=68528.d01c574f.chunk.js.map