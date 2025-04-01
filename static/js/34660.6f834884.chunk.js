"use strict";(self.webpackChunkopenspace=self.webpackChunkopenspace||[]).push([[34660],{26373:(e,t,r)=>{r.d(t,{r:()=>n});var i=r(44488);function n(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return new i.B(e,r+t.shaders.vertexShader,r+t.shaders.fragmentShader,t.attributes)}},36911:(e,t,r)=>{r.d(t,{Z:()=>c});var i=r(76460),n=r(30726),o=r(97255),a=r(93345),s=r(27207);const l=()=>i.A.getLogger("esri.views.webgl.VertexArrayObject");let c=class{constructor(e,t,r,i){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;this._context=e,this._locations=t,this._layout=r,this._buffers=i,this._indexBuffer=n,this._glName=null,this._initialized=!1}get glName(){return this._glName}get context(){return this._context}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get byteSize(){return Array.from(this._buffers.values()).reduce(((e,t)=>e+t.usedMemory),null!=this._indexBuffer?this._indexBuffer.usedMemory:0)}get layout(){return this._layout}get locations(){return this._locations}get usedMemory(){return this.byteSize+(this._buffers.size+(this._indexBuffer?1:0))*o.i5}get cachedMemory(){return this.usedMemory}dispose(){this._context?(this._context.getBoundVAO()===this&&this._context.bindVAO(null),this._buffers.forEach((e=>e.dispose())),this._buffers.clear(),this._indexBuffer=(0,n.WD)(this._indexBuffer),this.disposeVAOOnly()):(this._glName||this._buffers.size>0)&&l().warn("Leaked WebGL VAO")}disposeVAOOnly(){this._glName&&(this._context.gl.deleteVertexArray(this._glName),this._glName=null,this._context.instanceCounter.decrement(a.vt.VertexArrayObject,this)),this._context=null}initialize(){if(this._initialized)return;const{gl:e}=this._context,t=e.createVertexArray();e.bindVertexArray(t),this._bindLayout(),e.bindVertexArray(null),this._glName=t,this._context.instanceCounter.increment(a.vt.VertexArrayObject,this),this._initialized=!0}bind(){this.initialize(),this._context.gl.bindVertexArray(this.glName)}_bindLayout(){const{_buffers:e,_layout:t,_indexBuffer:r}=this;e||l().error("Vertex buffer dictionary is empty!");const i=this._context.gl;this._buffers.forEach(((e,r)=>{const i=t.get(r);i?(0,s.yu)(this._context,this._locations,e,i):l().error("Vertex element descriptor is empty!")})),null!=r&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,r.glName)}unbind(){this.initialize(),this._context.gl.bindVertexArray(null)}}},44488:(e,t,r)=>{r.d(t,{B:()=>b});r(81806);var i=r(61678),n=r(93345);const o=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"],a=!1,s=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"],l=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"],c=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT","textureSize","texelFetch"];var h=999,u=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function f(){var e,t,r,i=0,n=0,o=h,a=[],f=[],g=1,_=0,d=0,m=!1,p=!1,x="";return function(e){return f=[],null!==e?T(e.replace?e.replace(/\r\n/g,"\n"):e):(a.length&&y(a.join("")),o=10,y("(eof)"),f)};function y(e){e.length&&f.push({type:u[o],data:e,position:d,line:g,column:_})}function T(t){var a;for(i=0,r=(x+=t).length;e=x[i],i<r;){switch(a=i,o){case 0:i=S();break;case 1:case 2:i=b();break;case 3:i=A();break;case 4:i=M();break;case 11:i=D();break;case 5:i=w();break;case 9999:i=C();break;case 9:i=E();break;case h:i=v()}a!==i&&("\n"===x[a]?(_=0,++g):++_)}return n+=i,x=x.slice(i),f}function v(){return a=a.length?[]:a,"/"===t&&"*"===e?(d=n+i-1,o=0,t=e,i+1):"/"===t&&"/"===e?(d=n+i-1,o=1,t=e,i+1):"#"===e?(o=2,d=n+i,i):/\s/.test(e)?(o=9,d=n+i,i):(m=/\d/.test(e),p=/[^\w_]/.test(e),d=n+i,o=m?4:p?3:9999,i)}function E(){return/[^\s]/g.test(e)?(y(a.join("")),o=h,i):(a.push(e),t=e,i+1)}function b(){return"\r"!==e&&"\n"!==e||"\\"===t?(a.push(e),t=e,i+1):(y(a.join("")),o=h,i)}function S(){return"/"===e&&"*"===t?(a.push(e),y(a.join("")),o=h,i+1):(a.push(e),t=e,i+1)}function A(){if("."===t&&/\d/.test(e))return o=5,i;if("/"===t&&"*"===e)return o=0,i;if("/"===t&&"/"===e)return o=1,i;if("."===e&&a.length){for(;U(a););return o=5,i}if(";"===e||")"===e||"("===e){if(a.length)for(;U(a););return y(e),o=h,i+1}var r=2===a.length&&"="!==e;if(/[\w_\d\s]/.test(e)||r){for(;U(a););return o=h,i}return a.push(e),t=e,i+1}function U(e){for(var t,r,i=0;;){if(t=l.indexOf(e.slice(0,e.length+i).join("")),r=l[t],-1===t){if(i--+e.length>0)continue;r=e.slice(0,1).join("")}return y(r),d+=r.length,(a=a.slice(r.length)).length}}function D(){return/[^a-fA-F0-9]/.test(e)?(y(a.join("")),o=h,i):(a.push(e),t=e,i+1)}function M(){return"."===e||/[eE]/.test(e)?(a.push(e),o=5,t=e,i+1):"x"===e&&1===a.length&&"0"===a[0]?(o=11,a.push(e),t=e,i+1):/[^\d]/.test(e)?(y(a.join("")),o=h,i):(a.push(e),t=e,i+1)}function w(){return"f"===e&&(a.push(e),t=e,i+=1),/[eE]/.test(e)||"-"===e&&/[eE]/.test(t)?(a.push(e),t=e,i+1):/[^\d]/.test(e)?(y(a.join("")),o=h,i):(a.push(e),t=e,i+1)}function C(){if(/[^\d\w_]/.test(e)){var r=a.join("");return o=s.indexOf(r)>-1?8:c.indexOf(r)>-1?7:6,y(a.join("")),o=h,i}return a.push(e),t=e,i+1}}function g(e){return function(e){var t=f(),r=[];return(r=r.concat(t(e))).concat(t(null))}(e)}const _=new Set(["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"]);function d(e,t){for(let r=t-1;r>=0;r--){const t=e[r];if("whitespace"!==t.type&&"block-comment"!==t.type){if("keyword"!==t.type)break;if("attribute"===t.data||"in"===t.data)return!0}}return!1}function m(e,t,r,i){i=i||r;for(const n of e)if("ident"===n.type&&n.data===r)return i in t?t[i]++:t[i]=0,m(e,t,i+"_"+t[i],i);return r}function p(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"afterVersion";function i(e,t){for(let r=t;r<e.length;r++){const t=e[r];if("operator"===t.type&&";"===t.data)return r}return null}const n={data:"\n",type:"whitespace"},o=t=>t<e.length&&/[^\r\n]$/.test(e[t].data);let a=function(e){let t=-1,n=0,o=-1;for(let a=0;a<e.length;a++){const s=e[a];if("preprocessor"===s.type&&(/#(if|ifdef|ifndef)\s+.+/.test(s.data)?++n:/#endif\s*.*/.test(s.data)&&--n),"afterVersion"!==r&&"afterPrecision"!==r||"preprocessor"===s.type&&s.data.startsWith("#version")&&(o=Math.max(o,a)),"afterPrecision"===r&&"keyword"===s.type&&"precision"===s.data){const t=i(e,a);if(null===t)throw new Error("precision statement not followed by any semicolons!");o=Math.max(o,t)}t<o&&0===n&&(t=a)}return t+1}(e);o(a-1)&&e.splice(a++,0,n);for(const s of t)e.splice(a++,0,s);o(a-1)&&o(a)&&e.splice(a,0,n)}function x(e,t,r){p(e,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:arguments.length>3&&void 0!==arguments[3]?arguments[3]:"lowp"},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function y(e,t,r,i){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"lowp";p(e,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:i.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:n},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function T(e,t){let r,i,n=-1;for(let o=t;o<e.length;o++){const t=e[o];if("operator"===t.type&&("["===t.data&&(r=o),"]"===t.data)){i=o;break}"integer"===t.type&&(n=parseInt(t.data,10))}return r&&i&&e.splice(r,i-r+1),n}function v(e,t){if(e.startsWith("#version 300"))return e;const r=function(e){return a?E.get(e):null}(e);if(null!=r)return r;const i=g(e);if("300 es"===function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"100",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"300 es";const i=/^\s*#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;for(const n of e)if("preprocessor"===n.type){const e=i.exec(n.data);if(e){const i=e[1].replaceAll(/\s{2,}/g," ");if(i===r)return i;if(i===t)return n.data="#version "+r,t;throw new Error("unknown glsl version: "+i)}}return e.splice(0,0,{type:"preprocessor",data:"#version "+r},{type:"whitespace",data:"\n"}),null}(i,"100","300 es"))return e;let s=null,l=null;const c={},h={};for(let a=0;a<i.length;++a){const e=i[a];switch(e.type){case"keyword":t===n.Co.VERTEX_SHADER&&"attribute"===e.data?e.data="in":"varying"===e.data&&(e.data=t===n.Co.VERTEX_SHADER?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(e.data.trim())&&(e.data=e.data.replaceAll(/(2D|Cube|EXT)/g,"")),t===n.Co.FRAGMENT_SHADER&&"gl_FragColor"===e.data&&(s||(s=m(i,c,"fragColor"),x(i,s,"vec4")),e.data=s),t===n.Co.FRAGMENT_SHADER&&"gl_FragData"===e.data){const t=T(i,a+1),r=m(i,c,"fragData");y(i,r,"vec4",t,"mediump"),e.data=r}else t===n.Co.FRAGMENT_SHADER&&"gl_FragDepthEXT"===e.data&&(l||(l=m(i,c,"gl_FragDepth")),e.data=l);break;case"ident":if(o.includes(e.data)){if(t===n.Co.VERTEX_SHADER&&d(i,a))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");e.data in h||(h[e.data]=m(i,c,e.data)),e.data=h[e.data]}}}for(let n=i.length-1;n>=0;--n){const e=i[n];if("preprocessor"===e.type){const t=e.data.match(/#extension\s+(.*):/);if(t?.[1]&&_.has(t[1].trim())){const e=i[n+1];i.splice(n,e&&"whitespace"===e.type?2:1)}const r=e.data.match(/#ifdef\s+(.*)/);r?.[1]&&_.has(r[1].trim())&&(e.data="#if 1");const o=e.data.match(/#ifndef\s+(.*)/);o?.[1]&&_.has(o[1].trim())&&(e.data="#if 0")}}return function(e,t){return a&&E.set(e,t),t}(e,function(e){return e.map((e=>"eof"!==e.type?e.data:"")).join("")}(i))}const E=new Map;class b{constructor(e,t,r,o){let a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new Map,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[];this._context=e,this._locations=o,this._uniformBlockBindings=a,this._transformFeedbackVaryings=s,this._refCount=1,this._compiled=!1,this._linesOfCode=0,this._nameToUniformLocation=new Map,this._nameToUniform1=new Map,this._nameToUniform1v=new Map,this._nameToUniform2=new Map,this._nameToUniform3=new Map,this._nameToUniform4=new Map,this._nameToUniformMatrix3=new Map,this._nameToUniformMatrix4=new Map,e||console.error("RenderingContext isn't initialized!"),0===t.length&&console.error("Shaders source should not be empty!"),t=v(t,n.Co.VERTEX_SHADER),r=v(r,n.Co.FRAGMENT_SHADER),this._vShader=S(this._context,n.Co.VERTEX_SHADER,t),this._fShader=S(this._context,n.Co.FRAGMENT_SHADER,r),U.enabled&&(this._linesOfCode=t.match(/\n/g).length+r.match(/\n/g).length+2,this._context.instanceCounter.increment(n.vt.LinesOfCode,this._vShader,this._linesOfCode)),this._vShader&&this._fShader||console.error("Error loading shaders!"),this._context.instanceCounter.increment(n.vt.Shader,this),(0,i.Xc)()&&(this.vertexShader=t,this.fragmentShader=r),this.usedMemory=t.length+r.length;const l=this._context.gl,c=l.createProgram();l.attachShader(c,this._vShader),l.attachShader(c,this._fShader),this._locations.forEach(((e,t)=>l.bindAttribLocation(c,e,t))),this._transformFeedbackVaryings?.length&&l.transformFeedbackVaryings(c,this._transformFeedbackVaryings,l.SEPARATE_ATTRIBS),l.linkProgram(c),(0,i.Xc)()&&!l.getProgramParameter(c,l.LINK_STATUS)&&console.error(`Could not link shader\nvalidated: ${l.getProgramParameter(c,l.VALIDATE_STATUS)}, gl error ${l.getError()}, vertex: ${l.getShaderParameter(this._vShader,l.COMPILE_STATUS)}, fragment: ${l.getShaderParameter(this._fShader,l.COMPILE_STATUS)}, info log: ${l.getProgramInfoLog(c)}, vertex source: ${this.vertexShader}, fragment source: ${this.fragmentShader}`);for(const[i,n]of this._uniformBlockBindings){const e=l.getUniformBlockIndex(c,i);e<4294967295&&l.uniformBlockBinding(c,e,n)}this._glName=c,this._context.instanceCounter.increment(n.vt.Program,this)}get glName(){return this._glName}get hasGLName(){return null!=this._glName}get hasTransformFeedbackVaryings(){return!!this._transformFeedbackVaryings?.length}get compiled(){if(this._compiled)return!0;const e=this._context.gl.getExtension("KHR_parallel_shader_compile");return null==e||null==this.glName?(this._compiled=!0,!0):(this._compiled=!!this._context.gl.getProgramParameter(this.glName,e.COMPLETION_STATUS_KHR),this._compiled)}dispose(){if(--this._refCount>0)return;const e=this._context.gl,t=this._context.instanceCounter;this._nameToUniformLocation.forEach((e=>e&&t.decrement(n.vt.Uniform,e))),this._nameToUniformLocation.clear(),this._vShader&&(this._linesOfCode>0&&(t.decrement(n.vt.LinesOfCode,this._vShader,this._linesOfCode),this._linesOfCode=0),e.deleteShader(this._vShader),this._vShader=null,t.decrement(n.vt.Shader,this)),this._fShader&&(e.deleteShader(this._fShader),this._fShader=null),this._glName&&(e.deleteProgram(this._glName),this._glName=null,t.decrement(n.vt.Program,this))}ref(){++this._refCount}_getUniformLocation(e){const t=this._nameToUniformLocation.get(e);if(void 0!==t)return t;if(this.glName){const t=this._context.gl.getUniformLocation(this.glName,e);return this._nameToUniformLocation.set(e,t),t&&this._context.instanceCounter.increment(n.vt.Uniform,t),t}return null}hasUniform(e){return null!=this._getUniformLocation(e)}setUniform1i(e,t){const r=this._nameToUniform1.get(e);void 0!==r&&t===r||(this._context.gl.uniform1i(this._getUniformLocation(e),t),this._nameToUniform1.set(e,t))}setUniform1iv(e,t){A(this._nameToUniform1v,e,t)&&this._context.gl.uniform1iv(this._getUniformLocation(e),t)}setUniform2iv(e,t){A(this._nameToUniform2,e,t)&&this._context.gl.uniform2iv(this._getUniformLocation(e),t)}setUniform3iv(e,t){A(this._nameToUniform3,e,t)&&this._context.gl.uniform3iv(this._getUniformLocation(e),t)}setUniform4iv(e,t){A(this._nameToUniform4,e,t)&&this._context.gl.uniform4iv(this._getUniformLocation(e),t)}setUniform1f(e,t){const r=this._nameToUniform1.get(e);void 0!==r&&t===r||(this._context.gl.uniform1f(this._getUniformLocation(e),t),this._nameToUniform1.set(e,t))}setUniform1fv(e,t){A(this._nameToUniform1v,e,t)&&this._context.gl.uniform1fv(this._getUniformLocation(e),t)}setUniform2f(e,t,r){const i=this._nameToUniform2.get(e);void 0===i?(this._context.gl.uniform2f(this._getUniformLocation(e),t,r),this._nameToUniform2.set(e,[t,r])):t===i[0]&&r===i[1]||(this._context.gl.uniform2f(this._getUniformLocation(e),t,r),i[0]=t,i[1]=r)}setUniform2fv(e,t){A(this._nameToUniform2,e,t)&&this._context.gl.uniform2fv(this._getUniformLocation(e),t)}setUniform3f(e,t,r,i){const n=this._nameToUniform3.get(e);void 0===n?(this._context.gl.uniform3f(this._getUniformLocation(e),t,r,i),this._nameToUniform3.set(e,[t,r,i])):t===n[0]&&r===n[1]&&i===n[2]||(this._context.gl.uniform3f(this._getUniformLocation(e),t,r,i),n[0]=t,n[1]=r,n[2]=i)}setUniform3fv(e,t){const r=this._getUniformLocation(e);null!=r&&A(this._nameToUniform3,e,t)&&this._context.gl.uniform3fv(r,t)}setUniform4f(e,t,r,i,n){const o=this._nameToUniform4.get(e);void 0===o?(this._context.gl.uniform4f(this._getUniformLocation(e),t,r,i,n),this._nameToUniform4.set(e,[t,r,i,n])):void 0!==o&&t===o[0]&&r===o[1]&&i===o[2]&&n===o[3]||(this._context.gl.uniform4f(this._getUniformLocation(e),t,r,i,n),o[0]=t,o[1]=r,o[2]=i,o[3]=n)}setUniform4fv(e,t){const r=this._getUniformLocation(e);null!=r&&A(this._nameToUniform4,e,t)&&this._context.gl.uniform4fv(r,t)}setUniformMatrix3fv(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const i=this._getUniformLocation(e);null!=i&&A(this._nameToUniformMatrix3,e,t)&&this._context.gl.uniformMatrix3fv(i,r,t)}setUniformMatrix4fv(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const i=this._getUniformLocation(e);null!=i&&A(this._nameToUniformMatrix4,e,t)&&this._context.gl.uniformMatrix4fv(i,r,t)}stop(){}}function S(e,t,r){const o=e.gl,a=o.createShader(t);return o.shaderSource(a,r),o.compileShader(a),(0,i.Xc)()&&!o.getShaderParameter(a,o.COMPILE_STATUS)&&(console.error("Compile error in ".concat(t===n.Co.VERTEX_SHADER?"vertex":"fragment"," shader")),console.error(o.getShaderInfoLog(a)),console.error(function(e){let t=2;return e.replaceAll("\n",(()=>"\n"+function(e){return e>=1e3?e.toString():("  "+e).slice(-3)}(t++)+":"))}(r))),a}function A(e,t,r){const i=e.get(t);if(!i)return e.set(t,Array.from(r)),!0;const n=r.length;if(i.length!==n)return e.set(t,Array.from(r)),!0;for(let o=0;o<n;++o){const e=r[o];if(i[o]!==e){for(i[o]=e;o<n;++o)i[o]=r[o];return!0}}return!1}const U={enabled:!1}},76718:(e,t,r)=>{r.d(t,{g:()=>c});var i=r(18690),n=(r(81806),r(76460)),o=r(78393),a=r(61678),s=r(93345);const l=()=>n.A.getLogger("esri.views.webgl.BufferObject");class c{static createIndex(e,t,r){return new c(e,s.NZ.ELEMENT_ARRAY_BUFFER,t,r)}static createVertex(e,t,r){return new c(e,s.NZ.ARRAY_BUFFER,t,r)}static createUniform(e,t,r){return new c(e,s.NZ.UNIFORM_BUFFER,t,r)}static createPixelPack(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s._U.STREAM_READ,r=arguments.length>2?arguments[2]:void 0;const i=new c(e,s.NZ.PIXEL_PACK_BUFFER,t);return r&&i.setSize(r),i}static createPixelUnpack(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s._U.STREAM_DRAW,r=arguments.length>2?arguments[2]:void 0;return new c(e,s.NZ.PIXEL_UNPACK_BUFFER,t,r)}static createTransformFeedback(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s._U.STATIC_DRAW,r=arguments.length>2?arguments[2]:void 0;const i=new c(e,s.NZ.TRANSFORM_FEEDBACK_BUFFER,t);return i.setSize(r),i}constructor(e,t,r,i){this._context=e,this.bufferType=t,this.usage=r,this._glName=null,this._size=-1,this._indexType=void 0,e.instanceCounter.increment(s.vt.BufferObject,this),this._glName=this._context.gl.createBuffer(),(0,a.Y2)(this._context.gl),i&&this.setData(i)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get usedMemory(){if(this.bufferType===s.NZ.ELEMENT_ARRAY_BUFFER){if(this._indexType===s.pe.UNSIGNED_INT)return 4*this._size;if(this._indexType===s.pe.UNSIGNED_SHORT)return 2*this._size}return this._size}get _isVAOAware(){return this.bufferType===s.NZ.ELEMENT_ARRAY_BUFFER||this.bufferType===s.NZ.ARRAY_BUFFER}dispose(){this._context?.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(s.vt.BufferObject,this),this._context=null):this._glName&&l().warn("Leaked WebGL buffer object")}setSize(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(this.bufferType===s.NZ.ELEMENT_ARRAY_BUFFER&&null!=t)switch(this._indexType=t,t){case s.pe.UNSIGNED_SHORT:e*=2;break;case s.pe.UNSIGNED_INT:e*=4}this._setBufferData(e)}setData(e){if(!e)return;let t=e.byteLength;this.bufferType===s.NZ.ELEMENT_ARRAY_BUFFER&&((0,o.mg)(e)?this._indexType=s.pe.UNSIGNED_BYTE:(0,o.jq)(e)?(t/=2,this._indexType=s.pe.UNSIGNED_SHORT):(0,o.XJ)(e)&&(t/=4,this._indexType=s.pe.UNSIGNED_INT)),this._setBufferData(t,e)}_setBufferData(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this._size=e;const r=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const i=this._context.gl;null!=t?i.bufferData(this.bufferType,t,this.usage):i.bufferData(this.bufferType,e,this.usage),(0,a.Y2)(i),this._isVAOAware&&this._context.bindVAO(r)}setSubData(e,t,r,i){if(!e)return;const n=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const{gl:o}=this._context;o.bufferSubData(this.bufferType,t*e.BYTES_PER_ELEMENT,e,r,i-r),(0,a.Y2)(o),this._isVAOAware&&this._context.bindVAO(n)}getSubData(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0;if(r<0||n<0)return;const o=function(e){return(0,i.Xj)(e)}(e)?e.BYTES_PER_ELEMENT:1;if(o*((r??0)+(n??0))>e.byteLength)return;t+o*(n??0)>this.usedMemory&&l().warn("Potential problem getting subdata: requested data exceeds buffer size!");const a=this._context.gl;this.bufferType===s.NZ.TRANSFORM_FEEDBACK_BUFFER?(this._context.bindBuffer(this,s.NZ.TRANSFORM_FEEDBACK_BUFFER),a.getBufferSubData(s.NZ.TRANSFORM_FEEDBACK_BUFFER,t,e,r,n),this._context.unbindBuffer(s.NZ.TRANSFORM_FEEDBACK_BUFFER)):(this._context.bindBuffer(this,s.NZ.COPY_READ_BUFFER),a.getBufferSubData(s.NZ.COPY_READ_BUFFER,t,e,r,n),this._context.unbindBuffer(s.NZ.COPY_READ_BUFFER))}async getSubDataAsync(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0;await this._context.clientWaitAsync(),this.getSubData(e,t,r,i)}}},78403:(e,t,r)=>{r.d(t,{Z:()=>i});class i{constructor(e){this._readFile=e}resolveIncludes(e){return this._resolve(e)}_resolve(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Map;if(t.has(e))return t.get(e);const r=this._read(e);if(!r)throw new Error(`cannot find shader file ${e}`);const i=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let n=i.exec(r);const o=[];for(;null!=n;)o.push({path:n[1],start:n.index,length:n[0].length}),n=i.exec(r);let a=0,s="";return o.forEach((e=>{s+=r.slice(a,e.start),s+=t.has(e.path)?"":this._resolve(e.path,t),a=e.start+e.length})),s+=r.slice(a),t.set(e,s),s}_read(e){return this._readFile(e)}}}}]);
//# sourceMappingURL=34660.6f834884.chunk.js.map