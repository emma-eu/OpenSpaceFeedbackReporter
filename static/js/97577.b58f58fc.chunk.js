/*! For license information please see 97577.b58f58fc.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkopenspace=self.webpackChunkopenspace||[]).push([[3671,97577],{3671:(e,t,n)=>{n.r(t),n.d(t,{ActionMenu:()=>g});n(85375),n(51866);var o=n(30697),i=n(80526),s=n(37022),a=n(5417),l=n(41732),c=n(50965),r=n(90596),u=n(19457),d=n(98246),h=n(28460);const p=n(94161).AH`:host{box-sizing:border-box;display:flex;flex-direction:column;font-size:var(--calcite-font-size-1)}::slotted(calcite-action-group:not(:last-of-type)){border-block-end-width:var(--calcite-border-width-sm)}.default-trigger{position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}.menu{display:flex;max-block-size:45vh;flex-direction:column;flex-wrap:nowrap;overflow-y:auto;overflow-x:hidden;outline:2px solid transparent;outline-offset:2px;gap:var(--calcite-action-menu-items-space, 0)}:host([hidden]){display:none}[hidden]{display:none}`,m=["ArrowUp","ArrowDown","End","Home"];class g extends a.WF{constructor(){super(...arguments),this.guid=`calcite-action-menu-${(0,r.g)()}`,this.actionElements=[],this.menuButtonClick=()=>{this.toggleOpen()},this.menuButtonId=`${this.guid}-menu-button`,this.menuButtonKeyDown=e=>{const{key:t}=e,{actionElements:n,activeMenuItemIndex:o,open:i}=this;if(n.length){if((0,u.i)(t)){if(e.preventDefault(),!i)return void this.toggleOpen();const t=n[o];t?t.click():this.toggleOpen(!1)}if("Tab"===t)return void(this.open=!1);if("Escape"===t)return this.toggleOpen(!1),void e.preventDefault();this.handleActionNavigation(e,t,n)}},this.menuId=`${this.guid}-menu`,this._open=!1,this.updateAction=(e,t)=>{const{guid:n,activeMenuItemIndex:o}=this,i=`${n}-action-${t}`;e.tabIndex=-1,e.setAttribute("role","menuitem"),e.id||(e.id=i),e.toggleAttribute(h.a,t===o)},this.activeMenuItemIndex=-1,this.appearance="solid",this.expanded=!1,this.overlayPositioning="absolute",this.placement="auto",this.scale="m",this.calciteActionMenuOpen=(0,a.lh)({cancelable:!1})}static#e=(()=>this.properties={activeMenuItemIndex:16,menuButtonEl:16,appearance:3,expanded:7,flipPlacements:0,label:1,open:7,overlayPositioning:3,placement:3,scale:3})();static#t=(()=>this.styles=p)();get open(){return this._open}set open(e){e!==this._open&&(this._open=e,this.openHandler(e))}async setFocus(){return await(0,d.c)(this),(0,c.b)(this.menuButtonEl)}connectedCallback(){super.connectedCallback(),this.connectMenuButtonEl()}willUpdate(e){e.has("expanded")&&(this.hasUpdated||!1!==this.expanded)&&this.expandedHandler(),e.has("activeMenuItemIndex")&&(this.hasUpdated||-1!==this.activeMenuItemIndex)&&this.updateActions(this.actionElements)}disconnectedCallback(){super.disconnectedCallback(),this.disconnectMenuButtonEl()}expandedHandler(){this.open=!1,this.setTooltipReferenceElement()}openHandler(e){this.menuButtonEl&&(this.menuButtonEl.active=e),this.popoverEl&&(this.popoverEl.open=e),this.activeMenuItemIndex=this.open?0:-1,this.calciteActionMenuOpen.emit(),this.setTooltipReferenceElement()}connectMenuButtonEl(){const{menuButtonId:e,menuId:t,open:n,label:o}=this,i=this.slottedMenuButtonEl||this.defaultMenuButtonEl;this.menuButtonEl!==i&&(this.disconnectMenuButtonEl(),this.menuButtonEl=i,this.setTooltipReferenceElement(),i&&(i.active=n,i.setAttribute("aria-controls",t),i.setAttribute("aria-expanded",(0,c.t)(n)),i.setAttribute("aria-haspopup","true"),i.id||(i.id=e),i.label||(i.label=o),i.text||(i.text=o),i.addEventListener("click",this.menuButtonClick),i.addEventListener("keydown",this.menuButtonKeyDown)))}disconnectMenuButtonEl(){const{menuButtonEl:e}=this;e&&(e.removeEventListener("click",this.menuButtonClick),e.removeEventListener("keydown",this.menuButtonKeyDown),this.menuButtonEl=null)}setMenuButtonEl(e){const t=e.target.assignedElements({flatten:!0}).filter((e=>e?.matches("calcite-action")));this.slottedMenuButtonEl=t[0],this.connectMenuButtonEl()}setDefaultMenuButtonEl(e){this.defaultMenuButtonEl=e,e&&this.connectMenuButtonEl()}setPopoverEl(e){e&&(this.popoverEl=e,e.open=this.open)}handleCalciteActionClick(){this.open=!1,this.setFocus()}updateTooltip(e){const t=e.target.assignedElements({flatten:!0}).filter((e=>e?.matches("calcite-tooltip")));this.tooltipEl=t[0],this.setTooltipReferenceElement()}setTooltipReferenceElement(){const{tooltipEl:e,expanded:t,menuButtonEl:n,open:o}=this;e&&(e.referenceElement=t||o?null:n)}updateActions(e){e?.forEach(this.updateAction)}handleDefaultSlotChange(e){const t=e.target.assignedElements({flatten:!0}).reduce(((e,t)=>t?.matches("calcite-action")?(e.push(t),e):t?.matches("calcite-action-group")?e.concat(Array.from(t.querySelectorAll("calcite-action"))):e),[]);this.actionElements=t.filter((e=>!e.disabled&&!e.hidden))}isValidKey(e,t){return!!t.find((t=>t===e))}handleActionNavigation(e,t,n){if(!this.isValidKey(t,m))return;if(e.preventDefault(),!this.open)return this.toggleOpen(),("Home"===t||"ArrowDown"===t)&&(this.activeMenuItemIndex=0),void(("End"===t||"ArrowUp"===t)&&(this.activeMenuItemIndex=n.length-1));"Home"===t&&(this.activeMenuItemIndex=0),"End"===t&&(this.activeMenuItemIndex=n.length-1);const o=this.activeMenuItemIndex;"ArrowUp"===t&&(this.activeMenuItemIndex=(0,l.g)(Math.max(o-1,-1),n.length)),"ArrowDown"===t&&(this.activeMenuItemIndex=(0,l.g)(o+1,n.length))}toggleOpen(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.open;this.open=e}handlePopoverOpen(){this.open=!0,this.setFocus()}handlePopoverClose(){this.open=!1}renderMenuButton(){const{appearance:e,label:t,scale:n,expanded:o}=this;return s.qy`<slot name=${h.S.trigger} @slotchange=${this.setMenuButtonEl}><calcite-action .appearance=${e} class=${(0,a.CP)(h.C.defaultTrigger)} .icon=${h.I.menu} .scale=${n} .text=${t} .textEnabled=${o} ${(0,i.K)(this.setDefaultMenuButtonEl)}></calcite-action></slot>`}renderMenuItems(){const{actionElements:e,activeMenuItemIndex:t,menuId:n,menuButtonEl:o,label:l,placement:c,overlayPositioning:r,flipPlacements:u}=this,d=e[t]?.id||null;return s.qy`<calcite-popover auto-close .flipPlacements=${u} focus-trap-disabled .label=${l} offset-distance=0 @calcitePopoverClose=${this.handlePopoverClose} @calcitePopoverOpen=${this.handlePopoverOpen} .overlayPositioning=${r} .placement=${c} pointer-disabled .referenceElement=${o} trigger-disabled ${(0,i.K)(this.setPopoverEl)}><div aria-activedescendant=${d??s.s6} aria-labelledby=${o?.id??s.s6} class=${(0,a.CP)(h.C.menu)} id=${n??s.s6} @click=${this.handleCalciteActionClick} role=menu tabindex=-1><slot @slotchange=${this.handleDefaultSlotChange}></slot></div></calcite-popover>`}render(){return s.qy`${this.renderMenuButton()}${this.renderMenuItems()}<slot name=${h.S.tooltip} @slotchange=${this.updateTooltip}></slot>`}}(0,o.c)("calcite-action-menu",g)},28460:(e,t,n)=>{n.d(t,{C:()=>o,I:()=>s,S:()=>i,a:()=>a});const o={menu:"menu",defaultTrigger:"default-trigger"},i={tooltip:"tooltip",trigger:"trigger"},s={menu:"ellipsis"},a="data-active"},33431:(e,t,n)=>{n.d(t,{C:()=>s,I:()=>i,S:()=>o});const o={menuActions:"menu-actions",menuTooltip:"menu-tooltip"},i={menu:"ellipsis"},s={container:"container"}},41732:(e,t,n)=>{function o(e,t){return(e+t)%t}n.d(t,{g:()=>o})},97577:(e,t,n)=>{n.r(t),n.d(t,{ActionGroup:()=>h});n(3671),n(85375);var o=n(30697),i=n(37022),s=n(5417),a=n(98246),l=n(28460),c=n(50965),r=n(88267),u=n(33431);const d=n(94161).AH`:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:flex;flex-direction:column;padding:0;background-color:transparent;border-color:var(--calcite-action-group-border-color, var(--calcite-color-border-3));border-style:solid;border-width:0}.container{display:flex;flex-grow:1;flex-direction:column}:host([columns="1"]){--calcite-internal-action-group-columns: 1}:host([columns="2"]){--calcite-internal-action-group-columns: 2}:host([columns="3"]){--calcite-internal-action-group-columns: 3}:host([columns="4"]){--calcite-internal-action-group-columns: 4}:host([columns="5"]){--calcite-internal-action-group-columns: 5}:host([columns="6"]){--calcite-internal-action-group-columns: 6}:host(:first-child){padding-block-start:0px}:host([layout=horizontal]),:host([layout=horizontal]) .container{flex-direction:row}:host([layout=grid]){display:grid}:host([layout=grid]) .container{display:grid;place-content:stretch;background-color:transparent;grid-template-columns:repeat(var(--calcite-action-group-columns, var(--calcite-internal-action-group-columns, 3)),auto);gap:var(--calcite-action-group-gap, 1px);padding:var(--calcite-action-group-gap, 1px)}:host([layout=horizontal]) ::slotted(calcite-action-group){border-inline-end:var(--calcite-size-px)}:host([hidden]){display:none}[hidden]{display:none}`;class h extends s.WF{constructor(){super(...arguments),this.hasMenuActions=!1,this.expanded=!1,this.layout="vertical",this.menuOpen=!1,this.messages=(0,r.u)(),this.overlayPositioning="absolute",this.scale="m"}static#e=(()=>this.properties={hasMenuActions:16,columns:11,expanded:7,label:1,layout:3,menuFlipPlacements:0,menuOpen:7,menuPlacement:3,messageOverrides:0,overlayPositioning:3,scale:3})();static#t=(()=>this.shadowRootOptions={mode:"open",delegatesFocus:!0})();static#n=(()=>this.styles=d)();async setFocus(){await(0,a.c)(this),(0,c.h)(this.el)}willUpdate(e){e.has("expanded")&&(this.hasUpdated||!1!==this.expanded)&&(this.menuOpen=!1)}setMenuOpen(e){this.menuOpen=!!e.currentTarget.open}handleMenuActionsSlotChange(e){this.hasMenuActions=(0,c.a)(e)}renderMenu(){const{expanded:e,menuOpen:t,scale:n,layout:o,messages:s,overlayPositioning:a,hasMenuActions:c,menuFlipPlacements:r,menuPlacement:d}=this;return i.qy`<calcite-action-menu .expanded=${e} .flipPlacements=${r??("horizontal"===o?["top","bottom"]:["left","right"])} .hidden=${!c} .label=${s.more} @calciteActionMenuOpen=${this.setMenuOpen} .open=${t} .overlayPositioning=${a} .placement=${d??("horizontal"===o?"bottom-start":"leading-start")} .scale=${n}><calcite-action .icon=${u.I.menu} .scale=${n} slot=${l.S.trigger} .text=${s.more} .textEnabled=${e}></calcite-action><slot name=${u.S.menuActions} @slotchange=${this.handleMenuActionsSlotChange}></slot><slot name=${u.S.menuTooltip} slot=${l.S.tooltip}></slot></calcite-action-menu>`}render(){return i.qy`<div .ariaLabel=${this.label} class=${(0,s.CP)(u.C.container)} role=group><slot></slot>${this.renderMenu()}</div>`}}(0,o.c)("calcite-action-group",h)}}]);
//# sourceMappingURL=97577.b58f58fc.chunk.js.map