"use strict";(self.webpackChunkopenspace=self.webpackChunkopenspace||[]).push([[57312],{5551:(e,t,s)=>{s.d(t,{A:()=>u});var r=s(35143),i=s(91967),a=s(46053),n=(s(81806),s(76460),s(47249),s(85842));let o=class extends i.A{constructor(){super(...arguments),this.SCHEDULER_LOG_SLOW_TASKS=!1,this.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES=!1}};(0,r._)([(0,a.MZ)()],o.prototype,"SCHEDULER_LOG_SLOW_TASKS",void 0),(0,r._)([(0,a.MZ)()],o.prototype,"FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES",void 0),o=(0,r._)([(0,n.$)("esri.views.support.debugFlags")],o);const u=new o},22665:(e,t,s)=>{s.r(t),s.d(t,{default:()=>R});var r=s(98773),i=s(50076),a=s(76460),n=s(50346),o=s(62754),u=s(80963),l=s(98618),h=s(78482),_=s(72547),d=s(24586),c=s(48094),g=s(10907),E=s(40098),p=s(11316),m=s(1900),T=s(85632),f=s(36693);const I="esri.layers.WFSLayer";class R{constructor(){this._customParameters=null,this._queryEngine=null,this._supportsPagination=!0}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}async load(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{getFeatureUrl:s,getFeatureOutputFormat:r,fields:a,geometryType:o,featureType:u,maxRecordCount:l,maxTotalRecordCount:h,maxPageCount:g,objectIdField:E,customParameters:T}=e,{spatialReference:I,getFeatureSpatialReference:R}=(0,p.UH)(s,u,e.spatialReference);try{await(0,d.Nk)(R,I)}catch{throw new i.A("unsupported-projection","Projection not supported",{inSpatialReference:R,outSpatialReference:I})}(0,n.Te)(t),this._customParameters=T,this._featureType=u,this._fieldsIndex=m.A.fromLayerJSON({fields:a,dateFieldsTimeReference:a.some((e=>"esriFieldTypeDate"===e.type))?{timeZoneIANA:f.n$}:null}),this._geometryType=o,this._getFeatureUrl=s,this._getFeatureOutputFormat=r,this._getFeatureSpatialReference=R,this._maxRecordCount=l,this._maxTotalRecordCount=h,this._maxPageCount=g,this._objectIdField=E,this._spatialReference=I;let A=await this._snapshotFeatures(t);if(A.errors.length>0&&(this._supportsPagination=!1,A=await this._snapshotFeatures(t),A.errors.length>0))throw A.errors[0];return this._queryEngine=new c.do({fieldsIndex:this._fieldsIndex,geometryType:o,hasM:!1,hasZ:!1,objectIdField:E,spatialReference:I,timeInfo:null,featureStore:new _.A({geometryType:o,hasM:!1,hasZ:!1})}),this._queryEngine.featureStore.addMany(A.features),{warnings:y(A),extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async applyEdits(){throw new i.A("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),(await this._queryEngine.executeQueryForIds(e,t.signal)).filter(T.Et)}async queryExtent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),(0,h.J)(this._queryEngine,e,t.signal)}async queryAttributeBins(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeAttributeBinsQuery(e,t.signal)}async refresh(e){return this._customParameters=e.customParameters,this._maxRecordCount=e.maxRecordCount,this._maxTotalRecordCount=e.maxTotalRecordCount,this._maxPageCount=e.maxPageCount,this._snapshotTask?.abort(),this._snapshotTask=(0,r.UT)((e=>this._snapshotFeatures({signal:e}))),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),this._queryEngine.featureStore.addMany(e.features);for(const t of y(e))a.A.getLogger(I).warn(new o.A("wfs-layer:refresh-warning",t.message,t.details));e.errors?.length&&a.A.getLogger(I).warn(new o.A("wfs-layer:refresh-error","Refresh completed with errors",{errors:e.errors}))}),(()=>{this._queryEngine.featureStore.clear()})),await this._waitSnapshotComplete(),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _snapshotFeatures(e){const t=e?.signal,s=this._maxTotalRecordCount,r=this._maxPageCount,i=this._supportsPagination?await(0,p.E)(this._getFeatureUrl,this._featureType.typeName,{customParameters:this._customParameters,signal:t}):void 0;let a=[];const o=[];if(null==i)try{a=await this._singleQuery(t)}catch(u){(0,n.zf)(u)||o.push(u)}else{const e=Math.min(i,s),u=function*(e,t,s){for(let r=0;r<t;r++)yield e._pageQuery(r,s)}(this,Math.max(1,Math.min(Math.ceil(e/this._maxRecordCount),r)),t);await Promise.allSettled(Array.from({length:10}).map((()=>async function(e,t,s){let i=e.next();for(;!i.done;){try{const e=await i.value;t.push(...e)}catch(r){(0,n.zf)(r)||s.push(r)}i=e.next()}}(u,a,o))))}return(0,n.Te)(t),{features:a,totalRecordCount:i,maxTotalRecordCount:s,maxPageCount:r,errors:o}}async _singleQuery(e){const t=await(0,p.x$)(this._getFeatureUrl,this._featureType.typeName,this._getFeatureSpatialReference,this._getFeatureOutputFormat,{customParameters:this._customParameters,signal:e});return this._processGeoJSON(t,{signal:e})}async _pageQuery(e,t){const s=e*this._maxRecordCount,r=await(0,p.x$)(this._getFeatureUrl,this._featureType.typeName,this._getFeatureSpatialReference,this._getFeatureOutputFormat,{customParameters:this._customParameters,startIndex:s,count:this._maxRecordCount,signal:t});return this._processGeoJSON(r,{startIndex:s,signal:t})}_processGeoJSON(e,t){(0,g.sO)(e,this._getFeatureSpatialReference.wkid);const{startIndex:s,signal:r}=t;(0,n.Te)(r);const i=(0,g.bd)(e,{geometryType:this._geometryType,hasZ:!1,objectIdField:this._objectIdField});if(!(0,u.aI)(this._spatialReference,this._getFeatureSpatialReference))for(const n of i)null!=n.geometry&&(n.geometry=(0,l.Ux)((0,d.Cv)((0,l.zv)(n.geometry,this._geometryType,!1,!1),this._getFeatureSpatialReference,this._spatialReference)));let a=s??1;for(const n of i){const e={};(0,E.MB)(this._fieldsIndex,e,n.attributes,!0),n.attributes=e,null==e[this._objectIdField]&&(n.objectId=e[this._objectIdField]=a++)}return i}}function y(e){const t=[];return null!=e.totalRecordCount&&(e.features.length<e.totalRecordCount&&t.push({name:"wfs-layer:maxRecordCount-too-low",message:`Could only fetch ${e.features.length} of ${e.totalRecordCount} in ${e.maxPageCount} queries. Try increasing the value of WFSLayer.maxRecordCount.`,details:{recordCount:e.features.length,totalRecordCount:e.totalRecordCount}}),e.totalRecordCount>e.maxTotalRecordCount&&t.push({name:"wfs-layer:large-dataset",message:`The number of ${e.totalRecordCount} features exceeds the maximum allowed of ${e.maxTotalRecordCount}.`,details:{recordCount:e.features.length,totalRecordCount:e.totalRecordCount,maxTotalRecordCount:e.maxTotalRecordCount}})),t}},22856:(e,t,s)=>{s.d(t,{G:()=>r});const r=Symbol("Yield")},40098:(e,t,s)=>{s.d(t,{$1:()=>p,CR:()=>E,MB:()=>d,PC:()=>m,Yx:()=>u,bP:()=>h});var r=s(51344),i=s(80963),a=s(53430);class n{constructor(){this.code=null,this.description=null}}class o{constructor(e){this.error=new n,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function u(e){return new o(e)}class l{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function h(e){return new l(e)}const _=new Set;function d(e,t,s){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];_.clear();for(const i in s){const n=e.get(i);if(!n)continue;const o=c(n,s[i]);if(_.add(n.name),n&&(r||n.editable)){const e=(0,a.CJ)(n,o);if(e)return u((0,a.uo)(e,n,o));t[n.name]=o}}for(const i of e.requiredFields??[])if(!_.has(i.name))return u(`missing required field "${i.name}"`);return null}function c(e,t){let s=t;return(0,a.WA)(e)&&"string"==typeof t?s=parseFloat(t):(0,a.yM)(e)&&null!=t&&"string"!=typeof t?s=String(t):(0,a.vE)(e)&&"string"==typeof t&&(s=(0,r._U)(t)),(0,a.WX)(s)}let g;function E(e,t){if(!e||!(0,i.fn)(t))return e;if("rings"in e||"paths"in e){if(null==g)throw new TypeError("geometry engine not loaded");return g.simplify(t,e)}return e}async function p(e,t){!(0,i.fn)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return null==g&&(g=await Promise.all([s.e(52612),s.e(67983)]).then(s.bind(s,1669))),g}()}const m={supportsAutoIntervalBin:!0,supportsFixedIntervalBin:!0,supportsFixedBoundariesBin:!0,supportsDateBin:!0,supportsStackBy:!0,supportsSplitBy:!0,supportsNormalization:!0,supportedStatisticTypes:["COUNT","SUM","AVG","VAR","STDDEV","MIN","MAX","PERCENTILE_CONT","PERCENTILE_DISC","CentroidAggregate","EnvelopeAggregate","ConvexHullAggregate"],supportedNormalizationTypes:["field","log","naturalLog","percentOfTotal","squareRoot"]}},59752:(e,t,s)=>{s.d(t,{Bb:()=>w,W6:()=>r,mj:()=>T,nu:()=>L});var r,i,a=s(88321),n=(s(81806),s(76460)),o=s(30726),u=s(32634),l=s(30015),h=s(50346),_=s(68134),d=s(75540),c=s(91417),g=s(84031),E=s(5551),p=s(98476),m=s(22856);function T(){return new b.Scheduler}(i=r||(r={})).RESOURCE_CONTROLLER_IMMEDIATE="immediate",i.RESOURCE_CONTROLLER="schedule",i.SLIDE="slide",i.STREAM_DATA_LOADER="stream loader",i.ELEVATION_QUERY="elevation query",i.TERRAIN_SURFACE="terrain",i.SURFACE_GEOMETRY_UPDATES="surface geometry updates",i.LOD_RENDERER="LoD renderer",i.GRAPHICS_CORE="Graphics3D",i.I3S_CONTROLLER="I3S",i.POINT_CLOUD_LAYER="point cloud",i.FEATURE_TILE_FETCHER="feature fetcher",i.OVERLAY="overlay",i.STAGE="stage",i.GRAPHICS_DECONFLICTOR="graphics deconflictor",i.FILTER_VISIBILITY="Graphics3D filter visibility",i.SCALE_VISIBILITY="Graphics3D scale visibility",i.FRUSTUM_VISIBILITY="Graphics3D frustum visibility",i.POINT_OF_INTEREST_FREQUENT="POI frequent",i.POINT_OF_INTEREST_INFREQUENT="POI infrequent",i.LABELER="labeler",i.FEATURE_QUERY_ENGINE="feature query",i.FEATURE_TILE_TREE="feature tile tree",i.FEATURE_TILE_TREE_ACTIVE="fast feature tile tree",i.ELEVATION_ALIGNMENT="elevation alignment",i.ELEVATION_ALIGNMENT_SCENE="elevation alignment scene",i.TEXT_TEXTURE_ATLAS="text texture atlas",i.TEXTURE_UNLOAD="texture unload",i.LINE_OF_SIGHT_TOOL="line of sight tool",i.LINE_OF_SIGHT_TOOL_INTERACTIVE="interactive line of sight tool",i.ELEVATION_PROFILE="elevation profile",i.SNAPPING="snapping",i.SHADOW_ACCUMULATOR="shadow accumulator",i.CLOUDS_GENERATOR="clouds generator",i.MAPVIEW_FETCH_QUEUE="mapview fetch queue",i.MAPVIEW_LAYERVIEW_UPDATE="mapview layerview update",i.MAPVIEW_VECTOR_TILE_PARSING_QUEUE="mapview vector tile parsing queue",i[i.NONE=0]="NONE",i[i.TEST_PRIO=1]="TEST_PRIO";const f=new Map([[r.RESOURCE_CONTROLLER_IMMEDIATE,0],[r.RESOURCE_CONTROLLER,4],[r.SLIDE,0],[r.STREAM_DATA_LOADER,0],[r.ELEVATION_QUERY,0],[r.TERRAIN_SURFACE,1],[r.SURFACE_GEOMETRY_UPDATES,1],[r.LOD_RENDERER,2],[r.GRAPHICS_CORE,2],[r.I3S_CONTROLLER,2],[r.POINT_CLOUD_LAYER,2],[r.FEATURE_TILE_FETCHER,2],[r.CLOUDS_GENERATOR,2],[r.OVERLAY,4],[r.STAGE,4],[r.GRAPHICS_DECONFLICTOR,4],[r.FILTER_VISIBILITY,4],[r.SCALE_VISIBILITY,4],[r.FRUSTUM_VISIBILITY,4],[r.POINT_OF_INTEREST_FREQUENT,6],[r.POINT_OF_INTEREST_INFREQUENT,30],[r.LABELER,8],[r.FEATURE_QUERY_ENGINE,8],[r.FEATURE_TILE_TREE,16],[r.FEATURE_TILE_TREE_ACTIVE,0],[r.ELEVATION_ALIGNMENT,12],[r.ELEVATION_ALIGNMENT_SCENE,14],[r.TEXT_TEXTURE_ATLAS,12],[r.TEXTURE_UNLOAD,12],[r.LINE_OF_SIGHT_TOOL,16],[r.LINE_OF_SIGHT_TOOL_INTERACTIVE,0],[r.SNAPPING,0],[r.SHADOW_ACCUMULATOR,30],[r.MAPVIEW_FETCH_QUEUE,0],[r.MAPVIEW_LAYERVIEW_UPDATE,2],[r.MAPVIEW_VECTOR_TILE_PARSING_QUEUE,0]]);function I(e){return f.has(e)?f.get(e):"number"==typeof e?e:1}const R=(0,c.l5)(6.5),y=(0,c.l5)(1),A=(0,c.l5)(30),C=(0,c.l5)(1e3/30),S=(0,c.l5)(100);var b,N;!function(e){e.Scheduler=class{get updating(){return this._updating.value}_updatingChanged(){this._updating.value=this._tasks.some((e=>e.needsUpdate))}constructor(){this._updating=(0,d.v)(!0),this._microTaskQueued=!1,this._frameNumber=0,this.performanceInfo={total:new u.A("total"),tasks:new Map},this._frameTaskTimes=new Map,this._budget=new s,this._state=p.M.INTERACTING,this._tasks=new l.A,this._runQueue=new l.A,this._load=0,this._idleStateCallbacks=new l.A,this._idleUpdatesStartFired=!1,this._forceTask=!1,this._debug=!1,this._debugHandle=(0,_.wB)((()=>E.A.SCHEDULER_LOG_SLOW_TASKS),(e=>this._debug=e),_.Vh);for(const e of Object.keys(r))this.performanceInfo.tasks.set(r[e],new u.A(r[e]))}destroy(){this._tasks.toArray().forEach((e=>e.remove())),this._tasks.clear(),(0,o.xt)(this._debugHandle),this._microTaskQueued=!1,this._updatingChanged()}taskRunningChanged(e){this._updatingChanged(),e&&this._budget.remaining>0&&!this._microTaskQueued&&(this._microTaskQueued=!0,queueMicrotask((()=>{this._microTaskQueued&&(this._microTaskQueued=!1,this._budget.remaining>0&&this._schedule()&&this._runFrame())})))}registerTask(e,s){const r=new t(this,e,s);return this._tasks.push(r),this._updatingChanged(),this.performanceInfo.tasks.has(e)||this.performanceInfo.tasks.set(e,new u.A(e)),r}registerIdleStateCallbacks(e,t){const s={idleBegin:e,idleEnd:t};this._idleStateCallbacks.push(s),this.state===p.M.IDLE&&this._idleUpdatesStartFired&&s.idleBegin();const r=this;return{remove:()=>this._removeIdleStateCallbacks(s),set idleBegin(e){r._idleUpdatesStartFired&&(s.idleEnd(),r._state===p.M.IDLE&&e()),s.idleBegin=e},set idleEnd(e){s.idleEnd=e}}}get load(){return this._load}set state(e){this._state!==e&&(this._state=e,this.state!==p.M.IDLE&&this._idleUpdatesStartFired&&(this._idleUpdatesStartFired=!1,this._idleStateCallbacks.forAll((e=>e.idleEnd()))))}get state(){return this._state}frame(e){this._startFrameTaskTimes();const t=this._updateBudget(e);if(t){const e=this._budget.now();this._runFrame(),this._recordFrameTaskTimes(this._budget.now()-e)}else this._recordFrameTaskTimes(0);return t}_updateBudget(e){this._test&&(this._test.usedBudget=0),++this._frameNumber;let t=R,s=e.frameDuration,r=y;switch(this.state){case p.M.IDLE:t=(0,c.l5)(0),s=(0,c.l5)(Math.max(S,e.frameDuration)),r=A;break;case p.M.INTERACTING:s=(0,c.l5)(Math.max(C,e.frameDuration));case p.M.ANIMATING:}return s=(0,c.l5)(s-e.elapsedFrameTime-t),this.state!==p.M.IDLE&&s<y&&!this._forceTask?(this._forceTask=!0,!1):(s=(0,c.l5)(Math.max(s,r)),this._budget.reset(s,this.state),this._updateLoad(),this._schedule())}_runFrame(){switch(this._forceTask=!1,this._microTaskQueued=!1,this.state){case p.M.IDLE:this._idleUpdatesStartFired||(this._idleUpdatesStartFired=!0,this._idleStateCallbacks.forAll((e=>e.idleBegin()))),this._runIdle();break;case p.M.INTERACTING:this._runInteracting();break;default:this._runAnimating()}this._test&&(this._test.usedBudget=this._budget.elapsed)}stopFrame(){this._budget.reset((0,c.l5)(0),this._state),this._budget.madeProgress()}_removeIdleStateCallbacks(e){this._idleUpdatesStartFired&&e.idleEnd(),this._idleStateCallbacks.removeUnordered(e)}removeTask(e){this._tasks.removeUnordered(e),this._runQueue.removeUnordered(e),this._updatingChanged()}_updateTask(e){this._tasks.forAll((t=>{t.name===e&&t.setPriority(e)}))}_getState(e){if(this._runQueue.some((t=>t.name===e)))return N.SCHEDULED;let t=N.IDLE;return this._tasks.forAll((s=>{s.name===e&&s.needsUpdate&&(s.schedulePriority<=1?t=N.READY:t!==N.READY&&(t=N.WAITING))})),t}_getRuntime(e){let t=0;return this._tasks.forAll((s=>{s.name===e&&(t+=s.runtime)})),t}_resetRuntimes(){this._tasks.forAll((e=>e.runtime=0))}_getRunning(){const e=new Map;if(this._tasks.forAll((t=>{t.needsUpdate&&e.set(t.name,(e.get(t.name)||0)+1)})),0===e.size)return null;let t="";return e.forEach(((e,s)=>{t+=e>1?` ${e}x ${s}`:` ${s}`})),t}_runIdle(){this._run()}_runInteracting(){this._run()}_runAnimating(){this._run()}_updateLoad(){const e=this._tasks.reduce(((e,t)=>t.needsUpdate?++e:e),0);this._load=.9*this._load+e*(1-.9)}_schedule(){for(this._runQueue.filterInPlace((e=>!!e.needsUpdate||(e.schedulePriority=e.basePriority,!1))),this._tasks.forAll((e=>{0===e.basePriority&&e.needsUpdate&&!this._runQueue.includes(e)&&e.blockFrame!==this._frameNumber&&this._runQueue.unshift(e)}));0===this._runQueue.length;){let e=!1,t=0;if(this._tasks.forAll((s=>{s.needsUpdate&&0!==s.schedulePriority&&0!==s.basePriority&&s.blockFrame!==this._frameNumber&&(e=!0,t=Math.max(t,s.basePriority),1===s.schedulePriority?(s.schedulePriority=0,this._runQueue.push(s)):--s.schedulePriority)})),!e)return this._updatingChanged(),!1}return this._updatingChanged(),!0}_run(){do{for(;this._runQueue.length>0;){const e=this._budget.now(),t=this._runQueue.pop();this._budget.resetProgress();try{t.task.runTask(this._budget)===m.G&&(t.blockFrame=this._frameNumber)}catch(i){n.A.getLogger("esri.views.support.Scheduler").error(`Exception in task "${t.name}"`,i),t.blockFrame=this._frameNumber}!this._budget.hasProgressed&&t.blockFrame!==this._frameNumber&&t.needsUpdate&&(t.name,r.I3S_CONTROLLER,t.blockFrame=this._frameNumber),t.schedulePriority=t.basePriority;const s=this._budget.now()-e;if(t.runtime+=s,this._frameTaskTimes.set(t.priority,this._frameTaskTimes.get(t.priority)+s),this._budget.remaining<=0)return void this._updatingChanged()}}while(this._schedule());this._updatingChanged()}_startFrameTaskTimes(){for(const e of Object.keys(r))this._frameTaskTimes.set(r[e],0)}_recordFrameTaskTimes(e){this._frameTaskTimes.forEach(((e,t)=>this.performanceInfo.tasks.get(t).push(e))),this.performanceInfo.total.push(e)}get test(){return this._test}};class t{get task(){return this._task.value}get updating(){return this._queue.running}constructor(e,t,s){this._scheduler=e,this.name=t,this.blockFrame=0,this.runtime=0,this._queue=new g.T,this._handles=new a.A,this._basePriority=I(t),this.schedulePriority=this._basePriority,this._task=(0,d.v)(null!=s?s:this._queue),this._handles.add((0,_.z7)((()=>this.task.running),(t=>e.taskRunningChanged(t))))}remove(){this.processQueue(w),this._scheduler.removeTask(this),this.schedule=L.schedule,this.reschedule=L.reschedule,this._handles.destroy()}get basePriority(){return this._basePriority}setPriority(e){if(this.name===e)return;this.name=e;const t=I(e);0!==this._basePriority&&0===this.schedulePriority||(this.schedulePriority=t),this._basePriority=t}get priority(){return this.name}set priority(e){this.setPriority(e)}get needsUpdate(){return this.updating||this.task.running}schedule(e,t,s){return this._queue.push(e,t,s)}reschedule(e,t,s){return this._queue.unshift(e,t,s)}processQueue(e){return this._queue.runTask(e)}}class s{constructor(){this._begin="undefined"!=typeof performance?performance.now():0,this._budget=0,this._state=p.M.IDLE,this._done=!1,this._progressed=!1,this._enabled=!0}run(e){return!this.done&&(!0===e()&&this.madeProgress(),!0)}get done(){return this._done}get budget(){return this._budget}madeProgress(){return this._progressed=!0,this._done=this.elapsed>=this._budget&&this._enabled,this._done}get state(){return this._state}get enabled(){return this._enabled}set enabled(e){this._enabled=e}reset(e,t){this._begin=this.now(),this._budget=e,this._state=t,this.resetProgress()}get remaining(){return Math.max(this._budget-this.elapsed,0)}now(){return performance.now()}get elapsed(){return this.now()-this._begin}resetProgress(){this._progressed=!1,this._done=!1}get hasProgressed(){return this._progressed}}e.Budget=s}(b||(b={})),function(e){e.SCHEDULED="s",e.READY="r",e.WAITING="w",e.IDLE="i"}(N||(N={}));const w=(()=>{const e=new b.Budget;return e.enabled=!1,e})();const L=new class{remove(){}processQueue(){}schedule(e,t,s){try{if((0,h.G4)(t)){const e=(0,h.NK)();return s?Promise.resolve(s(e)):Promise.reject(e)}return(0,h.z7)(e(w))}catch(r){return Promise.reject(r)}}reschedule(e,t,s){return this.schedule(e,t,s)}}},75540:(e,t,s)=>{s.d(t,{v:()=>o});var r=s(53084),i=s(99486),a=s(99702);class n{constructor(e,t){this._observable=new a.I,this._value=e,this._equalityFunction=t}get value(){return(0,i.gc)(this._observable),this._value}set value(e){this._equalityFunction(e,this._value)||(this._value=e,this._observable.notify())}mutate(e){e(this._value),this._observable.notify()}}function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.gh;return new n(e,t)}},78482:(e,t,s)=>{s.d(t,{J:()=>g});var r=s(53084),i=s(50346),a=s(19902),n=s(1438),o=s(80963),u=s(24586),l=s(48094),h=s(9345),_=s(71857),d=s(85932),c=s(81376);async function g(e,t,s){const g=(0,i.Mq)(s),{point:E,distance:p,returnEdge:m,vertexMode:T}=t;if(!m&&"none"===T)return{candidates:[]};let f=(0,r.o8)(t.query);f=await e.schedule((()=>(0,_.T2)(f,e.definitionExpression,e.spatialReference)),g),f=await e.reschedule((()=>(0,d.B4)(f,{availableFields:e.availableFields,fieldsIndex:e.fieldsIndex,geometryType:e.geometryType,spatialReference:e.spatialReference})),g);const I=!(0,o.aI)(E.spatialReference,e.spatialReference);I&&await(0,u.Nk)(E.spatialReference,e.spatialReference);const R="number"==typeof p?p:p.x,y="number"==typeof p?p:p.y,A={xmin:E.x-R,xmax:E.x+R,ymin:E.y-y,ymax:E.y+y,spatialReference:E.spatialReference},C=I?(0,u.Cv)(A,e.spatialReference):A;if(!C)return{candidates:[]};const S=(await(0,n.el)((0,a.rS)(E),null,{signal:g}))[0],b=(await(0,n.el)((0,a.rS)(C),null,{signal:g}))[0];if(null==S||null==b)return{candidates:[]};const N=new h.G(await e.reschedule((()=>e.searchFeatures((0,l.ux)(b.toJSON()))),g),f,e);await e.reschedule((()=>e.executeObjectIdsQuery(N)),g),await e.reschedule((()=>e.executeTimeQuery(N)),g),await e.reschedule((()=>e.executeAttributesQuery(N)),g),await e.reschedule((()=>async function(e,t,s){const{query:r}=t,{spatialRel:i}=r;if(!t?.items?.length||!r.geometry||!i)return;const a=await(0,c.xt)(i,r.geometry,e.geometryType,e.hasZ,e.hasM),n=await e.runSpatialFilter(t.items,(e=>a(e.geometry)),s);t.items=n}(e,N,g)),g);const w=S.toJSON(),L=I?(0,u.Cv)(w,e.spatialReference):w,F=I?Math.max(C.xmax-C.xmin,C.ymax-C.ymin)/2:p;return N.createSnappingResponse({...t,point:L,distance:F},E.spatialReference)}},84031:(e,t,s)=>{s.d(t,{T:()=>n});var r=s(50346),i=s(75540),a=s(22856);class n{constructor(){this._tasks=new Array,this._runningTasks=(0,i.v)(0)}get length(){return this._tasks.length}get running(){return this._runningTasks.value>0}destroy(){this.cancelAll()}runTask(e){if(0===this.length)return a.G;for(;!e.done&&this._process(e);)e.madeProgress()}push(e,t,s){return++this._runningTasks.value,new Promise(((r,i)=>this._tasks.push(new o(r,i,e,t,s)))).finally((()=>--this._runningTasks.value))}unshift(e,t,s){return++this._runningTasks.value,new Promise(((r,i)=>this._tasks.unshift(new o(r,i,e,t,s)))).finally((()=>--this._runningTasks.value))}_process(e){if(0===this._tasks.length)return!1;const t=this._tasks.shift();try{const s=(0,r.G4)(t.signal);if(s&&!t.abortCallback)t.reject((0,r.NK)());else{const i=s?t.abortCallback?.((0,r.NK)()):t.callback(e);(0,r.$X)(i)?i.then(t.resolve,t.reject):t.resolve(i)}}catch(n){t.reject(n)}return!0}cancelAll(){const e=(0,r.NK)();for(const t of this._tasks)if(t.abortCallback){const s=t.abortCallback(e);t.resolve(s)}else t.reject(e);this._tasks.length=0}}class o{constructor(e,t,s){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0;this.resolve=e,this.reject=t,this.callback=s,this.signal=r,this.abortCallback=i}}},98476:(e,t,s)=>{var r;s.d(t,{M:()=>r}),function(e){e[e.ANIMATING=0]="ANIMATING",e[e.INTERACTING=1]="INTERACTING",e[e.IDLE=2]="IDLE"}(r||(r={}))}}]);
//# sourceMappingURL=57312.66e99888.chunk.js.map