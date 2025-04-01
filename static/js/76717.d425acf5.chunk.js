"use strict";(self.webpackChunkopenspace=self.webpackChunkopenspace||[]).push([[76717],{771:(e,t,i)=>{i.d(t,{A:()=>a});var s=i(35143),r=i(76460),h=i(50346),l=i(68134),n=(i(81806),i(47249),i(50076),i(85842));const a=e=>{let t=class extends e{initialize(){this.addHandles((0,l.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,h.zf)(e)||r.A.getLogger(this).error(e)}))})),"RefreshableLayerView")}};return t=(0,s._)([(0,n.$)("esri.views.layers.RefreshableLayerView")],t),t}},16060:(e,t,i)=>{i.d(t,{LG:()=>d,mb:()=>g,yr:()=>p});var s=i(50346),r=i(63919),h=i(85827),l=i(59422),n=i(8794),a=i(96145),o=i(93345),u=i(80895),c=i(96673);function d(e){return e&&"render"in e}function p(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}class g extends n.q{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];super(),this.blendFunction="standard",this._sourceWidth=0,this._sourceHeight=0,this._textureInvalidated=!1,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._texture=null,this._width=void 0,this.x=0,this.y=0,this.immutable=t,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null),null!=this._uploadStatus&&(this._uploadStatus.controller.abort(),this._uploadStatus=null)}get isSourceScaled(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}get height(){return void 0!==this._height?this._height:this._sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){null==e&&null==this._source||(this._source=e,this.invalidateTexture(),this.requestRender())}get texture(){return this._texture}get width(){return void 0!==this._width?this._width:this._sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e)}async setSourceAsync(e,t){null!=this._uploadStatus&&this._uploadStatus.controller.abort();const i=new AbortController,r=(0,s.Tw)();return(0,s.NY)(t,(()=>i.abort())),(0,s.NY)(i,(e=>r.reject(e))),this._uploadStatus={controller:i,resolver:r},this.source=e,r.promise}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):this._source&&(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width))}transitionStep(e,t){e>=64&&(this.fadeTransitionEnabled=!1),super.transitionStep(e,t)}setTransform(e){const t=(0,r.D_)(this.transforms.displayViewScreenMat3),[i,s]=e.toScreenNoRotation([0,0],[this.x,this.y]),h=this.resolution/this.pixelRatio/e.resolution,n=h*this.width,a=h*this.height,o=Math.PI*this.rotation/180;(0,r.Tl)(t,t,(0,l.fA)(i,s)),(0,r.Tl)(t,t,(0,l.fA)(n/2,a/2)),(0,r.e$)(t,t,-o),(0,r.Tl)(t,t,(0,l.fA)(-n/2,-a/2)),(0,r.Oe)(t,t,(0,l.fA)(n,a)),(0,r.lw)(this.transforms.displayViewScreenMat3,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind(e,t){this._texture&&e.bindTexture(this._texture,t)}async updateTexture(e){let{context:t,painter:i}=e;if(!this._textureInvalidated)return;if(this._textureInvalidated=!1,this._texture||(this._texture=this._createTexture(t)),!this.source)return void this._texture.setData(null);this._texture.resize(this._sourceWidth,this._sourceHeight);const r=function(e){return d(e)?e instanceof a.A?e.getRenderedRasterPixels()?.renderedRasterPixels:p(e):e}(this.source);try{if(null!=this._uploadStatus){const{controller:e,resolver:t}=this._uploadStatus,s={signal:e.signal},{width:h,height:l}=this,n=this._texture,a=i.textureUploadManager;await a.enqueueTextureUpdate({data:r,texture:n,width:h,height:l},s),t.resolve(),this._uploadStatus=null}else this._texture.setData(r);this.ready()}catch(h){(0,s.jH)(h)}}onDetach(){this.destroy()}_createTransforms(){return{displayViewScreenMat3:(0,h.vt)()}}_createTexture(e){const t=this.immutable,i=new c.R;return i.internalFormat=t?o.H0.RGBA8:o.Ab.RGBA,i.wrapMode=o.pF.CLAMP_TO_EDGE,i.isImmutable=t,i.width=this._sourceWidth,i.height=this._sourceHeight,new u.g(e,i)}}},18138:(e,t,i)=>{i.d(t,{Y:()=>g});var s=i(35143),r=(i(76460),i(81806),i(47249),i(50076),i(85842)),h=i(2413),l=i(85827),n=i(16060),a=i(78440);class o extends a.Y{constructor(e,t,i,s,r,h){let l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;super(e,t,i,s,r,h),this.bitmap=new n.mb(l),this.bitmap.coordScale=[r,h],this.bitmap.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){this.bitmap.beforeRender(e),super.beforeRender(e)}afterRender(e){this.bitmap.afterRender(e),super.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{displayViewScreenMat3:(0,l.vt)(),tileMat3:(0,l.vt)()}}setTransform(e){super.setTransform(e),this.bitmap.transforms.displayViewScreenMat3=this.transforms.displayViewScreenMat3}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}var u=i(61551),c=i(46550),d=i(86758);class p extends c.A{constructor(){super(...arguments),this._bitmapTechnique=null}get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(e){const t=this.tileInfoView.getTileBounds((0,h.vt)(),e),i=this.tileInfoView.getTileResolution(e.level),[s,r]=this.tileInfoView.tileInfo.size;return new o(e,i,t[0],t[3],s,r)}onAttach(){super.onAttach(),this._bitmapTechnique=new d.C}onDetach(){super.onDetach(),this._bitmapTechnique?.shutdown(),this._bitmapTechnique=null}renderChildren(e){if(super.renderChildren(e),!this.visible||e.drawPhase!==u.S5.MAP||null==this._bitmapTechnique)return;const t=this.children.map((e=>e.bitmap));this._bitmapTechnique.render(e,{bitmaps:t})}}const g=e=>{let t=class extends e{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new p(this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){this.container.removeChild(this._bitmapView),this._bitmapView?.removeAllChildren(),this._bitmapView=null}};return t=(0,s._)([(0,r.$)("esri.views.2d.layers.BitmapTileLayerView2D")],t),t}},26697:(e,t,i)=>{function s(e,t,i,s){if(i.level===s.level)return t;const h=e.tileInfo.size,l=e.getTileResolution(i.level),n=e.getTileResolution(s.level);let a=e.getLODInfoAt(s.level);const o=a.getXForColumn(s.col),u=a.getYForRow(s.row);a=e.getLODInfoAt(i.level);const c=a.getXForColumn(i.col),d=a.getYForRow(i.row),p=function(e){return e instanceof HTMLImageElement?e.naturalWidth:e.width}(t)/h[0],g=function(e){return e instanceof HTMLImageElement?e.naturalHeight:e.height}(t)/h[1],m=Math.round(p*((o-c)/l)),_=Math.round(g*(-(u-d)/l)),f=Math.round(p*h[0]*(n/l)),w=Math.round(g*h[1]*(n/l)),y=r(h);return y.getContext("2d").drawImage(t,m,_,f,w,0,0,h[0],h[1]),y}function r(e){const t=document.createElement("canvas");return[t.width,t.height]=e,t}i.d(t,{G:()=>r,t:()=>s})},76717:(e,t,i)=>{i.r(t),i.d(t,{default:()=>M});var s=i(35143),r=i(54901),h=i(76460),l=i(50346),n=i(46053),a=(i(81806),i(47249),i(85842)),o=i(80963),u=i(64519),c=(i(50076),i(52394),i(15434),i(59784),i(86560),i(13442),i(28808),i(14522),i(76797),i(89189),i(66388),i(19247),i(65215),i(23701),i(5095),i(62484),i(15941),i(61425),i(3789),i(5568),i(62032),i(89425),i(15709),i(88764),i(9435),i(50724),i(94046),i(94168),i(73988),i(27847),i(33049),i(4754),i(31385),i(278),i(71687),i(6134),i(9190),i(5104),i(41704),i(16083),i(27150),i(19313),i(59422),i(71447),i(84202),i(48988),i(17400),i(54099),i(81447),i(61551),i(28608),i(93345),i(61247),i(61678),i(89241),i(84662),i(35048),i(63584),i(99588),i(41838),i(83531),i(80895),i(76418),i(8254),i(47709),i(3825),i(90534),i(29234),i(56789),i(32743),i(98590),i(5096),i(72729),i(12331),i(16946),i(89179),i(28972),i(32151),i(69539),i(90113),i(81320),i(13308),i(33346),i(13720),i(88075),i(38550),i(9410),i(57156),i(98112),i(42294),i(81615),i(29300),i(64346),i(26455),i(4480),i(46405),i(13312),i(41406),i(57162),i(86955),i(33721),i(68009),i(69679)),d=(i(98773),i(94643),i(68452),i(94151),i(38983),i(83755),i(73548),i(14556),i(55171),i(13692)),p=(i(56924),i(19451),i(57105),i(31633),i(34111),i(7724),i(482),i(86599),i(63885),i(18138)),g=i(56286),m=i(70822),_=i(26697),f=i(40181),w=i(93453),y=i(15302),x=i(96345),b=i(91196),v=i(771),T=i(76117),I=i(55754),A=i(1723),S=i(59752);const R=[0,0];let V=class extends((0,v.A)((0,p.Y)((0,g.e)(b.A)))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new u.Y,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||!1!==this.layer.resampling}get tilemapCache(){return"tilemapCache"in this.layer?this.layer.tilemapCache:null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this._highlightView?.processUpdate(e)}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null,t=this.tilemapCache;if(this._tileInfoView=new f.A(this.layer.tileInfo,this.layer.fullExtent,t?.effectiveMinLOD,t?.effectiveMaxLOD),this._fetchQueue=new y.A({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t),scheduler:this.scheduler,priority:S.W6.MAPVIEW_FETCH_QUEUE}),this._tileStrategy=new x.A({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),(0,T.ox)(this,this.layer)){const e=this._highlightView=new c.A({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new m.A(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new T.Uh({createFetchPopupFeaturesQueryGeometry:(e,t)=>(0,I.V)(e,t,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(t,i)=>{e.graphicUpdateHandler({graphic:t,property:i})},layerView:this,updatingHandles:this._updatingHandles})}this.requestUpdate(),this.addAttachHandles(this._updatingHandles.add((()=>this.resampling),(()=>{this.doRefresh()}))),super.attach()}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._popupHighlightHelper?.destroy(),this._highlightView?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}async fetchPopupFeaturesAtLocation(e,t){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeaturesAtLocation(e,t):[]}highlight(e,t){const i=(0,d.Oq)(e);if(0===i.length)return(0,r.hA)();const s=t?.name??A.Tv;return this._addHighlightGraphics(i,s),(0,r.hA)((()=>!this.destroyed&&this._removeHighlightGraphics(i,s)))}_processHighlight(){const e=this._getHighlights();this._highlightView?.setHighlight(e)}_addHighlightGraphics(e,t){this._highlightGraphics.addMany(e),this._addHighlights(e.map((e=>e.uid)),t)}_removeHighlightGraphics(e,t){this._highlightGraphics.removeMany(e),this._removeHighlights(e.map((e=>e.uid)),t)}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){return(0,o.aI)(this.layer.tileInfo?.spatialReference,e)}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh((e=>this._updatingHandles.addPromise(this._enqueueTileFetch(e))))}}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(R,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(t)),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate()}async fetchTile(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.tilemapCache?this._fetchTileWithTilemapCache(e,t):this._fetchTileWithoutTilemapCache(e,t)}async _fetchTileWithoutTilemapCache(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{signal:i,resamplingLevel:s=0}=t;try{return await this._fetchImage(e,i)}catch(r){if((0,l.zf)(r))throw r;if(!this.resampling)return(0,_.G)(this._tileInfoView.tileInfo.size);if(s<3){const i=this._tileInfoView.getTileParentId(e.id);if(i){const r=new w.A(i),h=await this._fetchTileWithoutTilemapCache(r,{...t,resamplingLevel:s+1});return(0,_.t)(this._tileInfoView,h,r,e)}}return(0,_.G)(this._tileInfoView.tileInfo.size)}}async _fetchTileWithTilemapCache(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=this.tilemapCache,{signal:s,resamplingLevel:r=0}=t,h=new w.A(0,0,0,0);let n,a=null;try{if(a=await i.fetchAvailabilityUpsample(e.level,e.row,e.col,h,{signal:s}),!this.resampling&&h.level!==e.level)return await(0,l.NO)(t),(0,_.G)(this._tileInfoView.tileInfo.size);n=await this._fetchImage(h,s)}catch(o){if((0,l.zf)(o))throw o;if(this.resampling&&"unknown"===a&&r<3){const i=this._tileInfoView.getTileParentId(e.id);if(i){h.set(i);try{n=await this._fetchTileWithTilemapCache(h,{...t,resamplingLevel:r+1})}catch{}}}}return n?this.resampling?(0,_.t)(this._tileInfoView,n,h,e):n:(0,_.G)(this._tileInfoView.tileInfo.size)}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()))}catch(t){(0,l.zf)(t)||h.A.getLogger(this).error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}};(0,s._)([(0,n.MZ)()],V.prototype,"resampling",null),(0,s._)([(0,n.MZ)()],V.prototype,"tilemapCache",null),V=(0,s._)([(0,a.$)("esri.views.2d.layers.TileLayerView2D")],V);const M=V},86758:(e,t,i)=>{i.d(t,{C:()=>f});var s=i(5095),r=i(70479),h=i(32743),l=i(35143),n=i(6951),a=i(60984);function o(e){const t=function(e){const t=new a.nt(1/6),i=e.multiply(e),s=i.multiply(e),r=t.multiply(s.multiply(-1).add(new a.nt(3).multiply(i)).subtract(new a.nt(3).multiply(e)).add(1)),h=t.multiply(s.multiply(3).subtract(i.multiply(6)).add(4)),l=t.multiply(s.multiply(-3).add(i.multiply(3)).add(e.multiply(3)).add(1)),n=t.multiply(s);return new a.Zb(r,h,l,n)}(e),i=t.x.add(t.y),s=t.z.add(t.w),r=new a.nt(1).subtract(t.y.divide(i)).add(e),h=new a.nt(1).add(t.w.divide(s)).subtract(e);return new a.Zb(r,h,i,s)}class u extends n.ZA{}(0,l._)([(0,n.C5)(0,a.ZY)],u.prototype,"position",void 0);class c extends n.HS{}class d extends n.k2{}(0,l._)([(0,n.Pi)(a.z7)],d.prototype,"texture",void 0),(0,l._)([(0,n.Pi)(a.U)],d.prototype,"dvsMat3",void 0),(0,l._)([(0,n.Pi)(a.ZY)],d.prototype,"coordScale",void 0),(0,l._)([(0,n.Pi)(a.nt)],d.prototype,"opacity",void 0);class p extends n.A{constructor(){super(...arguments),this.type="BitmapShader"}vertex(e){const t=this.config.dvsMat3.multiply(new a.eB(e.position.multiply(this.config.coordScale),1));return{glPosition:new a.Zb(t,1),texcoord:e.position}}fragment(e){const t=new n.mm;let i;return i=this.bicubic?function(e,t,i){const s=new a.ZY(new a.nt(1).divide(i.x),0),r=new a.ZY(0,new a.nt(1).divide(i.y)),h=t.multiply(i).subtract(.5),l=o((0,a.jc)(h).x).xyz,n=o((0,a.jc)(h).y).xyz;let u=t.add(l.x.multiply(s)),c=t.subtract(l.y.multiply(s));const d=u.add(n.x.multiply(r)),p=c.add(n.x.multiply(r));u=u.subtract(n.y.multiply(r)),c=c.subtract(n.y.multiply(r));let g=(0,a.US)(e,c),m=(0,a.US)(e,u);const _=(0,a.US)(e,p),f=(0,a.US)(e,d);return g=(0,a.jh)(g,_,n.z),m=(0,a.jh)(m,f,n.z),g=(0,a.jh)(g,m,l.z),g}(this.config.texture,e.texcoord,this.config.coordScale):(0,a.US)(this.config.texture,e.texcoord),t.fragColor=new a.Zb(i.rgb.multiply(this.config.opacity),i.a.multiply(this.config.opacity)),t}}(0,l._)([(0,n.Pi)(d)],p.prototype,"config",void 0),(0,l._)([n.E8],p.prototype,"bicubic",void 0),(0,l._)([(0,l.a)(0,(0,n.hF)(u))],p.prototype,"vertex",null),(0,l._)([(0,l.a)(0,(0,n.hF)(c))],p.prototype,"fragment",null);var g=i(93345);const m={nearest:{samplingMode:g.Cj.NEAREST,mips:!1},bilinear:{samplingMode:g.Cj.LINEAR,mips:!1},bicubic:{samplingMode:g.Cj.LINEAR,mips:!1},trilinear:{samplingMode:g.Cj.LINEAR_MIPMAP_LINEAR,mips:!0}},_=(e,t,i)=>{if("dynamic"===i.samplingMode){const{state:i}=e,s=t.resolution/t.pixelRatio/i.resolution,r=Math.round(e.pixelRatio)!==e.pixelRatio,h=s>1.05||s<.95;return i.rotation||h||r||t.isSourceScaled||t.rotation?m.bilinear:m.nearest}return m[i.samplingMode]};class f extends r.j{constructor(){super(...arguments),this.name="BrushBitmap",this.type=h.N.Bitmap,this.shaders={bitmap:new p}}render(e,t){const{context:i,renderingOptions:r,painter:h}=e;for(const l of t.bitmaps){const t=l.texture;if(!l.source||!l.isReady||null==t)continue;const n=_(e,l,r);e.timeline.begin(this.name),h.setPipelineState({depth:!1,stencil:{test:{mask:255,ref:l.stencilRef,compare:g.MT.EQUAL,op:{fail:g.eA.KEEP,zFail:g.eA.KEEP,zPass:g.eA.KEEP}},write:!1},color:{write:[!0,!0,!0,!0],blendMode:"additive"===l.blendFunction?"additive":"composite"}}),l.setSamplingProfile(n);const{coordScale:a,computedOpacity:o,transforms:u}=l,c={texture:{texture:t,unit:s.YS},dvsMat3:u.displayViewScreenMat3,coordScale:a,opacity:o};h.submitDrawMesh(i,{shader:this.shaders.bitmap,uniforms:{config:c},defines:{bicubic:n===m.bicubic},optionalAttributes:null,useComputeBuffer:!1},h.quadMesh),e.timeline.end(this.name)}}}},96145:(e,t,i)=>{i.d(t,{A:()=>s});class s{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return null!=this.pixelBlock?this.pixelBlock.width:0}get height(){return null!=this.pixelBlock?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if(null==t)return;const i=this.filter({extent:this.extent,pixelBlock:this.originalPixelBlock??t});if(null==i.pixelBlock)return;i.pixelBlock.maskIsAlpha&&(i.pixelBlock.premultiplyAlpha=!0);const s=i.pixelBlock.getAsRGBA(),r=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);r.data.set(s),e.putImageData(r,0,0)}getRenderedRasterPixels(){const e=this.filter({extent:this.extent,pixelBlock:this.pixelBlock});return null==e.pixelBlock?null:(e.pixelBlock.maskIsAlpha&&(e.pixelBlock.premultiplyAlpha=!0),{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)})}}}}]);
//# sourceMappingURL=76717.d425acf5.chunk.js.map