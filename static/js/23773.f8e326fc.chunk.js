/*! For license information please see 23773.f8e326fc.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkopenspace=self.webpackChunkopenspace||[]).push([[23773,46154],{50965:(t,e,n)=>{n.d(e,{C:()=>E,D:()=>P,a:()=>F,b:()=>R,c:()=>C,d:()=>W,e:()=>q,f:()=>O,g:()=>$,h:()=>D,i:()=>z,k:()=>I,l:()=>H,m:()=>Q,n:()=>b,p:()=>S,q:()=>x,r:()=>L,s:()=>U,t:()=>Y,u:()=>B,v:()=>M,w:()=>j,x:()=>k,y:()=>_,z:()=>X});var r=n(30697),i=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"].join(","),o=typeof Element>"u",s=o?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,a=!o&&Element.prototype.getRootNode?function(t){var e;return null==t||null===(e=t.getRootNode)||void 0===e?void 0:e.call(t)}:function(t){return t?.ownerDocument},u=function t(e,n){var r;void 0===n&&(n=!0);var i=null==e||null===(r=e.getAttribute)||void 0===r?void 0:r.call(e,"inert");return""===i||"true"===i||n&&e&&t(e.parentNode)},c=function t(e,n,r){for(var o=[],a=Array.from(e);a.length;){var c=a.shift();if(!u(c,!1))if("SLOT"===c.tagName){var l=c.assignedElements(),d=t(l.length?l:c.children,!0,r);r.flatten?o.push.apply(o,d):o.push({scopeParent:c,candidates:d})}else{s.call(c,i)&&r.filter(c)&&(n||!e.includes(c))&&o.push(c);var f=c.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(c),h=!u(f,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(c));if(f&&h){var p=t(!0===f?c.children:f.children,!0,r);r.flatten?o.push.apply(o,p):o.push({scopeParent:c,candidates:p})}else a.unshift.apply(a,c.children)}}return o},l=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},d=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||function(t){var e,n=null==t||null===(e=t.getAttribute)||void 0===e?void 0:e.call(t,"contenteditable");return""===n||"true"===n}(t))&&!l(t)?0:t.tabIndex},f=function(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex},h=function(t){return"INPUT"===t.tagName},p=function(t){return function(t){return h(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0;var e,n=t.form||a(t),r=function(t){return n.querySelectorAll('input[type="radio"][name="'+t+'"]')};if(typeof window<"u"&&typeof window.CSS<"u"&&"function"==typeof window.CSS.escape)e=r(window.CSS.escape(t.name));else try{e=r(t.name)}catch(o){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",o.message),!1}var i=function(t,e){for(var n=0;n<t.length;n++)if(t[n].checked&&t[n].form===e)return t[n]}(e,t.form);return!i||i===t}(t)},v=function(t){var e=t.getBoundingClientRect(),n=e.width,r=e.height;return 0===n&&0===r},m=function(t,e){var n=e.displayCheck,r=e.getShadowRoot;if("hidden"===getComputedStyle(t).visibility)return!0;var i=s.call(t,"details>summary:first-of-type")?t.parentElement:t;if(s.call(i,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return v(t)}else{if("function"==typeof r){for(var o=t;t;){var u=t.parentElement,c=a(t);if(u&&!u.shadowRoot&&!0===r(u))return v(t);t=t.assignedSlot?t.assignedSlot:u||c===t.ownerDocument?u:c.host}t=o}if(function(t){var e,n,r,i,o=t&&a(t),s=null===(e=o)||void 0===e?void 0:e.host,u=!1;if(o&&o!==t)for(u=!!(null!==(n=s)&&void 0!==n&&null!==(r=n.ownerDocument)&&void 0!==r&&r.contains(s)||null!=t&&null!==(i=t.ownerDocument)&&void 0!==i&&i.contains(t));!u&&s;){var c,l,d;u=!(null===(l=s=null===(c=o=a(s))||void 0===c?void 0:c.host)||void 0===l||null===(d=l.ownerDocument)||void 0===d||!d.contains(s))}return u}(t))return!t.getClientRects().length;if("legacy-full"!==n)return!0}return!1},g=function(t,e){return!(e.disabled||u(e)||function(t){return h(t)&&"hidden"===t.type}(e)||m(e,t)||function(t){return"DETAILS"===t.tagName&&Array.prototype.slice.apply(t.children).some((function(t){return"SUMMARY"===t.tagName}))}(e)||function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var e=t.parentElement;e;){if("FIELDSET"===e.tagName&&e.disabled){for(var n=0;n<e.children.length;n++){var r=e.children.item(n);if("LEGEND"===r.tagName)return!!s.call(e,"fieldset[disabled] *")||!r.contains(t)}return!0}e=e.parentElement}return!1}(e))},y=function(t,e){return!(p(e)||d(e)<0||!g(t,e))},A=function(t){var e=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(e)||e>=0)},w=function t(e){var n=[],r=[];return e.forEach((function(e,i){var o=!!e.scopeParent,s=o?e.scopeParent:e,a=function(t,e){var n=d(t);return n<0&&e&&!l(t)?0:n}(s,o),u=o?t(e.candidates):s;0===a?o?n.push.apply(n,u):n.push(s):r.push({documentOrder:i,tabIndex:a,item:e,isScope:o,content:u})})),r.sort(f).reduce((function(t,e){return e.isScope?t.push.apply(t,e.content):t.push(e.content),t}),[]).concat(n)},N=function(t,e){var n;return n=(e=e||{}).getShadowRoot?c([t],e.includeContainer,{filter:y.bind(null,e),flatten:!1,getShadowRoot:e.getShadowRoot,shadowRootFilter:A}):function(t,e,n){if(u(t))return[];var r=Array.prototype.slice.apply(t.querySelectorAll(i));return e&&s.call(t,i)&&r.unshift(t),r.filter(n)}(t,e.includeContainer,y.bind(null,e)),w(n)};const S={getShadowRoot:!0};function b(t){return Array.isArray(t)?t:Array.from(t)}function E(t){const e=I(t,`.${r.C.darkMode}, .${r.C.lightMode}, .${r.C.autoMode}`);return e?.classList.contains("calcite-mode-dark")||e?.classList.contains("calcite-mode-auto")&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function $(t){const e=I(t,"[dir]");return e?e.getAttribute("dir"):"ltr"}function _(t){return t.getRootNode()}function C(t){const e=_(t);return"host"in e?e:null}function T(t){return t.host||null}function x(t,e){let{selector:n,id:r}=e;if(!t)return null;t.assignedSlot&&(t=t.assignedSlot);const i=_(t);return(r?"getElementById"in i?i.getElementById(r):null:n?i.querySelector(n):null)||x(T(i),{selector:n,id:r})}function I(t,e){return t?t.closest(e)||I(T(_(t)),e):null}async function R(t){if(t)return function(t){return"function"==typeof t?.setFocus}(t)?t.setFocus():t.focus()}function k(t){if(t)return N(t,S)[0]??t}function D(t){k(t)?.focus()}function O(t,e){return Array.from(t.children).filter((t=>t.matches(e)))}function M(t,e,n){return"string"==typeof e&&""!==e?e:""===e||!0===e?t[n]:void 0}function Y(t){return(!!t).toString()}function L(t){return F(t)||function(t){return!!function(t){return function(t){return t.currentTarget.assignedNodes({flatten:!0})}(t).filter((t=>t.nodeType===Node.TEXT_NODE)).map((t=>t.textContent)).join("").trim()}(t)}(t)}function P(t){for(const e of t.childNodes)if(e.nodeType===Node.TEXT_NODE&&""!==e.textContent?.trim()||e.nodeType===Node.ELEMENT_NODE)return!0;return!1}function F(t){return!!U(t).length}function U(t,e){return q(t.target,e)}function q(t,e){const n=t.assignedElements({flatten:!0});return e?function(t,e){return t.filter((t=>t.matches(e)))}(n,e):n}function z(t){return!(!t.isPrimary||0!==t.button)}function B(t){return 0===t.detail}const W=function(t,e,n){let r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const i=t.indexOf(e),o=0===i,s=i===t.length-1;let a;return r&&(n="previous"===n&&o?"last":"next"===n&&s?"first":n),a="previous"===n?t[i-1]||t[r?t.length-1:i]:"next"===n?t[i+1]||t[r?0:i]:"last"===n?t[t.length-1]:t[0],R(a),a};function H(t,e){if(t.parentNode!==e.parentNode)return!1;const n=Array.from(t.parentNode.children);return n.indexOf(t)<n.indexOf(e)}async function X(t,e,n,r){return G(t,e,"animation",n,r)}async function j(t,e,n,r){return G(t,e,"transition",n,r)}function V(t,e,n){const r="transition"===e?"transitionProperty":"animationName";return t.getAnimations().find((t=>t[r]===n))}async function G(t,e,n,r,i){let o=V(t,n,e);if(o||(await K(),o=V(t,n,e)),!o)return async function(t,e){await K(),t?.(),await K(),e?.()}(r,i);r?.();try{await o.finished}catch{}finally{i?.()}}function K(){return new Promise((t=>requestAnimationFrame((()=>t()))))}function Q(t){return t.endsWith("px")}},80526:(t,e,n)=>{n.d(e,{_:()=>h,K:()=>m});var r=n(28531),i=n(70885),o=n(30533);const s=(t,e)=>{const n=t._$AN;if(void 0===n)return!1;for(const r of n)r._$AO?.(e,!1),s(r,e);return!0},a=t=>{let e,n;do{if(void 0===(e=t._$AM))break;n=e._$AN,n.delete(t),t=e}while(0===n?.size)},u=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(void 0===n)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),d(e)}};function c(t){void 0!==this._$AN?(a(this),this._$AM=t,u(this)):this._$AM=t}function l(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const r=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(e)if(Array.isArray(r))for(let o=n;o<r.length;o++)s(r[o],!1),a(r[o]);else null!=r&&(s(r,!1),a(r));else s(this,t)}const d=t=>{t.type==o.OA.CHILD&&(t._$AP??=l,t._$AQ??=c)};class f extends o.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,n){super._$AT(t,e,n),u(this),this.isConnected=t._$AU}_$AO(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(s(this,t),a(this))}setValue(t){if((0,i.Rt)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const h=()=>new p;class p{}const v=new WeakMap,m=(0,o.u$)(class extends f{render(t){return r.s6}update(t,e){let[n]=e;const i=n!==this.Y;return i&&void 0!==this.Y&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=n,this.ht=t.options?.host,this.rt(this.ct=t.element)),r.s6}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.Y){const e=this.ht??globalThis;let n=v.get(e);void 0===n&&(n=new WeakMap,v.set(e,n)),void 0!==n.get(this.Y)&&this.Y.call(this.ht,void 0),n.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return"function"==typeof this.Y?v.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})}}]);
//# sourceMappingURL=23773.f8e326fc.chunk.js.map