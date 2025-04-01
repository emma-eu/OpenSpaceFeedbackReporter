"use strict";(self.webpackChunkopenspace=self.webpackChunkopenspace||[]).push([[31244],{1723:(e,t,n)=>{n.d(t,{Ps:()=>l,Tv:()=>h,Zs:()=>i,cD:()=>u,d2:()=>c,fT:()=>o,lH:()=>d,mA:()=>s,n4:()=>f,xc:()=>a});var r=n(69539);const o=new r.A("cyan"),i=1,s=.25,a=new r.A("black"),l=.4,c=.2,u=.25,h="default",f="temporary",d=new r.A("yellow")},3112:(e,t,n)=>{var r,o;n.d(t,{H6:()=>i,dz:()=>r,oH:()=>o}),function(e){e[e.OBJECT=0]="OBJECT",e[e.HUD=1]="HUD",e[e.TERRAIN=2]="TERRAIN",e[e.OVERLAY=3]="OVERLAY",e[e.I3S=4]="I3S",e[e.PCL=5]="PCL",e[e.LOD=6]="LOD",e[e.VOXEL=7]="VOXEL",e[e.TILES3D=8]="TILES3D"}(r||(r={}));class i{constructor(){this.verticalOffset=0,this.selectionMode=!1,this.hud=!0,this.selectOpaqueTerrainOnly=!0,this.invisibleTerrain=!1,this.backfacesTerrain=!0,this.isFiltered=!1,this.filteredLayerUids=[],this.store=o.ALL,this.normalRequired=!0,this.excludeLabels=!1}}!function(e){e[e.MIN=0]="MIN",e[e.MINMAX=1]="MINMAX",e[e.ALL=2]="ALL"}(o||(o={}))},29808:(e,t,n)=>{n.d(t,{G7:()=>x,hz:()=>w});var r=n(34761),o=n(13191),i=n(20664),s=n(9392),a=n(43047),l=n(55855),c=n(95925),u=n(64465),h=n(3112),f=n(35737),d=n(46571),p=n(97974);const v=1e-5;class g{constructor(e){this.options=new h.H6,this._results=new O,this.transform=new p.dg,this.tolerance=v,this.verticalOffset=null,this._ray=(0,c.vt)(),this._rayEnd=(0,s.vt)(),this._rayBeginTransformed=(0,s.vt)(),this._rayEndTransformed=(0,s.vt)(),this.viewingMode=e??u.RT.Global}get results(){return this._results}get ray(){return this._ray}get rayBegin(){return this._ray.origin}get rayEnd(){return this._rayEnd}reset(e,t,n){this.resetWithRay((0,c.Cr)(e,t,this._ray),n)}resetWithRay(e,t){this.camera=t,e!==this._ray&&(0,c.C)(e,this._ray),0!==this.options.verticalOffset?this.viewingMode===u.RT.Local?this._ray.origin[2]-=this.options.verticalOffset:this.verticalOffset=this.options.verticalOffset:this.verticalOffset=null,(0,i.g)(this._rayEnd,this._ray.origin,this._ray.direction),this._results.init(this._ray)}intersect(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;this.point=t,this.filterPredicate=r,this.tolerance=n??v;const i=(0,p.ou)(this.verticalOffset);if(e&&e.length>0){const t=o?e=>{o(e)&&this.intersectObject(e)}:e=>{this.intersectObject(e)};for(const n of e){const e=n.getSpatialQueryAccelerator?.();null!=e?(null!=i?e.forEachAlongRayWithVerticalOffset(this._ray.origin,this._ray.direction,t,i):e.forEachAlongRay(this._ray.origin,this._ray.direction,t),this.options.selectionMode&&this.options.hud&&e.forEachDegenerateObject(t)):n.objects.forAll((e=>t(e)))}}this.sortResults()}intersectObject(e){const t=e.geometries;if(!t)return;const n=e.effectiveTransformation,r=(0,p.ou)(this.verticalOffset);for(const s of t){if(!s.visible)continue;const{material:t,id:a}=s;if(!t.visible)continue;this.transform.setAndInvalidateLazyTransforms(n,s.transformation),(0,i.t)(this._rayBeginTransformed,this.rayBegin,this.transform.inverse),(0,i.t)(this._rayEndTransformed,this.rayEnd,this.transform.inverse);const l=this.transform.transform;null!=r&&(r.objectTransform=this.transform),t.intersect(s,this.transform.transform,this,this._rayBeginTransformed,this._rayEndTransformed,((t,n,r,i,s,c)=>{if(t>=0){if(null!=this.filterPredicate&&!this.filterPredicate(this._ray.origin,this._rayEnd,t))return;const u=i?this._results.hud:this._results,d=i?i=>{const l=new f.B$(e,a,r,c);i.set(h.dz.HUD,l,t,n,o.zK,s)}:o=>o.set(h.dz.OBJECT,{object:e,geometryId:a,triangleNr:r},t,n,l,s);if((null==u.min.drapedLayerOrder||s>=u.min.drapedLayerOrder)&&(null==u.min.dist||t<u.min.dist)&&d(u.min),this.options.store!==h.oH.MIN&&(null==u.max.drapedLayerOrder||s<u.max.drapedLayerOrder)&&(null==u.max.dist||t>u.max.dist)&&d(u.max),this.options.store===h.oH.ALL)if(i){const e=new A(this._ray);d(e),this._results.hud.all.push(e)}else{const e=new m(this._ray);d(e),this._results.all.push(e)}}}))}}sortResults(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._results.all).sort(((e,t)=>e.dist!==t.dist?(e.dist??0)-(t.dist??0):e.drapedLayerOrder!==t.drapedLayerOrder?y(e.drapedLayerOrder,t.drapedLayerOrder):y(e.drapedLayerGraphicOrder,t.drapedLayerGraphicOrder)))}}function y(e,t){return(t??-Number.MAX_VALUE)-(e??-Number.MAX_VALUE)}function w(e){return new g(e)}class O{constructor(){this.min=new m((0,c.vt)()),this.max=new m((0,c.vt)()),this.hud={min:new A((0,c.vt)()),max:new A((0,c.vt)()),all:new Array},this.ground=new m((0,c.vt)()),this.all=[]}init(e){this.min.init(e),this.max.init(e),this.ground.init(e),this.all.length=0,this.hud.min.init(e),this.hud.max.init(e),this.hud.all.length=0}}class m{get ray(){return this._ray}get distanceInRenderSpace(){return null!=this.dist?((0,i.h)(M,this.ray.direction,this.dist),(0,i.l)(M)):null}withinDistance(e){return!!(0,d.i3)(this)&&this.distanceInRenderSpace<=e}getIntersectionPoint(e){return!!(0,d.i3)(this)&&((0,i.h)(M,this.ray.direction,this.dist),(0,i.g)(e,this.ray.origin,M),!0)}getTransformedNormal(e){return(0,i.c)(P,this.normal),P[3]=0,(0,a.t)(P,P,this.transformation),(0,i.c)(e,P),(0,i.n)(e,e)}constructor(e){this.intersector=h.dz.OBJECT,this.normal=(0,s.vt)(),this.transformation=(0,o.vt)(),this._ray=(0,c.vt)(),this.init(e)}init(e){this.dist=null,this.target=null,this.drapedLayerOrder=null,this.drapedLayerGraphicOrder=null,this.intersector=h.dz.OBJECT,(0,c.C)(e,this._ray)}set(e,t,n,a,l,c,u){this.intersector=e,this.dist=n,(0,i.c)(this.normal,a??s.Cb),(0,r.C)(this.transformation,l??o.zK),this.target=t,this.drapedLayerOrder=c,this.drapedLayerGraphicOrder=u}copy(e){(0,c.C)(e.ray,this._ray),this.intersector=e.intersector,this.dist=e.dist,this.target=e.target,this.drapedLayerOrder=e.drapedLayerOrder,this.drapedLayerGraphicOrder=e.drapedLayerGraphicOrder,(0,i.c)(this.normal,e.normal),(0,r.C)(this.transformation,e.transformation)}}class A extends m{constructor(){super(...arguments),this.intersector=h.dz.HUD}}function x(e){return new m(e)}const M=(0,s.vt)(),P=(0,l.vt)()},35737:(e,t,n)=>{n.d(t,{B$:()=>i,HE:()=>s,R6:()=>a});var r=n(9392);class o{constructor(e,t,n){this.object=e,this.geometryId=t,this.triangleNr=n}}class i extends o{constructor(e,t,n,o){super(e,t,n),this.center=null!=o?(0,r.o8)(o):null}}class s{constructor(e){this.layerUid=e}}class a extends s{constructor(e,t){super(e),this.graphicUid=t}}},36423:(e,t,n)=>{n.d(t,{$2:()=>T,$C:()=>A,Hj:()=>M,Mh:()=>P,W$:()=>y,pW:()=>x,t8:()=>m,vY:()=>b});var r=n(31633),o=n(34761),i=n(13191),s=n(9392),a=n(43047),l=n(55855),c=n(9624),u=n(42294),h=n(2413),f=n(205),d=n(5262),p=n(99773),v=n(18117),g=n(32535);function y(e,t){if("point"===e.type)return O(e,t,!1);if((0,g.gr)(e))switch(e.type){case"extent":return O(e.center,t,!1);case"polygon":return O(e.centroid,t,!1);case"polyline":return O(w(e),t,!0);case"mesh":return O((0,p.MW)(e.vertexSpace,e.spatialReference)??e.extent.center,t,!1);case"multipoint":return}else switch(e.type){case"extent":return O(function(e){return(0,v.T)(.5*(e.xmax+e.xmin),.5*(e.ymax+e.ymin),null!=e.zmin&&null!=e.zmax&&isFinite(e.zmin)&&isFinite(e.zmax)?.5*(e.zmax+e.zmin):void 0,e.spatialReference)}(e),t,!0);case"polygon":return O(function(e){const t=e.rings[0];if(!t||0===t.length)return null;const n=(0,f.S8)(e.rings,!!e.hasZ);return(0,v.T)(n[0],n[1],n[2],e.spatialReference)}(e),t,!0);case"polyline":return O(w(e),t,!0);case"multipoint":return}}function w(e){const t=e.paths[0];if(!t||0===t.length)return null;const n=(0,d.$H)(t,(0,d.Yl)(t)/2);return(0,v.T)(n[0],n[1],n[2],e.spatialReference)}function O(e,t,n){const r=n?e:(0,g.EL)(e);return t&&e?(0,c.projectPoint)(e,r,t)?r:null:r}function m(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(e){t||(t=(0,h.vt)());const o=e;let i=.5*o.width*(n-1),s=.5*o.height*(n-1);return o.width<1e-7*o.height?i+=s/20:o.height<1e-7*o.width&&(s+=i/20),(0,a.s)(t,o.xmin-i-r,o.ymin-s-r,o.xmax+i+r,o.ymax+s+r),t}return null}function A(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const r=(0,l.o8)(l.Un);return null!=e&&(r[0]=e[0],r[1]=e[1],r[2]=e[2]),null!=t?r[3]=t:null!=e&&e.length>3&&(r[3]=e[3]),n&&(r[0]*=n,r[1]*=n,r[2]*=n,r[3]*=n),r}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.Un,t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;const o=new Array(3);if(null==t||null==n)o[0]=1,o[1]=1,o[2]=1;else{let r,i=0;for(let s=2;s>=0;s--){const a=e[s],l=null!=a,c=0===s&&!r&&!l,u=n[s];let h;"symbol-value"===a||c?h=0!==u?t[s]/u:1:l&&"proportional"!==a&&isFinite(a)&&(h=0!==u?a/u:1),null!=h&&(o[s]=h,r=h,i=Math.max(i,Math.abs(h)))}for(let e=2;e>=0;e--)null==o[e]?o[e]=r:0===o[e]&&(o[e]=.001*i)}for(let i=2;i>=0;i--)o[i]/=r;return(0,s.ci)(o)}function M(e){return P(function(e){return null!=e.isPrimitive}(e)?[e.width,e.depth,e.height]:e)?null:"Symbol sizes may not be negative values"}function P(e){const t=e=>null==e||e>=0;return Array.isArray(e)?e.every(t):t(e)}function T(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:(0,i.vt)();return e&&(0,o.Qr)(r,r,-e/180*Math.PI),t&&(0,o.eL)(r,r,t/180*Math.PI),n&&(0,o.Z8)(r,r,n/180*Math.PI),r}function b(e,t,n){if(null!=n.minDemResolution)return n.minDemResolution;const o=(0,r.GA)(t),i=(0,u.VL)(e)*o,s=(0,u.yr)(e)*o,a=(0,u.uJ)(e)*(t.isGeographic?1:o);return 0===i&&0===s&&0===a?n.minDemResolutionForPoints:.01*Math.max(i,s,a)}},40318:(e,t,n)=>{n.d(t,{Q:()=>f,R:()=>h});var r=n(25530),o=n(69817),i=n(3799),s=n(51596),a=n(23148),l=n(21390),c=n(86955),u=n(66470);const h=.5;function f(e,t){e.include(o.Y6),e.attributes.add(u.r.POSITION,"vec3"),e.attributes.add(u.r.NORMAL,"vec3"),e.attributes.add(u.r.CENTEROFFSETANDDISTANCE,"vec4");const n=e.vertex;(0,i.NB)(n,t),(0,i.yu)(n,t),n.uniforms.add(new s.I("viewport",(e=>e.camera.fullViewport)),new l.m("polygonOffset",(e=>e.shaderPolygonOffset)),new a.U("cameraGroundRelative",(e=>e.camera.aboveGround?1:-1))),t.hasVerticalOffset&&(0,r.V)(n),n.constants.add("smallOffsetAngle","float",.984807753012208),n.code.add(c.H`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),n.code.add(c.H`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${t.terrainDepthTest?c.H.float(0):c.H`sign(pointGroundDistance)`};
      if (pointGroundSign == 0.0) {
        pointGroundSign = cameraGroundRelative;
      }

      // cameraGroundRelative is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = cameraGroundRelative * pointGroundSign;

      // view angle dependent part of polygon offset emulation: we take the absolute value because the sign that is
      // dropped is instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),t.draped&&!t.hasVerticalOffset||(0,i.S7)(n),t.draped||(n.uniforms.add(new a.U("perDistancePixelRatio",(e=>Math.tan(e.camera.fovY/2)/(e.camera.fullViewport[2]/2)))),n.code.add(c.H`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${c.H.float(h)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),t.screenCenterOffsetUnitsEnabled&&(0,i.Nz)(n),t.hasScreenSizePerspective&&(0,o.OH)(n),n.code.add(c.H`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${t.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${t.hasScreenSizePerspective&&(t.hasVerticalOffset||t.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${t.hasVerticalOffset?t.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${t.hasVerticalOffset?c.H`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${t.screenCenterOffsetUnitsEnabled?"":c.H`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${t.screenCenterOffsetUnitsEnabled?t.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${t.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}},46571:(e,t,n)=>{n.d(t,{i3:()=>o});n(20664);var r=n(9392);n(79650),n(3112);function o(e){return null!=e?.dist}(0,r.vt)()},62374:(e,t,n)=>{n.d(t,{y:()=>c});var r=n(98720),o=n(98521),i=n(51596),s=n(23148),a=n(86955),l=n(4653);function c(e){e.vertex.uniforms.add(new s.U("renderTransparentlyOccludedHUD",(e=>e.hudRenderStyle===o.D.Occluded?1:e.hudRenderStyle===o.D.NotOccluded?0:.75)),new i.I("viewport",(e=>e.camera.fullViewport)),new l.x("hudVisibilityTexture",(e=>e.hudVisibility?.getTexture()))),e.vertex.include(r.K),e.vertex.code.add(a.H`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}},62577:(e,t,n)=>{n.d(t,{zC:()=>re,C1:()=>P,EE:()=>W,YG:()=>Q,nW:()=>Z,td:()=>C,_B:()=>te,Nq:()=>K,DJ:()=>Y,uX:()=>q,Z8:()=>ee,CM:()=>$,Gj:()=>X,Ho:()=>B,Nb:()=>J,Xl:()=>ie,xh:()=>ne});var r,o=n(20664),i=n(83755),s=n(9392),a=n(44815),l=n(75002),c=n(38496),u=n(13927),h=n(95925),f=n(50468);!function(e){e.length=function(e,t){const n=e[t],r=e[t+1],o=e[t+2];return Math.sqrt(n*n+r*r+o*o)},e.normalize=function(e,t){const n=e[t],r=e[t+1],o=e[t+2],i=1/Math.sqrt(n*n+r*r+o*o);e[t]*=i,e[t+1]*=i,e[t+2]*=i},e.scale=function(e,t,n){e[t]*=n,e[t+1]*=n,e[t+2]*=n},e.add=function(e,t,n,r,o){let i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:t;(o=o||e)[i]=e[t]+n[r],o[i+1]=e[t+1]+n[r+1],o[i+2]=e[t+2]+n[r+2]},e.subtract=function(e,t,n,r,o){let i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:t;(o=o||e)[i]=e[t]-n[r],o[i+1]=e[t+1]-n[r+1],o[i+2]=e[t+2]-n[r+2]}}(r||(r={}));var d=n(87634),p=n(17345),v=n(86994),g=n(66470);const y=r,w=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],O=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],m=[0,0,1,0,1,1,0,1],A=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],x=new Array(36);for(let le=0;le<6;le++)for(let e=0;e<6;e++)x[6*le+e]=le;const M=new Array(36);for(let le=0;le<6;le++)M[6*le]=0,M[6*le+1]=1,M[6*le+2]=2,M[6*le+3]=2,M[6*le+4]=3,M[6*le+5]=0;function P(e,t){Array.isArray(t)||(t=[t,t,t]);const n=new Array(24);for(let r=0;r<8;r++)n[3*r]=w[r][0]*t[0],n[3*r+1]=w[r][1]*t[1],n[3*r+2]=w[r][2]*t[2];return new p.V(e,[[g.r.POSITION,new f.n(n,A,3,!0)],[g.r.NORMAL,new f.n(O,x,3)],[g.r.UV0,new f.n(m,M,2)]])}const T=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],b=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],S=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],I=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function C(e,t){Array.isArray(t)||(t=[t,t,t]);const n=new Array(18);for(let r=0;r<6;r++)n[3*r]=T[r][0]*t[0],n[3*r+1]=T[r][1]*t[1],n[3*r+2]=T[r][2]*t[2];return new p.V(e,[[g.r.POSITION,new f.n(n,S,3,!0)],[g.r.NORMAL,new f.n(b,I,3)]])}const R=(0,i.fA)(-.5,0,-.5),N=(0,i.fA)(.5,0,-.5),L=(0,i.fA)(0,0,.5),V=(0,i.fA)(0,.5,0),E=(0,i.vt)(),z=(0,i.vt)(),_=(0,i.vt)(),D=(0,i.vt)(),H=(0,i.vt)();(0,o.d)(E,R,V),(0,o.d)(z,R,N),(0,o.e)(_,E,z),(0,o.n)(_,_),(0,o.d)(E,N,V),(0,o.d)(z,N,L),(0,o.e)(D,E,z),(0,o.n)(D,D),(0,o.d)(E,L,V),(0,o.d)(z,L,R),(0,o.e)(H,E,z),(0,o.n)(H,H);const U=[R,N,L,V],j=[0,-1,0,_[0],_[1],_[2],D[0],D[1],D[2],H[0],H[1],H[2]],G=[0,1,2,3,1,0,3,2,1,3,0,2],F=[0,0,0,1,1,1,2,2,2,3,3,3];function B(e,t){Array.isArray(t)||(t=[t,t,t]);const n=new Array(12);for(let r=0;r<4;r++)n[3*r]=U[r][0]*t[0],n[3*r+1]=U[r][1]*t[1],n[3*r+2]=U[r][2]*t[2];return new p.V(e,[[g.r.POSITION,new f.n(n,G,3,!0)],[g.r.NORMAL,new f.n(j,F,3)]])}function $(e,t,n,r){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{uv:!0};const i=-Math.PI,s=2*Math.PI,a=-Math.PI/2,u=Math.PI,h=Math.max(3,Math.floor(n)),d=Math.max(2,Math.floor(r)),v=(h+1)*(d+1),y=(0,l.oe)(3*v),w=(0,l.oe)(3*v),O=(0,l.oe)(2*v),m=[];let A=0;for(let l=0;l<=d;l++){const e=[],n=l/d,r=a+n*u,o=Math.cos(r);for(let a=0;a<=h;a++){const l=a/h,c=i+l*s,u=Math.cos(c)*o,f=Math.sin(r),d=-Math.sin(c)*o;y[3*A]=u*t,y[3*A+1]=f*t,y[3*A+2]=d*t,w[3*A]=u,w[3*A+1]=f,w[3*A+2]=d,O[2*A]=l,O[2*A+1]=n,e.push(A),++A}m.push(e)}const x=new Array;for(let l=0;l<d;l++)for(let e=0;e<h;e++){const t=m[l][e],n=m[l][e+1],r=m[l+1][e+1],o=m[l+1][e];0===l?(x.push(t),x.push(r),x.push(o)):l===d-1?(x.push(t),x.push(n),x.push(r)):(x.push(t),x.push(n),x.push(r),x.push(r),x.push(o),x.push(t))}const M=[[g.r.POSITION,new f.n(y,x,3,!0)],[g.r.NORMAL,new f.n(w,x,3,!0)]];return o.uv&&M.push([g.r.UV0,new f.n(O,x,2,!0)]),o.offset&&(M[0][0]=g.r.OFFSET,M.push([g.r.POSITION,new f.n(Float64Array.from(o.offset),(0,c.EH)(x.length),3,!0)])),new p.V(e,M)}function q(e,t,n,r){const o=function(e,t,n){const r=e;let o,i;if(n)o=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],i=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];else{const e=r*(1+Math.sqrt(5))/2;o=[-r,e,0,r,e,0,-r,-e,0,r,-e,0,0,-r,e,0,r,e,0,-r,-e,0,r,-e,e,0,-r,e,0,r,-e,0,-r,-e,0,r],i=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1]}for(let l=0;l<o.length;l+=3)y.scale(o,l,e/y.length(o,l));let s={};function a(t,n){t>n&&([t,n]=[n,t]);const r=t.toString()+"."+n.toString();if(s[r])return s[r];let i=o.length;return o.length+=3,y.add(o,3*t,o,3*n,o,i),y.scale(o,i,e/y.length(o,i)),i/=3,s[r]=i,i}for(let l=0;l<t;l++){const e=i.length,t=new Array(4*e);for(let n=0;n<e;n+=3){const e=i[n],r=i[n+1],o=i[n+2],s=a(e,r),l=a(r,o),c=a(o,e),u=4*n;t[u]=e,t[u+1]=s,t[u+2]=c,t[u+3]=r,t[u+4]=l,t[u+5]=s,t[u+6]=o,t[u+7]=c,t[u+8]=l,t[u+9]=s,t[u+10]=l,t[u+11]=c}i=t,s={}}const c=(0,l.Wz)(o);for(let l=0;l<c.length;l+=3)y.normalize(c,l);return[[g.r.POSITION,new f.n((0,l.Wz)(o),i,3,!0)],[g.r.NORMAL,new f.n(c,i,3,!0)]]}(t,n,r);return new p.V(e,o)}function Y(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{normal:n,position:r,color:o,rotation:i,size:a,centerOffsetAndDistance:l,uvs:u,featureAttribute:h,objectAndLayerIdColor:v=null}=t,y=r?(0,s.o8)(r):(0,s.vt)(),w=n?(0,s.o8)(n):(0,s.fA)(0,0,1),O=o?[255*o[0],255*o[1],255*o[2],o.length>3?255*o[3]:255]:[255,255,255,255],m=null!=a&&2===a.length?a:[1,1],A=null!=i?[i]:[0],x=(0,c.EH)(1),M=[[g.r.POSITION,new f.n(y,x,3,!0)],[g.r.NORMAL,new f.n(w,x,3,!0)],[g.r.COLOR,new f.n(O,x,4,!0)],[g.r.SIZE,new f.n(m,x,2)],[g.r.ROTATION,new f.n(A,x,1,!0)]];if(u&&M.push([g.r.UV0,new f.n(u,x,u.length)]),null!=l){const e=[l[0],l[1],l[2],l[3]];M.push([g.r.CENTEROFFSETANDDISTANCE,new f.n(e,x,4)])}if(h){const e=[h[0],h[1],h[2],h[3]];M.push([g.r.FEATUREATTRIBUTE,new f.n(e,x,4)])}return new p.V(e,M,null,d.X.Point,v)}const k=[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0]];function X(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:k;const n=new Array(12);for(let s=0;s<4;s++)for(let e=0;e<3;e++)n[3*s+e]=t[s][e];const r=[0,1,2,2,3,0],o=[0,0,0,0,0,0],i=[[g.r.POSITION,new f.n(n,r,3,!0)],[g.r.NORMAL,new f.n([0,0,1],o,3,!0)],[g.r.UV0,new f.n([0,0,1,0,1,1,0,1],r,2,!0)],[g.r.COLOR,new f.n([255,255,255,255],o,4,!0)]];return new p.V(e,i)}function Q(e,t,n,r){let o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],s=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],a=0;const c=t,u=e;let h=(0,i.fA)(0,a,0),d=(0,i.fA)(0,a+u,0),p=(0,i.fA)(0,-1,0),v=(0,i.fA)(0,1,0);r&&(a=u,d=(0,i.fA)(0,0,0),h=(0,i.fA)(0,a,0),p=(0,i.fA)(0,1,0),v=(0,i.fA)(0,-1,0));const y=[d,h],w=[p,v],O=n+2,m=Math.sqrt(u*u+c*c);if(r)for(let l=n-1;l>=0;l--){const e=l*(2*Math.PI/n),t=(0,i.fA)(Math.cos(e)*c,a,Math.sin(e)*c);y.push(t);const r=(0,i.fA)(u*Math.cos(e)/m,-c/m,u*Math.sin(e)/m);w.push(r)}else for(let l=0;l<n;l++){const e=l*(2*Math.PI/n),t=(0,i.fA)(Math.cos(e)*c,a,Math.sin(e)*c);y.push(t);const r=(0,i.fA)(u*Math.cos(e)/m,c/m,u*Math.sin(e)/m);w.push(r)}const A=new Array,x=new Array;if(o){for(let e=3;e<y.length;e++)A.push(1),A.push(e-1),A.push(e),x.push(0),x.push(0),x.push(0);A.push(y.length-1),A.push(2),A.push(1),x.push(0),x.push(0),x.push(0)}if(s){for(let e=3;e<y.length;e++)A.push(e),A.push(e-1),A.push(0),x.push(e),x.push(e-1),x.push(1);A.push(0),A.push(2),A.push(y.length-1),x.push(1),x.push(2),x.push(w.length-1)}const M=(0,l.oe)(3*O);for(let i=0;i<O;i++)M[3*i]=y[i][0],M[3*i+1]=y[i][1],M[3*i+2]=y[i][2];const P=(0,l.oe)(3*O);for(let i=0;i<O;i++)P[3*i]=w[i][0],P[3*i+1]=w[i][1],P[3*i+2]=w[i][2];return[[g.r.POSITION,new f.n(M,A,3,!0)],[g.r.NORMAL,new f.n(P,x,3,!0)]]}function W(e,t,n,r,o){let i=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],s=!(arguments.length>6&&void 0!==arguments[6])||arguments[6];return new p.V(e,Q(t,n,r,o,i,s))}function Z(e,t,n,r,s,a,c){const u=s?(0,i.o8)(s):(0,i.fA)(1,0,0),h=a?(0,i.o8)(a):(0,i.fA)(0,0,0);c??=!0;const d=(0,i.vt)();(0,o.n)(d,u);const v=(0,i.vt)();(0,o.h)(v,d,Math.abs(t));const y=(0,i.vt)();(0,o.h)(y,v,-.5),(0,o.g)(y,y,h);const w=(0,i.fA)(0,1,0);Math.abs(1-(0,o.f)(d,w))<.2&&(0,o.i)(w,0,0,1);const O=(0,i.vt)();(0,o.e)(O,d,w),(0,o.n)(O,O),(0,o.e)(w,O,d);const m=2*r+(c?2:0),A=r+(c?2:0),x=(0,l.oe)(3*m),M=(0,l.oe)(3*A),P=(0,l.oe)(2*m),T=new Array(3*r*(c?4:2)),b=new Array(3*r*(c?4:2));c&&(x[3*(m-2)]=y[0],x[3*(m-2)+1]=y[1],x[3*(m-2)+2]=y[2],P[2*(m-2)]=0,P[2*(m-2)+1]=0,x[3*(m-1)]=x[3*(m-2)]+v[0],x[3*(m-1)+1]=x[3*(m-2)+1]+v[1],x[3*(m-1)+2]=x[3*(m-2)+2]+v[2],P[2*(m-1)]=1,P[2*(m-1)+1]=1,M[3*(A-2)]=-d[0],M[3*(A-2)+1]=-d[1],M[3*(A-2)+2]=-d[2],M[3*(A-1)]=d[0],M[3*(A-1)+1]=d[1],M[3*(A-1)+2]=d[2]);const S=(e,t,n)=>{T[e]=t,b[e]=n};let I=0;const C=(0,i.vt)(),R=(0,i.vt)();for(let i=0;i<r;i++){const e=i*(2*Math.PI/r);(0,o.h)(C,w,Math.sin(e)),(0,o.h)(R,O,Math.cos(e)),(0,o.g)(C,C,R),M[3*i]=C[0],M[3*i+1]=C[1],M[3*i+2]=C[2],(0,o.h)(C,C,n),(0,o.g)(C,C,y),x[3*i]=C[0],x[3*i+1]=C[1],x[3*i+2]=C[2],P[2*i]=i/r,P[2*i+1]=0,x[3*(i+r)]=x[3*i]+v[0],x[3*(i+r)+1]=x[3*i+1]+v[1],x[3*(i+r)+2]=x[3*i+2]+v[2],P[2*(i+r)]=i/r,P[2*i+1]=1;const t=(i+1)%r;S(I++,i,i),S(I++,i+r,i),S(I++,t,t),S(I++,t,t),S(I++,i+r,i),S(I++,t+r,t)}if(c){for(let e=0;e<r;e++){const t=(e+1)%r;S(I++,m-2,A-2),S(I++,e,A-2),S(I++,t,A-2)}for(let e=0;e<r;e++){const t=(e+1)%r;S(I++,e+r,A-1),S(I++,m-1,A-1),S(I++,t+r,A-1)}}const N=[[g.r.POSITION,new f.n(x,T,3,!0)],[g.r.NORMAL,new f.n(M,b,3,!0)],[g.r.UV0,new f.n(P,T,2,!0)]];return new p.V(e,N)}function J(e,t,n,r,o,i){r=r||10,o=null==o||o,(0,v.vA)(t.length>1);const s=[],a=[];for(let l=0;l<r;l++){s.push([0,-l-1,-(l+1)%r-1]);const e=l/r*2*Math.PI;a.push([Math.cos(e)*n,Math.sin(e)*n])}return K(e,a,t,[[0,0,0]],s,o,i)}function K(e,t,n,r,a,c){let d=arguments.length>6&&void 0!==arguments[6]?arguments[6]:(0,i.fA)(0,0,0);const v=t.length,y=(0,l.oe)(n.length*v*3+(6*r.length||0)),w=(0,l.oe)(n.length*v*3+(r?6:0)),O=new Array,m=new Array;let A=0,x=0;const M=(0,s.vt)(),P=(0,s.vt)(),T=(0,s.vt)(),b=(0,s.vt)(),S=(0,s.vt)(),I=(0,s.vt)(),C=(0,s.vt)(),R=(0,s.vt)(),N=(0,s.vt)(),L=(0,s.vt)(),V=(0,s.vt)(),E=(0,s.vt)(),z=(0,s.vt)(),_=(0,u.vt)();(0,o.i)(N,0,1,0),(0,o.d)(P,n[1],n[0]),(0,o.n)(P,P),c?((0,o.g)(R,n[0],d),(0,o.n)(T,R)):(0,o.i)(T,0,0,1),ie(P,T,N,N,S,T,se),(0,o.c)(b,T),(0,o.c)(E,S);for(let i=0;i<r.length;i++)(0,o.h)(I,S,r[i][0]),(0,o.h)(R,T,r[i][2]),(0,o.g)(I,I,R),(0,o.g)(I,I,n[0]),y[A++]=I[0],y[A++]=I[1],y[A++]=I[2];w[x++]=-P[0],w[x++]=-P[1],w[x++]=-P[2];for(let o=0;o<a.length;o++)O.push(a[o][0]>0?a[o][0]:-a[o][0]-1+r.length),O.push(a[o][1]>0?a[o][1]:-a[o][1]-1+r.length),O.push(a[o][2]>0?a[o][2]:-a[o][2]-1+r.length),m.push(0),m.push(0),m.push(0);let D=r.length;const H=r.length-1;for(let i=0;i<n.length;i++){let e=!1;i>0&&((0,o.c)(M,P),i<n.length-1?((0,o.d)(P,n[i+1],n[i]),(0,o.n)(P,P)):e=!0,(0,o.g)(L,M,P),(0,o.n)(L,L),(0,o.g)(V,n[i-1],b),(0,u.O_)(n[i],L,_),(0,u.Ui)(_,(0,h.LV)(V,M),R)?((0,o.d)(R,R,n[i]),(0,o.n)(T,R),(0,o.e)(S,L,T),(0,o.n)(S,S)):ie(L,b,E,N,S,T,se),(0,o.c)(b,T),(0,o.c)(E,S)),c&&((0,o.g)(R,n[i],d),(0,o.n)(z,R));for(let r=0;r<v;r++)if((0,o.h)(I,S,t[r][0]),(0,o.h)(R,T,t[r][1]),(0,o.g)(I,I,R),(0,o.n)(C,I),w[x++]=C[0],w[x++]=C[1],w[x++]=C[2],(0,o.g)(I,I,n[i]),y[A++]=I[0],y[A++]=I[1],y[A++]=I[2],!e){const e=(r+1)%v;O.push(D+r),O.push(D+v+r),O.push(D+e),O.push(D+e),O.push(D+v+r),O.push(D+v+e);for(let t=0;t<6;t++){const e=O.length-6;m.push(O[e+t]-H)}}D+=v}const U=n[n.length-1];for(let i=0;i<r.length;i++)(0,o.h)(I,S,r[i][0]),(0,o.h)(R,T,r[i][1]),(0,o.g)(I,I,R),(0,o.g)(I,I,U),y[A++]=I[0],y[A++]=I[1],y[A++]=I[2];const j=x/3;w[x++]=P[0],w[x++]=P[1],w[x++]=P[2];const G=D-v;for(let o=0;o<a.length;o++)O.push(a[o][0]>=0?D+a[o][0]:-a[o][0]-1+G),O.push(a[o][2]>=0?D+a[o][2]:-a[o][2]-1+G),O.push(a[o][1]>=0?D+a[o][1]:-a[o][1]-1+G),m.push(j),m.push(j),m.push(j);const F=[[g.r.POSITION,new f.n(y,O,3,!0)],[g.r.NORMAL,new f.n(w,m,3,!0)]];return new p.V(e,F)}function ee(e,t,n,r){(0,v.vA)(t.length>1,"createPolylineGeometry(): polyline needs at least 2 points"),(0,v.vA)(3===t[0].length,"createPolylineGeometry(): malformed vertex"),(0,v.vA)(null==n||n.length===t.length,"createPolylineGeometry: need same number of points and normals"),(0,v.vA)(null==n||3===n[0].length,"createPolylineGeometry(): malformed normal");const o=(0,a.jh)(3*t.length),i=new Array(2*(t.length-1));let s=0,u=0;for(let a=0;a<t.length;a++){for(let e=0;e<3;e++)o[s++]=t[a][e];a>0&&(i[u++]=a-1,i[u++]=a)}const h=[[g.r.POSITION,new f.n(o,i,3,!0)]];if(n){const e=(0,l.oe)(3*n.length);let r=0;for(let o=0;o<t.length;o++)for(let t=0;t<3;t++)e[r++]=n[o][t];h.push([g.r.NORMAL,new f.n(e,i,3,!0)])}return r&&h.push([g.r.COLOR,new f.n(r,(0,c.tM)(r.length/4),4)]),new p.V(e,h,null,d.X.Line)}function te(e,t,n,r,o){let i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;const s=new Array(18),a=[[-n,i,o/2],[r,i,o/2],[0,t+i,o/2],[-n,i,-o/2],[r,i,-o/2],[0,t+i,-o/2]];for(let l=0;l<6;l++)s[3*l]=a[l][0],s[3*l+1]=a[l][1],s[3*l+2]=a[l][2];return new p.V(e,[[g.r.POSITION,new f.n(s,[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5],3,!0)]])}function ne(e,t){const n=e.getMutableAttribute(g.r.POSITION).data;for(let r=0;r<n.length;r+=3){const e=n[r],i=n[r+1],s=n[r+2];(0,o.i)(ae,e,i,s),(0,o.t)(ae,ae,t),n[r]=ae[0],n[r+1]=ae[1],n[r+2]=ae[2]}}function re(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;const n=e.attributes,r=n.get(g.r.POSITION).data,o=n.get(g.r.NORMAL).data;if(o){const e=t.getMutableAttribute(g.r.NORMAL).data;for(let t=0;t<o.length;t+=3){const n=o[t+1];e[t+1]=-o[t+2],e[t+2]=n}}if(r){const e=t.getMutableAttribute(g.r.POSITION).data;for(let t=0;t<r.length;t+=3){const n=r[t+1];e[t+1]=-r[t+2],e[t+2]=n}}}function oe(e,t,n,r,i){return!(Math.abs((0,o.f)(t,e))>i)&&((0,o.e)(n,e,t),(0,o.n)(n,n),(0,o.e)(r,n,e),(0,o.n)(r,r),!0)}function ie(e,t,n,r,o,i,s){return oe(e,t,o,i,s)||oe(e,n,o,i,s)||oe(e,r,o,i,s)}const se=.99619469809,ae=(0,s.vt)()},68967:(e,t,n)=>{n.d(t,{Ci:()=>i,PC:()=>s,Vk:()=>a});var r=n(9392),o=n(99643);function i(e,t){return null==e&&(e=[]),e.push(t),e}function s(e,t){if(null==e)return null;const n=e.filter((e=>e!==t));return 0===n.length?null:n}function a(e,t,n,r,i){l[0]=e.get(t,0),l[1]=e.get(t,1),l[2]=e.get(t,2),(0,o.jS)(l,c,3),n.set(i,0,c[0]),r.set(i,0,c[1]),n.set(i,1,c[2]),r.set(i,1,c[3]),n.set(i,2,c[4]),r.set(i,2,c[5])}const l=(0,r.vt)(),c=new Float32Array(6)},72900:(e,t,n)=>{n.d(t,{CN:()=>l,PY:()=>c,Q_:()=>a,ny:()=>u,sZ:()=>h});n(81806);var r=n(14522),o=n(55855),i=n(76632),s=n(93345);const a=128,l=.5,c=(0,o.CN)(l/2,l/2,1-l/2,1-l/2);function u(e){return"cross"===e||"x"===e}function h(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;const n=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t*l,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;switch(e){case"circle":default:return function(e,t){const n=e/2-.5;return g(e,p(n,n,t/2))}(t,n);case"square":return function(e,t){return f(e,t,!1)}(t,n);case"cross":return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return d(e,t,!1,n)}(t,n,r);case"x":return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return d(e,t,!0,n)}(t,n,r);case"kite":return function(e,t){return f(e,t,!0)}(t,n);case"triangle":return function(e,t){return g(e,v(e/2,t,t/2))}(t,n);case"arrow":return function(e,t){const n=t,r=t/2,o=e/2,i=.8*n,s=p(o,(e-t)/2-i,Math.sqrt(i*i+r*r)),a=v(o,n,r);return g(e,((e,t)=>Math.max(a(e,t),-s(e,t))))}(t,n)}}(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:t*l,arguments.length>3&&void 0!==arguments[3]?arguments[3]:0);return new i.g(n,{mipmap:!1,wrap:{s:s.pF.CLAMP_TO_EDGE,t:s.pF.CLAMP_TO_EDGE},width:t,height:t,components:4,noUnpackFlip:!0,reloadable:!0})}function f(e,t,n){return n&&(t/=Math.SQRT2),g(e,((r,o)=>{let i=r-.5*e+.25,s=.5*e-o-.75;if(n){const e=(i+s)/Math.SQRT2;s=(s-i)/Math.SQRT2,i=e}return Math.max(Math.abs(i),Math.abs(s))-.5*t}))}function d(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;t-=r,n&&(t*=Math.SQRT2);const o=.5*t;return g(e,((t,i)=>{let s,a=t-.5*e,l=.5*e-i-1;if(n){const e=(a+l)/Math.SQRT2;l=(l-a)/Math.SQRT2,a=e}return a=Math.abs(a),l=Math.abs(l),s=a>l?a>o?Math.sqrt((a-o)*(a-o)+l*l):l:l>o?Math.sqrt(a*a+(l-o)*(l-o)):a,s-=r/2,s}))}function p(e,t,n){return(r,o)=>{const i=r-e,s=o-t;return Math.sqrt(i*i+s*s)-n}}function v(e,t,n){const r=Math.sqrt(t*t+n*n);return(o,i)=>{const s=Math.abs(o-e)-n,a=i-e+t/2+.75,l=(t*s+n*a)/r,c=-a;return Math.max(l,c)}}function g(e,t){const n=new Uint8Array(4*e*e);for(let o=0;o<e;o++)for(let i=0;i<e;i++){const s=i+e*o;let a=t(i,o);a=a/e+.5,(0,r.U)(a,n,4*s)}return n}},81284:(e,t,n)=>{function r(e){return"point"===e.type}n.d(t,{v:()=>r})},83755:(e,t,n)=>{function r(){return new Float32Array(3)}function o(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function i(e,t,n){const r=new Float32Array(3);return r[0]=e,r[1]=t,r[2]=n,r}function s(){return r()}function a(){return i(1,1,1)}function l(){return i(1,0,0)}function c(){return i(0,1,0)}function u(){return i(0,0,1)}n.d(t,{fA:()=>i,o8:()=>o,vt:()=>r});const h=s(),f=a(),d=l(),p=c(),v=u();Object.freeze(Object.defineProperty({__proto__:null,ONES:f,UNIT_X:d,UNIT_Y:p,UNIT_Z:v,ZEROS:h,clone:o,create:r,createView:function(e,t){return new Float32Array(e,t,3)},fromValues:i,ones:a,unitX:l,unitY:c,unitZ:u,zeros:s},Symbol.toStringTag,{value:"Module"}))},98521:(e,t,n)=>{var r;n.d(t,{D:()=>r}),function(e){e[e.Occluded=0]="Occluded",e[e.NotOccluded=1]="NotOccluded",e[e.Both=2]="Both",e[e.COUNT=3]="COUNT"}(r||(r={}))},98720:(e,t,n)=>{n.d(t,{K:()=>i});var r=n(67582),o=n(86955);function i(e){e.uniforms.add(new r.o("alignPixelEnabled",(e=>e.alignPixelEnabled))),e.code.add(o.H`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),e.code.add(o.H`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}}}]);
//# sourceMappingURL=31244.95175fa5.chunk.js.map