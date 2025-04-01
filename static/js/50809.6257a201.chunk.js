"use strict";(self.webpackChunkopenspace=self.webpackChunkopenspace||[]).push([[50809],{14522:(e,o,t)=>{t.d(o,{T:()=>a,U:()=>r});var n=t(15941);function r(e,o){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const r=(0,n.qE)(e,0,i);for(let n=0;n<4;n++)o[t+n]=Math.floor(256*s(r*l[n]))}function a(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=0;for(let n=0;n<4;n++)t+=e[o+n]*c[n];return t}const l=[1,256,65536,16777216],c=[1/256,1/65536,1/16777216,1/4294967296],i=a(new Uint8ClampedArray([255,255,255,255]));function s(e){return e-Math.floor(e)}},20123:(e,o,t)=>{t.d(o,{V:()=>a});var n=t(69728),r=t(87003);class a extends r.n{constructor(e,o){super(e,"vec4",n.c.Draw,((t,n,r)=>t.setUniform4fv(e,o(n,r))))}}},46702:(e,o,t)=>{var n;t.d(o,{x:()=>n}),function(e){e[e.TRANSPARENT=0]="TRANSPARENT",e[e.OPAQUE=1]="OPAQUE"}(n||(n={}))},50809:(e,o,t)=>{t.d(o,{Cc:()=>f,CC:()=>p,RF:()=>d});var n=t(69539),r=(t(81806),t(76931)),a=t(55855);var l=t(46702),c=(t(4212),t(14522),t(59581),t(34981),t(81449),t(20123),t(86955),t(69728),t(87003));c.n;var i;t(27374),t(61785),t(66470);!function(e){e[e.Uniform=0]="Uniform",e[e.Varying=1]="Varying",e[e.COUNT=2]="COUNT"}(i||(i={}));var s,u;t(59046),t(89299),t(72468),t(5517),t(42759),t(72106),t(23687);function d(e){return e&&e.enabled&&(function(e){return"extrude"===e.type}(e)||function(e){return"fill"===e.type}(e))&&null!=e.edges}function f(e,o){return function(e,o){if(null==e)return null;const t=null!=e.color?(0,a.ci)(n.A.toUnitRGBA(e.color)):(0,a.fA)(0,0,0,0),l=(0,r.Lz)(e.size),c=(0,r.Lz)(e.extensionLength);switch(e.type){case"solid":return p({color:t,size:l,extensionLength:c,...o});case"sketch":return function(e){return{...v,...e,type:s.Sketch}}({color:t,size:l,extensionLength:c,...o});default:return}}(function(e){return e&&e.enabled&&e.edges||null}(e),o)}function p(e){return{...m,...e,type:s.Solid}}!function(e){e[e.Solid=0]="Solid",e[e.Sketch=1]="Sketch",e[e.Mixed=2]="Mixed",e[e.COUNT=3]="COUNT"}(s||(s={})),function(e){e[e.REGULAR=0]="REGULAR",e[e.SILHOUETTE=1]="SILHOUETTE"}(u||(u={}));const m={color:(0,a.fA)(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:l.x.OPAQUE,hasSlicePlane:!1},v={color:(0,a.fA)(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:l.x.OPAQUE,hasSlicePlane:!1}},51990:(e,o,t)=>{t.d(o,{Eb:()=>a,_j:()=>l,k5:()=>n});var n,r=t(15941);function a(e){switch(e){case"multiply":default:return n.Multiply;case"ignore":return n.Ignore;case"replace":return n.Replace;case"tint":return n.Tint}}function l(e,o,t){if(null==e||o===n.Ignore)return t[0]=255,t[1]=255,t[2]=255,void(t[3]=255);const a=(0,r.qE)(Math.round(e[3]*i),0,i),l=0===a||o===n.Tint?0:o===n.Replace?s:u;t[0]=(0,r.qE)(Math.round(e[0]*c),0,c),t[1]=(0,r.qE)(Math.round(e[1]*c),0,c),t[2]=(0,r.qE)(Math.round(e[2]*c),0,c),t[3]=a+l}!function(e){e[e.Multiply=1]="Multiply",e[e.Ignore=2]="Ignore",e[e.Replace=3]="Replace",e[e.Tint=4]="Tint"}(n||(n={}));const c=255,i=85,s=i,u=2*i},59046:(e,o,t)=>{t.d(o,{W:()=>n,Y:()=>c});var n,r=t(4212),a=t(86955),l=t(66470);function c(e,o){switch(o.normalType){case n.Compressed:e.attributes.add(l.r.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(a.H`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case n.Attribute:e.attributes.add(l.r.NORMAL,"vec3"),e.vertex.code.add(a.H`vec3 normalModel() {
return normal;
}`);break;case n.ScreenDerivative:e.fragment.code.add(a.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,r.Xb)(o.normalType);case n.COUNT:}}!function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.ScreenDerivative=2]="ScreenDerivative",e[e.COUNT=3]="COUNT"}(n||(n={}))},59581:(e,o,t)=>{t.d(o,{A:()=>a});var n=t(51990),r=t(86955);function a(e){e.vertex.code.add(r.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${r.H.int(n.k5.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${r.H.int(n.k5.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${r.H.int(n.k5.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${r.H.int(n.k5.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}},81449:(e,o,t)=>{t.d(o,{W:()=>r});var n=t(86955);function r(e){e.code.add(n.H`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}`),e.code.add(n.H`const vec4 RGBA_TO_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgbaTofloat(vec4 rgba) {
return dot(rgba, RGBA_TO_FLOAT_FACTORS);
}`),e.code.add(n.H`const vec4 uninterpolatedRGBAToFloatFactors = vec4(
1.0 / 256.0,
1.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0 / 256.0
);
float uninterpolatedRGBAToFloat(vec4 rgba) {
return (dot(round(rgba * 255.0), uninterpolatedRGBAToFloatFactors) - 0.5) * 2.0;
}`)}}}]);
//# sourceMappingURL=50809.6257a201.chunk.js.map