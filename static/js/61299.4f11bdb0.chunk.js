"use strict";(self.webpackChunkopenspace=self.webpackChunkopenspace||[]).push([[61299],{1773:(e,t,o)=>{o.d(t,{Bz:()=>v,G:()=>m});o(13191),o(9392);var a=o(87572),r=o(51596),i=o(86955),n=o(53908),s=o(69728),l=o(87003);class c extends l.n{constructor(e,t,o){super(e,"mat4",s.c.Draw,((o,a,r,i)=>o.setUniformMatrix4fv(e,t(a,r,i))),o)}}class d extends l.n{constructor(e,t,o){super(e,"mat4",s.c.Pass,((o,a,r)=>o.setUniformMatrix4fv(e,t(a,r))),o)}}var u=o(4653),h=o(31432);h.Y;h.Y;function m(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new d("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),p(e))}function v(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new c("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),p(e))}function p(e){const t=e.fragment;t.include(a.U),t.uniforms.add(new u.x("shadowMap",(e=>e.shadowMap.depthTexture)),new n.W("numCascades",(e=>e.shadowMap.numCascades)),new r.I("cascadeDistances",(e=>e.shadowMap.cascadeDistances))).code.add(i.H`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}},9365:(e,t,o)=>{o.d(t,{n:()=>F});var a=o(86955),r=o(4653),i=o(35143),n=o(15941),s=o(30726),l=o(68134),c=o(91417),d=o(46053),u=(o(81806),o(76460),o(47249),o(85842)),h=o(19555),m=o(90364),v=o(16455),p=o(36451),f=o(48353),g=o(16506),x=o(59246),b=o(29228),T=o(57162);class w extends x.w{constructor(e,t){super(e,t,new g.$(b.S,(()=>o.e(91538).then(o.bind(o,91538)))))}initializePipeline(){return(0,T.Ey)({colorWrite:T.kn})}}var M=o(72745),S=o(31432);class y extends S.Y{constructor(){super(...arguments),this.projScale=1}}class C extends y{constructor(){super(...arguments),this.intensity=1}}class O extends S.Y{}class _ extends O{constructor(){super(...arguments),this.blurSize=(0,M.vt)()}}var N=o(51331);class E extends x.w{constructor(e,t){super(e,t,new g.$(N.S,(()=>o.e(43185).then(o.bind(o,43185)))))}initializePipeline(){return(0,T.Ey)({colorWrite:T.kn})}}var I=o(83490),A=o(93345),z=o(80895),H=o(96673);const G=2;let L=class extends p.A{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=m.OG.SSAO,this.isEnabled=()=>!1,this._enableTime=(0,c.l5)(0),this._passParameters=new C,this._drawParameters=new _}initialize(){const e=Uint8Array.from(atob("eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM"),(e=>e.charCodeAt(0))),t=new H.R;t.wrapMode=A.pF.CLAMP_TO_EDGE,t.pixelFormat=A.Ab.RGB,t.wrapMode=A.pF.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new z.g(this.renderingContext,t,e),this.techniques.precompile(E),this.techniques.precompile(w),this.addHandles((0,l.wB)((()=>this.isEnabled()),(()=>this._enableTime=(0,c.l5)(0))))}destroy(){this._passParameters.noiseTexture=(0,s.WD)(this._passParameters.noiseTexture)}render(e){const t=this.bindParameters,o=e.find((e=>{let{name:t}=e;return"normals"===t})),a=o?.getTexture(),r=o?.getTexture(A.nI),i=this.fboCache,s=t.camera,l=s.fullViewport[2],d=s.fullViewport[3],u=Math.round(l/G),p=Math.round(d/G),g=this.techniques.get(E),x=this.techniques.get(w);if(!g.compiled||!x.compiled)return this._enableTime=(0,c.l5)(performance.now()),this.requestRender(I.C7.UPDATE),i.acquire(u,p,m.OG.SSAO,v.N.RED);0===this._enableTime&&(this._enableTime=(0,c.l5)(performance.now()));const b=this.renderingContext,T=this.view.qualitySettings.fadeDuration,M=s.relativeElevation,S=(0,n.qE)((f.b-M)/(f.b-f.O),0,1),y=T>0?Math.min(T,performance.now()-this._enableTime)/T:1,C=y*S;this._passParameters.normalTexture=a,this._passParameters.depthTexture=r,this._passParameters.projScale=1/s.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*P/(0,N.g)(s)**6*C;const O=i.acquire(l,d,"ssao input",v.N.RG);b.bindFramebuffer(O.fbo),b.setViewport(0,0,l,d),b.bindTechnique(g,t,this._passParameters,this._drawParameters),b.screen.draw();const _=i.acquire(u,p,"ssao blur",v.N.RED);b.bindFramebuffer(_.fbo),this._drawParameters.colorTexture=O.getTexture(),(0,h.hZ)(this._drawParameters.blurSize,0,G/d),b.bindTechnique(x,t,this._passParameters,this._drawParameters),b.setViewport(0,0,u,p),b.screen.draw(),O.release();const z=i.acquire(u,p,m.OG.SSAO,v.N.RED);return b.bindFramebuffer(z.fbo),b.setViewport(0,0,l,d),b.setClearColor(1,1,1,0),b.clear(A.NV.COLOR),this._drawParameters.colorTexture=_.getTexture(),(0,h.hZ)(this._drawParameters.blurSize,G/l,0),b.bindTechnique(x,t,this._passParameters,this._drawParameters),b.setViewport(0,0,u,p),b.screen.draw(),b.setViewport4fv(s.fullViewport),_.release(),y<1&&this.requestRender(I.C7.UPDATE),z}};(0,i._)([(0,d.MZ)()],L.prototype,"consumes",void 0),(0,i._)([(0,d.MZ)()],L.prototype,"produces",void 0),(0,i._)([(0,d.MZ)({constructOnly:!0})],L.prototype,"isEnabled",void 0),L=(0,i._)([(0,u.$)("esri.views.3d.webgl-engine.effects.ssao.SSAO")],L);const P=.5;function F(e,t){const o=e.fragment;t.receiveAmbientOcclusion?(o.uniforms.add(new r.x("ssaoTex",(e=>e.ssao?.getTexture()))),o.constants.add("blurSizePixelsInverse","float",1/G),o.code.add(a.H`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):o.code.add(a.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},15710:(e,t,o)=>{o.d(t,{E:()=>b});var a=o(72412),r=o(34981),i=o(26917),n=o(59395),s=o(59046),l=o(90080),c=o(97808),d=o(55386),u=o(49399),h=o(20469),m=o(66763),v=o(90039),p=o(3799),f=o(86955),g=o(70367),x=o(83490);function b(e,t){const{vertex:o,fragment:b}=e,T=t.hasColorTexture&&t.alphaDiscardMode!==x.sf.Opaque,{output:w,normalType:M,hasColorTextureTransform:S}=t;switch(w){case r.V.Depth:(0,p.NB)(o,t),e.include(n.d,t),e.fragment.include(i.HQ,t),e.include(c.U,t),T&&b.uniforms.add(new g.N("tex",(e=>e.texture))),o.main.add(f.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(v.S,t),b.main.add(f.H`
        discardBySlice(vpos);
        ${(0,f.If)(T,f.H`vec4 texColor = texture(tex, ${S?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}`);break;case r.V.Shadow:case r.V.ShadowHighlight:case r.V.ShadowExcludeHighlight:case r.V.ViewshedShadow:case r.V.ObjectAndLayerIdColor:(0,p.NB)(o,t),e.include(n.d,t),e.include(c.U,t),e.include(m.A,t),e.include(u.L,t),e.fragment.include(i.HQ,t),e.include(l.g,t),(0,a.xJ)(e),e.varyings.add("depth","float"),T&&b.uniforms.add(new g.N("tex",(e=>e.texture))),o.main.add(f.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(v.S,t),b.main.add(f.H`
        discardBySlice(vpos);
        ${(0,f.If)(T,f.H`vec4 texColor = texture(tex, ${S?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        ${w===r.V.ObjectAndLayerIdColor?f.H`outputObjectAndLayerIdColor();`:f.H`outputDepth(depth);`}`);break;case r.V.Normal:{(0,p.NB)(o,t),e.include(n.d,t),e.include(s.Y,t),e.include(d.Mh,t),e.include(c.U,t),e.include(m.A,t),T&&b.uniforms.add(new g.N("tex",(e=>e.texture))),M===s.W.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const a=M===s.W.Attribute||M===s.W.Compressed;o.main.add(f.H`
        vpos = getVertexInLocalOriginSpace();
        ${a?f.H`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:f.H`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),e.fragment.include(i.HQ,t),e.include(v.S,t),b.main.add(f.H`
        discardBySlice(vpos);
        ${(0,f.If)(T,f.H`vec4 texColor = texture(tex, ${S?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}

        ${M===s.W.ScreenDerivative?f.H`vec3 normal = screenDerivativeNormal(vPositionView);`:f.H`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case r.V.Highlight:(0,p.NB)(o,t),e.include(n.d,t),e.include(c.U,t),e.include(m.A,t),T&&b.uniforms.add(new g.N("tex",(e=>e.texture))),o.main.add(f.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.fragment.include(i.HQ,t),e.include(v.S,t),e.include(h.Q,t),b.main.add(f.H`
        discardBySlice(vpos);
        ${(0,f.If)(T,f.H`vec4 texColor = texture(tex, ${S?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}},22148:(e,t,o)=>{o.d(t,{K:()=>l});var a=o(59581),r=o(86955),i=o(72790),n=o(66470),s=o(99362);function l(e,t){t.hasSymbolColors?(e.include(a.A),e.attributes.add(n.r.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(r.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new i.c("colorMixMode",(e=>s.Um[e.colorMixMode]))),e.vertex.code.add(r.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},27920:(e,t,o)=>{o.d(t,{W:()=>a,r:()=>s});var a,r,i=o(4212),n=o(86955);function s(e,t){const o=e.fragment;switch(o.code.add(n.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case a.None:o.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case a.View:o.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case a.WindingOrder:o.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,i.Xb)(t.doubleSidedMode);case a.COUNT:}}(r=a||(a={}))[r.None=0]="None",r[r.View=1]="View",r[r.WindingOrder=2]="WindingOrder",r[r.COUNT=3]="COUNT"},29228:(e,t,o)=>{o.d(t,{S:()=>m,b:()=>h});var a=o(73398),r=o(65058),i=o(56289),n=o(21390),s=o(86955),l=o(27374),c=o(70367),d=o(2687);const u=4;function h(){const e=new d.N5,t=e.fragment;e.include(a.c);const o=(u+1)/2,h=1/(2*o*o);return t.include(r.E),t.uniforms.add(new c.N("depthMap",(e=>e.depthTexture)),new l.o("tex",(e=>e.colorTexture)),new i.t("blurSize",(e=>e.blurSize)),new n.m("projScale",((e,t)=>{const o=t.camera.distance;return o>5e4?Math.max(0,e.projScale-(o-5e4)):e.projScale}))),t.code.add(s.H`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${s.H.float(h)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.main.add(s.H`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${s.H.int(u)}; r <= ${s.H.int(u)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),e}const m=Object.freeze(Object.defineProperty({__proto__:null,build:h},Symbol.toStringTag,{value:"Module"}))},35249:(e,t,o)=>{o.d(t,{R:()=>F,b:()=>P});var a=o(72412),r=o(62026),i=o(34981),n=o(26917),s=o(59395),l=o(45937),c=o(59046),d=o(838),u=o(22148),h=o(97808),m=o(54478),v=o(25530),p=o(15710),f=o(9365),g=o(67799),x=o(43557),b=o(42953),T=o(26719),w=o(1773),M=o(94192),S=o(66763),y=o(90039),C=o(77904),O=o(3799),_=o(5517),N=o(58350),E=o(21390),I=o(86955),A=o(70367),z=o(66470),H=o(91911),G=o(2687),L=o(75569);function P(e){const t=new G.N5,{vertex:o,fragment:P,varyings:F}=t,{output:D,offsetBackfaces:R,instancedColor:B,pbrMode:W,snowCover:V,spherical:j}=e,U=W===T.A9.Normal||W===T.A9.Schematic;if((0,O.NB)(o,e),t.include(d.I),F.add("vpos","vec3"),t.include(S.A,e),t.include(l.B,e),t.include(v.G,e),t.include(M.Z,e),(0,i.RN)(D)&&((0,O.yu)(t.vertex,e),t.include(c.Y,e),t.include(s.d,e),R&&t.include(r.M),B&&t.attributes.add(z.r.INSTANCECOLOR,"vec4"),F.add("vNormalWorld","vec3"),F.add("localvpos","vec3"),t.include(h.U,e),t.include(a.oD,e),t.include(u.K,e),t.include(m.c,e),o.uniforms.add(new N.E("externalColor",(e=>e.externalColor))),F.add("vcolorExt","vec4"),o.main.add(I.H`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${(0,I.If)(B,"vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      bool alphaCut = vcolorExt.a < ${I.H.float(L.Q)};
      vpos = getVertexInLocalOriginSpace();
      localvpos = vpos - view[3].xyz;
      vpos = subtractOrigin(vpos);
      vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
      vpos = addVerticalOffset(vpos, localOrigin);
      vec4 basePosition = transformPosition(proj, view, vpos);

      forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
      forwardLinearDepth();
      forwardTextureCoordinates();

      gl_Position = alphaCut ? vec4(1e38, 1e38, 1e38, 1.0) :
      ${(0,I.If)(R,"offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);","basePosition;")}
    `)),(0,i.RN)(D)){const{hasColorTexture:a,hasColorTextureTransform:r,receiveShadows:i}=e;t.include(g.kA,e),t.include(f.n,e),t.include(y.S,e),t.include(e.instancedDoublePrecision?w.G:w.Bz,e),t.fragment.include(n.HQ,e),t.include(H.z,e),(0,O.yu)(t.fragment,e),(0,x.Gc)(P),(0,g.a8)(P),(0,g.eU)(P),P.uniforms.add(o.uniforms.get("localOrigin"),o.uniforms.get("view"),new _.t("ambient",(e=>e.ambient)),new _.t("diffuse",(e=>e.diffuse)),new E.m("opacity",(e=>e.opacity)),new E.m("layerOpacity",(e=>e.layerOpacity))),a&&P.uniforms.add(new A.N("tex",(e=>e.texture))),t.include(T._Z,e),t.include(b.c,e),P.include(C.N),(0,x.O4)(P),P.main.add(I.H`
      discardBySlice(vpos);
      discardByTerrainDepth();
      vec4 texColor = ${a?`texture(tex, ${r?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${(0,I.If)(a,`${(0,I.If)(e.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}\n        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${i?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":j?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};
      vec3 matColor = max(ambient, diffuse);
      ${e.hasVertexColors?I.H`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:I.H`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
      ${(0,I.If)(V,"albedo = mix(albedo, vec3(1), 0.9);")}
      ${I.H`vec3 shadingNormal = normalize(vNormalWorld);
             albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}
      ${(0,I.If)(U,`vec3 normalGround = ${j?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${U?I.H`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${(0,I.If)(V,I.H`mrr = vec3(0.0, 1.0, 0.04);`)}
            vec4 emission = ${V?"vec4(0.0)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:I.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);`)}return t.include(p.E,e),t}const F=Object.freeze(Object.defineProperty({__proto__:null,build:P},Symbol.toStringTag,{value:"Module"}))},44230:(e,t,o)=>{o.d(t,{C:()=>c,Cr:()=>u,H6:()=>p,_I:()=>m,dz:()=>f,fA:()=>d,kb:()=>h,ld:()=>g,sd:()=>v,vt:()=>l});var a=o(15941),r=o(97467),i=o(20664),n=o(9392),s=o(75762);function l(e){return e?{origin:(0,n.o8)(e.origin),vector:(0,n.o8)(e.vector)}:{origin:(0,n.vt)(),vector:(0,n.vt)()}}function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l();return d(e.origin,e.vector,t)}function d(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l();return(0,i.c)(o.origin,e),(0,i.c)(o.vector,t),o}function u(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l();return(0,i.c)(o.origin,e),(0,i.d)(o.vector,t,e),o}function h(e,t){const o=(0,i.d)(s.rq.get(),t,e.origin),r=(0,i.f)(e.vector,o),n=(0,i.f)(e.vector,e.vector),l=(0,a.qE)(r/n,0,1),c=(0,i.d)(s.rq.get(),(0,i.h)(s.rq.get(),e.vector,l),o);return(0,i.f)(c,c)}function m(e,t,o){return p(e,t,0,1,o)}function v(e,t,o){return(0,i.g)(o,e.origin,(0,i.h)(o,e.vector,t))}function p(e,t,o,r,n){const{vector:l,origin:c}=e,d=(0,i.d)(s.rq.get(),t,c),u=(0,i.f)(l,d)/(0,i.k)(l);return(0,i.h)(n,l,(0,a.qE)(u,o,r)),(0,i.g)(n,n,e.origin)}function f(e,t){if(x(e,function(e,t){const o=T.get();return o.origin=e,o.vector=t,o}(t.origin,t.direction),!1,b)){const{tA:t,pB:o,distance2:a}=b;if(t>=0&&t<=1)return a;if(t<0)return(0,i.s)(e.origin,o);if(t>1)return(0,i.s)((0,i.g)(s.rq.get(),e.origin,e.vector),o)}return null}function g(e,t,o){return!!x(e,t,!0,b)&&((0,i.c)(o,b.pA),!0)}function x(e,t,o,r){const n=1e-6,l=e.origin,c=(0,i.g)(s.rq.get(),l,e.vector),d=t.origin,u=(0,i.g)(s.rq.get(),d,t.vector),h=s.rq.get(),m=s.rq.get();if(h[0]=l[0]-d[0],h[1]=l[1]-d[1],h[2]=l[2]-d[2],m[0]=u[0]-d[0],m[1]=u[1]-d[1],m[2]=u[2]-d[2],Math.abs(m[0])<n&&Math.abs(m[1])<n&&Math.abs(m[2])<n)return!1;const v=s.rq.get();if(v[0]=c[0]-l[0],v[1]=c[1]-l[1],v[2]=c[2]-l[2],Math.abs(v[0])<n&&Math.abs(v[1])<n&&Math.abs(v[2])<n)return!1;const p=h[0]*m[0]+h[1]*m[1]+h[2]*m[2],f=m[0]*v[0]+m[1]*v[1]+m[2]*v[2],g=h[0]*v[0]+h[1]*v[1]+h[2]*v[2],x=m[0]*m[0]+m[1]*m[1]+m[2]*m[2],b=(v[0]*v[0]+v[1]*v[1]+v[2]*v[2])*x-f*f;if(Math.abs(b)<n)return!1;let T=(p*f-g*x)/b,w=(p+f*T)/x;o&&(T=(0,a.qE)(T,0,1),w=(0,a.qE)(w,0,1));const M=s.rq.get(),S=s.rq.get();return M[0]=l[0]+T*v[0],M[1]=l[1]+T*v[1],M[2]=l[2]+T*v[2],S[0]=d[0]+w*m[0],S[1]=d[1]+w*m[1],S[2]=d[2]+w*m[2],r.tA=T,r.tB=w,r.pA=M,r.pB=S,r.distance2=(0,i.s)(M,S),!0}const b={tA:0,tB:0,pA:(0,n.vt)(),pB:(0,n.vt)(),distance2:0},T=new r.I((()=>l()))},45097:(e,t,o)=>{o.d(t,{Fm:()=>l,Q7:()=>c});var a=o(97467),r=o(20664),i=o(9392),n=o(44230);o(75762);function s(e){return e?{p0:(0,i.o8)(e.p0),p1:(0,i.o8)(e.p1),p2:(0,i.o8)(e.p2)}:{p0:(0,i.vt)(),p1:(0,i.vt)(),p2:(0,i.vt)()}}function l(e,t,o){const a=t[0]-e[0],r=t[1]-e[1],i=o[0]-e[0],n=o[1]-e[1];return.5*Math.abs(a*n-r*i)}function c(e,t,o){return(0,r.d)(d,t,e),(0,r.d)(u,o,e),.5*(0,r.l)((0,r.e)(d,d,u))}new a.I(n.vt),new a.I((()=>s()));const d=(0,i.vt)(),u=(0,i.vt)()},45937:(e,t,o)=>{o.d(t,{B:()=>b});var a=o(63919),r=o(44680),i=o(13191),n=o(20664),s=o(9392),l=o(34981),c=o(89299),d=o(3799),u=o(84115),h=o(86955),m=o(72106),v=o(43425),p=o(66470),f=o(99643),g=o(31432);g.Y;const x=(0,r.vt)();function b(e,t){const o=t.hasModelTransformation,r=t.instancedDoublePrecision;o&&(e.vertex.uniforms.add(new v.X("model",(e=>e.modelTransformation??i.zK))),e.vertex.uniforms.add(new m.k("normalLocalOriginFromModel",(e=>((0,a.Ge)(x,e.modelTransformation??i.zK),x))))),t.instanced&&r&&(e.attributes.add(p.r.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(p.r.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(p.r.INSTANCEMODEL,"mat3"),e.attributes.add(p.r.INSTANCEMODELNORMAL,"mat3"));const s=e.vertex;r&&(s.include(c.u,t),s.uniforms.add(new u.d("viewOriginHi",(e=>(0,f.Zo)((0,n.i)(T,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),T))),new u.d("viewOriginLo",(e=>(0,f.jA)((0,n.i)(T,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),T))))),s.code.add(h.H`
    vec3 getVertexInLocalOriginSpace() {
      return ${o?r?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":r?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${r?h.H`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),s.code.add(h.H`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${o?r?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":r?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),t.output===l.V.Normal&&((0,d.S7)(s),s.code.add(h.H`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${o?r?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":r?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),t.hasVertexTangents&&s.code.add(h.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${o?r?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":r?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const T=(0,s.vt)()},49399:(e,t,o)=>{o.d(t,{L:()=>n});var a=o(34981),r=o(87572),i=o(86955);function n(e,t){switch(t.output){case a.V.Shadow:case a.V.ShadowHighlight:case a.V.ShadowExcludeHighlight:case a.V.ViewshedShadow:e.fragment.include(r.U),e.fragment.code.add(i.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}},50819:(e,t,o)=>{o.d(t,{W:()=>u});var a=o(20664),r=o(9392),i=o(43047),n=o(55855),s=o(26719),l=o(84115),c=o(51596),d=o(86955);function u(e,t){const o=e.fragment,r=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===r?(o.uniforms.add(new l.d("lightingAmbientSH0",(e=>{let{lighting:t}=e;return(0,a.i)(h,t.sh.r[0],t.sh.g[0],t.sh.b[0])}))),o.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===r?(o.uniforms.add(new c.I("lightingAmbientSH_R",(e=>{let{lighting:t}=e;return(0,i.s)(m,t.sh.r[0],t.sh.r[1],t.sh.r[2],t.sh.r[3])})),new c.I("lightingAmbientSH_G",(e=>{let{lighting:t}=e;return(0,i.s)(m,t.sh.g[0],t.sh.g[1],t.sh.g[2],t.sh.g[3])})),new c.I("lightingAmbientSH_B",(e=>{let{lighting:t}=e;return(0,i.s)(m,t.sh.b[0],t.sh.b[1],t.sh.b[2],t.sh.b[3])}))),o.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===r&&(o.uniforms.add(new l.d("lightingAmbientSH0",(e=>{let{lighting:t}=e;return(0,a.i)(h,t.sh.r[0],t.sh.g[0],t.sh.b[0])})),new c.I("lightingAmbientSH_R1",(e=>{let{lighting:t}=e;return(0,i.s)(m,t.sh.r[1],t.sh.r[2],t.sh.r[3],t.sh.r[4])})),new c.I("lightingAmbientSH_G1",(e=>{let{lighting:t}=e;return(0,i.s)(m,t.sh.g[1],t.sh.g[2],t.sh.g[3],t.sh.g[4])})),new c.I("lightingAmbientSH_B1",(e=>{let{lighting:t}=e;return(0,i.s)(m,t.sh.b[1],t.sh.b[2],t.sh.b[3],t.sh.b[4])})),new c.I("lightingAmbientSH_R2",(e=>{let{lighting:t}=e;return(0,i.s)(m,t.sh.r[5],t.sh.r[6],t.sh.r[7],t.sh.r[8])})),new c.I("lightingAmbientSH_G2",(e=>{let{lighting:t}=e;return(0,i.s)(m,t.sh.g[5],t.sh.g[6],t.sh.g[7],t.sh.g[8])})),new c.I("lightingAmbientSH_B2",(e=>{let{lighting:t}=e;return(0,i.s)(m,t.sh.b[5],t.sh.b[6],t.sh.b[7],t.sh.b[8])}))),o.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==s.A9.Normal&&t.pbrMode!==s.A9.Schematic||o.code.add(d.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const h=(0,r.vt)(),m=(0,n.vt)()},51331:(e,t,o)=>{o.d(t,{S:()=>b,b:()=>f,g:()=>g});var a=o(19555),r=o(72745),i=o(73398),n=o(65058),s=o(27963),l=o(28450),c=o(95756),d=o(23148),u=o(21390),h=o(86955),m=o(70367),v=o(2687);const p=16;function f(){const e=new v.N5,t=e.fragment;return e.include(i.c),e.include(s.Ir),t.include(n.E),t.uniforms.add(new d.U("radius",(e=>g(e.camera)))).code.add(h.H`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),t.code.add(h.H`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add(new m.N("normalMap",(e=>e.normalTexture)),new m.N("depthMap",(e=>e.depthTexture)),new u.m("projScale",(e=>e.projScale)),new m.N("rnm",(e=>e.noiseTexture)),new c.G("rnmScale",((e,t)=>(0,a.hZ)(x,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height))),new u.m("intensity",(e=>e.intensity)),new l.E("screenSize",(e=>(0,a.hZ)(x,e.camera.fullWidth,e.camera.fullHeight)))),e.outputs.add("fragOcclusion","float"),t.main.add(h.H`
      float depth = depthFromTexture(depthMap, uv);

      // Early out if depth is out of range, such as in the sky
      if (depth >= 1.0 || depth <= 0.0) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      float currentPixelDepth = linearizeDepth(depth);
      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${h.H.int(p)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${h.H.int(p)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

      fragOcclusion = A;`),e}function g(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const x=(0,r.vt)(),b=Object.freeze(Object.defineProperty({__proto__:null,build:f,getRadius:g},Symbol.toStringTag,{value:"Module"}))},55386:(e,t,o)=>{o.d(t,{Mh:()=>u,Zo:()=>h,gy:()=>m});var a=o(4212),r=o(44680),i=o(55855),n=o(59046),s=o(36358),l=o(86955),c=o(42759),d=o(72106);function u(e,t){switch(t.normalType){case n.W.Attribute:case n.W.Compressed:e.include(n.Y,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new c.h("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new d.k("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))),e.vertex.code.add(l.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case n.W.ScreenDerivative:e.vertex.code.add(l.H`void forwardNormal() {}`);break;default:(0,a.Xb)(t.normalType);case n.W.COUNT:}}class h extends s.dO{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,r.vt)()}}class m extends s.EM{constructor(){super(...arguments),this.transformNormalGlobalFromModel=(0,r.vt)(),this.toMapSpace=(0,i.vt)()}}},55696:(e,t,o)=>{o.d(t,{MU:()=>c,O1:()=>d,QM:()=>u,Sx:()=>l,q2:()=>s});var a=o(44680),r=o(97808),i=o(86955),n=o(72106);function s(e,t){t.hasColorTextureTransform?(e.varyings.add("colorUV","vec2"),e.vertex.uniforms.add(new n.k("colorTextureTransformMatrix",(e=>e.colorTextureTransformMatrix??a.zK))).code.add(i.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardColorUV(){}`)}function l(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==r.I.None?(e.varyings.add("normalUV","vec2"),e.vertex.uniforms.add(new n.k("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??a.zK))).code.add(i.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardNormalUV(){}`)}function c(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==r.I.None?(e.varyings.add("emissiveUV","vec2"),e.vertex.uniforms.add(new n.k("emissiveTextureTransformMatrix",(e=>e.emissiveTextureTransformMatrix??a.zK))).code.add(i.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardEmissiveUV(){}`)}function d(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==r.I.None?(e.varyings.add("occlusionUV","vec2"),e.vertex.uniforms.add(new n.k("occlusionTextureTransformMatrix",(e=>e.occlusionTextureTransformMatrix??a.zK))).code.add(i.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardOcclusionUV(){}`)}function u(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==r.I.None?(e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.uniforms.add(new n.k("metallicRoughnessTextureTransformMatrix",(e=>e.metallicRoughnessTextureTransformMatrix??a.zK))).code.add(i.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i.H`void forwardMetallicRoughnessUV(){}`)}},59648:(e,t,o)=>{o.d(t,{R5:()=>M,V:()=>w,uD:()=>T});var a=o(9392),r=o(55855),i=o(34981),n=o(59046),s=o(55386),l=o(16506),c=o(59246),d=o(83490),u=o(45463),h=o(72001),m=o(60322),v=o(96643),p=o(78992),f=o(68745),g=o(93345),x=o(57162),b=o(75569);class T extends s.Zo{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=p.mb,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=d.s2.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=a.uY,this.instancedDoublePrecision=!1,this.normalType=n.W.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=(0,a.CN)(.2,.2,.2),this.diffuse=(0,a.CN)(.8,.8,.8),this.externalColor=(0,r.fA)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,a.vt)(),this.hasSlicePlane=!1,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=d.it.Less,this.textureAlphaMode=d.sf.Blend,this.textureAlphaCutoff=b.Q,this.textureAlphaPremultiplied=!1,this.renderOccluded=u.m$.Occlude,this.isDecoration=!1}}class w extends s.gy{constructor(){super(...arguments),this.origin=(0,a.vt)(),this.slicePlaneLocalOrigin=this.origin}}class M extends c.w{constructor(e,t){super(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:new l.$(f.D,(()=>o.e(23727).then(o.bind(o,23727))))),this.type="DefaultMaterialTechnique"}_makePipeline(e,t){const{oitPass:o,output:a,transparent:r,cullFace:n,customDepthTest:s,hasOccludees:l,enableOffset:c}=e,d=o===h.Y.NONE,u=o===h.Y.FrontFace;return(0,x.Ey)({blending:(0,i.RN)(a)&&r?(0,m.Yf)(o):null,culling:y(e)?(0,x.Xt)(n):null,depthTest:{func:(0,m.K_)(o,S(s))},depthWrite:(0,m.z5)(e),drawBuffers:a===i.V.Depth?{buffers:[g.Hr.NONE]}:(0,m.m6)(o,a),colorWrite:x.kn,stencilWrite:l?v.v0:null,stencilTest:l?t?v.a9:v.qh:null,polygonOffset:d||u?null:(0,m.aB)(c)})}initializePipeline(e){return this._occludeePipelineState=this._makePipeline(e,!0),this._makePipeline(e,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}function S(e){return e===d.it.Lequal?g.MT.LEQUAL:g.MT.LESS}function y(e){return e.cullFace!==d.s2.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}},62026:(e,t,o)=>{o.d(t,{M:()=>r});var a=o(86955);function r(e){e.vertex.code.add(a.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},65131:(e,t,o)=>{o.d(t,{$U:()=>H});var a=o(20664),r=o(9392),i=o(64465),n=o(48549),s=o(34981),l=o(59046),c=o(42717),d=o(27920),u=o(26719),h=o(61785),m=o(83490),v=o(75803),p=o(45463),f=o(60322),g=o(48168),x=o(77730),b=o(66470),T=o(97974),w=o(82809),M=o(99362),S=o(59648),y=o(35143),C=o(97808),O=o(6485),_=o(94570);class N extends _.E{constructor(e,t){super(),this.spherical=e,this.doublePrecisionRequiresObfuscation=t,this.alphaDiscardMode=m.sf.Opaque,this.doubleSidedMode=d.W.None,this.pbrMode=u.A9.Disabled,this.cullFace=m.s2.None,this.normalType=l.W.Attribute,this.customDepthTest=m.it.Less,this.emissionSource=c.ZX.None,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.hasVvInstancing=!0,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0}get textureCoordinateType(){return this.hasColorTexture||this.hasMetallicRoughnessTexture||this.emissionSource===c.ZX.Texture||this.hasOcclusionTexture||this.hasNormalTexture?C.I.Default:C.I.None}get objectAndLayerIdColorInstanced(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}(0,y._)([(0,O.W)({count:m.sf.COUNT})],N.prototype,"alphaDiscardMode",void 0),(0,y._)([(0,O.W)({count:d.W.COUNT})],N.prototype,"doubleSidedMode",void 0),(0,y._)([(0,O.W)({count:u.A9.COUNT})],N.prototype,"pbrMode",void 0),(0,y._)([(0,O.W)({count:m.s2.COUNT})],N.prototype,"cullFace",void 0),(0,y._)([(0,O.W)({count:l.W.COUNT})],N.prototype,"normalType",void 0),(0,y._)([(0,O.W)({count:m.it.COUNT})],N.prototype,"customDepthTest",void 0),(0,y._)([(0,O.W)({count:c.ZX.COUNT})],N.prototype,"emissionSource",void 0),(0,y._)([(0,O.W)()],N.prototype,"hasVertexColors",void 0),(0,y._)([(0,O.W)()],N.prototype,"hasSymbolColors",void 0),(0,y._)([(0,O.W)()],N.prototype,"hasVerticalOffset",void 0),(0,y._)([(0,O.W)()],N.prototype,"hasColorTexture",void 0),(0,y._)([(0,O.W)()],N.prototype,"hasMetallicRoughnessTexture",void 0),(0,y._)([(0,O.W)()],N.prototype,"hasOcclusionTexture",void 0),(0,y._)([(0,O.W)()],N.prototype,"hasNormalTexture",void 0),(0,y._)([(0,O.W)()],N.prototype,"hasScreenSizePerspective",void 0),(0,y._)([(0,O.W)()],N.prototype,"hasVertexTangents",void 0),(0,y._)([(0,O.W)()],N.prototype,"hasOccludees",void 0),(0,y._)([(0,O.W)()],N.prototype,"hasModelTransformation",void 0),(0,y._)([(0,O.W)()],N.prototype,"offsetBackfaces",void 0),(0,y._)([(0,O.W)()],N.prototype,"vvSize",void 0),(0,y._)([(0,O.W)()],N.prototype,"vvColor",void 0),(0,y._)([(0,O.W)()],N.prototype,"receiveShadows",void 0),(0,y._)([(0,O.W)()],N.prototype,"receiveAmbientOcclusion",void 0),(0,y._)([(0,O.W)()],N.prototype,"textureAlphaPremultiplied",void 0),(0,y._)([(0,O.W)()],N.prototype,"instanced",void 0),(0,y._)([(0,O.W)()],N.prototype,"instancedColor",void 0),(0,y._)([(0,O.W)()],N.prototype,"writeDepth",void 0),(0,y._)([(0,O.W)()],N.prototype,"transparent",void 0),(0,y._)([(0,O.W)()],N.prototype,"enableOffset",void 0),(0,y._)([(0,O.W)()],N.prototype,"terrainDepthTest",void 0),(0,y._)([(0,O.W)()],N.prototype,"cullAboveTerrain",void 0),(0,y._)([(0,O.W)()],N.prototype,"snowCover",void 0),(0,y._)([(0,O.W)()],N.prototype,"hasColorTextureTransform",void 0),(0,y._)([(0,O.W)()],N.prototype,"hasEmissionTextureTransform",void 0),(0,y._)([(0,O.W)()],N.prototype,"hasNormalTextureTransform",void 0),(0,y._)([(0,O.W)()],N.prototype,"hasOcclusionTextureTransform",void 0),(0,y._)([(0,O.W)()],N.prototype,"hasMetallicRoughnessTextureTransform",void 0);var E=o(16506),I=o(35249);class A extends S.R5{constructor(e,t){super(e,t,new E.$(I.R,(()=>o.e(77919).then(o.bind(o,77919))))),this.type="RealisticTreeTechnique"}}var z=o(75569);class H extends p.im{constructor(e,t){super(e,L),this.materialType="default",this.supportsEdges=!0,this.produces=new Map([[x.N.OPAQUE_MATERIAL,e=>((0,s.iq)(e)||(0,s.PJ)(e))&&!this.parameters.transparent],[x.N.TRANSPARENT_MATERIAL,e=>((0,s.iq)(e)||(0,s.PJ)(e))&&this.parameters.transparent&&this.parameters.writeDepth],[x.N.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,e=>((0,s.XY)(e)||(0,s.PJ)(e))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._vertexBufferLayout=function(e){const t=(0,n.BP)().vec3f(b.r.POSITION);return e.normalType===l.W.Compressed?t.vec2i16(b.r.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(b.r.NORMAL),e.hasVertexTangents&&t.vec4f(b.r.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(b.r.UV0),e.hasVertexColors&&t.vec4u8(b.r.COLOR),e.hasSymbolColors&&t.vec4u8(b.r.SYMBOLCOLOR),(0,h.E)()&&t.vec4u8(b.r.OBJECTANDLAYERIDCOLOR),t}(this.parameters),this._configuration=new N(t.spherical,t.doublePrecisionRequiresObfuscation)}isVisibleForOutput(e){return e!==s.V.Shadow&&e!==s.V.ShadowExcludeHighlight&&e!==s.V.ShadowHighlight||this.parameters.castShadows}get visible(){const e=this.parameters;if(e.layerOpacity<z.Q)return!1;const{hasInstancedColor:t,hasVertexColors:o,hasSymbolColors:a,vvColor:r}=e,i=t||r||a,n="replace"===e.colorMixMode,s=e.opacity>=z.Q;if(o&&i)return n||s;const l=e.externalColor&&e.externalColor[3]>=z.Q;return o?n?l:s:i?n||s:n?l:s}get hasEmissions(){return!!this.parameters.emissiveTextureId||!(0,a.p)(this.parameters.emissiveFactor,r.uY)}getConfiguration(e,t){const o=this.parameters,{treeRendering:a,doubleSided:r,doubleSidedType:i}=o;return this._configuration.output=e,this._configuration.hasNormalTexture=!a&&!!o.normalTextureId,this._configuration.hasColorTexture=!!o.textureId,this._configuration.hasVertexTangents=!a&&o.hasVertexTangents,this._configuration.instanced=o.isInstanced,this._configuration.instancedDoublePrecision=o.instancedDoublePrecision,this._configuration.vvSize=!!o.vvSize,this._configuration.hasVerticalOffset=null!=o.verticalOffset,this._configuration.hasScreenSizePerspective=null!=o.screenSizePerspective,this._configuration.hasSlicePlane=o.hasSlicePlane,this._configuration.alphaDiscardMode=o.textureAlphaMode,this._configuration.normalType=a?l.W.Attribute:o.normalType,this._configuration.transparent=o.transparent,this._configuration.writeDepth=o.writeDepth,null!=o.customDepthTest&&(this._configuration.customDepthTest=o.customDepthTest),this._configuration.hasOccludees=t.hasOccludees,this._configuration.cullFace=o.hasSlicePlane?m.s2.None:o.cullFace,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.hasModelTransformation=!a&&null!=o.modelTransformation,this._configuration.hasVertexColors=o.hasVertexColors,this._configuration.hasSymbolColors=o.hasSymbolColors,this._configuration.doubleSidedMode=a?d.W.WindingOrder:r&&"normal"===i?d.W.View:r&&"winding-order"===i?d.W.WindingOrder:d.W.None,this._configuration.instancedColor=o.hasInstancedColor,(0,s.RN)(e)?(this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.receiveShadows=o.receiveShadows,this._configuration.receiveAmbientOcclusion=o.receiveAmbientOcclusion&&null!=t.ssao):(this._configuration.terrainDepthTest=!1,this._configuration.receiveShadows=this._configuration.receiveAmbientOcclusion=!1),this._configuration.vvColor=!!o.vvColor,this._configuration.textureAlphaPremultiplied=!!o.textureAlphaPremultiplied,this._configuration.pbrMode=o.usePBR?o.isSchematic?u.A9.Schematic:u.A9.Normal:u.A9.Disabled,this._configuration.hasMetallicRoughnessTexture=!a&&!!o.metallicRoughnessTextureId,this._configuration.emissionSource=a?c.ZX.None:null!=o.emissiveTextureId?c.ZX.Texture:o.usePBR?c.ZX.Value:c.ZX.None,this._configuration.hasOcclusionTexture=!a&&!!o.occlusionTextureId,this._configuration.offsetBackfaces=!(!o.transparent||!o.offsetTransparentBackfaces),this._configuration.oitPass=t.oitPass,this._configuration.enableOffset=t.camera.relativeElevation<f.xt,this._configuration.snowCover=function(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}(t),this._configuration.hasColorTextureTransform=!!o.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!o.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!o.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!o.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!o.metallicRoughnessTextureTransformMatrix,this._configuration}intersect(e,t,o,r,n,s){if(null!=this.parameters.verticalOffset){const e=o.camera;(0,a.i)(W,t[12],t[13],t[14]);let s=null;switch(o.viewingMode){case i.RT.Global:s=(0,a.n)(R,W);break;case i.RT.Local:s=(0,a.c)(R,D)}let l=0;const c=(0,a.d)(V,W,e.eye),d=(0,a.l)(c),u=(0,a.h)(c,c,1/d);let h=null;this.parameters.screenSizePerspective&&(h=(0,a.f)(s,u)),l+=(0,M.kE)(e,d,this.parameters.verticalOffset,h??0,this.parameters.screenSizePerspective),(0,a.h)(s,s,l),(0,a.q)(B,s,o.transform.inverseRotation),r=(0,a.d)(P,r,B),n=(0,a.d)(F,n,B)}(0,g.Uy)(e,o,r,n,(0,T.ou)(o.verticalOffset),s)}createGLMaterial(e){return new G(e)}createBufferWriter(){return new w.Z(this._vertexBufferLayout)}}class G extends v.m8{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){this._material.setParameters({receiveShadows:e.shadowMap.enabled});const t=this._material.parameters;this.updateTexture(t.textureId);const o=e.camera.viewInverseTransposeMatrix;return(0,a.i)(t.origin,o[3],o[7],o[11]),this._material.setParameters(this.textureBindParameters),this.getTechnique(t.treeRendering?A:S.R5,e)}}class L extends S.uD{constructor(){super(...arguments),this.treeRendering=!1,this.hasVertexTangents=!1}}const P=(0,r.vt)(),F=(0,r.vt)(),D=(0,r.fA)(0,0,1),R=(0,r.vt)(),B=(0,r.vt)(),W=(0,r.vt)(),V=(0,r.vt)()},67799:(e,t,o)=>{o.d(t,{a8:()=>p,eU:()=>f,kA:()=>g});var a=o(99746),r=o(4212),i=o(50819),n=o(9365),s=o(43557),l=o(42953),c=o(26719),d=o(36324),u=o(67582),h=o(23148),m=o(86955),v=o(4998);function p(e){e.constants.add("ambientBoostFactor","float",v.uH)}function f(e){e.uniforms.add(new h.U("lightingGlobalFactor",(e=>e.lighting.globalFactor)))}function g(e,t){const o=e.fragment;switch(e.include(n.n,t),t.pbrMode!==c.A9.Disabled&&e.include(l.c,t),e.include(i.W,t),e.include(d.p),o.code.add(m.H`
    const float GAMMA_SRGB = ${m.H.float(a.Tf)};
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===c.A9.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),p(o),f(o),(0,s.Gc)(o),o.code.add(m.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?m.H`normalize(vPosWorld)`:m.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,s.O4)(o),o.code.add(m.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case c.A9.Disabled:case c.A9.WaterOnIntegratedMesh:case c.A9.Water:e.include(s.Vt),o.code.add(m.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case c.A9.Normal:case c.A9.Schematic:o.code.add(m.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec4 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),o.code.add(m.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?o.uniforms.add(new u.o("hasFillLights",(e=>e.enableFillLights))):o.constants.add("hasFillLights","bool",!1),o.code.add(m.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),o.uniforms.add(new h.U("lightingSpecularStrength",(e=>e.lighting.mainLight.specularStrength)),new h.U("lightingEnvironmentStrength",(e=>e.lighting.mainLight.environmentStrength))).code.add(m.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),o.code.add(m.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission.rgb == vec3(0.0) ? _emission.rgb : pow(_emission.rgb, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==c.A9.Schematic||t.hasColorTexture?m.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:m.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case c.A9.Simplified:case c.A9.TerrainWithWater:(0,s.Gc)(o),(0,s.O4)(o),o.code.add(m.H`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:(0,r.Xb)(t.pbrMode);case c.A9.COUNT:}}},68745:(e,t,o)=>{o.d(t,{D:()=>W,b:()=>B});var a=o(72412),r=o(62026),i=o(34981),n=o(26917),s=o(59395),l=o(45937),c=o(59046),d=o(838),u=o(22148),h=o(97808),m=o(54478),v=o(55386),p=o(25530),f=o(15710),g=o(72937),x=o(9365),b=o(67799),T=o(43557),w=o(27920),M=o(42953),S=o(26719),y=o(1773),C=o(94192),O=o(55696),_=o(66763),N=o(90039),E=o(77904),I=o(3799),A=o(5517),z=o(58350),H=o(21390),G=o(86955),L=o(70367),P=o(66470),F=o(91911),D=o(2687),R=o(75569);function B(e){const t=new D.N5,{vertex:o,fragment:B,varyings:W}=t,{output:V,normalType:j,offsetBackfaces:U,instancedColor:q,spherical:Y,receiveShadows:Z,snowCover:J,pbrMode:k,textureAlphaPremultiplied:X,instancedDoublePrecision:$,hasVertexColors:K,hasVertexTangents:Q,hasColorTexture:ee,hasNormalTexture:te,hasNormalTextureTransform:oe,hasColorTextureTransform:ae}=e;if((0,I.NB)(o,e),t.include(d.I),W.add("vpos","vec3"),t.include(_.A,e),t.include(l.B,e),t.include(p.G,e),t.include(O.q2,e),!(0,i.RN)(V))return t.include(f.E,e),t;t.include(O.Sx,e),t.include(O.MU,e),t.include(O.O1,e),t.include(O.QM,e),(0,I.yu)(o,e),t.include(c.Y,e),t.include(s.d,e);const re=j===c.W.Attribute||j===c.W.Compressed;return re&&U&&t.include(r.M),t.include(g.W,e),t.include(v.Mh,e),q&&t.attributes.add(P.r.INSTANCECOLOR,"vec4"),W.add("vPositionLocal","vec3"),t.include(h.U,e),t.include(a.oD,e),t.include(u.K,e),t.include(m.c,e),o.uniforms.add(new z.E("externalColor",(e=>e.externalColor))),W.add("vcolorExt","vec4"),t.include(C.Z,e),o.main.add(G.H`
    forwardNormalizedVertexColor();
    vcolorExt = externalColor;
    ${(0,G.If)(q,"vcolorExt *= instanceColor * 0.003921568627451;")}
    vcolorExt *= vvColor();
    vcolorExt *= getSymbolColor();
    forwardColorMixMode();

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${(0,G.If)(re,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${(0,G.If)(Q,"vTangent = dpTransformVertexTangent(tangent);")}
    gl_Position = transformPosition(proj, view, vpos);
    ${(0,G.If)(re&&U,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardLinearDepth();
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (vcolorExt.a < ${G.H.float(R.Q)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
  `),t.include(b.kA,e),t.include(x.n,e),t.include(N.S,e),t.include($?y.G:y.Bz,e),t.fragment.include(n.HQ,e),t.include(F.z,e),(0,I.yu)(B,e),B.uniforms.add(o.uniforms.get("localOrigin"),new A.t("ambient",(e=>e.ambient)),new A.t("diffuse",(e=>e.diffuse)),new H.m("opacity",(e=>e.opacity)),new H.m("layerOpacity",(e=>e.layerOpacity))),ee&&B.uniforms.add(new L.N("tex",(e=>e.texture))),t.include(S._Z,e),t.include(M.c,e),B.include(E.N),t.include(w.r,e),(0,b.a8)(B),(0,b.eU)(B),(0,T.O4)(B),B.main.add(G.H`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${ee?G.H`
            vec4 texColor = texture(tex, ${ae?"colorUV":"vuv0"});
            ${(0,G.If)(X,"texColor.rgb /= texColor.a;")}
            discardOrAdjustAlpha(texColor);`:G.H`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${j===c.W.ScreenDerivative?G.H`vec3 normal = screenDerivativeNormal(vPositionLocal);`:G.H`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${Z?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":(0,G.If)(Y,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${(0,G.If)(K,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
    float opacity_ = layerOpacity * mixExternalOpacity(${(0,G.If)(K,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
    ${te?`mat3 tangentSpace = computeTangentSpace(${Q?"normal":"normal, vpos, vuv0"});\n            vec3 shadingNormal = computeTextureNormal(tangentSpace, ${oe?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
    vec3 normalGround = ${Y?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

    ${(0,G.If)(J,G.H`
          float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${k===S.A9.Normal||k===S.A9.Schematic?G.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${(0,G.If)(J,G.H`mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);`)}
            vec4 emission = ${J?"mix(getEmissions(), vec4(0.0), snow)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:G.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOID(finalColor, vpos);
  `),t}const W=Object.freeze(Object.defineProperty({__proto__:null,build:B},Symbol.toStringTag,{value:"Module"}))},72937:(e,t,o)=>{o.d(t,{W:()=>p});var a=o(44680),r=o(72745),i=o(97808),n=o(95352),s=o(27920),l=o(95756),c=o(86955),d=o(72106),u=o(27374),h=o(70367),m=o(66470),v=o(69728);function p(e,t){const o=e.fragment;t.hasVertexTangents?(e.attributes.add(m.r.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===s.W.WindingOrder?o.code.add(c.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):o.code.add(c.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):o.code.add(c.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),t.textureCoordinateType!==i.I.None&&(e.include(n.r,t),o.uniforms.add(t.bindType===v.c.Pass?new h.N("normalTexture",(e=>e.textureNormal)):new u.o("normalTexture",(e=>e.textureNormal))),t.hasNormalTextureTransform&&(o.uniforms.add(new l.G("scale",(e=>e.scale??r.Un))),o.uniforms.add(new d.k("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??a.zK)))),o.code.add(c.H`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),t.hasNormalTextureTransform&&o.code.add(c.H`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),o.code.add(c.H`return tangentSpace * rawNormal;
}`))}},77904:(e,t,o)=>{o.d(t,{N:()=>n});var a=o(51990),r=o(80883),i=o(86955);function n(e){e.include(r.a),e.code.add(i.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${i.H.int(a.k5.Multiply)}) {
        return allMixed;
      }
      if (mode == ${i.H.int(a.k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.H.int(a.k5.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${i.H.int(a.k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.H.int(a.k5.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},87572:(e,t,o)=>{o.d(t,{U:()=>r});var a=o(86955);function r(e){e.code.add(a.H`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}},90039:(e,t,o)=>{o.d(t,{S:()=>l});o(69728);var a=o(87003);a.n;var r=o(21390),i=o(86955),n=o(83490),s=o(75569);function l(e,t){c(e,t,new r.m("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function c(e,t,o){const a=e.fragment,r=t.alphaDiscardMode,l=r===n.sf.Blend;r!==n.sf.Mask&&r!==n.sf.MaskBlend||a.uniforms.add(o),a.code.add(i.H`
    void discardOrAdjustAlpha(inout vec4 color) {
      ${r===n.sf.Opaque?"color.a = 1.0;":`if (color.a < ${l?i.H.float(s.Q):"textureAlphaCutoff"}) {\n              discard;\n             } ${(0,i.If)(r===n.sf.Mask,"else { color.a = 1.0; }")}`}
    }
  `)}}}]);
//# sourceMappingURL=61299.4f11bdb0.chunk.js.map