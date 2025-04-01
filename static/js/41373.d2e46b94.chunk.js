"use strict";(self.webpackChunkopenspace=self.webpackChunkopenspace||[]).push([[1509,41373,58067,68707],{8901:(e,t,s)=>{s.d(t,{a:()=>l,e:()=>o,g:()=>c,s:()=>u});var n=s(18690),r=s(31633),i=s(24189),a=s(58067);function o(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{removeDegenerateParts:n=!1,unit:o}=s,l=(0,a.getSpatialReference)(e);return o&&(t=(0,r.UW)(t,o,l)),(0,a.toGeometry)((0,i.g7)((0,a.fromGeometry)(e),t,n),l)}function l(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{removeDegenerateParts:o=!1,unit:l}=s,u=e.map(a.fromGeometry),c=(0,a.getSpatialReference)(e);return l&&(t=(0,r.UW)(t,l,c)),(0,i.zo)(u,t,o).map((e=>(0,a.toGeometry)(e,c))).filter(n.Ru)}const u=(0,i.fz)(),c=Object.freeze(Object.defineProperty({__proto__:null,execute:o,executeMany:l,supportsCurves:u},Symbol.toStringTag,{value:"Module"}))},24189:(e,t,s)=>{s.d(t,{fz:()=>o,g7:()=>i,zo:()=>a});var n=s(68707);const r=new(s(25381).O);function i(e,t,s){return r.execute(e,t,s,null)}function a(e,t,s){const i=r.executeMany(new n.S(e),t,s,null);return Array.from(i)}function o(){return r.supportsCurves()}},25381:(e,t,s)=>{s.d(t,{O:()=>c});var n=s(35143),r=s(68707),i=s(97799),a=s(79186),o=s(91523),l=s(26871),u=s(20265);class c{getOperatorType(){return 10204}supportsCurves(){return!0}accelerateGeometry(e,t,s){return!1}canAccelerateGeometry(e){return!1}executeMany(e,t,s,n){return new m(e,t,s,n)}execute(e,t,s,n){return e||(0,i.t)("null param is not allowed."),new m(null,t,s,n).generalize(e)}}class m extends r.G{constructor(e,t,s,n){super(),this.m_pline=null,this.m_point=new o.P,this.m_stack=[],this.m_resultstack=[],this.m_callCount=0,this.m_progressTracker=n,this.m_geoms=e,this.m_maxDeviation=t,this.m_bRemoveDegenerateParts=s}tock(){return!0}getRank(){return 1}next(){const e=this.m_geoms.next();return null===e?null:((0,i.d)(e),this.generalize(e))}getGeometryID(){return this.m_geoms.getGeometryID()}generalize(e){const t=e.getGeometryType();if((0,i.e)(t))return e;if(t===i.G.enumEnvelope){const t=new a.a({vd:e.getDescription()});return t.addEnvelope(e,!1),this.generalize(t)}if((0,i.f)(t)){const t=new a.P({vd:e.getDescription()});return t.addSegment(e,!0),this.generalize(t)}if((0,i.h)(t)||(0,i.b)(""),e.isEmpty()||this.m_maxDeviation<=0)return e;const s=(new u.O).execute(e,0,.05*this.m_maxDeviation,0,this.m_progressTracker);e.hasNonLinearSegments()&&(this.m_maxDeviation*=.95);const r=s,o=e.createInstance();o.getGeometryType()===i.G.enumPolygon&&o.setFillRule(e.getFillRule()),this.m_xy=r.getAttributeStreamRef(0);{const e={stack:[],error:void 0,hasError:!1};try{const t=new a.L;this.m_pline=t,(0,n.b)(e,(0,l.h)((()=>{this.m_pline=null}),!1),!1);for(let e=0,s=r.getPathCount();e<s;e++)this.generalizePath(r.getImpl(),e,o.getImpl())}catch(c){e.error=c,e.hasError=!0}finally{(0,n.c)(e)}}return this.m_resultstack.length=0,this.m_stack.length=0,o}generalizePath(e,t,s){if(e.getPathSize(t)<2)return;this.m_resultstack.length=0,this.m_stack.length=0;const n=e.getPathStart(t),r=e.getPathEnd(t)-1,i=e.isClosedPath(t),a=e.isClosedPathInXYPlane(t);let o=0,u=-1;this.m_stack.push(i?n:r),this.m_stack.push(n);let c=!1,m=!1;for(!this.m_bRemoveDegenerateParts&&a&&(c=!0,m=!0);this.m_stack.length>1;){const t=this.m_stack.at(-1);this.m_stack.pop();const s=this.m_stack.at(-1);let n=e.getXY(t);this.m_pline.setStartXY(n),n=e.getXY(s),this.m_pline.setEndXY(n);const i=[Number.NaN];let a=this.findGreatestDistance(t,s,r,i);a>=0&&(c?c=!1:(m&&i[0]>o&&(o=i[0],u=a),i[0]<=this.m_maxDeviation&&(a=-1))),a>=0?(this.m_stack.push(a),this.m_stack.push(t)):this.m_resultstack.push(t)}i||this.m_resultstack.push(this.m_stack[0]);const h=this.m_resultstack.length;if(h===e.getPathSize(t)&&h===this.m_stack.length)s.addPath(e,t,!0);else if(this.m_resultstack.length>0){if(this.m_bRemoveDegenerateParts&&this.m_resultstack.length<=2){if(i||1===this.m_resultstack.length)return;if(l.P.distance(e.getXY(this.m_resultstack[0]),e.getXY(this.m_resultstack[1]))<=this.m_maxDeviation)return}if(m&&u>=0&&o<=this.m_maxDeviation){const e=this.m_resultstack.at(-1)>u;this.m_resultstack.push(u),e&&(this.m_resultstack[this.m_resultstack.length-2]=(0,l.b)(this.m_resultstack[this.m_resultstack.length-1],this.m_resultstack[this.m_resultstack.length-1]=this.m_resultstack[this.m_resultstack.length-2]))}for(let t=0,n=this.m_resultstack.length;t<n;t++)e.getPointByVal(this.m_resultstack[t],this.m_point),0===t?s.startPathPoint(this.m_point):s.lineToPoint(this.m_point);if(i){for(let e=this.m_resultstack.length;e<3;e++)s.lineToPoint(this.m_point);s.closePathWithLine()}}}findGreatestDistance(e,t,s,n){let r=t-1;t<=e&&(r=s);let i=-1,a=0;const o=new l.P;for(let l=e+1;l<=r;l++){this.m_xy.queryPoint2D(2*l,o);const e=o.x,t=o.y,s=this.m_pline.getClosestCoordinate(o,!1);o.assign(this.m_pline.getCoord2D(s)),o.x-=e,o.y-=t;const n=o.length();n>a&&(i=l,a=n),this.m_callCount++}return n[0]=a,i}}},41373:(e,t,s)=>{s.r(t),s.d(t,{execute:()=>n.e,executeMany:()=>n.a,supportsCurves:()=>n.s});s(18690),s(31633),s(24189),s(58067);var n=s(8901)},58067:(e,t,s)=>{s.r(t),s.d(t,{fromExtent:()=>x,fromGeometry:()=>k,fromMultipoint:()=>P,fromPoint:()=>d,fromPolygon:()=>v,fromPolyline:()=>G,fromSpatialReference:()=>C,getSpatialReference:()=>y,toExtent:()=>M,toGeometry:()=>w,toMultipoint:()=>D,toPoint:()=>R,toPolygon:()=>V,toPolyline:()=>z});var n=s(26871),r=(s(21557),s(97799)),i=s(91523),a=s(79186),o=s(82103),l=s(76797),u=s(66388),c=s(19247),m=s(65215),h=s(23701),g=(s(59739),s(48045));const p="_gxVersion",f=2,_=1;function y(e){return Array.isArray(e)?e[0].spatialReference:e.spatialReference}function k(e){switch(e.type){case"point":return d(e);case"multipoint":return P(e);case"polyline":return G(e);case"polygon":return v(e);case"extent":return x(e);default:throw new Error(`Unsupported geometry type: ${e.type}`)}}function x(e){if(!e.getCacheValue(p)){const t=new i.E;t.setCoords(e.xmin,e.ymin,e.xmax,e.ymax),e.hasM&&t.setInterval(f,0,e.mmin,e.mmax),e.hasZ&&t.setInterval(_,0,e.zmin,e.zmax),e.setCacheValue(p,t)}return e.getCacheValue(p)}function P(e){if(!e.getCacheValue(p)){const t=new a.M,s=new i.P,n=e.points,r=e.hasM,o=e.hasZ,l=o?3:2;for(let e=0,i=n.length;e<i;e++){const i=n[e];s.setXYCoords(i[0],i[1]),o&&s.setZ(i[2]??0),r&&s.setM(i[l]??NaN),t.add(s)}e.setCacheValue(p,t)}return e.getCacheValue(p)}function d(e){if(!e.getCacheValue(p)){const t=new i.P;t.setXYCoords(e.x,e.y),e.hasM&&t.setM(e.m),e.hasZ&&t.setZ(e.z),e.setCacheValue(p,t)}return e.getCacheValue(p)}function v(e){if(!e.getCacheValue(p)){const{curveRings:t,hasM:s,hasZ:n,rings:r}=e,i=(0,g.fromGeometryToGXGeometry)({curveRings:t,hasM:s,hasZ:n,rings:r});e.setCacheValue(p,i)}return e.getCacheValue(p)}function G(e){if(!e.getCacheValue(p)){const{curvePaths:t,hasM:s,hasZ:n,paths:r}=e,i=(0,g.fromGeometryToGXGeometry)({curvePaths:t,hasM:s,hasZ:n,paths:r});e.setCacheValue(p,i)}return e.getCacheValue(p)}function C(e){if(e.wkid)return(0,o.c)(e.wkid);const t=e.wkt2||e.wkt;return t?(0,o.b)(t):null}function w(e,t){if(e)switch(e.getGeometryType()){case r.G.enumPoint:return R(e,t);case r.G.enumEnvelope:return M(e,t);case r.G.enumMultiPoint:return D(e,t);case r.G.enumPolyline:return z(e,t);case r.G.enumPolygon:return V(e,t)}return null}function M(e,t){if(e.isEmpty())return null;const s=new l.A({xmin:e.getXMin(),ymin:e.getYMin(),xmax:e.getXMax(),ymax:e.getYMax(),spatialReference:t}),n=e.getDescription();if(n.hasM()){const t=e.queryInterval(f,0);s.mmin=t.vmin,s.mmax=t.vmax}if(n.hasZ()){const t=e.queryInterval(_,0);s.zmin=t.vmin,s.zmax=t.vmax}return s.setCacheValue(p,e),s}function D(e,t){if(e.isEmpty())return null;const s=e.getDescription(),n=s.hasM(),r=s.hasZ(),a=[],o=new i.P;for(let i=0,u=e.getPointCount();i<u;i++){e.getPointByVal(i,o);const t=[o.getX(),o.getY()];r&&t.push(o.getZ()),n&&t.push(o.getM()),a.push(t)}const l=new u.A({hasM:n,hasZ:r,points:a,spatialReference:t});return l.setCacheValue(p,e),l}function R(e,t){if(e instanceof n.P)return new c.A({x:e.x,y:e.y,spatialReference:t});if(e.isEmpty())return null;const s=new c.A({x:e.getX(),y:e.getY(),spatialReference:t}),r=e.getDescription();return r.hasM()&&(s.m=e.getM()),r.hasZ()&&(s.z=e.getZ()),s.setCacheValue(p,e),s}function V(e,t){if(e.isEmpty())return null;const s=m.A.fromJSON({spatialReference:t,...(0,g.toGeometry)(e,null)});return s.setCacheValue(p,e),s}function z(e,t){if(e.isEmpty())return null;const s=h.A.fromJSON({spatialReference:t,...(0,g.toGeometry)(e,null)});return s.setCacheValue(p,e),s}},68707:(e,t,s)=>{s.d(t,{G:()=>n,S:()=>r});class n{*[Symbol.iterator](){let e=this.next();for(;e;)yield e,e=this.next()}}class r extends n{constructor(e){super(),this.m_iGeom=-1,this.m_aGeoms=e?e.slice():[]}next(){if(this.m_iGeom<this.m_aGeoms.length-1){const e=this.m_aGeoms[++this.m_iGeom];return this.m_aGeoms[this.m_iGeom]=null,e}return null}tock(){return!1}getGeometryID(){return this.m_iGeom}getRank(){return 1}}}}]);
//# sourceMappingURL=41373.d2e46b94.chunk.js.map