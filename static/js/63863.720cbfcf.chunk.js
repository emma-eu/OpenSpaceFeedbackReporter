"use strict";(self.webpackChunkopenspace=self.webpackChunkopenspace||[]).push([[58672,63863],{10415:(t,e,r)=>{r.d(e,{$K:()=>h,KW:()=>c,Yb:()=>y,xs:()=>m});var i=r(3825),o=r(90534),s=r(19902),n=r(1438),l=r(80963),u=r(78238),p=r(57831);const a="Layer does not support extent calculation.";function d(t,e){const r=t.geometry,i=t.toJSON(),o=i;if(null!=r&&(o.geometry=JSON.stringify(r),o.geometryType=(0,s.$B)(r),o.inSR=(0,l.YX)(r.spatialReference)),i.topFilter?.groupByFields&&(o.topFilter.groupByFields=i.topFilter.groupByFields.join(",")),i.topFilter?.orderByFields&&(o.topFilter.orderByFields=i.topFilter.orderByFields.join(",")),i.topFilter&&(o.topFilter=JSON.stringify(o.topFilter)),i.objectIds&&(o.objectIds=i.objectIds.join(",")),i.orderByFields&&(o.orderByFields=i.orderByFields.join(",")),i.outFields&&!(e?.returnCountOnly||e?.returnExtentOnly||e?.returnIdsOnly)?i.outFields.includes("*")?o.outFields="*":o.outFields=i.outFields.join(","):delete o.outFields,i.outSR?o.outSR=(0,l.YX)(i.outSR):r&&i.returnGeometry&&(o.outSR=o.inSR),i.returnGeometry&&delete i.returnGeometry,i.timeExtent){const t=i.timeExtent,{start:e,end:r}=t;null==e&&null==r||(o.time=e===r?e:`${e??"null"},${r??"null"}`),delete i.timeExtent}return o}async function y(t,e,r,i){const o=await v(t,e,"json",i);return(0,p.q)(e,r,o.data),o}async function c(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:v(t,e,"json",r,{returnIdsOnly:!0})}async function h(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:v(t,e,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(a);if(e.hasOwnProperty("count"))throw new Error(a);return t}))}function m(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):v(t,e,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function v(t,e,r){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};const p="string"==typeof t?(0,o.An)(t):t,a=e.geometry?[e.geometry]:[];return s.responseType="json",(0,n.el)(a,null,s).then((t=>{const n=t?.[0];null!=n&&((e=e.clone()).geometry=n);const a=(0,u.z)({...p.query,f:r,...l,...d(e,l)});return(0,i.A)((0,o.fj)(p.path,"queryTopFeatures"),{...s,query:{...a,...s.query}})}))}},58672:(t,e,r)=>{r.r(e),r.d(e,{default:()=>R});var i,o=r(35143),s=r(45802),n=r(42553),l=r(53084),u=r(46053),p=r(40565),a=r(85842),d=r(17707),y=r(13312),c=r(19902),h=r(31608);r(81806),r(76460),r(47249);let m=i=class extends n.A{constructor(t){super(t),this.groupByFields=void 0,this.topCount=void 0,this.orderByFields=void 0}clone(){return new i({groupByFields:this.groupByFields,topCount:this.topCount,orderByFields:this.orderByFields})}};(0,o._)([(0,u.MZ)({type:[String],json:{write:!0}})],m.prototype,"groupByFields",void 0),(0,o._)([(0,u.MZ)({type:Number,json:{write:!0}})],m.prototype,"topCount",void 0),(0,o._)([(0,u.MZ)({type:[String],json:{write:!0}})],m.prototype,"orderByFields",void 0),m=i=(0,o._)([(0,a.$)("esri.rest.support.TopFilter")],m);const v=m;var w,F=r(59187);const S=new s.J({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),j=new s.J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let f=w=class extends n.A{constructor(t){super(t),this.cacheHint=void 0,this.distance=void 0,this.geometry=null,this.geometryPrecision=void 0,this.maxAllowableOffset=void 0,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.resultType=null,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.start=void 0,this.spatialRelationship="intersects",this.timeExtent=null,this.topFilter=void 0,this.units=null,this.where="1=1"}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10}clone(){return new w((0,l.o8)({cacheHint:this.cacheHint,distance:this.distance,geometry:this.geometry,geometryPrecision:this.geometryPrecision,maxAllowableOffset:this.maxAllowableOffset,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,resultType:this.resultType,returnGeometry:this.returnGeometry,returnZ:this.returnZ,returnM:this.returnM,start:this.start,spatialRelationship:this.spatialRelationship,timeExtent:this.timeExtent,topFilter:this.topFilter,units:this.units,where:this.where}))}};(0,o._)([(0,u.MZ)({type:Boolean,json:{write:!0}})],f.prototype,"cacheHint",void 0),(0,o._)([(0,u.MZ)({type:Number,json:{write:{overridePolicy:t=>({enabled:t>0})}}})],f.prototype,"distance",void 0),(0,o._)([(0,u.MZ)({types:h.yR,json:{read:c.rS,write:!0}})],f.prototype,"geometry",void 0),(0,o._)([(0,u.MZ)({type:Number,json:{write:!0}})],f.prototype,"geometryPrecision",void 0),(0,o._)([(0,u.MZ)({type:Number,json:{write:!0}})],f.prototype,"maxAllowableOffset",void 0),(0,o._)([(0,u.MZ)({type:Number,json:{read:{source:"resultRecordCount"}}})],f.prototype,"num",void 0),(0,o._)([(0,u.MZ)({json:{write:!0}})],f.prototype,"objectIds",void 0),(0,o._)([(0,u.MZ)({type:[String],json:{write:!0}})],f.prototype,"orderByFields",void 0),(0,o._)([(0,u.MZ)({type:[String],json:{write:!0}})],f.prototype,"outFields",void 0),(0,o._)([(0,u.MZ)({type:y.A,json:{read:{source:"outSR"},write:{target:"outSR"}}})],f.prototype,"outSpatialReference",void 0),(0,o._)([(0,u.MZ)({type:String,json:{write:!0}})],f.prototype,"resultType",void 0),(0,o._)([(0,u.MZ)({json:{write:!0}})],f.prototype,"returnGeometry",void 0),(0,o._)([(0,u.MZ)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],f.prototype,"returnM",void 0),(0,o._)([(0,u.MZ)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],f.prototype,"returnZ",void 0),(0,o._)([(0,u.MZ)({type:Number,json:{read:{source:"resultOffset"}}})],f.prototype,"start",void 0),(0,o._)([(0,d.K)("start"),(0,d.K)("num")],f.prototype,"writeStart",null),(0,o._)([(0,u.MZ)({type:String,json:{read:{source:"spatialRel",reader:S.read},write:{target:"spatialRel",writer:S.write}}})],f.prototype,"spatialRelationship",void 0),(0,o._)([(0,u.MZ)({type:F.A,json:{write:!0}})],f.prototype,"timeExtent",void 0),(0,o._)([(0,u.MZ)({type:v,json:{write:!0}})],f.prototype,"topFilter",void 0),(0,o._)([(0,u.MZ)({type:String,json:{read:j.read,write:{writer:j.write,overridePolicy(t){return{enabled:null!=t&&null!=this.distance}}}}})],f.prototype,"units",void 0),(0,o._)([(0,u.MZ)({type:String,json:{write:!0}})],f.prototype,"where",void 0),f=w=(0,o._)([(0,a.$)("esri.rest.support.TopFeaturesQuery")],f),f.from=(0,p.dp)(f);const R=f},63863:(t,e,r)=>{r.r(e),r.d(e,{executeTopFeaturesQuery:()=>l});var i=r(54994),o=r(10415),s=r(77725),n=r(58672);async function l(t,e,r,l){const u=(0,i.Dl)(t),p={...l},{data:a}=await(0,o.Yb)(u,n.default.from(e),r,p);return s.A.fromJSON(a)}}}]);
//# sourceMappingURL=63863.720cbfcf.chunk.js.map