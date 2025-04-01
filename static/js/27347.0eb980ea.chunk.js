"use strict";(self.webpackChunkopenspace=self.webpackChunkopenspace||[]).push([[27347,68707],{21066:(e,t,s)=>{s.d(t,{c:()=>n});var i=s(97799);function n(e,t){const s=e.getGeometryType();return s===i.G.enumPoint?e:(0,i.h)(s)?r(e):s===i.G.enumMultiPoint||s===i.G.enumEnvelope?e:s===i.G.enumMultipatch?((0,i.b)("not implemented for multipatch"),e):e}function r(e){if(function(e){for(let t=0,s=e.getPathCount();t<s;t++){const s=e.getPathSize(t);if(0===s)return!1;if(1===s){if(0===e.getSegmentCountPath(t))return!1;if(e.getSegmentType(e.getPathStart(t))===i.G.enumLine)return!1;if(!e.isClosedPath(t))return!1}}return!0}(e))return e;const t=e.createInstance();for(let s=0,n=e.getPathCount();s<n;s++){const n=e.getPathSize(s);if(0!==n){if(1===n){if(0===e.getSegmentCountPath(s))continue;if(e.getSegmentType(e.getPathStart(s))===i.G.enumLine)continue;if(!e.isClosedPath(s))continue}t.addPath(e,s,!0)}}return t}},25381:(e,t,s)=>{s.d(t,{O:()=>l});var i=s(35143),n=s(68707),r=s(97799),m=s(79186),o=s(91523),h=s(26871),a=s(20265);class l{getOperatorType(){return 10204}supportsCurves(){return!0}accelerateGeometry(e,t,s){return!1}canAccelerateGeometry(e){return!1}executeMany(e,t,s,i){return new c(e,t,s,i)}execute(e,t,s,i){return e||(0,r.t)("null param is not allowed."),new c(null,t,s,i).generalize(e)}}class c extends n.G{constructor(e,t,s,i){super(),this.m_pline=null,this.m_point=new o.P,this.m_stack=[],this.m_resultstack=[],this.m_callCount=0,this.m_progressTracker=i,this.m_geoms=e,this.m_maxDeviation=t,this.m_bRemoveDegenerateParts=s}tock(){return!0}getRank(){return 1}next(){const e=this.m_geoms.next();return null===e?null:((0,r.d)(e),this.generalize(e))}getGeometryID(){return this.m_geoms.getGeometryID()}generalize(e){const t=e.getGeometryType();if((0,r.e)(t))return e;if(t===r.G.enumEnvelope){const t=new m.a({vd:e.getDescription()});return t.addEnvelope(e,!1),this.generalize(t)}if((0,r.f)(t)){const t=new m.P({vd:e.getDescription()});return t.addSegment(e,!0),this.generalize(t)}if((0,r.h)(t)||(0,r.b)(""),e.isEmpty()||this.m_maxDeviation<=0)return e;const s=(new a.O).execute(e,0,.05*this.m_maxDeviation,0,this.m_progressTracker);e.hasNonLinearSegments()&&(this.m_maxDeviation*=.95);const n=s,o=e.createInstance();o.getGeometryType()===r.G.enumPolygon&&o.setFillRule(e.getFillRule()),this.m_xy=n.getAttributeStreamRef(0);{const e={stack:[],error:void 0,hasError:!1};try{const t=new m.L;this.m_pline=t,(0,i.b)(e,(0,h.h)((()=>{this.m_pline=null}),!1),!1);for(let e=0,s=n.getPathCount();e<s;e++)this.generalizePath(n.getImpl(),e,o.getImpl())}catch(l){e.error=l,e.hasError=!0}finally{(0,i.c)(e)}}return this.m_resultstack.length=0,this.m_stack.length=0,o}generalizePath(e,t,s){if(e.getPathSize(t)<2)return;this.m_resultstack.length=0,this.m_stack.length=0;const i=e.getPathStart(t),n=e.getPathEnd(t)-1,r=e.isClosedPath(t),m=e.isClosedPathInXYPlane(t);let o=0,a=-1;this.m_stack.push(r?i:n),this.m_stack.push(i);let l=!1,c=!1;for(!this.m_bRemoveDegenerateParts&&m&&(l=!0,c=!0);this.m_stack.length>1;){const t=this.m_stack.at(-1);this.m_stack.pop();const s=this.m_stack.at(-1);let i=e.getXY(t);this.m_pline.setStartXY(i),i=e.getXY(s),this.m_pline.setEndXY(i);const r=[Number.NaN];let m=this.findGreatestDistance(t,s,n,r);m>=0&&(l?l=!1:(c&&r[0]>o&&(o=r[0],a=m),r[0]<=this.m_maxDeviation&&(m=-1))),m>=0?(this.m_stack.push(m),this.m_stack.push(t)):this.m_resultstack.push(t)}r||this.m_resultstack.push(this.m_stack[0]);const u=this.m_resultstack.length;if(u===e.getPathSize(t)&&u===this.m_stack.length)s.addPath(e,t,!0);else if(this.m_resultstack.length>0){if(this.m_bRemoveDegenerateParts&&this.m_resultstack.length<=2){if(r||1===this.m_resultstack.length)return;if(h.P.distance(e.getXY(this.m_resultstack[0]),e.getXY(this.m_resultstack[1]))<=this.m_maxDeviation)return}if(c&&a>=0&&o<=this.m_maxDeviation){const e=this.m_resultstack.at(-1)>a;this.m_resultstack.push(a),e&&(this.m_resultstack[this.m_resultstack.length-2]=(0,h.b)(this.m_resultstack[this.m_resultstack.length-1],this.m_resultstack[this.m_resultstack.length-1]=this.m_resultstack[this.m_resultstack.length-2]))}for(let t=0,i=this.m_resultstack.length;t<i;t++)e.getPointByVal(this.m_resultstack[t],this.m_point),0===t?s.startPathPoint(this.m_point):s.lineToPoint(this.m_point);if(r){for(let e=this.m_resultstack.length;e<3;e++)s.lineToPoint(this.m_point);s.closePathWithLine()}}}findGreatestDistance(e,t,s,i){let n=t-1;t<=e&&(n=s);let r=-1,m=0;const o=new h.P;for(let h=e+1;h<=n;h++){this.m_xy.queryPoint2D(2*h,o);const e=o.x,t=o.y,s=this.m_pline.getClosestCoordinate(o,!1);o.assign(this.m_pline.getCoord2D(s)),o.x-=e,o.y-=t;const i=o.length();i>m&&(r=h,m=i),this.m_callCount++}return i[0]=m,r}}},49728:(e,t,s)=>{s.d(t,{g7:()=>M,yv:()=>G,fz:()=>E});var i,n=s(68707),r=s(97799),m=s(82103),o=s(21557),h=s(35143),a=s(91523),l=s(26871),c=s(79186),u=s(16364),_=s(21066),f=s(25381);class g{getOperatorType(){return 10104}accelerateGeometry(e,t,s){return!1}canAccelerateGeometry(e){return!1}supportsCurves(){return!0}isSimple(e,t,s,i,n){return 5===(0,m.aj)(e,t,s,i,n)}executeMany(e,t,s,i){return new d(e,t,s,i)}execute(e,t,s,i){const m=new n.S([e]),o=this.executeMany(m,t,s,i).next();return o||(0,r.c)("null output"),o}}class d extends n.G{constructor(e,t,s,i){super(),e||(0,r.t)(""),this.m_progressTracker=i,this.m_bForceSimplify=s,this.m_index=-1,this.m_inputGeometryCursor=e,this.m_spatialReference=t}next(){const e=this.m_inputGeometryCursor.next();return e?((0,r.d)(e),this.m_index=this.m_inputGeometryCursor.getGeometryID(),this.simplify(e)):null}getGeometryID(){return this.m_index}tock(){return!1}getRank(){return 1}simplify(e){return e||(0,r.t)(""),(0,m.ak)(e,this.m_spatialReference,this.m_bForceSimplify,this.m_progressTracker)}}function p(e,t,s,i,n,r){return{m_from:e.clone(),m_to:t.clone(),m_center:s.clone(),m_next:n,m_type:i}}function P(e,t,s,i,n){return{m_from:e.clone(),m_to:t.clone(),m_next:s,m_type:4,m_center:new l.P}}!function(e){e[e.enumDummy=256]="enumDummy",e[e.enumLine=1]="enumLine",e[e.enumArc=2]="enumArc",e[e.enumMiter=8]="enumMiter",e[e.enumBevel=16]="enumBevel",e[e.enumJoinMask=26]="enumJoinMask",e[e.enumConnectionMask=27]="enumConnectionMask"}(i||(i={}));class y extends n.G{constructor(e,t,s,i,n,r,m,o,h,a){super(),this.m_index=0,this.m_bufferedPolygon=null,this.m_x=0,this.m_y=0,this.m_progressTracker=a,this.m_parent=e,this.m_mp=t,this.m_distance=s,this.m_spatialReference=i,this.m_densifyDist=o,this.m_maxVertexInCompleteCircle=h,this.m_joins=n,this.m_caps=r,this.m_miterLimit=m}next(){const e=new a.P;for(;;){if(this.m_index===this.m_mp.getPointCount())return null;if(1===this.m_caps)return this.m_index=this.m_mp.getPointCount(),new c.a({vd:this.m_mp.getDescription()});if(this.m_mp.getPointByVal(this.m_index,e),this.m_index++,!e.isEmpty())break}let t,s=!1;if(null===this.m_bufferedPolygon&&(this.m_x=e.getX(),this.m_y=e.getY(),this.m_bufferedPolygon=this.m_parent.buffer(e,this.m_distance,this.m_spatialReference,this.m_joins,this.m_caps,this.m_miterLimit,this.m_densifyDist,this.m_maxVertexInCompleteCircle),s=!0),t=this.m_index<this.m_mp.getPointCount()?this.m_bufferedPolygon.clone():this.m_bufferedPolygon,!s){const s=new u.T,i=e.getX()-this.m_x,n=e.getY()-this.m_y;s.setShiftCoords(i,n),t.applyTransformation(s)}return(0,a.s)(t,0),t}getGeometryID(){return 0}getRank(){return 1}tock(){return!0}}class b extends n.G{constructor(e){super(),this.m_currentPathIndex=0,this.m_polyline=e}next(){if(!this.m_polyline)return null;const e=this.m_polyline.getImpl(),t=e.getPathCount();if(this.m_currentPathIndex<t){const t=this.m_currentPathIndex;if(this.m_currentPathIndex++,!e.isClosedPathInXYPlane(t)){let s=e.getXY(e.getPathEnd(t)-1);for(;this.m_currentPathIndex<e.getPathCount();){const t=e.getXY(e.getPathStart(this.m_currentPathIndex));if(e.isClosedPathInXYPlane(this.m_currentPathIndex))break;if(!t.equals(s))break;s=e.getXY(e.getPathEnd(this.m_currentPathIndex)-1),this.m_currentPathIndex++}}if(0===t&&this.m_currentPathIndex===this.m_polyline.getPathCount()){const e=this.m_polyline;return this.m_polyline=null,e}const s=new c.P({vd:this.m_polyline.getDescription()});s.addPath(this.m_polyline,t,!0);for(let i=t+1;i<this.m_currentPathIndex;i++)s.addSegmentsFromPath(this.m_polyline,i,0,e.getSegmentCountPath(i),!1);return this.m_currentPathIndex===this.m_polyline.getPathCount()&&(this.m_polyline=null),s}return null}getGeometryID(){return 0}getRank(){return 1}tock(){return!0}}class x extends n.G{constructor(e,t,s){super(),this.m_geometry=null,this.m_index=0,this.m_bufferer=e,this.m_geoms=t,this.m_index=0,this.m_bFilter=s}next(){if(null===this.m_geometry&&(this.m_index=0,this.m_geometry=this.m_geoms.next(),!this.m_geometry))return null;const e=this.m_geometry.getImpl();if(this.m_index<e.getPathCount()){const e=this.m_index;return this.m_index++,this.m_bufferer.bufferPolylinePath(this.m_geometry,e,this.m_bFilter)}return this.m_geometry=null,this.next()}getGeometryID(){return 0}getRank(){return 1}tock(){return!0}}class C extends n.G{constructor(e){super(),this.m_index=0,this.m_bufferer=e}next(){const e=this.m_bufferer.m_geometry;if(this.m_index<e.getPathCount()){const t=this.m_index,s=e.calculateRingArea2D(this.m_index);for((0,r.g)(s>0),this.m_index++;this.m_index<e.getPathCount()&&!(e.calculateRingArea2D(this.m_index)>0);)this.m_index++;let i;return i=0===t&&this.m_index===e.getPathCount()?this.m_bufferer.bufferPolygonImpl(e,0,e.getPathCount()):this.m_bufferer.bufferPolygonImpl(e,t,this.m_index),i}return null}getGeometryID(){return 0}getRank(){return 1}tock(){return!0}}class D{constructor(e){this.m_geometry=null,this.m_bufferCommands=[],this.m_originalGeomType=r.G.enumUnknown,this.m_maxVertexInCompleteCircle=-1,this.m_circleTemplateSize=-1,this.m_oldCircleTemplateSize=0,this.m_spatialReference=null,this.m_tolerance=new a.C(0,0),this.m_smallTolerance=new a.C(0,0),this.m_filterTolerance=0,this.m_densifyDist=-1,this.m_distance=Number.NaN,this.m_absDistance=0,this.m_absDistanceReversed=0,this.m_dA=-1,this.m_miterLimit=4,this.m_joins=0,this.m_caps=0,this.m_bRoundBuffer=!0,this.m_bOutputLoops=!0,this.m_bFilter=!0,this.m_circleTemplate=[],this.m_leftStack=[],this.m_middleStack=[],this.m_helperLine1=new c.L,this.m_helperLine2=new c.L,this.m_helperArray=[],this.m_progressCounter=0,this.m_densificator=c.D.constructDefault(e),this.m_progressTracker=e}buffer(e,t,s,i,n,m,h,u){if(e||(0,r.t)("Geometry.Bufferer.Impl.Buffer"),h<0&&(0,r.t)("Geometry.Bufferer.Impl.Buffer"),(0,r.o)(e.getGeometryType())&&(0,r.b)("Unsupported geometry type."),e.isEmpty())return new c.a({vd:e.getDescription()});if(this.m_joins=i,this.m_caps=n,this.m_bRoundBuffer=!1,this.m_miterLimit=m,this.m_originalGeomType=e.getGeometryType(),(0,r.p)(this.m_originalGeomType)?this.m_bRoundBuffer=0===this.m_joins:(0,r.e)(this.m_originalGeomType)?this.m_bRoundBuffer=0===this.m_caps:(0,r.q)(this.m_originalGeomType)&&(this.m_bRoundBuffer=0===this.m_joins&&0===this.m_caps),this.m_bFilter=this.m_bRoundBuffer,this.m_geometry=(0,_.c)(e),this.m_geometry.isEmpty())return new c.a({vd:e.getDescription()});const f=new o.J;this.m_geometry.queryLooseEnvelope(f),t>0&&f.inflateCoords(t,t),this.m_tolerance=(0,a.a)(s,f,!0),this.m_smallTolerance=(0,a.a)(null,f,!0),u<=0&&(u=96),this.m_spatialReference=s,this.m_distance=t,this.m_absDistance=Math.abs(this.m_distance),this.m_absDistanceReversed=0!==this.m_absDistance?1/this.m_absDistance:0,Number.isNaN(h)||0===h?h=1e-5*this.m_absDistance:h>.5*this.m_absDistance&&(h=.5*this.m_absDistance),u<12&&(u=12);const g=Math.abs(t)*(1-Math.cos(Math.PI/u));if(g>h)h=g;else if(0!==t){const e=Math.PI/Math.acos(1-h/Math.abs(t));e<u-1&&(u=Math.trunc(e))<12&&(u=12,h=Math.abs(t)*(1-Math.cos(Math.PI/u)))}this.m_densifyDist=h,this.m_maxVertexInCompleteCircle=u,this.m_filterTolerance=this.m_bRoundBuffer?Math.min(this.m_smallTolerance.total(),.25*this.m_densifyDist):0,this.m_circleTemplateSize=this.calcN(),this.m_circleTemplateSize!==this.m_oldCircleTemplateSize&&(this.m_circleTemplate.length=0,this.m_oldCircleTemplateSize=this.m_circleTemplateSize),this.m_densifyDist>0&&(0,r.j)(this.m_geometry)&&(this.m_geometry=this.m_densificator.densifyEx(this.m_geometry,0,this.m_densifyDist,0,0!==this.m_joins,(0,l.i)()));const d=this.bufferImpl();return this.m_geometry=null,d}generateCircleTemplate(){if(this.m_circleTemplate.length)return;const e=this.m_circleTemplateSize,t=Math.trunc((e+3)/4),s=.5*Math.PI/t;this.m_dA=s,this.m_circleTemplate=(0,l.m)(l.P,4*t);const i=Math.cos(s),n=Math.sin(s),r=l.P.construct(0,1);for(let m=0;m<t;m++)this.m_circleTemplate[m+0*t].setCoords(r.y,-r.x),this.m_circleTemplate[m+1*t].setCoords(-r.x,-r.y),this.m_circleTemplate[m+2*t].setCoords(-r.y,r.x),this.m_circleTemplate[m+3*t].setCoords(r.x,r.y),r.rotateReverse(i,n)}bufferImpl(){const e=this.m_geometry.getGeometryType();if((0,r.f)(e)){const e=new c.P({vd:this.m_geometry.getDescription()});return e.addSegment(this.m_geometry,!0),this.m_geometry=e,this.bufferImpl()}if(this.m_distance<=this.m_tolerance.total()){if(!(0,r.p)(e))return new c.a({vd:this.m_geometry.getDescription()});if(this.m_distance<0){const e=new o.J;if(this.m_geometry.queryEnvelope(e),e.width()<=2*this.m_absDistance||e.height()<=2*this.m_absDistance)return new c.a({vd:this.m_geometry.getDescription()})}}switch(this.m_geometry.getGeometryType()){case r.G.enumPoint:return this.bufferPoint();case r.G.enumMultiPoint:return this.bufferMultiPoint();case r.G.enumPolyline:return this.bufferPolyline();case r.G.enumPolygon:return this.bufferPolygon();case r.G.enumEnvelope:return this.bufferEnvelope();default:(0,r.c)("")}}bufferPolyline(){if(this.isDegenerateGeometry(this.m_geometry)){const e=new a.P;this.m_geometry.getPointByVal(0,e);const t=new o.J;return this.m_geometry.queryEnvelope(t),e.setXY(t.getCenter()),this.bufferDegeneratePath(e,!0)}const e=this.m_geometry,t=this.m_geometry.getDescription();this.m_geometry=null;const s=new b(e);let i,n;i=0===this.m_joins?(new f.O).executeMany(s,.25*this.m_densifyDist,!1,this.m_progressTracker):s,n=this.m_bRoundBuffer?(new g).executeMany(i,null,!0,this.m_progressTracker):i;const r=new x(this,n,this.m_bFilter),h=(new m.h).executeMany(r,this.m_spatialReference,this.m_progressTracker,2),l=(new m.g).executeMany(h,this.m_spatialReference,!1,this.m_progressTracker).next();return null!==l?l:new c.a({vd:t})}bufferPolygon(){if(0===this.m_distance)return this.m_geometry;this.generateCircleTemplate();const e=(new m.g).execute(this.m_geometry,null,!1,this.m_progressTracker);if(this.m_distance<0){if(this.m_geometry=e,this.m_geometry.isEmpty())return this.m_geometry;const t=this.m_geometry,s=this.bufferPolygonImpl(t,0,t.getPathCount());return(new m.g).execute(s,this.m_spatialReference,!1,this.m_progressTracker)}{if(this.m_geometry=e,this.isDegenerateGeometry(this.m_geometry)){const e=new a.P;this.m_geometry.getPointByVal(0,e);const t=new o.J;return this.m_geometry.queryEnvelope(t),e.setXY(t.getCenter()),this.bufferDegeneratePath(e,!0)}const t=new C(this),s=(new m.h).executeMany(t,this.m_spatialReference,this.m_progressTracker,2),i=(new m.g).executeMany(s,this.m_spatialReference,!1,this.m_progressTracker).next();return null!==i?i:new c.a({vd:this.m_geometry.getDescription()})}}bufferPolygonImpl(e,t,s){const i=e,n=i.getImpl();let r=new c.a({vd:e.getDescription()});for(let m=t;m<s;m++){if(n.getPathSize(m)<1)continue;const t=n.calculateRingArea2D(m),s=new o.J;if(n.queryPathEnvelope(m,s),this.m_distance>0)if(t>0)if(this.isDegeneratePath(n,m)){const e=new a.P;n.getPointByVal(n.getPathStart(m),e),e.setXY(s.getCenter()),r.add(this.bufferDegeneratePath(e,!0),!1)}else{const t=new c.P({vd:e.getDescription()}),s=t.getImpl();if((0,c.i)(this.m_geometry,m)){const e=this.bufferConvexPath(i,m);r.add(e,!1)}else{this.bufferClosedPath(this.m_geometry,m,s,this.m_bRoundBuffer,1);const e=this.bufferCleanup(t);r.add(e,!1)}}else{if(s.width()+this.m_tolerance.total()<=2*this.m_absDistance||s.height()+this.m_tolerance.total()<=2*this.m_absDistance)continue;const t=new c.P({vd:e.getDescription()}),i=t.getImpl();if(this.bufferClosedPath(this.m_geometry,m,i,this.m_bRoundBuffer,1),!t.isEmpty()){const e=s,n=Math.max(1,this.m_absDistance),m=e.clone();m.inflateCoords(n,n),i.addEnvelope(m,!1);const o=this.bufferCleanup(t);r.reserve(r.getPointCount()+o.getPointCount()-4),k(o,r,m,!0)}}else if(t>0){if(s.width()+this.m_tolerance.total()<=2*this.m_absDistance||s.height()+this.m_tolerance.total()<=2*this.m_absDistance)continue;const t=new c.P({vd:e.getDescription()}),i=t.getImpl();if(this.bufferClosedPath(this.m_geometry,m,i,this.m_bRoundBuffer,-1),!t.isEmpty()){const e=new o.J;i.queryLooseEnvelope(e);const s=Math.max(1,this.m_absDistance),n=e.clone();n.inflateCoords(s,s),i.addEnvelope(n,!1),k(this.bufferCleanup(t),r,n,!0)}}else{const t=new c.P({vd:e.getDescription()}),s=t.getImpl();this.bufferClosedPath(this.m_geometry,m,s,this.m_bRoundBuffer,-1);const i=this.bufferCleanup(t);for(let e=0,n=i.getPathCount();e<n;e++)r.addPath(i,e,!0)}}if(this.m_distance>0)return r.getPathCount()>1?this.bufferCleanup(r):w(r);{const e=new o.J;if(r.queryLooseEnvelope(e),r.isEmpty())return w(r);{const t=Math.max(1,this.m_absDistance),s=e.clone();s.inflateCoords(t,t),r.addEnvelope(s,!1);const i=this.bufferCleanup(r);r=new c.a;const n=new c.a({vd:i.getDescription()});return k(i,n,s,!1),w(n)}}}bufferPoint(){return this.bufferPointImpl(this.m_geometry)}bufferPointImpl(e){const t=new c.a({vd:e.getDescription()});return 0===this.m_caps?(this.addCircle(t.getImpl(),e),this.setStrongSimple(t)):2===this.m_caps?(this.addSquare(t.getImpl(),e),this.setStrongSimple(t)):t}bufferDegeneratePath(e,t){const s=new c.a({vd:e.getDescription()});return t&&0===this.m_joins||!t&&0===this.m_caps?(this.addCircle(s.getImpl(),e),this.setStrongSimple(s)):t||2!==this.m_caps?s:(this.addSquare(s.getImpl(),e),this.setStrongSimple(s))}bufferMultiPoint(){const e=new y(this,this.m_geometry,this.m_distance,this.m_spatialReference,this.m_joins,this.m_caps,this.m_miterLimit,this.m_densifyDist,this.m_maxVertexInCompleteCircle,this.m_progressTracker);return(new m.h).executeMany(e,this.m_spatialReference,this.m_progressTracker,2).next()}bufferEnvelope(){let e=new c.a({vd:this.m_geometry.getDescription()});if(this.m_distance<=0){if(0===this.m_distance)e.addEnvelope(this.m_geometry,!1),T(this.m_geometry,this.m_tolerance.total())&&(e=this.setStrongSimple(e));else{const t=new a.E;this.m_geometry.queryEnvelope(t),t.inflateCoords(this.m_distance,this.m_distance),e.addEnvelope(t,!1),T(t,this.m_tolerance.total())&&(e=this.setStrongSimple(e))}return e}if(1===this.m_joins){const t=new a.E({copy:this.m_geometry});return t.inflateCoords(this.m_absDistance,this.m_absDistance),e.addEnvelope(t,!1),e}const t=this.m_geometry.clone();if(0===t.width()||0===t.height()){if(0===t.width()&&0===t.height()){const e=new a.P({vd:this.m_geometry.getDescription()});return t.queryCornerByVal(0,e),this.m_geometry=e,this.bufferImpl()}const e=new c.P({vd:this.m_geometry.getDescription()}),s=new a.P;return t.queryCornerByVal(0,s),e.startPathPoint(s),t.queryCornerByVal(2,s),e.lineToPoint(s),this.m_geometry=e,this.bufferImpl()}return e.addEnvelope(this.m_geometry,!1),this.m_geometry=e,this.bufferConvexPath(e,0)}bufferConvexPath(e,t){this.generateCircleTemplate();const s=e.hasAttribute(10),n=new c.a({vd:e.getDescription()}),m=n.getImpl();n.reserve((this.m_circleTemplate.length/10+4)*e.getPathSize(t));const o=new l.P,h=new l.P,a=new l.P,u=new l.P(0,0),_=new l.P,f=new l.P,g=e.getImpl(),d=e.getPathSize(t),p=e.getPathStart(t);for(let l=0,c=e.getPathSize(t);l<c;l++){const e=g.getXY(p+l),t=g.getXY(p+(l+1)%d),n=g.getXY(p+(l+2)%d);_.setSub(t,e),0===_.length()&&(0,r.c)("");const c=s&&!!(1&g.getAttributeAsInt(10,(l+1)%d,0));_.normalize();const P=_.clone();_.leftPerpendicularThis(),_.scale(this.m_absDistance),o.setAdd(_,e),h.setAdd(_,t),0===l?m.startPath(o):m.lineTo(o),m.lineTo(h),f.setSub(n,t),0===f.length()&&(0,r.c)(""),f.normalize();const y=f.clone();f.leftPerpendicularThis(),f.scale(this.m_absDistance),a.setAdd(f,t);let b=i.enumArc;const x=c?0:this.m_joins;if(2===x)b=i.enumBevel;else if(1===x){const e=-P.crossProduct(y);u.setSub(P,y),u.scale(this.m_absDistance/e),u.length()<this.m_miterLimit*this.m_absDistance?(u.addThis(t),b=i.enumMiter):b=i.enumBevel}else u.assign(t);this.addJoin(b,m,u,h,a,!1,!1)}return w(n)}bufferPolylinePath(e,t,s){this.generateCircleTemplate();const i=e,n=i.getImpl();if(n.getPathSize(t)<1)return null;let r;if(r=this.m_bRoundBuffer?n.isClosedPathInXYPlane(t):n.isClosedPath(t),this.isDegeneratePath(n,t)&&this.m_distance>0){const e=new a.P;n.getPointByVal(n.getPathStart(t),e);const s=new o.J;return n.queryPathEnvelope(t,s),e.setXY(s.getCenter()),this.bufferDegeneratePath(e,r)}const m=new c.P({vd:e.getDescription()});m.reserve((Math.trunc(this.m_circleTemplate.length/10)+4)*n.getPathSize(t));const h=m.getImpl();return r?2!==this.bufferClosedPath(i,t,h,s,1)&&this.bufferClosedPath(i,t,h,s,-1):this.bufferOpenPath(i,t,h,s),this.bufferCleanup(m)}progress_(){}bufferCleanup(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const s=t?this.m_tolerance:this.m_smallTolerance;return(0,m.y)(e,s,!0,!t,-1,this.m_progressTracker,0,!1)}calcN(){if(0===this.m_densifyDist)return this.m_maxVertexInCompleteCircle;const e=1-this.m_densifyDist*Math.abs(this.m_absDistanceReversed);let t=4;return t=e<-1?4:2*Math.PI/Math.acos(e)+.5,t<4?t=4:t>this.m_maxVertexInCompleteCircle&&(t=this.m_maxVertexInCompleteCircle),Math.trunc(t)}addJoin(e,t,s,n,r,m,o){if(this.generateCircleTemplate(),m&&(t.startPath(n),m=!1),e===i.enumBevel)return void(o&&t.lineTo(r));if(e===i.enumMiter){const e=s.clone();return t.lineTo(e),void(o&&t.lineTo(r))}const h=new l.P;h.setSub(n,s),h.scale(this.m_absDistanceReversed);const a=new l.P;a.setSub(r,s),a.scale(this.m_absDistanceReversed);let c=Math.atan2(h.y,h.x)/this.m_dA;c<0&&(c=this.m_circleTemplate.length+c),c=this.m_circleTemplate.length-c;let u=Math.atan2(a.y,a.x)/this.m_dA;u<0&&(u=this.m_circleTemplate.length+u),u=this.m_circleTemplate.length-u,u<c&&(u+=this.m_circleTemplate.length);let _=Math.trunc(u),f=Math.ceil(c),g=this.m_circleTemplate[f%this.m_circleTemplate.length].clone();g.scaleAddThis(this.m_absDistance,s);const d=10*this.m_tolerance.total();g.sub(n).length()<d&&(f+=1),g=this.m_circleTemplate[_%this.m_circleTemplate.length].clone(),g.scaleAddThis(this.m_absDistance,s),g.sub(r).length()<d&&(_-=1);let p=_-f;p++;for(let i=0,l=f%this.m_circleTemplate.length;i<p;i++,l=(l+1)%this.m_circleTemplate.length)g=this.m_circleTemplate[l].clone(),g.scaleAddThis(this.m_absDistance,s),t.lineTo(g),this.progress_();o&&t.lineTo(r)}bufferClosedPath(e,t,s,i,n){const r=new c.E,m=r.addPathFromMultiPath(e,t,!0);return this.bufferClosedPathImpl(r,m,s,i,n)}bufferClosedPathImpl(e,t,s,n,m){const o=e.getFirstVertex(e.getFirstPath(t)),_=new a.P;if(e.queryPoint(o,_),e.filterClosePoints(this.m_filterTolerance,!1,!1,!1,-1),e.getPointCount(t)<2)return m<0?0:(this.m_bRoundBuffer&&this.addCircle(s,_),2);(0,r.g)(e.getFirstPath(t)!==c.n),(0,r.g)(e.getFirstVertex(e.getFirstPath(t))!==c.n);const f=e.getXY(e.getFirstVertex(e.getFirstPath(t))),g=new u.T;if(g.setShift(f.negate()),e.applyTransformation(g),n){const i=function(e,t,s,i,n,r,m){return function(e,t,s,i,n,r,m){const o={stack:[],error:void 0,hasError:!1};try{const i=e.getFirstPath(t),a=e.createUserIndex();(0,h.b)(o,(0,l.h)((()=>{e.removeUserIndex(a)}),!1),!1),function(e,t,s,i){let n=-1;const r=new l.P,m=new l.P,o=new l.P;for(let h=0,a=e.getPathSize(i),l=e.getFirstVertex(i);h<a;++h){-1===n&&(e.queryXY(l,m),n=e.getPrevVertex(l),-1!==n&&(e.queryXY(n,r),o.setSub(m,r),o.normalize()));const s=e.getNextVertex(l);if(-1===s)break;const i=e.getXY(s),h=i.sub(m);h.normalize(),-1!==n&&h.dotProduct(o)<-.99&&Math.abs(h.crossProduct(o))<1e-7&&e.setUserIndex(l,t,1),n=l,l=s,r.assign(m),m.assign(i),o.assign(h)}}(e,a,0,i);for(let t=0;t<100;++t){if(0===e.getPathSize(i))return 1;let t=e.getFirstVertex(i),r=e.getPathSize(i);if(r<3)return 1;e.isClosedPath(i)||(r-=1);const o=64;let h=0,l=!1;for(let i=0;i<r&&t!==c.n;i++){let c=0,u=t;for(let h=1,l=Math.min(o,r-i);h<l;h++)if(u=e.getNextVertexEx(u,s),h>1){const i=v(e,a,t,u,s,n,m,o);if(-1===i)break;c+=i,r-=i}if(h+=c,l=c>0,l){const i=e.getPrevVertexEx(t,s);if(-1!==i){t=i,r++;continue}}t=e.getNextVertexEx(t,s)}if(0===h)break}return e.filterClosePoints(r,!1,!1,!1,-1),1}catch(y){o.error=y,o.hasError=!0}finally{(0,h.c)(o)}}(e,t,s,0,n,r,m)}(e,t,m,0,this.m_absDistance,this.m_filterTolerance,this.m_densifyDist);if((0,r.g)(1===i),e.getPointCount(t)<2)return m<0?0:(this.addCircle(s,_),2)}const d=0!==this.m_joins&&e.getVertexDescription().hasAttribute(10);this.m_bufferCommands.length=0;const y=e.getFirstPath(t);let b=e.getFirstVertex(y),x=1===m?e.getPrevVertex(b):e.getNextVertex(b),C=1===m?e.getNextVertex(b):e.getPrevVertex(b),D=!0;const w=new l.P,T=new l.P,k=new l.P,S=new l.P,I=new l.P,M=new l.P,G=new l.P,E=new l.P,R=this.m_absDistance,V=e.getPathSize(y),A=new l.P(0,0);for(let r=0;r<V;r++){T.assign(e.getXY(C)),D&&(w.assign(e.getXY(b)),k.assign(e.getXY(x)),M.setSub(w,k),M.normalize(),E.leftPerpendicularOther(M),E.scale(R),S.setAdd(E,w));const t=d&&!!(1&e.getAttributeAsDbl(10,b,0));I.setSub(T,w),I.normalize(),G.leftPerpendicularOther(I),G.scale(R);const s=new l.P;s.setAdd(w,G);const n=M.crossProduct(I),r=M.dotProduct(I);if(n<0||r<0&&n<Math.abs(r)*Number.EPSILON*8){let e=!1;const r=t?0:this.m_joins;if(1===r){const t=-n;A.setSub(M,I),A.scale(this.m_absDistance/t),A.length()<this.m_miterLimit*this.m_absDistance&&(A.addThis(w),e=!0),this.m_bufferCommands.push(p(S,s,A,e?i.enumMiter:i.enumBevel,this.m_bufferCommands.length+1))}else this.m_bufferCommands.push(p(S,s,w,0===r?i.enumArc:i.enumBevel,this.m_bufferCommands.length+1))}else S.equals(s)||(this.m_bufferCommands.push(P(S,w,this.m_bufferCommands.length+1)),this.m_bufferCommands.push(P(w,s,this.m_bufferCommands.length+1)));const o=new l.P;o.setAdd(T,G),this.m_bufferCommands.push(p(s,o,w,i.enumLine,this.m_bufferCommands.length+1)),S.setCoordsPoint2D(o),E.setCoordsPoint2D(G),k.setCoordsPoint2D(w),w.setCoordsPoint2D(T),M.setCoordsPoint2D(I),x=b,b=C,D=!1,C=1===m?e.getNextVertex(b):e.getPrevVertex(b)}return this.m_bufferCommands.at(-1).m_next=0,this.processBufferCommands(s),g.setShift(f),s.applyTransformationToPath(g,s.getPathCount()-1),1}bufferOpenPath(e,t,s,n){if(this.m_bRoundBuffer){const i=new c.P({vd:e.getDescription()});return i.addPath(e,t,!1),i.addSegmentsFromPath(e,t,0,e.getSegmentCountPath(t),!1),this.bufferClosedPath(i,0,s,n,1)}let m=0;const o=new c.P({vd:e.getDescription()}),h=new l.P(0,0);{const i=new c.E,n=i.addPathFromMultiPath(e,t,!1),r=i.getFirstVertex(i.getFirstPath(n)),l=new a.P;if(i.queryPoint(r,l),h.assign(l.getXY()),i.filterClosePoints(0,!1,!1,!1,-1),i.getPointCount(n)<2)return this.m_bRoundBuffer&&this.addCircle(s,l),2;const u=i.getGeometry(i.getFirstGeometry());o.addPath(u,0,!1),m=o.getPointCount()-1,o.addSegmentsFromPath(u,0,0,u.getSegmentCountPath(0)-1,!1)}const _=new c.E,f=_.addPathFromMultiPath(o,0,!0);(0,r.g)(_.getFirstPath(f)!==c.n),(0,r.g)(_.getFirstVertex(_.getFirstPath(f))!==c.n);const g=new u.T;g.setShift(h.negate()),_.applyTransformation(g),this.m_bufferCommands.length=0;const d=_.getFirstPath(f),y=0!==this.m_joins&&_.getVertexDescription().hasAttribute(10);let b=_.getFirstVertex(d),x=_.getPrevVertex(b),C=_.getNextVertex(b),D=!0;const w=new l.P,T=new l.P,v=new l.P,k=new l.P,S=new l.P,I=new l.P,M=new l.P,G=new l.P,E=this.m_absDistance,R=_.getPathSize(d),V=new l.P(0,0);for(let r=0;r<R;r++){let e=!1;0!==r&&r!==m||(e=!0),T.assign(_.getXY(C)),D&&(w.assign(_.getXY(b)),v.assign(_.getXY(x)),I.setSub(w,v),I.normalize(),G.leftPerpendicularOther(I),G.scale(E),k.setAdd(G,w));const t=y&&!!(1&_.getAttributeAsDbl(10,b,0));S.setSub(T,w),S.normalize(),M.leftPerpendicularOther(S),M.scale(E);const s=new l.P;s.setAdd(w,M);const n=I.crossProduct(S),o=I.dotProduct(S);if(n<0||o<0&&n<Math.abs(o)*Number.EPSILON*8)if(e)if(0===this.m_caps)this.m_bufferCommands.push(p(k,s,w,i.enumArc,this.m_bufferCommands.length+1));else if(1===this.m_caps)this.m_bufferCommands.push(p(k,s,w,i.enumLine,this.m_bufferCommands.length+1));else{const e=S.mul(this.m_absDistance).negate(),t=e.clone();e.addThis(k),t.addThis(s),this.m_bufferCommands.push(p(k,e,w,i.enumLine,this.m_bufferCommands.length+1)),this.m_bufferCommands.push(p(e,t,w,i.enumLine,this.m_bufferCommands.length+1)),this.m_bufferCommands.push(p(t,s,w,i.enumLine,this.m_bufferCommands.length+1))}else{let e=!1;const r=t?0:this.m_joins;if(1===r){const t=-n;V.setSub(I,S),V.scale(this.m_absDistance/t),V.length()<this.m_miterLimit*this.m_absDistance&&(V.addThis(w),e=!0),this.m_bufferCommands.push(p(k,s,V,e?i.enumMiter:i.enumBevel,this.m_bufferCommands.length+1))}else this.m_bufferCommands.push(p(k,s,w,0===r?i.enumArc:i.enumBevel,this.m_bufferCommands.length+1))}else k.equals(s)||(this.m_bufferCommands.push(P(k,w,this.m_bufferCommands.length+1)),this.m_bufferCommands.push(P(w,s,this.m_bufferCommands.length+1)));const h=new l.P;h.setAdd(T,M),this.m_bufferCommands.push(p(s,h,w,i.enumLine,this.m_bufferCommands.length+1)),k.setCoordsPoint2D(h),G.setCoordsPoint2D(M),v.setCoordsPoint2D(w),w.setCoordsPoint2D(T),I.setCoordsPoint2D(S),x=b,b=C,D=!1,C=_.getNextVertex(b)}return this.m_bufferCommands.at(-1).m_next=0,this.processBufferCommands(s),g.setShift(h),s.applyTransformationToPath(g,s.getPathCount()-1),1}processBufferCommands(e){const t=this.cleanupBufferCommands();let s=!0,n=t+1;for(let r=t;n!==t;r=n){const t=this.m_bufferCommands[r];n=-1!==t.m_next?t.m_next:(r+1)%this.m_bufferCommands.length,t.m_type&&(s&&(e.startPath(t.m_from),s=!1),t.m_type&i.enumJoinMask?this.addJoin(t.m_type,e,t.m_center,t.m_from,t.m_to,!1,!0):e.lineTo(t.m_to))}}cleanupBufferCommands(){this.m_helperArray=(0,l.m)(l.P,9);let e=0;for(let s=0,n=this.m_bufferCommands.length;s<n;){const t=this.m_bufferCommands[s];if(t.m_type&i.enumConnectionMask){e=s;break}s=t.m_next}let t=e+1;for(let s=e;t!==e;s=t){const e=this.m_bufferCommands[s];t=e.m_next;let n=1,r=null;for(;t!==s&&(r=this.m_bufferCommands[t],!(r.m_type&i.enumConnectionMask));)t=r.m_next,n++;1!==n&&(e.m_type&r.m_type)===i.enumLine&&(this.m_helperLine1.setStartXY(e.m_from),this.m_helperLine1.setEndXY(e.m_to),this.m_helperLine2.setStartXY(r.m_from),this.m_helperLine2.setEndXY(r.m_to),1===this.m_helperLine1.intersect(this.m_helperLine2,this.m_helperArray,null,null,this.m_smallTolerance.total())&&(e.m_to.assign(this.m_helperArray[0]),r.m_from.assign(this.m_helperArray[0]),e.m_next=t))}return e}isDegeneratePath(e,t){if(1===e.getPathSize(t))return!0;if(0===this.m_joins&&0===this.m_caps){const s=new o.J;if(e.queryPathEnvelope(t,s),Math.max(s.width(),s.height())<.5*this.m_densifyDist)return!0}return!1}isDegenerateGeometry(e){if(0===this.m_joins&&0===this.m_caps){const t=new o.J;if(e.queryEnvelope(t),Math.max(t.width(),t.height())<.5*this.m_densifyDist)return!0}return!1}addCircle(e,t){const s=t.getXY();if(0!==this.m_circleTemplate.length){let t=this.m_circleTemplate[0].clone();t.scaleAddThis(this.m_absDistance,s),e.startPath(t);for(let i=1,n=this.m_circleTemplate.length;i<n;i++)t=this.m_circleTemplate[i].clone(),t.scaleAddThis(this.m_absDistance,s),e.lineTo(t);return}const i=this.m_circleTemplateSize,n=Math.trunc((i+3)/4),r=.5*Math.PI/n;e.reserve(4*n);const m=Math.cos(r),o=Math.sin(r);for(let h=3;h>=0;h--){const t=l.P.construct(0,this.m_absDistance);switch(h){case 0:for(let i=0;i<n;i++)e.lineToCoords(t.x+s.x,t.y+s.y),t.rotateReverse(m,o);break;case 1:for(let i=0;i<n;i++)e.lineToCoords(-t.y+s.x,t.x+s.y),t.rotateReverse(m,o);break;case 2:for(let i=0;i<n;i++)e.lineToCoords(-t.x+s.x,-t.y+s.y),t.rotateReverse(m,o);break;default:e.startPathCoords(t.y+s.x,-t.x+s.y);for(let i=1;i<n;i++)t.rotateReverse(m,o),e.lineToCoords(t.y+s.x,-t.x+s.y)}this.progress_()}}addSquare(e,t){const s=new a.E({vd:t.getDescription()});s.setCoords(t.getX(),t.getY(),t.getX(),t.getY()),s.inflateCoords(this.m_absDistance,this.m_absDistance),e.addEnvelope(s,!1)}setStrongSimple(e){return e.getImpl().setIsSimple(4,this.m_tolerance.total()),e.getImpl().updateOGCFlagsProtected(),e}}function w(e){return(0,a.s)(e,0),e}function T(e,t){return!!e.isEmpty()||Math.min(e.width(),e.height())>t}function v(e,t,s,i,n,m,o,h){const a=e.getXY(s),c=e.getXY(i);if(a.equals(c))return-1;const u=.25*o,_=.25*o,f=new l.P;f.setSub(c,a);const g=f.length(),d=g*g*.25,p=m*m-d;if(p<=d)return-1;const P=Math.sqrt(p);f.normalize();const y=f.clone();y.rightPerpendicularThis();const b=d/P,x=b<=_,C=l.P.lerp(c,a,.5),D=y.clone(),w=b-u;D.scaleAddThis(Math.max(0,w),C),y.negate().scaleAddThis(P,C);const T=3.61*(0,l.s)(m-_),v=D.sub(a),k=D.sub(c);let S=!1,I=0;const M=(0,l.d)(64,0);(0,r.g)(h===M.length);{for(let r=e.getPrevVertexEx(i,n);r!==s;){if(1===e.getUserIndex(r,t))return-1;if(!e.getXY(r).equals(c))break;{const t=e.getPrevVertexEx(r,n);e.removeVertex(r,!1),r=t}}const m=new l.P,o=a.clone();M[I++]=1;for(let r=e.getNextVertexEx(s,n);r!==i;){if(1===e.getUserIndex(r,t))return-1;const s=e.getXY(r);if(s.equals(o)){const t=e.getNextVertexEx(r,n);e.removeVertex(r,!1),r=t;continue}M[I++]=0;const i=new l.P;if(i.setSub(s,a),i.dotProduct(y)<0)return 0;(l.P.sqrDistance(s,a)>T||l.P.sqrDistance(s,c)>T)&&(S=!0);let h=0;if(s.sub(a).crossProduct(v)>=0&&(h=1),s.sub(c).crossProduct(k)<=0&&(h|=2),0===h)return 0;M[I-1]=h,m.assign(o),o.assign(s),r=e.getNextVertexEx(r,n)}if(1===I)return 0;(0,r.g)(I<M.length),M[I++]=2}let G=!0;for(let r=1,l=0;r<I;r++)if(M[r]!==M[r-1]&&(l++,G=l<3&&(1===l&&3===M[r]||2===l&&2===M[r]),!G))return 0;if(I>2&&G&&(3===I||!S)){let t=0,r=e.getNextVertexEx(s,n);for(x||(e.setXY(r,D),r=e.getNextVertexEx(r,n));r!==i;){const s=e.getNextVertexEx(r,n);e.removeVertex(r,!1),r=s,++t}return t}if((0,r.g)(3!==I),S&&I>3)return 0;const E=a.clone();let R=s;const V=a.clone();let A=1,X=-1,Y=R,B=0;for(I=1;Y!==i;){Y=e.getNextVertexEx(Y,n);const t=M[I++];if(0===t){if(Y===i)break;continue}const s=e.getXY(Y);if(-1!==X){if(X&A&t&3){e.removeVertex(R,!0),B++,R=Y,V.setCoordsPoint2D(s),A=t;continue}if(3===A&&0!==X&&0!==t){if(V.setCoordsPoint2D(D),x||V.equals(E)){e.removeVertex(R,!0),B++,R=Y,V.setCoordsPoint2D(s),A=t;continue}e.setXY(R,V)}}X=A,E.setCoordsPoint2D(V),R=Y,A=t,V.setCoordsPoint2D(s)}return B}function k(e,t,s,i){for(let n=0,r=e.getPathCount();n<r;n++){const r=e.getXY(e.getPathStart(n));r.x!==s.xmin&&r.x!==s.xmax&&t.addPath(e,n,i)}}class S extends n.G{constructor(e,t,s,i,n,r,m){super(),this.m_currentUnionEnvelope2D=new o.J,this.m_index=-1,this.m_dindex=-1,this.m_progressTracker=m,this.m_bufferer=new D(m),this.m_inputGeoms=e,this.m_spatialReference=t,this.m_distances=s,this.m_maxDeviation=i,this.m_maxVerticesInFullCircle=n}tock(){return!0}getRank(){return 1}next(){{let e;for(;e=this.m_inputGeoms.next();)return(0,r.d)(e),this.m_index=this.m_inputGeoms.getGeometryID(),this.m_dindex+1<this.m_distances.length&&this.m_dindex++,this.buffer(e,this.m_distances[this.m_dindex]);return null}}getGeometryID(){return this.m_index}buffer(e,t){return this.m_bufferer.buffer(e,t,this.m_spatialReference,0,0,4,this.m_maxDeviation,this.m_maxVerticesInFullCircle)}}const I=new class{getOperatorType(){return 10004}supportsCurves(){return!0}accelerateGeometry(e,t,s){return!1}canAccelerateGeometry(e){return!1}executeMany(e,t,s,i,n){return this.executeManyEx(e,t,s,Number.NaN,96,i,n)}execute(e,t,s,i){Number.isFinite(s)||(0,r.t)("Invalid distance for buffer operation");const m=new n.S([e]),o=[s],h=this.executeMany(m,t,o,!1,i).next();return h||(0,r.c)("null buffer output"),h}executeManyEx(e,t,s,i,n,o,h){if(void 0!==s.find((e=>!Number.isFinite(e)))&&(0,r.t)("Invalid distance for buffer operation"),o){const r=new S(e,t,s,i,n,!1,h);return(new m.h).executeMany(r,t,h,2)}return new S(e,t,s,i,n,!1,h)}};function M(e,t,s){return I.execute(e,t,s,null)}function G(e,t,s,i,r,m){const o=I.executeManyEx(new n.S(e),t,s,i,r,m,null);return Array.from(o)}function E(){return I.supportsCurves()}},68707:(e,t,s)=>{s.d(t,{G:()=>i,S:()=>n});class i{*[Symbol.iterator](){let e=this.next();for(;e;)yield e,e=this.next()}}class n extends i{constructor(e){super(),this.m_iGeom=-1,this.m_aGeoms=e?e.slice():[]}next(){if(this.m_iGeom<this.m_aGeoms.length-1){const e=this.m_aGeoms[++this.m_iGeom];return this.m_aGeoms[this.m_iGeom]=null,e}return null}tock(){return!1}getGeometryID(){return this.m_iGeom}getRank(){return 1}}}}]);
//# sourceMappingURL=27347.0eb980ea.chunk.js.map