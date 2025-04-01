/*! For license information please see 586.d85f1026.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkopenspace=self.webpackChunkopenspace||[]).push([[586],{586:(e,t,i)=>{i(24482),i(85375),i(84660),i(5368);var o=i(30697),s=i(80526),n=i(49469),a=i(37022),l=i(5417),r=i(98246),c=i(929),d=i(3890),h=i(88267),p=i(94161);const m="handle",u="dropdown",w="drag",g="blank",b="{label}",v="{position}",f="{total}",D=["top","up","down","bottom"],y=p.AH`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}.dropdown{block-size:100%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`;class I extends l.WF{constructor(){super(...arguments),this.disabled=!1,this.messages=(0,h.u)({blocking:!0}),this.moveToItems=[],this.open=!1,this.overlayPositioning="absolute",this.placement=d.b,this.scale="m",this.calciteSortHandleBeforeClose=(0,l.lh)({cancelable:!1}),this.calciteSortHandleBeforeOpen=(0,l.lh)({cancelable:!1}),this.calciteSortHandleClose=(0,l.lh)({cancelable:!1}),this.calciteSortHandleMove=(0,l.lh)({cancelable:!1}),this.calciteSortHandleOpen=(0,l.lh)({cancelable:!1}),this.calciteSortHandleReorder=(0,l.lh)({cancelable:!1})}static#e=(()=>this.properties={hasSetInfo:16,isSetDisabled:16,disabled:7,flipPlacements:0,label:1,messageOverrides:0,messages:0,moveToItems:0,open:7,overlayPositioning:3,placement:3,scale:3,setPosition:9,setSize:9,widthScale:3})();static#t=(()=>this.styles=y)();get hasSetInfo(){return"number"==typeof this.setPosition&&"number"==typeof this.setSize}get isSetDisabled(){const{setPosition:e,setSize:t,moveToItems:i}=this;return!!this.hasSetInfo&&(e<1||t<1||t<2&&i.length<1)}async setFocus(){await(0,r.c)(this),this.dropdownEl?.setFocus()}willUpdate(e){e.has("open")&&(this.hasUpdated||!1!==this.open)&&this.openHandler()}updated(){(0,c.u)(this)}openHandler(){this.disabled?this.open=!1:this.dropdownEl&&(this.dropdownEl.open=this.open)}setDropdownEl(e){e&&(this.dropdownEl=e,this.openHandler())}getLabel(){const{label:e,messages:t,setPosition:i,setSize:o}=this;if(!this.hasSetInfo)return e??"";let s=e?t.repositionLabel.replace(b,e):t.reposition;return s=s.replace(v,i?i.toString():""),s.replace(f,o?o.toString():"")}handleBeforeOpen(e){e.stopPropagation(),this.calciteSortHandleBeforeOpen.emit()}handleOpen(e){e.stopPropagation(),this.calciteSortHandleOpen.emit(),this.open=!0}handleBeforeClose(e){e.stopPropagation(),this.calciteSortHandleBeforeClose.emit()}handleClose(e){e.stopPropagation(),this.calciteSortHandleClose.emit(),this.open=!1}handleReorder(e){this.calciteSortHandleReorder.emit({reorder:e.target.dataset.value})}handleMoveTo(e){const t=e.target.dataset.id,i=this.moveToItems.find((e=>e.id===t));this.calciteSortHandleMove.emit({moveTo:i})}render(){const{disabled:e,flipPlacements:t,open:i,overlayPositioning:o,placement:n,scale:r,widthScale:d}=this,h=this.getLabel(),p=e||this.isSetDisabled;return(0,c.I)({disabled:e,children:a.qy`<calcite-dropdown class=${(0,l.CP)(u)} .disabled=${p} .flipPlacements=${t} @calciteDropdownBeforeClose=${this.handleBeforeClose} @calciteDropdownBeforeOpen=${this.handleBeforeOpen} @calciteDropdownClose=${this.handleClose} @calciteDropdownOpen=${this.handleOpen} .overlayPositioning=${o} .placement=${n} .scale=${r} .widthScale=${d} ${(0,s.K)(this.setDropdownEl)}><calcite-action .active=${i} appearance=transparent class=${(0,l.CP)(m)} .dragHandle=${!0} .icon=${e?g:w} .label=${h} .scale=${r} slot=trigger .text=${h} title=${h??a.s6}></calcite-action>${this.renderGroup()}${this.renderMoveToGroup()}</calcite-dropdown>`})}renderMoveToItem(e){return(0,n.D)(e.id,a.qy`<calcite-dropdown-item data-id=${e.id??a.s6} .label=${e.label} @calciteDropdownItemSelect=${this.handleMoveTo}>${e.label}</calcite-dropdown-item>`)}renderGroup(){return this.hasSetInfo?(0,n.D)("reorder",a.qy`<calcite-dropdown-group .groupTitle=${this.messages.reorder} .scale=${this.scale} selection-mode=none>${this.renderTop()}${this.renderUp()}${this.renderDown()}${this.renderBottom()}</calcite-dropdown-group>`):null}renderMoveToGroup(){const{messages:e,moveToItems:t,scale:i}=this;return t.length?(0,n.D)("move-to-items",a.qy`<calcite-dropdown-group .groupTitle=${e.moveTo} .scale=${i} selection-mode=none>${t.map((e=>this.renderMoveToItem(e)))}</calcite-dropdown-group>`):null}renderDropdownItem(e,t){return(0,n.D)(D[e],a.qy`<calcite-dropdown-item data-value=${D[e]??a.s6} .label=${t} @calciteDropdownItemSelect=${this.handleReorder}>${t}</calcite-dropdown-item>`)}renderTop(){const{setPosition:e}=this;return 1!==e&&2!==e?this.renderDropdownItem(0,this.messages.moveToTop):null}renderUp(){return 1!==this.setPosition?this.renderDropdownItem(1,this.messages.moveUp):null}renderDown(){return this.setPosition!==this.setSize?this.renderDropdownItem(2,this.messages.moveDown):null}renderBottom(){const{setPosition:e,setSize:t}=this;return e!==t&&e!==t-1?this.renderDropdownItem(3,this.messages.moveToBottom):null}}(0,o.c)("calcite-sort-handle",I)},5368:(e,t,i)=>{i.r(t),i.d(t,{DropdownGroup:()=>p});var o=i(30697),s=i(37022),n=i(5417),a=i(13922),l=i(92128),r=i(94161);const c="dropdown-title",d="dropdown-separator",h=r.AH`:host{display:block}.container{text-align:start}.dropdown-title{margin-block-end:-1px;display:block;cursor:default;overflow-wrap:break-word;border-width:0px;border-block-end-width:1px;border-style:solid;font-weight:var(--calcite-font-weight-bold);border-color:var(--calcite-dropdown-group-border-color, var(--calcite-color-border-3));color:var(--calcite-dropdown-group-title-text-color, var(--calcite-color-text-2))}.dropdown-separator{display:block;block-size:1px;background-color:var(--calcite-dropdown-group-border-color, var(--calcite-color-border-3))}:host([scale=s]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .dropdown-title{padding:.5rem}:host([scale=m]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .dropdown-title{padding:.75rem}:host([scale=l]){font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .dropdown-title{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}`;class p extends n.WF{constructor(){super(),this.mutationObserver=(0,a.c)("mutation",(()=>this.updateItems())),this.position=-1,this.scale="m",this.selectionMode="single",this.calciteInternalDropdownItemChange=(0,n.lh)({cancelable:!1}),this.listen("calciteInternalDropdownItemSelect",this.updateActiveItemOnChange)}static#e=(()=>this.properties={groupTitle:3,position:9,scale:3,selectionMode:3})();static#t=(()=>this.shadowRootOptions={mode:"open",delegatesFocus:!0})();static#i=(()=>this.styles=h)();connectedCallback(){super.connectedCallback(),this.updateItems(),this.mutationObserver?.observe(this.el,{childList:!0})}willUpdate(e){e.has("selectionMode")&&(this.hasUpdated||"single"!==this.selectionMode)&&this.updateItems()}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect()}updateActiveItemOnChange(e){this.requestedDropdownGroup=e.detail.requestedDropdownGroup,this.requestedDropdownItem=e.detail.requestedDropdownItem,this.calciteInternalDropdownItemChange.emit({requestedDropdownGroup:this.requestedDropdownGroup,requestedDropdownItem:this.requestedDropdownItem})}updateItems(){Array.from(this.el.querySelectorAll("calcite-dropdown-item")).forEach((e=>e.selectionMode=this.selectionMode))}render(){const e=this.groupTitle?s.qy`<span aria-hidden=true class=${(0,n.CP)(c)}>${this.groupTitle}</span>`:null,t=this.position>0?s.qy`<div class=${(0,n.CP)(d)} role=separator></div>`:null;return this.el.ariaLabel=this.groupTitle,this.el.role="group",s.qy`<div class=${(0,n.CP)({[l.C.container]:!0})}>${t}${e}<slot></slot></div>`}}(0,o.c)("calcite-dropdown-group",p)},24482:(e,t,i)=>{i.r(t),i.d(t,{Dropdown:()=>y});var o=i(30697),s=i(80526),n=i(37022),a=i(5417),l=i(50965),r=i(3890),c=i(90596),d=i(929),h=i(19457),p=i(98246),m=i(13922),u=i(60914),w=i(85914),g=i(94161);const b="trigger",v="calcite-dropdown-content",f="calcite-dropdown-wrapper",D=g.AH`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block}.calcite-dropdown-wrapper{--calcite-floating-ui-z-index: var(--calcite-z-index-dropdown);inline-size:max-content;display:none;max-inline-size:100vw;max-block-size:100vh;inset-block-start:0;left:0;z-index:var(--calcite-floating-ui-z-index)}.calcite-dropdown-wrapper .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset,left,opacity;opacity:0;box-shadow:0 0 16px #00000029;z-index:var(--calcite-z-index);border-radius:.25rem}.calcite-dropdown-wrapper[data-placement^=bottom] .calcite-floating-ui-anim{inset-block-start:-5px}.calcite-dropdown-wrapper[data-placement^=top] .calcite-floating-ui-anim{inset-block-start:5px}.calcite-dropdown-wrapper[data-placement^=left] .calcite-floating-ui-anim{left:5px}.calcite-dropdown-wrapper[data-placement^=right] .calcite-floating-ui-anim{left:-5px}.calcite-dropdown-wrapper[data-placement] .calcite-floating-ui-anim--active{opacity:1;inset-block-start:0;left:0}.calcite-dropdown-content{max-height:45vh;width:auto;overflow-y:auto;overflow-x:hidden;inline-size:var(--calcite-dropdown-width, var(--calcite-internal-dropdown-width));background-color:var(--calcite-dropdown-background-color, var(--calcite-color-foreground-1))}.calcite-trigger-container{position:relative;display:flex;height:100%;flex:1 1 auto;word-wrap:break-word;word-break:break-word}.width-s{--calcite-internal-dropdown-width: 12rem}.width-m{--calcite-internal-dropdown-width: 14rem}.width-l{--calcite-internal-dropdown-width: 16rem}@media (forced-colors: active){:host([open]) .calcite-dropdown-wrapper{border:var(--calcite-border-width-sm) solid canvasText}}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}`;class y extends a.WF{constructor(){super(),this.focusLastDropdownItem=!1,this.groups=[],this.guid=`calcite-dropdown-${(0,c.g)()}`,this.items=[],this.mutationObserver=(0,m.c)("mutation",(()=>this.updateItems())),this.onOpenEnd=()=>{this.focusOnFirstActiveOrDefaultItem(),this.el.removeEventListener("calciteDropdownOpen",this.onOpenEnd)},this.transitionProp="opacity",this.resizeObserver=(0,m.c)("resize",(e=>this.resizeObserverCallback(e))),this.closeOnSelectDisabled=!1,this.disabled=!1,this.maxItems=0,this.offsetDistance=0,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement=r.b,this.scale="m",this.selectedItems=[],this.type="click",this.calciteDropdownBeforeClose=(0,a.lh)({cancelable:!1}),this.calciteDropdownBeforeOpen=(0,a.lh)({cancelable:!1}),this.calciteDropdownClose=(0,a.lh)({cancelable:!1}),this.calciteDropdownOpen=(0,a.lh)({cancelable:!1}),this.calciteDropdownSelect=(0,a.lh)({cancelable:!1}),this.listenOn(window,"click",this.closeCalciteDropdownOnClick),this.listen("calciteInternalDropdownCloseRequest",this.closeCalciteDropdownOnEvent),this.listenOn(window,"calciteDropdownOpen",this.closeCalciteDropdownOnOpenEvent),this.listen("pointerenter",this.pointerEnterHandler),this.listen("pointerleave",this.pointerLeaveHandler),this.listen("calciteInternalDropdownItemKeyEvent",this.calciteInternalDropdownItemKeyEvent),this.listen("calciteInternalDropdownItemSelect",this.handleItemSelect)}static#e=(()=>this.properties={closeOnSelectDisabled:7,disabled:7,flipPlacements:0,maxItems:11,offsetDistance:11,offsetSkidding:11,open:7,overlayPositioning:3,placement:3,scale:3,selectedItems:0,type:3,widthScale:3,width:3})();static#t=(()=>this.shadowRootOptions={mode:"open",delegatesFocus:!0})();static#i=(()=>this.styles=D)();async reposition(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{filteredFlipPlacements:t,floatingEl:i,offsetDistance:o,offsetSkidding:s,overlayPositioning:n,placement:a,referenceEl:l}=this;return(0,r.r)(this,{floatingEl:i,referenceEl:l,offsetDistance:o,offsetSkidding:s,overlayPositioning:n,placement:a,flipPlacements:t,type:"menu"},e)}async setFocus(){await(0,p.c)(this),(0,l.h)(this.referenceEl)}connectedCallback(){super.connectedCallback(),this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0}),this.setFilteredPlacements(),this.updateItems(),(0,r.c)(this)}willUpdate(e){e.has("open")&&(this.hasUpdated||!1!==this.open)&&this.openHandler(),e.has("disabled")&&(this.hasUpdated||!1!==this.disabled)&&this.handleDisabledChange(this.disabled),e.has("flipPlacements")&&this.flipPlacementsHandler(),e.has("maxItems")&&this.hasUpdated&&this.setMaxScrollerHeight(),this.hasUpdated&&(e.has("offsetDistance")&&0!==this.offsetDistance||e.has("offsetSkidding")&&0!==this.offsetSkidding||e.has("overlayPositioning")&&"absolute"!==this.overlayPositioning||e.has("placement")&&this.placement!==r.b)&&this.reposition(!0),e.has("scale")&&(this.hasUpdated||"m"!==this.scale)&&this.handlePropsChange()}updated(){(0,d.u)(this)}loaded(){this.updateSelectedItems(),(0,r.c)(this)}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect(),this.resizeObserver?.disconnect(),(0,r.a)(this)}openHandler(){(0,u.o)(this),!this.disabled&&this.reposition(!0)}handleDisabledChange(e){e||(this.open=!1)}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}handlePropsChange(){this.updateItems(),this.updateGroupProps()}closeCalciteDropdownOnClick(e){this.disabled||!this.open||e.composedPath().includes(this.el)||this.closeCalciteDropdown(!1)}closeCalciteDropdownOnEvent(e){this.closeCalciteDropdown(),e.stopPropagation()}closeCalciteDropdownOnOpenEvent(e){e.composedPath().includes(this.el)||(this.open=!1)}pointerEnterHandler(){this.disabled||"hover"!==this.type||this.toggleDropdown()}pointerLeaveHandler(){this.disabled||"hover"!==this.type||this.closeCalciteDropdown()}getTraversableItems(){return this.items.filter((e=>!e.disabled&&!e.hidden))}calciteInternalDropdownItemKeyEvent(e){const{keyboardEvent:t}=e.detail,i=t.target,o=this.getTraversableItems();switch(t.key){case"Tab":this.open=!1,this.updateTabIndexOfItems(i);break;case"ArrowDown":(0,l.d)(o,i,"next");break;case"ArrowUp":(0,l.d)(o,i,"previous");break;case"Home":(0,l.d)(o,i,"first");break;case"End":(0,l.d)(o,i,"last")}e.stopPropagation()}handleItemSelect(e){this.updateSelectedItems(),e.stopPropagation(),this.calciteDropdownSelect.emit(),(!this.closeOnSelectDisabled||"none"===e.detail.requestedDropdownGroup.selectionMode)&&this.closeCalciteDropdown(),e.stopPropagation()}setFilteredPlacements(){const{el:e,flipPlacements:t}=this;this.filteredFlipPlacements=t?(0,r.f)(t,e):null}updateTriggers(e){this.triggers=e.target.assignedElements({flatten:!0}),this.reposition(!0)}updateItems(){this.items=this.groups.map((e=>Array.from(e?.querySelectorAll("calcite-dropdown-item")))).reduce(((e,t)=>[...e,...t]),[]),this.updateSelectedItems(),this.reposition(!0),this.items.forEach((e=>e.scale=this.scale))}updateGroups(e){const t=e.target.assignedElements({flatten:!0}).filter((e=>e?.matches("calcite-dropdown-group")));this.groups=t,this.updateItems(),this.updateGroupProps()}updateGroupProps(){this.groups.forEach(((e,t)=>{e.scale=this.scale,e.position=t}))}resizeObserverCallback(e){e.forEach((e=>{const{target:t}=e;this.hasUpdated&&(t===this.referenceEl?this.setDropdownWidth():t===this.scrollerEl&&this.setMaxScrollerHeight())}))}setDropdownWidth(){const{referenceEl:e,scrollerEl:t}=this,i=e?.clientWidth;t.style.minWidth=`${i}px`}setMaxScrollerHeight(){const e=this.getMaxScrollerHeight();this.scrollerEl.style.maxBlockSize=e>0?`${e}px`:"",this.reposition(!0)}setScrollerAndTransitionEl(e){e&&(this.resizeObserver?.observe(e),this.scrollerEl=e,this.transitionEl=e)}onBeforeOpen(){this.calciteDropdownBeforeOpen.emit()}onOpen(){this.calciteDropdownOpen.emit()}onBeforeClose(){this.calciteDropdownBeforeClose.emit()}onClose(){this.calciteDropdownClose.emit(),(0,r.h)(this)}setReferenceEl(e){this.referenceEl=e,(0,r.c)(this),e&&this.resizeObserver?.observe(e)}setFloatingEl(e){this.floatingEl=e,(0,r.c)(this)}keyDownHandler(e){if(!e.composedPath().includes(this.referenceEl))return;const{defaultPrevented:t,key:i}=e;if(!t){if("Escape"===i)return this.closeCalciteDropdown(),void e.preventDefault();if(this.open&&e.shiftKey&&"Tab"===i)return this.closeCalciteDropdown(),void e.preventDefault();(0,h.i)(i)?(this.toggleDropdown(),e.preventDefault()):("ArrowDown"===i||"ArrowUp"===i)&&(e.preventDefault(),this.focusLastDropdownItem="ArrowUp"===i,this.open=!0,this.el.addEventListener("calciteDropdownOpen",this.onOpenEnd))}}updateSelectedItems(){this.selectedItems=this.items.filter((e=>e.selected))}getMaxScrollerHeight(){const{maxItems:e,items:t}=this;return t.length>=e&&e>0?this.getYDistance(this.scrollerEl,t[e-1]):0}getYDistance(e,t){const i=e.getBoundingClientRect();return t.getBoundingClientRect().bottom-i.top}closeCalciteDropdown(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.open=!1,e&&(0,l.b)(this.triggers[0])}focusOnFirstActiveOrDefaultItem(){const e=this.getTraversableItems().find((e=>e.selected))||(this.focusLastDropdownItem?this.items[this.items.length-1]:this.items[0]);this.focusLastDropdownItem=!1,e&&(0,l.b)(e)}toggleDropdown(){this.open=!this.open,this.open&&this.el.addEventListener("calciteDropdownOpen",this.onOpenEnd)}updateTabIndexOfItems(e){this.items.forEach((t=>{t.tabIndex=e!==t?-1:0}))}render(){const{open:e,guid:t}=this;return(0,d.I)({disabled:this.disabled,children:n.qy`<div class="calcite-trigger-container" .id=${`${t}-menubutton`} @click=${this.toggleDropdown} @keydown=${this.keyDownHandler} ${(0,s.K)(this.setReferenceEl)}><slot aria-controls=${`${t}-menu`} .ariaExpanded=${e} aria-haspopup=menu name=${b} @slotchange=${this.updateTriggers}></slot></div><div .ariaHidden=${!e} class=${(0,a.CP)({[f]:!0,[(0,w.g)("width",this.width,this.widthScale)]:!(!this.width&&!this.widthScale)})} ${(0,s.K)(this.setFloatingEl)}><div aria-labelledby=${`${t}-menubutton`} class=${(0,a.CP)({[v]:!0,[r.F.animation]:!0,[r.F.animationActive]:e})} .id=${`${t}-menu`} role=menu ${(0,s.K)(this.setScrollerAndTransitionEl)}><slot @slotchange=${this.updateGroups}></slot></div></div>`})}}(0,o.c)("calcite-dropdown",y)},84660:(e,t,i)=>{i.r(t),i.d(t,{DropdownItem:()=>p});i(16702);var o=i(30697),s=i(28531),n=i(80526),a=i(5417),l=i(50965),r=i(98246),c=i(929),d=i(92128);const h=i(94161).AH`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;flex-grow:1;align-items:center;outline-color:transparent}.container{position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;text-decoration-line:none;color:var(--calcite-dropdown-item-text-color, var(--calcite-color-text-3));text-align:start;outline-color:transparent}.container a{outline:none;position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;text-decoration-line:none;color:var(--calcite-dropdown-item-text-color, var(--calcite-color-text-3))}.dropdown-item-content{flex:1 1 auto;padding-block:.125rem}.dropdown-item-icon{position:relative;opacity:0;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);transform:scale(.9)}:host([scale=s]) .container{padding-block:.25rem;padding-inline:.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .dropdown-item-icon,:host([scale=s]) .dropdown-item-icon--start{padding-inline-end:var(--calcite-spacing-sm)}:host([scale=s]) .dropdown-item-icon--end{padding-inline-start:var(--calcite-spacing-sm)}:host([scale=m]) .container{padding-block:.5rem;padding-inline:.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .dropdown-item-icon,:host([scale=m]) .dropdown-item-icon--start{padding-inline-end:var(--calcite-spacing-md)}:host([scale=m]) .dropdown-item-icon--end{padding-inline-start:var(--calcite-spacing-md)}:host([scale=l]) .container{padding-block:.625rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .dropdown-item-icon,:host([scale=l]) .dropdown-item-icon--start{padding-inline-end:var(--calcite-spacing-lg)}:host([scale=l]) .dropdown-item-icon--end{padding-inline-start:var(--calcite-spacing-lg)}:host(:focus) .container{color:var(--calcite-color-text-1);text-decoration-line:none;outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))));color:var(--calcite-dropdown-item-text-color-press, var(--calcite-color-text-1))}:host(:hover:not([disabled])) .container{background-color:var(--calcite-dropdown-item-background-color-hover, var(--calcite-color-foreground-2))}:host(:active:not([disabled])) .container{background-color:var(--calcite-dropdown-item-background-color-press, var(--calcite-color-foreground-3))}:host(:hover:not([disabled])) .container,:host(:active:not([disabled])) .container{text-decoration-line:none;color:var(--calcite-dropdown-item-text-color-press, var(--calcite-color-text-1))}:host(:hover:not([disabled])) .dropdown-link,:host(:active:not([disabled])) .dropdown-link{color:var(--calcite-dropdown-item-text-color-press, var(--calcite-color-text-1))}:host([selected]) .container:not(.container--none-selection),:host([selected]) .dropdown-link{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-dropdown-item-text-color-press, var(--calcite-color-text-1))}:host([selected]) .container:not(.container--none-selection) calcite-icon,:host([selected]) .dropdown-link calcite-icon{color:var(--calcite-dropdown-item-icon-color-press, var(--calcite-color-brand))}:host(:hover:not([disabled])) .dropdown-item-icon{color:var(--calcite-dropdown-item-icon-color-hover, var(--calcite-color-border-1));opacity:1}:host([selected]) .dropdown-item-icon{opacity:1}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}`;class p extends a.WF{constructor(){super(),this.childLink=(0,n._)(),this.disabled=!1,this.scale="m",this.selected=!1,this.selectionMode="single",this.calciteDropdownItemSelect=(0,a.lh)({cancelable:!1}),this.calciteInternalDropdownCloseRequest=(0,a.lh)({cancelable:!1}),this.calciteInternalDropdownItemKeyEvent=(0,a.lh)({cancelable:!1}),this.calciteInternalDropdownItemSelect=(0,a.lh)({cancelable:!1}),this.listen("click",this.onClick),this.listen("keydown",this.keyDownHandler),this.listenOn(document.body,"calciteInternalDropdownItemChange",this.updateActiveItemOnChange)}static#e=(()=>this.properties={disabled:7,href:3,iconEnd:3,iconFlipRtl:3,iconStart:3,label:1,rel:3,scale:3,selected:7,selectionMode:1,target:3})();static#t=(()=>this.styles=h)();async setFocus(){await(0,r.c)(this),this.el?.focus()}connectedCallback(){super.connectedCallback(),this.initialize()}load(){this.initialize()}updated(){(0,c.u)(this)}onClick(){this.emitRequestedItem()}keyDownHandler(e){switch(e.key){case" ":case"Enter":this.emitRequestedItem(),this.href&&this.childLink.value.click(),e.preventDefault();break;case"Escape":this.calciteInternalDropdownCloseRequest.emit(),e.preventDefault();break;case"Tab":this.calciteInternalDropdownItemKeyEvent.emit({keyboardEvent:e});break;case"ArrowUp":case"ArrowDown":case"Home":case"End":e.preventDefault(),this.calciteInternalDropdownItemKeyEvent.emit({keyboardEvent:e})}}updateActiveItemOnChange(e){e.composedPath().includes(this.parentDropdownGroupEl)&&(this.requestedDropdownGroup=e.detail.requestedDropdownGroup,this.requestedDropdownItem=e.detail.requestedDropdownItem,this.determineActiveItem()),e.stopPropagation()}initialize(){this.parentDropdownGroupEl=this.el.closest("calcite-dropdown-group"),"none"===this.selectionMode&&(this.selected=!1)}determineActiveItem(){switch(this.selectionMode){case"multiple":this.el===this.requestedDropdownItem&&(this.selected=!this.selected);break;case"single":this.el===this.requestedDropdownItem?this.selected=!0:this.requestedDropdownGroup===this.parentDropdownGroupEl&&(this.selected=!1);break;case"none":this.selected=!1}}emitRequestedItem(){this.calciteDropdownItemSelect.emit(),this.calciteInternalDropdownItemSelect.emit({requestedDropdownItem:this.el,requestedDropdownGroup:this.parentDropdownGroupEl})}render(){const{href:e,selectionMode:t,label:i,iconFlipRtl:o}=this,h=s.qy`<calcite-icon class=${(0,a.CP)(d.C.iconStart)} .flipRtl=${"start"===o||"both"===o} .icon=${this.iconStart} .scale=${(0,r.g)(this.scale)}></calcite-icon>`,p=s.qy`<span class=${(0,a.CP)(d.C.itemContent)}><slot></slot></span>`,m=s.qy`<calcite-icon class=${(0,a.CP)(d.C.iconEnd)} .flipRtl=${"end"===o||"both"===o} .icon=${this.iconEnd} .scale=${(0,r.g)(this.scale)}></calcite-icon>`,u=this.iconStart&&this.iconEnd?[h,p,m]:this.iconStart?[h,p]:this.iconEnd?[p,m]:p,w=e?s.qy`<a .ariaLabel=${i} class=${(0,a.CP)(d.C.link)} href=${e??a.s6} rel=${this.rel??a.s6} tabindex=-1 target=${this.target??a.s6} ${(0,n.K)(this.childLink)}>${u}</a>`:u,g=e?null:"single"===t?"menuitemradio":"multiple"===t?"menuitemcheckbox":"menuitem",b="none"!==t?(0,l.t)(this.selected):null,{disabled:v}=this;return this.el.ariaChecked=b,this.el.ariaLabel=e?"":i,this.el.role=g,(0,a.Bq)(this.el,"tabIndex",v?-1:0),(0,c.I)({disabled:v,children:s.qy`<div class=${(0,a.CP)({[d.C.container]:!0,[d.C.containerNone]:"none"===t})}>${"none"!==t?s.qy`<calcite-icon class=${(0,a.CP)(d.C.icon)} .icon=${"multiple"===t?"check":"bullet-point"} .scale=${(0,r.g)(this.scale)}></calcite-icon>`:null}${w}</div>`})}}(0,o.c)("calcite-dropdown-item",p)},85914:(e,t,i)=>{function o(e,t,i){return t?`${e}-${t}`:i?`${e}-${i}`:`${e}-m`}i.d(t,{g:()=>o})},92128:(e,t,i)=>{i.d(t,{C:()=>o});const o={container:"container",containerNone:"container--none-selection",icon:"dropdown-item-icon",iconEnd:"dropdown-item-icon--end",iconStart:"dropdown-item-icon--start",itemContent:"dropdown-item-content",link:"dropdown-link"}}}]);
//# sourceMappingURL=586.d85f1026.chunk.js.map