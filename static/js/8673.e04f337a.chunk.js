"use strict";(self.webpackChunkopenspace=self.webpackChunkopenspace||[]).push([[8673,68707],{8673:(e,t,n)=>{n.r(t),n.d(t,{execute:()=>s,executeMany:()=>u});var r=n(77724),o=n(48045);function s(e,t){const n=(0,o.fromGeometry)(e),s=n.getSpatialReference();return(0,o.toGeometry)((0,r.g7)(n.getGeometry(),(0,o.fromGeometryToGXGeometry)(t),s),s)}function u(e){const[t,n]=(0,o.fromGeometries)(e);return(0,o.toGeometry)((0,r.zo)(t,n),n)}},68707:(e,t,n)=>{n.d(t,{G:()=>r,S:()=>o});class r{*[Symbol.iterator](){let e=this.next();for(;e;)yield e,e=this.next()}}class o extends r{constructor(e){super(),this.m_iGeom=-1,this.m_aGeoms=e?e.slice():[]}next(){if(this.m_iGeom<this.m_aGeoms.length-1){const e=this.m_aGeoms[++this.m_iGeom];return this.m_aGeoms[this.m_iGeom]=null,e}return null}tock(){return!1}getGeometryID(){return this.m_iGeom}getRank(){return 1}}},77724:(e,t,n)=>{n.d(t,{fz:()=>i,g7:()=>u,zo:()=>m});var r=n(68707),o=(n(97799),n(26871),n(79186),n(21557),n(82103));n(91523);const s=new o.h;function u(e,t,n){return s.execute(e,t,n,null)}function m(e,t){return s.executeMany(new r.S(e),t,null).next()}function i(){return s.supportsCurves()}}}]);
//# sourceMappingURL=8673.e04f337a.chunk.js.map