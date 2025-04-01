"use strict";(self.webpackChunkopenspace=self.webpackChunkopenspace||[]).push([[38905],{19150:(e,t,s)=>{s.d(t,{C:()=>n,D:()=>l,S:()=>I,T:()=>x,a:()=>h,c:()=>m,r:()=>o,w:()=>y});var i=s(35143),a=s(73318);class r extends a.F{constructor(){super(...arguments),Object.defineProperty(this,"processor",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}incrementRef(){}decrementRef(){}_onPush(e){this.processor&&this.processor.processRow(e),super._onPush(e)}_onInsertIndex(e,t){this.processor&&this.processor.processRow(t),super._onInsertIndex(e,t)}_onSetIndex(e,t,s){this.processor&&this.processor.processRow(s),super._onSetIndex(e,t,s)}}class l extends a.S{constructor(e,t,s){super(s),Object.defineProperty(this,"component",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"dataContext",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"bullets",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"open",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"close",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.dataContext=t,this.component=e,this._settings.visible=!0,this._checkDirty()}markDirty(){this.component.markDirtyValues(this)}_startAnimation(){this.component._root._addAnimation(this)}_animationTime(){return this.component._root.animationTime}_dispose(){this.component&&this.component.disposeDataItem(this),super._dispose()}show(e){this.setRaw("visible",!0),this.component&&this.component.showDataItem(this,e)}hide(e){this.setRaw("visible",!1),this.component&&this.component.hideDataItem(this,e)}isHidden(){return!this.get("visible")}}class n extends a.g{constructor(){super(...arguments),Object.defineProperty(this,"_data",{enumerable:!0,configurable:!0,writable:!0,value:new r}),Object.defineProperty(this,"_dataItems",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_mainDataItems",{enumerable:!0,configurable:!0,writable:!0,value:this._dataItems}),Object.defineProperty(this,"valueFields",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"fields",{enumerable:!0,configurable:!0,writable:!0,value:["id"]}),Object.defineProperty(this,"_valueFields",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_valueFieldsF",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_fields",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_fieldsF",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_valuesDirty",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_dataChanged",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_dataGrouped",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"inited",{enumerable:!0,configurable:!0,writable:!0,value:!1})}set data(e){e.incrementRef(),this._data.decrementRef(),this._data=e}get data(){return this._data}_dispose(){super._dispose(),this._data.decrementRef()}_onDataClear(){}_afterNew(){super._afterNew(),this._data.incrementRef(),this._updateFields(),this._disposers.push(this.data.events.onAll((e=>{const t=this._mainDataItems;if(this.markDirtyValues(),this._markDirtyGroup(),this._dataChanged=!0,"clear"===e.type)(0,a.i)(t,(e=>{e.dispose()})),t.length=0,this._onDataClear();else if("push"===e.type){const s=new l(this,e.newValue,this._makeDataItem(e.newValue));t.push(s),this.processDataItem(s)}else if("setIndex"===e.type){const s=t[e.index],i=this._makeDataItem(e.newValue);s.bullets&&0==s.bullets.length&&(s.bullets=void 0),(0,a.H)(i).forEach((e=>{s.animate({key:e,to:i[e],duration:this.get("interpolationDuration",0),easing:this.get("interpolationEasing")})})),s.dataContext=e.newValue}else if("insertIndex"===e.type){const s=new l(this,e.newValue,this._makeDataItem(e.newValue));t.splice(e.index,0,s),this.processDataItem(s)}else if("removeIndex"===e.type)t[e.index].dispose(),t.splice(e.index,1);else{if("moveIndex"!==e.type)throw new Error("Unknown IStreamEvent type");{const s=t[e.oldIndex];t.splice(e.oldIndex,1),t.splice(e.newIndex,0,s)}}this._afterDataChange()})))}_updateFields(){this.valueFields&&(this._valueFields=[],this._valueFieldsF={},(0,a.i)(this.valueFields,(e=>{this.get(e+"Field")&&(this._valueFields.push(e),this._valueFieldsF[e]={fieldKey:e+"Field",workingKey:e+"Working"})}))),this.fields&&(this._fields=[],this._fieldsF={},(0,a.i)(this.fields,(e=>{this.get(e+"Field")&&(this._fields.push(e),this._fieldsF[e]=e+"Field")})))}get dataItems(){return this._dataItems}processDataItem(e){}_makeDataItem(e){const t={};return this._valueFields&&(0,a.i)(this._valueFields,(s=>{const i=this.get(this._valueFieldsF[s].fieldKey);t[s]=e[i],t[this._valueFieldsF[s].workingKey]=t[s]})),this._fields&&(0,a.i)(this._fields,(s=>{const i=this.get(this._fieldsF[s]);t[s]=e[i]})),t}makeDataItem(e,t){let s=new l(this,t,e);return this.processDataItem(s),s}pushDataItem(e,t){const s=this.makeDataItem(e,t);return this._mainDataItems.push(s),s}disposeDataItem(e){}showDataItem(e,t){return(0,i.d)(this,void 0,void 0,(function*(){e.set("visible",!0)}))}hideDataItem(e,t){return(0,i.d)(this,void 0,void 0,(function*(){e.set("visible",!1)}))}_clearDirty(){super._clearDirty(),this._valuesDirty=!1}_afterDataChange(){}_afterChanged(){if(super._afterChanged(),this._dataChanged){const e="datavalidated";this.events.isEnabled(e)&&this.events.dispatch(e,{type:e,target:this}),this._dataChanged=!1}this.inited=!0}markDirtyValues(e){this.markDirty(),this._valuesDirty=!0}_markDirtyGroup(){this._dataGrouped=!1}markDirtySize(){this._sizeDirty=!0,this.markDirty()}}function o(e,t,s,i,r,l,n){if(!n||r){let l=0;switch(r||"millisecond"==t||(l=e.getTimezoneOffset(),e.setUTCMinutes(e.getUTCMinutes()-l)),t){case"day":let t=e.getUTCDate();s>1||e.setUTCDate(t),e.setUTCHours(0,0,0,0);break;case"second":let r=e.getUTCSeconds();s>1&&(r=Math.floor(r/s)*s),e.setUTCSeconds(r,0);break;case"millisecond":if(1==s)return e;let l=e.getUTCMilliseconds();l=Math.floor(l/s)*s,e.setUTCMilliseconds(l);break;case"hour":let n=e.getUTCHours();s>1&&(n=Math.floor(n/s)*s),e.setUTCHours(n,0,0,0);break;case"minute":let o=e.getUTCMinutes();s>1&&(o=Math.floor(o/s)*s),e.setUTCMinutes(o,0,0);break;case"month":let h=e.getUTCMonth();s>1&&(h=Math.floor(h/s)*s),e.setUTCMonth(h,1),e.setUTCHours(0,0,0,0);break;case"year":let u=e.getUTCFullYear();s>1&&(u=Math.floor(u/s)*s),e.setUTCFullYear(u,0,1),e.setUTCHours(0,0,0,0);break;case"week":let d=e.getUTCDate(),c=e.getUTCDay();(0,a.k)(i)||(i=1),d=c>=i?d-c+i:d-(7+c)+i,e.setUTCDate(d),e.setUTCHours(0,0,0,0)}if(!r&&"millisecond"!=t&&(e.setUTCMinutes(e.getUTCMinutes()+l),"day"==t||"week"==t||"month"==t||"year"==t)){let t=e.getTimezoneOffset();if(t!=l){let s=t-l;e.setUTCMinutes(e.getUTCMinutes()+s)}}return e}{if(isNaN(e.getTime()))return e;let r=e.getTime(),l=n.offsetUTC(e),o=e.getTimezoneOffset(),h=n.parseDate(e),u=h.year,d=h.month,c=h.day,m=h.hour,p=h.minute,g=h.second,f=h.millisecond,b=h.weekday,_=l-o;switch(t){case"day":m=0,p=_,g=0,f=0;break;case"second":p+=_,s>1&&(g=Math.floor(g/s)*s),f=0;break;case"millisecond":p+=_,s>1&&(f=Math.floor(f/s)*s);break;case"hour":s>1&&(m=Math.floor(m/s)*s),p=_,g=0,f=0;break;case"minute":s>1&&(p=Math.floor(p/s)*s),p+=_,g=0,f=0;break;case"month":s>1&&(d=Math.floor(d/s)*s),c=1,m=0,p=_,g=0,f=0;break;case"year":s>1&&(u=Math.floor(u/s)*s),d=0,c=1,m=0,p=_,g=0,f=0;break;case"week":(0,a.k)(i)||(i=1),c=b>=i?c-b+i:c-(7+b)+i,m=0,p=_,g=0,f=0}const v=(e=new Date(u,d,c,m,p,g,f)).getTime();let y=36e5;"hour"==t&&(y=36e5*s),v+y<=r&&("hour"!=t&&"minute"!=t&&"second"!=t&&"millisecond"!=t||(e=new Date(v+y)));let w=e.getTimezoneOffset(),I=n.offsetUTC(e)-w;return I!=_&&e.setTime(e.getTime()+6e4*(I-_)),e}}Object.defineProperty(n,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Component"}),Object.defineProperty(n,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:a.g.classNames.concat([n.className])});class h extends n{constructor(){super(...arguments),Object.defineProperty(this,"_aggregatesCalculated",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_selectionAggregatesCalculated",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_dataProcessed",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_psi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_pei",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"chart",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"bullets",{enumerable:!0,configurable:!0,writable:!0,value:new a.F}),Object.defineProperty(this,"bulletsContainer",{enumerable:!0,configurable:!0,writable:!0,value:a.g.new(this._root,{width:a.a,height:a.a,position:"absolute"})})}_afterNew(){this.valueFields.push("value","customValue"),super._afterNew(),this.setPrivate("customData",{}),this._disposers.push(this.bullets.events.onAll((e=>{if("clear"===e.type)this._handleBullets(this.dataItems);else if("push"===e.type)this._handleBullets(this.dataItems);else if("setIndex"===e.type)this._handleBullets(this.dataItems);else if("insertIndex"===e.type)this._handleBullets(this.dataItems);else if("removeIndex"===e.type)this._handleBullets(this.dataItems);else{if("moveIndex"!==e.type)throw new Error("Unknown IListEvent type");this._handleBullets(this.dataItems)}})))}_dispose(){this.bulletsContainer.dispose(),super._dispose()}startIndex(){let e=this.dataItems.length;return Math.min(this.getPrivate("startIndex",0),e)}endIndex(){let e=this.dataItems.length;return Math.min(this.getPrivate("endIndex",e),e)}_handleBullets(e){(0,a.i)(e,(e=>{const t=e.bullets;t&&((0,a.i)(t,(e=>{e.dispose()})),e.bullets=void 0)})),this.markDirtyValues()}getDataItemById(e){return(0,a.I)(this.dataItems,(t=>t.get("id")==e))}_makeBullets(e){this._shouldMakeBullet(e)&&(e.bullets=[],this.bullets.each((t=>{this._makeBullet(e,t)})))}_shouldMakeBullet(e){return!0}_makeBullet(e,t,s){const i=t(this._root,this,e);return i&&(i._index=s,this._makeBulletReal(e,i)),i}_makeBulletReal(e,t){let s=t.get("sprite");s&&(s._setDataItem(e),s.setRaw("position","absolute"),this.bulletsContainer.children.push(s)),t.series=this,e.bullets.push(t)}addBullet(e,t){e.bullets||(e.bullets=[]),t&&this._makeBulletReal(e,t)}_clearDirty(){super._clearDirty(),this._aggregatesCalculated=!1,this._selectionAggregatesCalculated=!1}_prepareChildren(){super._prepareChildren();let e=this.startIndex(),t=this.endIndex();if(this.isDirty("name")&&this.updateLegendValue(),this.isDirty("heatRules")&&(this._valuesDirty=!0),this.isPrivateDirty("baseValueSeries")){const e=this.getPrivate("baseValueSeries");e&&this._disposers.push(e.onPrivate("startIndex",(()=>{this.markDirtyValues()})))}if(this.get("calculateAggregates")&&(this._valuesDirty&&!this._dataProcessed&&(this._aggregatesCalculated||(this._calculateAggregates(0,this.dataItems.length),this._aggregatesCalculated=!0,0!=e&&(this._psi=void 0))),this._psi==e&&this._pei==t&&!this.isPrivateDirty("adjustedStartIndex")||this._selectionAggregatesCalculated||(0===e&&t===this.dataItems.length&&this._aggregatesCalculated||this._calculateAggregates(e,t),this._selectionAggregatesCalculated=!0)),this.isDirty("tooltip")){let e=this.get("tooltip");e&&(e.hide(0),e.set("tooltipTarget",this))}if(this.isDirty("fill")||this.isDirty("stroke")){let e;const t=this.get("legendDataItem");if(t&&(e=t.get("markerRectangle"),e&&this.isVisible())){if(this.isDirty("stroke")){let t=this.get("stroke");e.set("stroke",t)}if(this.isDirty("fill")){let t=this.get("fill");e.set("fill",t)}}this.updateLegendMarker(void 0)}if(this.bullets.length>0){let e=this.startIndex(),t=this.endIndex();t<this.dataItems.length&&t++;for(let s=e;s<t;s++){let e=this.dataItems[s];e.bullets||this._makeBullets(e)}}}_adjustStartIndex(e){return e}_calculateAggregates(e,t){let s=this._valueFields;if(!s)throw new Error("No value fields are set for the series.");const i={},r={},l={},n={},o={},h={},u={},d={},c={};(0,a.i)(s,(e=>{i[e]=0,r[e]=0,l[e]=0})),(0,a.i)(s,(s=>{let a=s+"Change",m=s+"ChangePercent",p=s+"ChangePrevious",g=s+"ChangePreviousPercent",f=s+"ChangeSelection",b=s+"ChangeSelectionPercent",_="valueY";"valueX"!=s&&"openValueX"!=s&&"lowValueX"!=s&&"highValueX"!=s||(_="valueX");const v=this.getPrivate("baseValueSeries"),y=this.getPrivate("adjustedStartIndex",e);for(let w=y;w<t;w++){const t=this.dataItems[w];if(t){let y=t.get(s);null!=y&&(l[s]++,i[s]+=y,r[s]+=Math.abs(y),d[s]=i[s]/l[s],(n[s]>y||null==n[s])&&(n[s]=y),(o[s]<y||null==o[s])&&(o[s]=y),u[s]=y,null==h[s]&&(h[s]=y,c[s]=y,v&&(h[_]=v._getBase(_))),0===e&&(t.setRaw(a,y-h[_]),t.setRaw(m,(y-h[_])/h[_]*100)),t.setRaw(p,y-c[_]),t.setRaw(g,(y-c[_])/c[_]*100),t.setRaw(f,y-h[_]),t.setRaw(b,(y-h[_])/h[_]*100),c[s]=y)}}if(t<this.dataItems.length-1){const e=this.dataItems[t];if(e){let t=e.get(s);e.setRaw(p,t-c[_]),e.setRaw(g,(t-c[_])/c[_]*100),e.setRaw(f,t-h[_]),e.setRaw(b,(t-h[_])/h[_]*100)}}e>0&&e--,delete c[s];for(let t=e;t<y;t++){const e=this.dataItems[t];if(e){let t=e.get(s);null==c[s]&&(c[s]=t),null!=t&&(e.setRaw(p,t-c[_]),e.setRaw(g,(t-c[_])/c[_]*100),e.setRaw(f,t-h[_]),e.setRaw(b,(t-h[_])/h[_]*100),c[s]=t)}}})),(0,a.i)(s,(e=>{this.setPrivate(e+"AverageSelection",d[e]),this.setPrivate(e+"CountSelection",l[e]),this.setPrivate(e+"SumSelection",i[e]),this.setPrivate(e+"AbsoluteSumSelection",r[e]),this.setPrivate(e+"LowSelection",n[e]),this.setPrivate(e+"HighSelection",o[e]),this.setPrivate(e+"OpenSelection",h[e]),this.setPrivate(e+"CloseSelection",u[e])})),0===e&&t===this.dataItems.length&&(0,a.i)(s,(e=>{this.setPrivate(e+"Average",d[e]),this.setPrivate(e+"Count",l[e]),this.setPrivate(e+"Sum",i[e]),this.setPrivate(e+"AbsoluteSum",r[e]),this.setPrivate(e+"Low",n[e]),this.setPrivate(e+"High",o[e]),this.setPrivate(e+"Open",h[e]),this.setPrivate(e+"Close",u[e])}))}_updateChildren(){super._updateChildren(),this._psi=this.startIndex(),this._pei=this.endIndex(),this.isDirty("visible")&&this.bulletsContainer.set("visible",this.get("visible"));const e=this.get("heatRules");if(this._valuesDirty&&e&&e.length>0&&(0,a.i)(e,(e=>{const t=e.minValue||this.getPrivate(e.dataField+"Low")||0,s=e.maxValue||this.getPrivate(e.dataField+"High")||0;(0,a.i)(e.target._entities,(i=>{const r=i.dataItem.get(e.dataField);if(!(0,a.k)(r)){e.neutral&&i.set(e.key,e.neutral);const t=i.states;if(t){const s=t.lookup("default");s&&e.neutral&&s.set(e.key,e.neutral)}if(!e.customFunction)return}if(e.customFunction)e.customFunction.call(this,i,t,s,r);else{let l,n;l=e.logarithmic?(Math.log(r)*Math.LOG10E-Math.log(t)*Math.LOG10E)/(Math.log(s)*Math.LOG10E-Math.log(t)*Math.LOG10E):(r-t)/(s-t),!(0,a.k)(r)||(0,a.k)(l)&&Math.abs(l)!=1/0||(l=.5),(0,a.k)(e.min)?n=e.min+(e.max-e.min)*l:e.min instanceof a.C?n=a.C.interpolate(l,e.min,e.max):e.min instanceof a.P&&(n=(0,a.J)(l,e.min,e.max)),i.set(e.key,n);const o=i.states;if(o){const t=o.lookup("default");t&&t.set(e.key,n)}}}))})),this.get("visible")){let e=this.dataItems.length,t=this.startIndex(),s=this.endIndex();s<e&&s++,t>0&&t--;for(let i=0;i<t;i++)this._hideBullets(this.dataItems[i]);for(let i=t;i<s;i++)this._positionBullets(this.dataItems[i]);for(let i=s;i<e;i++)this._hideBullets(this.dataItems[i])}}_positionBullets(e){e.bullets&&(0,a.i)(e.bullets,(e=>{this._positionBullet(e);const t=e.get("sprite");e.get("dynamic")&&(t&&(t._markDirtyKey("fill"),t.markDirtySize()),t instanceof a.g&&t.walkChildren((e=>{e._markDirtyKey("fill"),e.markDirtySize(),e instanceof a.L&&e.text.markDirtyText()}))),t instanceof a.L&&t.get("populateText")&&t.text.markDirtyText()}))}_hideBullets(e){e.bullets&&(0,a.i)(e.bullets,(e=>{let t=e.get("sprite");t&&t.setPrivate("visible",!1)}))}_positionBullet(e){}_placeBulletsContainer(e){e.bulletsContainer.children.moveValue(this.bulletsContainer)}_removeBulletsContainer(){const e=this.bulletsContainer;e.parent&&e.parent.children.removeValue(e)}disposeDataItem(e){const t=e.bullets;t&&(0,a.i)(t,(e=>{e.dispose()}))}_getItemReaderLabel(){return""}showDataItem(e,t){const s=Object.create(null,{showDataItem:{get:()=>super.showDataItem}});return(0,i.d)(this,void 0,void 0,(function*(){const i=[s.showDataItem.call(this,e,t)],r=e.bullets;r&&(0,a.i)(r,(e=>{const s=e.get("sprite");s&&i.push(s.show(t))})),yield Promise.all(i)}))}hideDataItem(e,t){const s=Object.create(null,{hideDataItem:{get:()=>super.hideDataItem}});return(0,i.d)(this,void 0,void 0,(function*(){const i=[s.hideDataItem.call(this,e,t)],r=e.bullets;r&&(0,a.i)(r,(e=>{const s=e.get("sprite");s&&i.push(s.hide(t))})),yield Promise.all(i)}))}_sequencedShowHide(e,t){return(0,i.d)(this,void 0,void 0,(function*(){if(this.get("sequencedInterpolation"))if((0,a.k)(t)||(t=this.get("interpolationDuration",0)),t>0){const s=this.startIndex(),r=this.endIndex();yield Promise.all((0,a.K)(this.dataItems,((a,l)=>(0,i.d)(this,void 0,void 0,(function*(){let i=t||0;(l<s-10||l>r+10)&&(i=0);let n=this.get("sequencedDelay",0)+i/(r-s);yield function(e){return new Promise(((t,s)=>{setTimeout(t,e)}))}(n*(l-s)),e?yield this.showDataItem(a,i):yield this.hideDataItem(a,i)})))))}else yield Promise.all((0,a.K)(this.dataItems,(t=>e?this.showDataItem(t,0):this.hideDataItem(t,0))))}))}updateLegendValue(e){if(e){const t=e.get("legendDataItem");if(t){const s=t.get("valueLabel");if(s){const t=s.text;let i="";s._setDataItem(e),i=this.get("legendValueText",t.get("text","")),s.set("text",i),t.markDirtyText()}const i=t.get("label");if(i){const t=i.text;let s="";i._setDataItem(e),s=this.get("legendLabelText",t.get("text","")),i.set("text",s),t.markDirtyText()}}}}updateLegendMarker(e){}_onHide(){super._onHide();const e=this.getTooltip();e&&e.hide()}hoverDataItem(e){}unhoverDataItem(e){}_getBase(e){const t=this.dataItems[this.startIndex()];return t?t.get(e):0}}function u(e,t){for(let s=0,i=t.length;s<i;s++){const i=t[s];if(i.length>0){let t=i[0];if(t.length>0){let s=t[0];e.moveTo(s.x,s.y);for(let t=0,a=i.length;t<a;t++)d(e,i[t])}}}}function d(e,t){for(let s=0,i=t.length;s<i;s++){const i=t[s];e.lineTo(i.x,i.y)}}Object.defineProperty(h,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Series"}),Object.defineProperty(h,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:n.classNames.concat([h.className])});class c extends a.e{_beforeChanged(){super._beforeChanged(),(this.isDirty("points")||this.isDirty("segments")||this._sizeDirty||this.isPrivateDirty("width")||this.isPrivateDirty("height"))&&(this._clear=!0)}_changed(){if(super._changed(),this._clear){const e=this.get("points"),t=this.get("segments");if(e&&e.length>0){let t=e[0];this._display.moveTo(t.x,t.y),u(this._display,[[e]])}else if(t)u(this._display,t);else if(!this.get("draw")){let e=this.width(),t=this.height();this._display.moveTo(0,0),this._display.lineTo(e,t)}}}}function m(e){return function(){return e}}Object.defineProperty(c,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Line"}),Object.defineProperty(c,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:a.e.classNames.concat([c.className])});const p=Math.PI,g=2*p,f=1e-6,b=g-f;function _(e){this._+=e[0];for(let t=1,s=e.length;t<s;++t)this._+=arguments[t]+e[t]}class v{constructor(e){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=null==e?_:function(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return _;const s=10**t;return function(e){this._+=e[0];for(let t=1,i=e.length;t<i;++t)this._+=Math.round(arguments[t]*s)/s+e[t]}}(e)}moveTo(e,t){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}`}closePath(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(e,t){this._append`L${this._x1=+e},${this._y1=+t}`}quadraticCurveTo(e,t,s,i){this._append`Q${+e},${+t},${this._x1=+s},${this._y1=+i}`}bezierCurveTo(e,t,s,i,a,r){this._append`C${+e},${+t},${+s},${+i},${this._x1=+a},${this._y1=+r}`}arcTo(e,t,s,i,a){if(e=+e,t=+t,s=+s,i=+i,(a=+a)<0)throw new Error(`negative radius: ${a}`);let r=this._x1,l=this._y1,n=s-e,o=i-t,h=r-e,u=l-t,d=h*h+u*u;if(null===this._x1)this._append`M${this._x1=e},${this._y1=t}`;else if(d>f)if(Math.abs(u*n-o*h)>f&&a){let c=s-r,m=i-l,g=n*n+o*o,b=c*c+m*m,_=Math.sqrt(g),v=Math.sqrt(d),y=a*Math.tan((p-Math.acos((g+d-b)/(2*_*v)))/2),w=y/v,I=y/_;Math.abs(w-1)>f&&this._append`L${e+w*h},${t+w*u}`,this._append`A${a},${a},0,0,${+(u*c>h*m)},${this._x1=e+I*n},${this._y1=t+I*o}`}else this._append`L${this._x1=e},${this._y1=t}`}arc(e,t,s,i,a,r){if(e=+e,t=+t,r=!!r,(s=+s)<0)throw new Error(`negative radius: ${s}`);let l=s*Math.cos(i),n=s*Math.sin(i),o=e+l,h=t+n,u=1^r,d=r?i-a:a-i;null===this._x1?this._append`M${o},${h}`:(Math.abs(this._x1-o)>f||Math.abs(this._y1-h)>f)&&this._append`L${o},${h}`,s&&(d<0&&(d=d%g+g),d>b?this._append`A${s},${s},0,1,${u},${e-l},${t-n}A${s},${s},0,1,${u},${this._x1=o},${this._y1=h}`:d>f&&this._append`A${s},${s},0,${+(d>=p)},${u},${this._x1=e+s*Math.cos(a)},${this._y1=t+s*Math.sin(a)}`)}rect(e,t,s,i){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}h${s=+s}v${+i}h${-s}Z`}toString(){return this._}}function y(e){let t=3;return e.digits=function(s){if(!arguments.length)return t;if(null==s)t=null;else{const e=Math.floor(s);if(!(e>=0))throw new RangeError(`invalid digits: ${s}`);t=e}return e},()=>new v(t)}class w extends a.g{constructor(){super(...arguments),Object.defineProperty(this,"chartContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(a.g.new(this._root,{width:a.a,height:a.a,interactiveChildren:!1}))}),Object.defineProperty(this,"bulletsContainer",{enumerable:!0,configurable:!0,writable:!0,value:a.g.new(this._root,{interactiveChildren:!1,isMeasured:!1,position:"absolute",width:a.a,height:a.a})})}}Object.defineProperty(w,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Chart"}),Object.defineProperty(w,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:a.g.classNames.concat([w.className])});class I extends w{constructor(){super(...arguments),Object.defineProperty(this,"seriesContainer",{enumerable:!0,configurable:!0,writable:!0,value:a.g.new(this._root,{width:a.a,height:a.a,isMeasured:!1})}),Object.defineProperty(this,"series",{enumerable:!0,configurable:!0,writable:!0,value:new a.N})}_afterNew(){super._afterNew(),this._disposers.push(this.series);const e=this.seriesContainer.children;this._disposers.push(this.series.events.onAll((t=>{if("clear"===t.type){(0,a.i)(t.oldValues,(e=>{this._removeSeries(e)}));const e=this.get("colors");e&&e.reset();const s=this.get("patterns");s&&s.reset()}else if("push"===t.type)e.moveValue(t.newValue),this._processSeries(t.newValue);else if("setIndex"===t.type)e.setIndex(t.index,t.newValue),this._processSeries(t.newValue);else if("insertIndex"===t.type)e.insertIndex(t.index,t.newValue),this._processSeries(t.newValue);else if("removeIndex"===t.type)this._removeSeries(t.oldValue);else{if("moveIndex"!==t.type)throw new Error("Unknown IListEvent type");e.moveValue(t.value,t.newIndex),this._processSeries(t.value)}})))}_processSeries(e){e.chart=this,e._placeBulletsContainer(this)}_removeSeries(e){e.isDisposed()||(this.seriesContainer.children.removeValue(e),e._removeBulletsContainer())}}Object.defineProperty(I,"className",{enumerable:!0,configurable:!0,writable:!0,value:"SerialChart"}),Object.defineProperty(I,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:w.classNames.concat([I.className])});class x extends c{}Object.defineProperty(x,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Tick"}),Object.defineProperty(x,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:c.classNames.concat([x.className])})},87246:(e,t,s)=>{s.d(t,{C:()=>a});var i=s(73318);class a extends i.E{_afterNew(){super._afterNewApplyThemes(),this._dirty.colors=!1}_beforeChanged(){this.isDirty("colors")&&this.reset()}generateColors(){this.setPrivate("currentPass",this.getPrivate("currentPass",0)+1);const e=this.getPrivate("currentPass"),t=this.get("colors",[this.get("baseColor",i.C.fromHex(16711680))]);this.getPrivate("numColors")||this.setPrivate("numColors",t.length);const s=this.getPrivate("numColors"),a=this.get("passOptions"),r=this.get("reuse");for(let l=0;l<s;l++)if(r)t.push(t[l]);else{const s=t[l].toHSL();let r=s.h+(a.hue||0)*e;for(;r>1;)r-=1;let n=s.s+(a.saturation||0)*e;n>1&&(n=1),n<0&&(n=0);let o=s.l+(a.lightness||0)*e;for(;o>1;)o-=1;t.push(i.C.fromHSL(r,n,o))}}getIndex(e){const t=this.get("colors",[]),s=this.get("saturation");return e>=t.length?(this.generateColors(),this.getIndex(e)):null!=s?i.C.saturate(t[e],s):t[e]}next(){let e=this.getPrivate("currentStep",this.get("startIndex",0));return this.setPrivate("currentStep",e+this.get("step",1)),this.getIndex(e)}reset(){this.setPrivate("currentStep",this.get("startIndex",0)),this.setPrivate("currentPass",0)}}Object.defineProperty(a,"className",{enumerable:!0,configurable:!0,writable:!0,value:"ColorSet"}),Object.defineProperty(a,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:i.E.classNames.concat([a.className])})}}]);
//# sourceMappingURL=38905.eb438b10.chunk.js.map