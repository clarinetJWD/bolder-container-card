function e(e,t,r,o){var i,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(n<3?i(s):n>3?i(t,r,s):i(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s}function t(e,t,r,o){return new(r||(r=Promise))((function(i,n){function s(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}l((o=o.apply(e,t||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const r=window,o=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;let s=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(o&&void 0===e){const r=void 0!==t&&1===t.length;r&&(e=n.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&n.set(t,e))}return e}toString(){return this.cssText}};const a=e=>new s("string"==typeof e?e:e+"",void 0,i),l=(e,...t)=>{const r=1===e.length?e[0]:t.reduce(((t,r,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[o+1]),e[0]);return new s(r,e,i)},d=o?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return a(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var c;const h=window,p=h.trustedTypes,u=p?p.emptyScript:"",_=h.reactiveElementPolyfillSupport,g={toAttribute(e,t){switch(t){case Boolean:e=e?u:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},b=(e,t)=>t!==e&&(t==t||e==e),v={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:b},f="finalized";let m=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,r)=>{const o=this._$Ep(r,t);void 0!==o&&(this._$Ev.set(o,r),e.push(o))})),e}static createProperty(e,t=v){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r="symbol"==typeof e?Symbol():"__"+e,o=this.getPropertyDescriptor(e,r,t);void 0!==o&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(o){const i=this[e];this[t]=o,this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||v}static finalize(){if(this.hasOwnProperty(f))return!1;this[f]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const r of t)this.createProperty(r,e[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(d(e))}else void 0!==e&&t.push(d(e));return t}static _$Ep(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,r;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(r=e.hostConnected)||void 0===r||r.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{o?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const o=document.createElement("style"),i=r.litNonce;void 0!==i&&o.setAttribute("nonce",i),o.textContent=t.cssText,e.appendChild(o)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=v){var o;const i=this.constructor._$Ep(e,r);if(void 0!==i&&!0===r.reflect){const n=(void 0!==(null===(o=r.converter)||void 0===o?void 0:o.toAttribute)?r.converter:g).toAttribute(t,r.type);this._$El=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$El=null}}_$AK(e,t){var r;const o=this.constructor,i=o._$Ev.get(e);if(void 0!==i&&this._$El!==i){const e=o.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(r=e.converter)||void 0===r?void 0:r.fromAttribute)?e.converter:g;this._$El=i,this[i]=n.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,r){let o=!0;void 0!==e&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||b)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,r))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(r)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var y;m[f]=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==_||_({ReactiveElement:m}),(null!==(c=h.reactiveElementVersions)&&void 0!==c?c:h.reactiveElementVersions=[]).push("1.6.3");const k=window,w=k.trustedTypes,C=w?w.createPolicy("lit-html",{createHTML:e=>e}):void 0,$="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,A="?"+S,x=`<${A}>`,E=document,O=()=>E.createComment(""),z=e=>null===e||"object"!=typeof e&&"function"!=typeof e,M=Array.isArray,T="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,B=/-->/g,K=/>/g,H=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,R=/"/g,N=/^(?:script|style|textarea|title)$/i,U=(e=>(t,...r)=>({_$litType$:e,strings:t,values:r}))(1),L=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),j=new WeakMap,D=E.createTreeWalker(E,129,null,!1);function F(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(t):t}let W=class e{constructor({strings:t,_$litType$:r},o){let i;this.parts=[];let n=0,s=0;const a=t.length-1,l=this.parts,[d,c]=((e,t)=>{const r=e.length-1,o=[];let i,n=2===t?"<svg>":"",s=P;for(let t=0;t<r;t++){const r=e[t];let a,l,d=-1,c=0;for(;c<r.length&&(s.lastIndex=c,l=s.exec(r),null!==l);)c=s.lastIndex,s===P?"!--"===l[1]?s=B:void 0!==l[1]?s=K:void 0!==l[2]?(N.test(l[2])&&(i=RegExp("</"+l[2],"g")),s=H):void 0!==l[3]&&(s=H):s===H?">"===l[0]?(s=null!=i?i:P,d=-1):void 0===l[1]?d=-2:(d=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?H:'"'===l[3]?R:I):s===R||s===I?s=H:s===B||s===K?s=P:(s=H,i=void 0);const h=s===H&&e[t+1].startsWith("/>")?" ":"";n+=s===P?r+x:d>=0?(o.push(a),r.slice(0,d)+$+r.slice(d)+S+h):r+S+(-2===d?(o.push(void 0),t):h)}return[F(e,n+(e[r]||"<?>")+(2===t?"</svg>":"")),o]})(t,r);if(this.el=e.createElement(d,o),D.currentNode=this.el.content,2===r){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(i=D.nextNode())&&l.length<a;){if(1===i.nodeType){if(i.hasAttributes()){const e=[];for(const t of i.getAttributeNames())if(t.endsWith($)||t.startsWith(S)){const r=c[s++];if(e.push(t),void 0!==r){const e=i.getAttribute(r.toLowerCase()+$).split(S),t=/([.?@])?(.*)/.exec(r);l.push({type:1,index:n,name:t[2],strings:e,ctor:"."===t[1]?X:"?"===t[1]?Y:"@"===t[1]?ee:J})}else l.push({type:6,index:n})}for(const t of e)i.removeAttribute(t)}if(N.test(i.tagName)){const e=i.textContent.split(S),t=e.length-1;if(t>0){i.textContent=w?w.emptyScript:"";for(let r=0;r<t;r++)i.append(e[r],O()),D.nextNode(),l.push({type:2,index:++n});i.append(e[t],O())}}}else if(8===i.nodeType)if(i.data===A)l.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(S,e+1));)l.push({type:7,index:n}),e+=S.length-1}n++}}static createElement(e,t){const r=E.createElement("template");return r.innerHTML=e,r}};function q(e,t,r=e,o){var i,n,s,a;if(t===L)return t;let l=void 0!==o?null===(i=r._$Co)||void 0===i?void 0:i[o]:r._$Cl;const d=z(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===d?l=void 0:(l=new d(e),l._$AT(e,r,o)),void 0!==o?(null!==(s=(a=r)._$Co)&&void 0!==s?s:a._$Co=[])[o]=l:r._$Cl=l),void 0!==l&&(t=q(e,l._$AS(e,t.values),l,o)),t}let Z=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:r},parts:o}=this._$AD,i=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:E).importNode(r,!0);D.currentNode=i;let n=D.nextNode(),s=0,a=0,l=o[0];for(;void 0!==l;){if(s===l.index){let t;2===l.type?t=new G(n,n.nextSibling,this,e):1===l.type?t=new l.ctor(n,l.name,l.strings,this,e):6===l.type&&(t=new te(n,this,e)),this._$AV.push(t),l=o[++a]}s!==(null==l?void 0:l.index)&&(n=D.nextNode(),s++)}return D.currentNode=E,i}v(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},G=class e{constructor(e,t,r,o){var i;this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cp=null===(i=null==o?void 0:o.isConnected)||void 0===i||i}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=q(this,e,t),z(e)?e===V||null==e||""===e?(this._$AH!==V&&this._$AR(),this._$AH=V):e!==this._$AH&&e!==L&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>M(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==V&&z(this._$AH)?this._$AA.nextSibling.data=e:this.$(E.createTextNode(e)),this._$AH=e}g(e){var t;const{values:r,_$litType$:o}=e,i="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=W.createElement(F(o.h,o.h[0]),this.options)),o);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===i)this._$AH.v(r);else{const e=new Z(i,this),t=e.u(this.options);e.v(r),this.$(t),this._$AH=e}}_$AC(e){let t=j.get(e.strings);return void 0===t&&j.set(e.strings,t=new W(e)),t}T(t){M(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,i=0;for(const n of t)i===r.length?r.push(o=new e(this.k(O()),this.k(O()),this,this.options)):o=r[i],o._$AI(n),i++;i<r.length&&(this._$AR(o&&o._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,t){var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}},J=class{constructor(e,t,r,o,i){this.type=1,this._$AH=V,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=V}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,o){const i=this.strings;let n=!1;if(void 0===i)e=q(this,e,t,0),n=!z(e)||e!==this._$AH&&e!==L,n&&(this._$AH=e);else{const o=e;let s,a;for(e=i[0],s=0;s<i.length-1;s++)a=q(this,o[r+s],t,s),a===L&&(a=this._$AH[s]),n||(n=!z(a)||a!==this._$AH[s]),a===V?e=V:e!==V&&(e+=(null!=a?a:"")+i[s+1]),this._$AH[s]=a}n&&!o&&this.j(e)}j(e){e===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}},X=class extends J{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===V?void 0:e}};const Q=w?w.emptyScript:"";let Y=class extends J{constructor(){super(...arguments),this.type=4}j(e){e&&e!==V?this.element.setAttribute(this.name,Q):this.element.removeAttribute(this.name)}},ee=class extends J{constructor(e,t,r,o,i){super(e,t,r,o,i),this.type=5}_$AI(e,t=this){var r;if((e=null!==(r=q(this,e,t,0))&&void 0!==r?r:V)===L)return;const o=this._$AH,i=e===V&&o!==V||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==V&&(o===V||i);i&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==r?r:this.element,e):this._$AH.handleEvent(e)}};class te{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){q(this,e)}}const re=k.litHtmlPolyfillSupport;null==re||re(W,G),(null!==(y=k.litHtmlVersions)&&void 0!==y?y:k.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var oe,ie;let ne=class extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{var o,i;const n=null!==(o=null==r?void 0:r.renderBefore)&&void 0!==o?o:t;let s=n._$litPart$;if(void 0===s){const e=null!==(i=null==r?void 0:r.renderBefore)&&void 0!==i?i:null;n._$litPart$=s=new G(t.insertBefore(O(),e),e,void 0,null!=r?r:{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return L}};ne.finalized=!0,ne._$litElement$=!0,null===(oe=globalThis.litElementHydrateSupport)||void 0===oe||oe.call(globalThis,{LitElement:ne});const se=globalThis.litElementPolyfillSupport;null==se||se({LitElement:ne}),(null!==(ie=globalThis.litElementVersions)&&void 0!==ie?ie:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const ae="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,le=(e,t,r=null)=>{for(;t!==r;){const r=t.nextSibling;e.removeChild(t),t=r}},de=`{{lit-${String(Math.random()).slice(2)}}}`,ce=`\x3c!--${de}--\x3e`,he=new RegExp(`${de}|${ce}`),pe="$lit$";class ue{constructor(e,t){this.parts=[],this.element=t;const r=[],o=[],i=document.createTreeWalker(t.content,133,null,!1);let n=0,s=-1,a=0;const{strings:l,values:{length:d}}=e;for(;a<d;){const e=i.nextNode();if(null!==e){if(s++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:r}=t;let o=0;for(let e=0;e<r;e++)_e(t[e].name,pe)&&o++;for(;o-- >0;){const t=l[a],r=ve.exec(t)[2],o=r.toLowerCase()+pe,i=e.getAttribute(o);e.removeAttribute(o);const n=i.split(he);this.parts.push({type:"attribute",index:s,name:r,strings:n}),a+=n.length-1}}"TEMPLATE"===e.tagName&&(o.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(de)>=0){const o=e.parentNode,i=t.split(he),n=i.length-1;for(let t=0;t<n;t++){let r,n=i[t];if(""===n)r=be();else{const e=ve.exec(n);null!==e&&_e(e[2],pe)&&(n=n.slice(0,e.index)+e[1]+e[2].slice(0,-5)+e[3]),r=document.createTextNode(n)}o.insertBefore(r,e),this.parts.push({type:"node",index:++s})}""===i[n]?(o.insertBefore(be(),e),r.push(e)):e.data=i[n],a+=n}}else if(8===e.nodeType)if(e.data===de){const t=e.parentNode;null!==e.previousSibling&&s!==n||(s++,t.insertBefore(be(),e)),n=s,this.parts.push({type:"node",index:s}),null===e.nextSibling?e.data="":(r.push(e),s--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(de,t+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=o.pop()}for(const e of r)e.parentNode.removeChild(e)}}const _e=(e,t)=>{const r=e.length-t.length;return r>=0&&e.slice(r)===t},ge=e=>-1!==e.index,be=()=>document.createComment(""),ve=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function fe(e,t){const{element:{content:r},parts:o}=e,i=document.createTreeWalker(r,133,null,!1);let n=ye(o),s=o[n],a=-1,l=0;const d=[];let c=null;for(;i.nextNode();){a++;const e=i.currentNode;for(e.previousSibling===c&&(c=null),t.has(e)&&(d.push(e),null===c&&(c=e)),null!==c&&l++;void 0!==s&&s.index===a;)s.index=null!==c?-1:s.index-l,n=ye(o,n),s=o[n]}d.forEach((e=>e.parentNode.removeChild(e)))}const me=e=>{let t=11===e.nodeType?0:1;const r=document.createTreeWalker(e,133,null,!1);for(;r.nextNode();)t++;return t},ye=(e,t=-1)=>{for(let r=t+1;r<e.length;r++){const t=e[r];if(ge(t))return r}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const ke=new WeakMap,we=e=>"function"==typeof e&&ke.has(e),Ce={},$e={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class Se{constructor(e,t,r){this.__parts=[],this.template=e,this.processor=t,this.options=r}update(e){let t=0;for(const r of this.__parts)void 0!==r&&r.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=ae?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],r=this.template.parts,o=document.createTreeWalker(e,133,null,!1);let i,n=0,s=0,a=o.nextNode();for(;n<r.length;)if(i=r[n],ge(i)){for(;s<i.index;)s++,"TEMPLATE"===a.nodeName&&(t.push(a),o.currentNode=a.content),null===(a=o.nextNode())&&(o.currentNode=t.pop(),a=o.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));n++}else this.__parts.push(void 0),n++;return ae&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Ae=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),xe=` ${de} `;class Ee{constructor(e,t,r,o){this.strings=e,this.values=t,this.type=r,this.processor=o}getHTML(){const e=this.strings.length-1;let t="",r=!1;for(let o=0;o<e;o++){const e=this.strings[o],i=e.lastIndexOf("\x3c!--");r=(i>-1||r)&&-1===e.indexOf("--\x3e",i+1);const n=ve.exec(e);t+=null===n?e+(r?xe:ce):e.substr(0,n.index)+n[1]+n[2]+pe+n[3]+de}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==Ae&&(t=Ae.createHTML(t)),e.innerHTML=t,e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class Oe{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(be()),this.endNode=e.appendChild(be())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=be()),e.__insert(this.endNode=be())}insertAfterPart(e){e.__insert(this.startNode=be()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;we(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=Ce,e(this)}const e=this.__pendingValue;e!==Ce&&((e=>null===e||!("object"==typeof e||"function"==typeof e))(e)?e!==this.value&&this.__commitText(e):e instanceof Ee?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):(e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]))(e)?this.__commitIterable(e):e===$e?(this.value=$e,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,r="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=r:this.__commitNode(document.createTextNode(r)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof Se&&this.value.template===t)this.value.update(e.values);else{const r=new Se(t,e.processor,this.options),o=r._clone();r.update(e.values),this.__commitNode(o),this.value=r}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let r,o=0;for(const i of e)r=t[o],void 0===r&&(r=new Oe(this.options),t.push(r),0===o?r.appendIntoPart(this):r.insertAfterPart(t[o-1])),r.setValue(i),r.commit(),o++;o<t.length&&(t.length=o,this.clear(r&&r.endNode))}clear(e=this.startNode){le(this.startNode.parentNode,e.nextSibling,this.endNode)}}let ze=!1;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
function Me(e){let t=Te.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},Te.set(e.type,t));let r=t.stringsArray.get(e.strings);if(void 0!==r)return r;const o=e.strings.join(de);return r=t.keyString.get(o),void 0===r&&(r=new ue(e,e.getTemplateElement()),t.keyString.set(o,r)),t.stringsArray.set(e.strings,r),r}(()=>{try{const e={get capture(){return ze=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();const Te=new Map,Pe=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Be=(e,t)=>`${e}--${t}`;let Ke=!0;void 0===window.ShadyCSS?Ke=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Ke=!1);const He=e=>t=>{const r=Be(t.type,e);let o=Te.get(r);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},Te.set(r,o));let i=o.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(de);if(i=o.keyString.get(n),void 0===i){const r=t.getTemplateElement();Ke&&window.ShadyCSS.prepareTemplateDom(r,e),i=new ue(t,r),o.keyString.set(n,i)}return o.stringsArray.set(t.strings,i),i},Ie=["html","svg"],Re=new Set,Ne=(e,t,r)=>{Re.add(e);const o=r?r.element:document.createElement("template"),i=t.querySelectorAll("style"),{length:n}=i;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(o,e);const s=document.createElement("style");for(let e=0;e<n;e++){const t=i[e];t.parentNode.removeChild(t),s.textContent+=t.textContent}(e=>{Ie.forEach((t=>{const r=Te.get(Be(t,e));void 0!==r&&r.keyString.forEach((e=>{const{element:{content:t}}=e,r=new Set;Array.from(t.querySelectorAll("style")).forEach((e=>{r.add(e)})),fe(e,r)}))}))})(e);const a=o.content;r?function(e,t,r=null){const{element:{content:o},parts:i}=e;if(null==r)return void o.appendChild(t);const n=document.createTreeWalker(o,133,null,!1);let s=ye(i),a=0,l=-1;for(;n.nextNode();)for(l++,n.currentNode===r&&(a=me(t),r.parentNode.insertBefore(t,r));-1!==s&&i[s].index===l;){if(a>0){for(;-1!==s;)i[s].index+=a,s=ye(i,s);return}s=ye(i,s)}}(r,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(o,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(r){a.insertBefore(s,a.firstChild);const e=new Set;e.add(s),fe(r,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const Ue={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},Le=(e,t)=>t!==e&&(t==t||e==e),Ve={attribute:!0,type:String,converter:Ue,reflect:!1,hasChanged:Le},je="finalized";class De extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach(((t,r)=>{const o=this._attributeNameForProperty(r,t);void 0!==o&&(this._attributeToPropertyMap.set(o,r),e.push(o))})),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach(((e,t)=>this._classProperties.set(t,e)))}}static createProperty(e,t=Ve){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const r="symbol"==typeof e?Symbol():`__${e}`,o=this.getPropertyDescriptor(e,r,t);void 0!==o&&Object.defineProperty(this.prototype,e,o)}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(o){const i=this[e];this[t]=o,this.requestUpdateInternal(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||Ve}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(je)||e.finalize(),this[je]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const r of t)this.createProperty(r,e[r])}}static _attributeNameForProperty(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,r=Le){return r(e,t)}static _propertyValueFromAttribute(e,t){const r=t.type,o=t.converter||Ue,i="function"==typeof o?o:o.fromAttribute;return i?i(e,r):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const r=t.type,o=t.converter;return(o&&o.toAttribute||Ue.toAttribute)(e,r)}initialize(){this._updateState=0,this._updatePromise=new Promise((e=>this._enableUpdatingResolver=e)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((e,t)=>this[t]=e)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,r){t!==r&&this._attributeToProperty(e,r)}_propertyToAttribute(e,t,r=Ve){const o=this.constructor,i=o._attributeNameForProperty(e,r);if(void 0!==i){const e=o._propertyValueToAttribute(t,r);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const r=this.constructor,o=r._attributeToPropertyMap.get(e);if(void 0!==o){const e=r.getPropertyOptions(o);this._updateState=16|this._updateState,this[o]=r._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,r){let o=!0;if(void 0!==e){const i=this.constructor;r=r||i.getPropertyOptions(e),i._valueHasChanged(this[e],t,r.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,r))):o=!1}!this._hasRequestedUpdate&&o&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((e,t)=>this._propertyToAttribute(t,this[t],e))),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}De[je]=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Fe=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function We(e){return(t,r)=>void 0!==r?((e,t,r)=>{t.constructor.createProperty(r,e)})(e,t,r):Fe(e,t)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const qe=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ze=Symbol();class Ge{constructor(e,t){if(t!==Ze)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(qe?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const Je={};class Xe extends De{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,r)=>e.reduceRight(((e,r)=>Array.isArray(r)?t(r,e):(e.add(r),e)),r),r=t(e,new Set),o=[];r.forEach((e=>o.unshift(e))),this._styles=o}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map((e=>{if(e instanceof CSSStyleSheet&&!qe){const t=Array.prototype.slice.call(e.cssRules).reduce(((e,t)=>e+t.cssText),"");return new Ge(String(t),Ze)}return e}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?qe?this.renderRoot.adoptedStyleSheets=e.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e=>e.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==Je&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)})))}render(){return Je}}var Qe,Ye;Xe.finalized=!0,Xe.render=(e,t,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const o=r.scopeName,i=Pe.has(t),n=Ke&&11===t.nodeType&&!!t.host,s=n&&!Re.has(o),a=s?document.createDocumentFragment():t;if(((e,t,r)=>{let o=Pe.get(t);void 0===o&&(le(t,t.firstChild),Pe.set(t,o=new Oe(Object.assign({templateFactory:Me},r))),o.appendInto(t)),o.setValue(e),o.commit()})(e,a,Object.assign({templateFactory:He(o)},r)),s){const e=Pe.get(a);Pe.delete(a);const r=e.value instanceof Se?e.value.template:void 0;Ne(o,a,r),le(t,t.firstChild),t.appendChild(a),Pe.set(t,e)}!i&&n&&window.ShadyCSS.styleElement(t.host)},Xe.shadowRootOptions={mode:"open"},function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(Qe||(Qe={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(Ye||(Ye={}));var et=function(e,t,r,o){o=o||{},r=null==r?{}:r;var i=new Event(t,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return i.detail=r,e.dispatchEvent(i),i},tt=new Set(["call-service","divider","section","weblink","cast","select"]),rt={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"};var ot={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},it={editor:ot},nt=Object.freeze({__proto__:null,default:it,editor:ot}),st={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},at={editor:st},lt=Object.freeze({__proto__:null,default:at,editor:st}),dt={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},ct={editor:dt},ht=Object.freeze({__proto__:null,default:ct,editor:dt}),pt={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},ut={editor:pt},_t=Object.freeze({__proto__:null,default:ut,editor:pt}),gt={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},bt={editor:gt},vt={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},ft={editor:vt},mt={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},yt={editor:mt},kt={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},wt={editor:kt},Ct={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?",keep_settings:"Keep Inner Card Settings",container_card_settings:"Container Card Settings",inner_cards:"Container Card Inner Cards:"},$t={editor:Ct},St={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},At={editor:St},xt={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},Et={editor:xt},Ot={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},zt={editor:Ot},Mt={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},Tt={editor:Mt},Pt={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},Bt={editor:Pt},Kt={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},Ht={editor:Kt},It={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},Rt={editor:It},Nt={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},Ut={editor:Nt},Lt={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},Vt={editor:Lt},jt={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},Dt={editor:jt},Ft={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},Wt={editor:Ft},qt={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},Zt={editor:qt},Gt={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},Jt={editor:Gt},Xt={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},Qt={editor:Xt},Yt={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},er={editor:Yt},tr={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},rr={editor:tr},or={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},ir={editor:or},nr={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},sr={editor:nr},ar={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},lr={editor:ar},dr={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},cr={editor:dr},hr={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},pr={editor:hr},ur={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},_r={editor:ur},gr={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},br={editor:gr},vr={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},fr={editor:vr},mr={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},yr={editor:mr},kr={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},wr={editor:kr},Cr={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},$r={editor:Cr},Sr={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},Ar={editor:Sr},xr={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},Er={editor:xr},Or={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},zr={editor:Or},Mr={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},Tr={editor:Mr},Pr={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},Br={editor:Pr};const Kr={ar:nt,bg:lt,cs:Object.freeze({__proto__:null,default:bt,editor:gt}),ca:_t,cy:Object.freeze({__proto__:null,default:ft,editor:vt}),da:ht,de:Object.freeze({__proto__:null,default:yt,editor:mt}),el:Object.freeze({__proto__:null,default:wt,editor:kt}),en:Object.freeze({__proto__:null,default:$t,editor:Ct}),es:Object.freeze({__proto__:null,default:At,editor:St}),et:Object.freeze({__proto__:null,default:Et,editor:xt}),fi:Object.freeze({__proto__:null,default:zt,editor:Ot}),fr:Object.freeze({__proto__:null,default:Tt,editor:Mt}),he:Object.freeze({__proto__:null,default:Bt,editor:Pt}),hu:Object.freeze({__proto__:null,default:Ht,editor:Kt}),hr:Object.freeze({__proto__:null,default:Rt,editor:It}),id:Object.freeze({__proto__:null,default:Ut,editor:Nt}),is:Object.freeze({__proto__:null,default:Vt,editor:Lt}),it:Object.freeze({__proto__:null,default:Dt,editor:jt}),ko:Object.freeze({__proto__:null,default:Wt,editor:Ft}),lb:Object.freeze({__proto__:null,default:Zt,editor:qt}),lt:Object.freeze({__proto__:null,default:Jt,editor:Gt}),nb:Object.freeze({__proto__:null,default:Qt,editor:Xt}),nl:Object.freeze({__proto__:null,default:er,editor:Yt}),pl:Object.freeze({__proto__:null,default:rr,editor:tr}),ptbr:Object.freeze({__proto__:null,default:ir,editor:or}),pt:Object.freeze({__proto__:null,default:sr,editor:nr}),ro:Object.freeze({__proto__:null,default:lr,editor:ar}),ru:Object.freeze({__proto__:null,default:cr,editor:dr}),sk:Object.freeze({__proto__:null,default:pr,editor:hr}),sl:Object.freeze({__proto__:null,default:_r,editor:ur}),sr:Object.freeze({__proto__:null,default:br,editor:gr}),srlatn:Object.freeze({__proto__:null,default:fr,editor:vr}),sv:Object.freeze({__proto__:null,default:yr,editor:mr}),th:Object.freeze({__proto__:null,default:wr,editor:kr}),tr:Object.freeze({__proto__:null,default:$r,editor:Cr}),uk:Object.freeze({__proto__:null,default:Ar,editor:Sr}),ur:Object.freeze({__proto__:null,default:Er,editor:xr}),vi:Object.freeze({__proto__:null,default:zr,editor:Or}),zhcn:Object.freeze({__proto__:null,default:Tr,editor:Mr}),zhtw:Object.freeze({__proto__:null,default:Br,editor:Pr})};function Hr(e,t){let r;const o=t.replace(/['"]+/g,"").replace("-","_").replace("_","").toLowerCase();try{r=e.split(".").reduce(((e,t)=>e[t]),Kr[o])}catch(t){r=e.split(".").reduce(((e,t)=>e[t]),Kr.en)}return void 0===r&&(r=e.split(".").reduce(((e,t)=>e[t]),Kr.en)),r}var Ir;console.info("%c BOLDER-CONTAINER-CARD \n%c   Version 1.1.4   ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"bolder-container-card",name:"Bolder Container Card",description:"A container card like Stack In Card that allows for more customization and theming."});const Rr=window.loadCardHelpers?window.loadCardHelpers():void 0;let Nr=Ir=class extends ne{set hass(e){Ir._hass=e,this._card&&(this._card.hass=e)}static getLocale(){var e,t;return null!==(t=null===(e=Ir._hass)||void 0===e?void 0:e.locale.language)&&void 0!==t?t:"en-US"}static computeLabel(e){return Hr("editor."+e.name,e.locale)}static getConfigElement(){return t(this,void 0,void 0,(function*(){return yield Promise.resolve().then((function(){return yn})),document.createElement("bolder-container-card-editor")}))}static get styles(){const e=document.documentElement,t=getComputedStyle(e).getPropertyValue("--bolder-container-card-gap").trim();return[l`${a((r=!!t,`\n    :host {\n      /*** Card Variables */\n      --bolder-container-card-background_internal: var(--bolder-container-card-background, transparent);\n      --bolder-container-card-border-color_internal: var(--bolder-container-card-border-color, var(--ha-card-border-color, var(--divider-color, #e0e0e0)));\n      --bolder-container-card-border-style_internal: var(--bolder-container-card-border-style, var(--ha-card-border-style, solid));\n      --bolder-container-card-border-width_internal: var(--bolder-container-card-border-width, var(--ha-card-border-width, 0px));\n      --bolder-container-card-border-radius_internal: var(--bolder-container-card-border-radius, var(--ha-card-border-radius, 0px));\n      --bolder-container-card-box-shadow_internal: var(--bolder-container-card-box-shadow, var(--ha-card-box-shadow));\n      --bolder-container-card-padding_internal: var(--bolder-container-card-padding, var(--ha-card-padding, 10px));\n      --bolder-container-card-backdrop-filter_internal: var(--bolder-container-card-backdrop-filter, var(--ha-card-backdrop-filter, none));\n\n      /*** Title Text */\n      --bolder-container-card-title-color_internal: var(--bolder-container-card-title-color, var(--bolder-container-card-text-color, var(--ha-heading-card-title-color,var(--primary-text-color))));\n      --bolder-container-card-title-background_internal: var(--bolder-container-card-title-background, var(--ha-card-background, var(--card-background-color)));\n      --bolder-container-card-title-outline-color_internal: var(--bolder-container-card-title-outline-color, var(--bolder-container-card-text-outline-color, transparent));\n      --bolder-container-card-title-size_internal: var(--bolder-container-card-title-size, var(--ha-heading-card-title-font-size, var(--headline-font-size, 16px)));\n      --bolder-container-card-title-weight_internal: var(--bolder-container-card-title-weight, var(--ha-heading-card-title-font-weight, 400));\n      --bolder-container-card-title-line-height_internal: var(--bolder-container-card-title-line-height, 48px);\n      --bolder-container-card-title-padding_internal: var(--bolder-container-card-title-padding, 12px 16px 16px);\n      --bolder-container-card-title-gap_internal: var(--bolder-container-card-title-gap, var(--vertical-stack-card-gap, var(--stack-card-gap, 8px)));\n      --bolder-container-card-title-backdrop-filter_internal: var(--bolder-container-card-title-backdrop-filter, var(--ha-card-backdrop-filter, none));\n\n      /*** Layout */\n      ${r?"--vertical-stack-card-gap: var(--bolder-container-card-gap);":""}\n    }\n\n    ha-card {\n      height: 100%;\n      overflow: hidden;\n      box-shadow: var(--bolder-container-card-box-shadow_internal);\n      border-radius: var(--bolder-container-card-border-radius_internal);\n      background: var(--bolder-container-card-background_internal);\n      border-color: var(--bolder-container-card-border-color_internal);\n      border-style: var(--bolder-container-card-border-style_internal);\n      border-width: var(--bolder-container-card-border-width_internal);\n      padding: 0 0 0 0;\n      backdrop-filter: var(--bolder-container-card-backdrop-filter_internal);\n    }\n  \n    ha-card.outer-padding {\n      padding: var(--bolder-container-card-padding_internal);\n    }\n\n    ha-card.inner-container {\n      box-shadow: none;\n      border-radius: 0px;\n      background: transparent;\n      border: none;\n      padding: 0 0 0 0;\n      backdrop-filter: none;\n    }\n\n    .card-header {\n      color: var(--bolder-container-card-title-color_internal);\n      background: var(--bolder-container-card-title-background_internal);\n      text-shadow: -1px -1px 0 var(--bolder-container-card-title-outline-color_internal), 1px -1px 0 var(--bolder-container-card-title-outline-color_internal), 1px 1px 0 var(--bolder-container-card-title-outline-color_internal), -1px 1px 0 var(--bolder-container-card-title-outline-color_internal);\n      font-size: var(--bolder-container-card-title-size_internal);\n      line-height: var(--bolder-container-card-title-line-height_internal);\n      padding: var(--bolder-container-card-title-padding_internal);\n      font-weight: var(--bolder-container-card-title-weight_internal);\n      margin-bottom: var(--bolder-container-card-title-gap_internal);\n      backdrop-filter: var(--bolder-container-card-title-backdrop-filter_internal);\n    }\n\n  `))}`];var r}setConfig(e){var t,r,o,i,n,s,a,l,d,c,h;if(!e.cards)throw new Error("There is no cards parameter defined");this._config=Object.assign(Object.assign({},e),{mode:null!==(t=e.mode)&&void 0!==t?t:"vertical",title:null!==(r=e.title)&&void 0!==r?r:"",keep_background:null===(o=e.keep_background)||void 0===o||o,keep_margin:null!==(i=e.keep_margin)&&void 0!==i&&i,keep_box_shadow:null!==(n=e.keep_box_shadow)&&void 0!==n&&n,keep_border_radius:null!==(s=e.keep_border_radius)&&void 0!==s&&s,keep_outer_padding:null!==(a=e.keep_outer_padding)&&void 0!==a&&a,card_background_override:null!==(l=e.card_background_override)&&void 0!==l?l:void 0,is_inner_container:null!==(d=e.is_inner_container)&&void 0!==d&&d,cards:null!==(c=e.cards)&&void 0!==c?c:[],styles:null!==(h=e.styles)&&void 0!==h?h:[]}),this._createStack()}updated(e){super.updated(e),this._card&&(this._waitForChildren(this._card,!1),window.setTimeout((()=>{this.updateStyleOnTimeout()}),1),window.setTimeout((()=>{this.updateStyleOnTimeout()}),500))}updateStyleOnTimeout(){var e,t,r,o;if((null===(e=this._config)||void 0===e?void 0:e.keep_background)||this._waitForChildren(this._card,!0),(null===(t=this._card)||void 0===t?void 0:t.shadowRoot)&&(null===(o=null===(r=this._config)||void 0===r?void 0:r.styles)||void 0===o?void 0:o.find((e=>"bolder-container-card-gap"===e.variable||"gap"===e.variable)))){const e=this._card.shadowRoot.getElementById("root");e&&(e.style="--vertical-stack-card-gap: var(--bolder-container-card-gap_internal)")}}_createStack(){return t(this,void 0,void 0,(function*(){this._cardPromise=this._createCard({type:`${this._config.mode}-stack`,cards:this._config.cards}),this._card=yield this._cardPromise}))}render(){return Ir._hass&&this._config?U`
      <ha-card class="
      ${this._config.is_inner_container?"inner-container ":""}
      ${this._config.keep_outer_padding?"outer-padding ":""}
      ">
      ${this._config.title?U`<h1 class="card-header">${this._config.title}</h1>`:U``}
        <div>${this._card}</div>
        <style>${this._config.styles?l`${this.getStyleOverrideFromConfig(this._config.styles)}`:l``}</style>
      </ha-card>
    `:U``}_updateStyle(e,t){var r,o,i,n,s,a;e&&((null===(r=this._config)||void 0===r?void 0:r.keep_box_shadow)||(e.style.boxShadow="none"),!(null===(o=this._config)||void 0===o?void 0:o.keep_background)&&t&&"true"!==getComputedStyle(e).getPropertyValue("--keep-background").trim()&&(e.style.background=null!==(n=null===(i=this._config)||void 0===i?void 0:i.card_background_override)&&void 0!==n?n:"transparent",void 0===(null===(s=this._config)||void 0===s?void 0:s.card_background_override)&&(e.style.backdropFilter="none")),(null===(a=this._config)||void 0===a?void 0:a.keep_border_radius)||(e.style.borderRadius="0"))}_loopChildren(e,t){e.childNodes.forEach((e=>{var r;"STACK-IN-CARD"!==e.tagName&&(!(null===(r=this._config)||void 0===r?void 0:r.keep_margin)&&e.style&&(e.style.margin="0px"),this._waitForChildren(e,t))}))}_updateChildren(e,t){if(e)if(e.shadowRoot){const r=e.shadowRoot.querySelector("ha-card");if(r)this._updateStyle(r,t);else{const r=e.shadowRoot.getElementById("root")||e.shadowRoot.getElementById("card");if(!r)return;this._loopChildren(r,t)}}else"function"==typeof e.querySelector&&e.querySelector("ha-card")&&this._updateStyle(e.querySelector("ha-card"),t),this._loopChildren(e,t)}_checkIfPropertyExists(e,t){return t in e}_waitForChildren(e,t){void 0!==e&&(this._checkIfPropertyExists(e,"updateComplete")?null!==e.updateComplete?e.updateComplete.then((()=>{this._updateChildren(e,t)})):window.setTimeout((()=>{this._waitForChildren(e,t)}),10):this._updateChildren(e,t))}_createCard(e){return t(this,void 0,void 0,(function*(){let t;return t=Rr?(yield Rr).createCardElement(e):function(e,t){void 0===t&&(t=!1);var r=function(e,t){return o("hui-error-card",{type:"error",error:e,config:t})},o=function(e,t){var o=window.document.createElement(e);try{if(!o.setConfig)return;o.setConfig(t)}catch(o){return console.error(e,o),r(o.message,t)}return o};if(!e||"object"!=typeof e||!t&&!e.type)return r("No type defined",e);var i=e.type;if(i&&i.startsWith("custom:"))i=i.substr(7);else if(t)if(tt.has(i))i="hui-"+i+"-row";else{if(!e.entity)return r("Invalid config given.",e);var n=e.entity.split(".",1)[0];i="hui-"+(rt[n]||"text")+"-entity-row"}else i="hui-"+i+"-card";if(customElements.get(i))return o(i,e);var s=r("Custom element doesn't exist: "+e.type+".",e);s.style.display="None";var a=setTimeout((function(){s.style.display=""}),2e3);return customElements.whenDefined(e.type).then((function(){clearTimeout(a),et(s,"ll-rebuild",{},s)})),s}(e),Ir._hass&&(t.hass=Ir._hass),t&&t.addEventListener("ll-rebuild",(r=>{r.stopPropagation(),this._rebuildCard(t,e)}),{once:!0}),t}))}_rebuildCard(e,r){return t(this,void 0,void 0,(function*(){const t=yield this._createCard(r);return e.replaceWith(t),this._card=t,window.setTimeout((()=>{this.updateStyleOnTimeout()}),1),window.setTimeout((()=>{this.updateStyleOnTimeout()}),500),t}))}getCardSize(){return t(this,void 0,void 0,(function*(){return yield this._cardPromise,this._card?yield this._computeCardSize(this._card):0}))}_computeCardSize(e){return"function"==typeof e.getCardSize?e.getCardSize():customElements.get(e.localName)?1:customElements.whenDefined(e.localName).then((()=>this._computeCardSize(e)))}getStyleOverrideFromConfig(e){var t,r;const o=e.map((e=>e.variable.startsWith("bolder-container-card-")?`--${e.variable}_internal: ${e.value} !important;`:`--bolder-container-card-${e.variable}_internal: ${e.value} !important;`));return null===(r=null===(t=this._config)||void 0===t?void 0:t.keep_background)||void 0===r||r||(o.push("--bolder-container-card-title-backdrop-filter_internal: none !important;"),o.push("--bolder-container-card-title-background_internal: none !important;")),l`
:host { 
  ${a(o.join("\n"))} 
}`}};var Ur;e([We({attribute:!1})],Nr.prototype,"_card",void 0),e([We({attribute:!1})],Nr.prototype,"_config",void 0),Nr=Ir=e([(Ur="bolder-container-card",e=>"function"==typeof e?((e,t)=>(window.customElements.define(e,t),t))(Ur,e):((e,t)=>{const{kind:r,elements:o}=t;return{kind:r,elements:o,finisher(t){window.customElements.define(e,t)}}})(Ur,e))],Nr);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Lr=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:r,elements:o}=t;return{kind:r,elements:o,finisher(t){customElements.define(e,t)}}})(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,Vr=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},jr=(e,t,r)=>{t.constructor.createProperty(r,e)};function Dr(e){return(t,r)=>void 0!==r?jr(e,t,r):Vr(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function Fr(e){return Dr({...e,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Wr(e,t){return(({finisher:e,descriptor:t})=>(r,o)=>{var i;if(void 0===o){const o=null!==(i=r.originalKey)&&void 0!==i?i:r.key,n=null!=t?{kind:"method",placement:"prototype",key:o,descriptor:t(r.key)}:{...r,key:o};return null!=e&&(n.finisher=function(t){e(t,o)}),n}{const i=r.constructor;void 0!==t&&Object.defineProperty(r,o,t(o)),null==e||e(i,o)}})({descriptor:r=>{const o={get(){var t,r;return null!==(r=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==r?r:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof r?Symbol():"__"+r;o.get=function(){var r,o;return void 0===this[t]&&(this[t]=null!==(o=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(e))&&void 0!==o?o:null),this[t]}}return o}})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var qr;null===(qr=window.HTMLSlotElement)||void 0===qr||qr.prototype.assignedElements;function Zr(e){if(!e||"object"!=typeof e)return e;if("[object Date]"==Object.prototype.toString.call(e))return new Date(e.getTime());if(Array.isArray(e))return e.map(Zr);var t={};return Object.keys(e).forEach((function(r){t[r]=Zr(e[r])})),t}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Gr=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jr={},Xr=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends Gr{constructor(){super(...arguments),this.key=V}render(e,t){return this.key=e,t}update(e,[t,r]){return t!==this.key&&(((e,t=Jr)=>{e._$AH=t;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */})(e),this.key=t),r}}),Qr=globalThis,Yr=Qr.ShadowRoot&&(void 0===Qr.ShadyCSS||Qr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,eo=Symbol(),to=new WeakMap;let ro=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==eo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Yr&&void 0===e){const r=void 0!==t&&1===t.length;r&&(e=to.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&to.set(t,e))}return e}toString(){return this.cssText}};const oo=(e,...t)=>{const r=1===e.length?e[0]:t.reduce(((t,r,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[o+1]),e[0]);return new ro(r,e,eo)},io=Yr?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return(e=>new ro("string"==typeof e?e:e+"",void 0,eo))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:no,defineProperty:so,getOwnPropertyDescriptor:ao,getOwnPropertyNames:lo,getOwnPropertySymbols:co,getPrototypeOf:ho}=Object,po=globalThis,uo=po.trustedTypes,_o=uo?uo.emptyScript:"",go=po.reactiveElementPolyfillSupport,bo=(e,t)=>e,vo={toAttribute(e,t){switch(t){case Boolean:e=e?_o:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},fo=(e,t)=>!no(e,t),mo={attribute:!0,type:String,converter:vo,reflect:!1,useDefault:!1,hasChanged:fo};Symbol.metadata??=Symbol("metadata"),po.litPropertyMetadata??=new WeakMap;let yo=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=mo){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,t);void 0!==o&&so(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){const{get:o,set:i}=ao(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){const n=o?.call(this);i?.call(this,t),this.requestUpdate(e,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??mo}static _$Ei(){if(this.hasOwnProperty(bo("elementProperties")))return;const e=ho(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(bo("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(bo("properties"))){const e=this.properties,t=[...lo(e),...co(e)];for(const r of t)this.createProperty(r,e[r])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,r]of t)this.elementProperties.set(e,r)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(io(e))}else void 0!==e&&t.push(io(e));return t}static _$Eu(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(Yr)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const r of t){const t=document.createElement("style"),o=Qr.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=r.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){const r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(void 0!==o&&!0===r.reflect){const i=(void 0!==r.converter?.toAttribute?r.converter:vo).toAttribute(t,r.type);this._$Em=e,null==i?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,t){const r=this.constructor,o=r._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=r.getPropertyOptions(o),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:vo;this._$Em=o,this[o]=i.fromAttribute(t,e.type)??this._$Ej?.get(o)??null,this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){const o=this.constructor,i=this[e];if(r??=o.getPropertyOptions(e),!((r.hasChanged??fo)(i,t)||r.useDefault&&r.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,r))))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:o,wrapped:i},n){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==i||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,r]of e){const{wrapped:e}=r,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,r,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};yo.elementStyles=[],yo.shadowRootOptions={mode:"open"},yo[bo("elementProperties")]=new Map,yo[bo("finalized")]=new Map,go?.({ReactiveElement:yo}),(po.reactiveElementVersions??=[]).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ko=globalThis,wo=ko.trustedTypes,Co=wo?wo.createPolicy("lit-html",{createHTML:e=>e}):void 0,$o="$lit$",So=`lit$${Math.random().toFixed(9).slice(2)}$`,Ao="?"+So,xo=`<${Ao}>`,Eo=document,Oo=()=>Eo.createComment(""),zo=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Mo=Array.isArray,To="[ \t\n\f\r]",Po=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Bo=/-->/g,Ko=/>/g,Ho=RegExp(`>|${To}(?:([^\\s"'>=/]+)(${To}*=${To}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Io=/'/g,Ro=/"/g,No=/^(?:script|style|textarea|title)$/i,Uo=(e=>(t,...r)=>({_$litType$:e,strings:t,values:r}))(1),Lo=Symbol.for("lit-noChange"),Vo=Symbol.for("lit-nothing"),jo=new WeakMap,Do=Eo.createTreeWalker(Eo,129);function Fo(e,t){if(!Mo(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Co?Co.createHTML(t):t}const Wo=(e,t)=>{const r=e.length-1,o=[];let i,n=2===t?"<svg>":3===t?"<math>":"",s=Po;for(let t=0;t<r;t++){const r=e[t];let a,l,d=-1,c=0;for(;c<r.length&&(s.lastIndex=c,l=s.exec(r),null!==l);)c=s.lastIndex,s===Po?"!--"===l[1]?s=Bo:void 0!==l[1]?s=Ko:void 0!==l[2]?(No.test(l[2])&&(i=RegExp("</"+l[2],"g")),s=Ho):void 0!==l[3]&&(s=Ho):s===Ho?">"===l[0]?(s=i??Po,d=-1):void 0===l[1]?d=-2:(d=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?Ho:'"'===l[3]?Ro:Io):s===Ro||s===Io?s=Ho:s===Bo||s===Ko?s=Po:(s=Ho,i=void 0);const h=s===Ho&&e[t+1].startsWith("/>")?" ":"";n+=s===Po?r+xo:d>=0?(o.push(a),r.slice(0,d)+$o+r.slice(d)+So+h):r+So+(-2===d?t:h)}return[Fo(e,n+(e[r]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class qo{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let i=0,n=0;const s=e.length-1,a=this.parts,[l,d]=Wo(e,t);if(this.el=qo.createElement(l,r),Do.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=Do.nextNode())&&a.length<s;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith($o)){const t=d[n++],r=o.getAttribute(e).split(So),s=/([.?@])?(.*)/.exec(t);a.push({type:1,index:i,name:s[2],strings:r,ctor:"."===s[1]?Qo:"?"===s[1]?Yo:"@"===s[1]?ei:Xo}),o.removeAttribute(e)}else e.startsWith(So)&&(a.push({type:6,index:i}),o.removeAttribute(e));if(No.test(o.tagName)){const e=o.textContent.split(So),t=e.length-1;if(t>0){o.textContent=wo?wo.emptyScript:"";for(let r=0;r<t;r++)o.append(e[r],Oo()),Do.nextNode(),a.push({type:2,index:++i});o.append(e[t],Oo())}}}else if(8===o.nodeType)if(o.data===Ao)a.push({type:2,index:i});else{let e=-1;for(;-1!==(e=o.data.indexOf(So,e+1));)a.push({type:7,index:i}),e+=So.length-1}i++}}static createElement(e,t){const r=Eo.createElement("template");return r.innerHTML=e,r}}function Zo(e,t,r=e,o){if(t===Lo)return t;let i=void 0!==o?r._$Co?.[o]:r._$Cl;const n=zo(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),void 0===n?i=void 0:(i=new n(e),i._$AT(e,r,o)),void 0!==o?(r._$Co??=[])[o]=i:r._$Cl=i),void 0!==i&&(t=Zo(e,i._$AS(e,t.values),i,o)),t}class Go{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,o=(e?.creationScope??Eo).importNode(t,!0);Do.currentNode=o;let i=Do.nextNode(),n=0,s=0,a=r[0];for(;void 0!==a;){if(n===a.index){let t;2===a.type?t=new Jo(i,i.nextSibling,this,e):1===a.type?t=new a.ctor(i,a.name,a.strings,this,e):6===a.type&&(t=new ti(i,this,e)),this._$AV.push(t),a=r[++s]}n!==a?.index&&(i=Do.nextNode(),n++)}return Do.currentNode=Eo,o}p(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class Jo{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,o){this.type=2,this._$AH=Vo,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Zo(this,e,t),zo(e)?e===Vo||null==e||""===e?(this._$AH!==Vo&&this._$AR(),this._$AH=Vo):e!==this._$AH&&e!==Lo&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>Mo(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Vo&&zo(this._$AH)?this._$AA.nextSibling.data=e:this.T(Eo.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:r}=e,o="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=qo.createElement(Fo(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new Go(o,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=jo.get(e.strings);return void 0===t&&jo.set(e.strings,t=new qo(e)),t}k(e){Mo(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,o=0;for(const i of e)o===t.length?t.push(r=new Jo(this.O(Oo()),this.O(Oo()),this,this.options)):r=t[o],r._$AI(i),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class Xo{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,i){this.type=1,this._$AH=Vo,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Vo}_$AI(e,t=this,r,o){const i=this.strings;let n=!1;if(void 0===i)e=Zo(this,e,t,0),n=!zo(e)||e!==this._$AH&&e!==Lo,n&&(this._$AH=e);else{const o=e;let s,a;for(e=i[0],s=0;s<i.length-1;s++)a=Zo(this,o[r+s],t,s),a===Lo&&(a=this._$AH[s]),n||=!zo(a)||a!==this._$AH[s],a===Vo?e=Vo:e!==Vo&&(e+=(a??"")+i[s+1]),this._$AH[s]=a}n&&!o&&this.j(e)}j(e){e===Vo?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Qo extends Xo{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Vo?void 0:e}}class Yo extends Xo{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Vo)}}class ei extends Xo{constructor(e,t,r,o,i){super(e,t,r,o,i),this.type=5}_$AI(e,t=this){if((e=Zo(this,e,t,0)??Vo)===Lo)return;const r=this._$AH,o=e===Vo&&r!==Vo||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==Vo&&(r===Vo||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ti{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Zo(this,e)}}const ri=ko.litHtmlPolyfillSupport;ri?.(qo,Jo),(ko.litHtmlVersions??=[]).push("3.3.0");const oi=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ii=class extends yo{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{const o=r?.renderBefore??t;let i=o._$litPart$;if(void 0===i){const e=r?.renderBefore??null;o._$litPart$=i=new Jo(t.insertBefore(Oo(),e),e,void 0,r??{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Lo}};ii._$litElement$=!0,ii.finalized=!0,oi.litElementHydrateSupport?.({LitElement:ii});const ni=oi.litElementPolyfillSupport;ni?.({LitElement:ii}),(oi.litElementVersions??=[]).push("4.2.0");var si=oo`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,ai=oo`
  :host {
    display: contents;
  }
`,li=Object.defineProperty,di=Object.getOwnPropertyDescriptor,ci=Object.getOwnPropertySymbols,hi=Object.prototype.hasOwnProperty,pi=Object.prototype.propertyIsEnumerable,ui=e=>{throw TypeError(e)},_i=(e,t,r)=>t in e?li(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,gi=(e,t)=>{for(var r in t||(t={}))hi.call(t,r)&&_i(e,r,t[r]);if(ci)for(var r of ci(t))pi.call(t,r)&&_i(e,r,t[r]);return e},bi=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?di(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&li(t,r,n),n},vi=(e,t,r)=>t.has(e)||ui("Cannot "+r);function fi(e,t){const r=gi({waitUntilFirstUpdate:!1},t);return(t,o)=>{const{update:i}=t,n=Array.isArray(e)?e:[e];t.update=function(e){n.forEach((t=>{const i=t;if(e.has(i)){const t=e.get(i),n=this[i];t!==n&&(r.waitUntilFirstUpdate&&!this.hasUpdated||this[o](t,n))}})),i.call(this,e)}}}var mi=oo`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;const yi={attribute:!0,type:String,converter:vo,reflect:!1,hasChanged:fo},ki=(e=yi,t,r)=>{const{kind:o,metadata:i}=r;let n=globalThis.litPropertyMetadata.get(i);if(void 0===n&&globalThis.litPropertyMetadata.set(i,n=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),n.set(r.name,e),"accessor"===o){const{name:o}=r;return{set(r){const i=t.get.call(this);t.set.call(this,r),this.requestUpdate(o,i,e)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){const{name:o}=r;return function(r){const i=this[o];t.call(this,r),this.requestUpdate(o,i,e)}}throw Error("Unsupported decorator location: "+o)};function wi(e){return(t,r)=>"object"==typeof r?ki(e,t,r):((e,t,r)=>{const o=t.hasOwnProperty(r);return t.constructor.createProperty(r,e),o?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function Ci(e){return wi({...e,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function $i(e,t){return(t,r,o)=>((e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,r),r))(t,r,{get(){return(t=>t.renderRoot?.querySelector(e)??null)(this)}})}var Si,Ai=class extends ii{constructor(){var e,t,r;super(),e=this,r=!1,(t=Si).has(e)?ui("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach((([e,t])=>{this.constructor.define(e,t)}))}emit(e,t){const r=new CustomEvent(e,gi({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}static define(e,t=this,r={}){const o=customElements.get(e);if(!o){try{customElements.define(e,t,r)}catch(o){customElements.define(e,class extends t{},r)}return}let i=" (unknown version)",n=i;"version"in t&&t.version&&(i=" v"+t.version),"version"in o&&o.version&&(n=" v"+o.version),i&&n&&i===n||console.warn(`Attempted to register <${e}>${i}, but <${e}>${n} has already been registered.`)}attributeChangedCallback(e,t,r){var o,i;vi(o=this,i=Si,"read from private field"),i.get(o)||(this.constructor.elementProperties.forEach(((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])})),((e,t,r,o)=>{vi(e,t,"write to private field"),t.set(e,r)})(this,Si,!0)),super.attributeChangedCallback(e,t,r)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach(((t,r)=>{e.has(r)&&null==this[r]&&(this[r]=t)}))}};Si=new WeakMap,Ai.version="2.20.1",Ai.dependencies={},bi([wi()],Ai.prototype,"dir",2),bi([wi()],Ai.prototype,"lang",2);var xi=class extends Ai{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver((e=>{this.emit("sl-resize",{detail:{entries:e}})})),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(null!==e){const t=e.assignedElements({flatten:!0});this.observedElements.forEach((e=>this.resizeObserver.unobserve(e))),this.observedElements=[],t.forEach((e=>{this.resizeObserver.observe(e),this.observedElements.push(e)}))}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return Uo` <slot @slotchange=${this.handleSlotChange}></slot> `}};function Ei(e,t,r="vertical",o="smooth"){const i=function(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}(e,t),n=i.top+t.scrollTop,s=i.left+t.scrollLeft,a=t.scrollLeft,l=t.scrollLeft+t.offsetWidth,d=t.scrollTop,c=t.scrollTop+t.offsetHeight;"horizontal"!==r&&"both"!==r||(s<a?t.scrollTo({left:s,behavior:o}):s+e.clientWidth>l&&t.scrollTo({left:s-t.offsetWidth+e.clientWidth,behavior:o})),"vertical"!==r&&"both"!==r||(n<d?t.scrollTo({top:n,behavior:o}):n+e.clientHeight>c&&t.scrollTo({top:n-t.offsetHeight+e.clientHeight,behavior:o}))}xi.styles=[mi,ai],bi([wi({type:Boolean,reflect:!0})],xi.prototype,"disabled",2),bi([fi("disabled",{waitUntilFirstUpdate:!0})],xi.prototype,"handleDisabledChange",1);var Oi=oo`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,zi="";function Mi(e){zi=e}var Ti={name:"default",resolver:e=>function(e=""){if(!zi){const e=[...document.getElementsByTagName("script")],t=e.find((e=>e.hasAttribute("data-shoelace")));if(t)Mi(t.getAttribute("data-shoelace"));else{const t=e.find((e=>/shoelace(\.min)?\.js($|\?)/.test(e.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(e.src)));let r="";t&&(r=t.getAttribute("src")),Mi(r.split("/").slice(0,-1).join("/"))}}return zi.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}(`assets/icons/${e}.svg`)},Pi={caret:'\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="6 9 12 15 18 9"></polyline>\n    </svg>\n  ',check:'\n    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor">\n          <g transform="translate(3.428571, 3.428571)">\n            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>\n            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',copy:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>\n    </svg>\n  ',indeterminate:'\n    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(2.285714, 6.857143)">\n            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',radio:'\n    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="currentColor">\n          <circle cx="8" cy="8" r="3.42857143"></circle>\n        </g>\n      </g>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',"x-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '},Bi=[Ti,{name:"system",resolver:e=>e in Pi?`data:image/svg+xml,${encodeURIComponent(Pi[e])}`:""}],Ki=[];function Hi(e){return Bi.find((t=>t.name===e))}var Ii=oo`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var Ri,Ni=Symbol(),Ui=Symbol(),Li=new Map,Vi=class extends Ai{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var r;let o;if(null==t?void 0:t.spriteSheet)return this.svg=Uo`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(o=await fetch(e,{mode:"cors"}),!o.ok)return 410===o.status?Ni:Ui}catch(e){return Ui}try{const e=document.createElement("div");e.innerHTML=await o.text();const t=e.firstElementChild;if("svg"!==(null==(r=null==t?void 0:t.tagName)?void 0:r.toLowerCase()))return Ni;Ri||(Ri=new DOMParser);const i=Ri.parseFromString(t.outerHTML,"text/html").body.querySelector("svg");return i?(i.part.add("svg"),document.adoptNode(i)):Ni}catch(e){return Ni}}connectedCallback(){var e;super.connectedCallback(),e=this,Ki.push(e)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){var e;super.disconnectedCallback(),e=this,Ki=Ki.filter((t=>t!==e))}getIconSource(){const e=Hi(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:r}=this.getIconSource(),o=r?Hi(this.library):void 0;if(!t)return void(this.svg=null);let i=Li.get(t);if(i||(i=this.resolveIcon(t,o),Li.set(t,i)),!this.initialRender)return;const n=await i;if(n===Ui&&Li.delete(t),t===this.getIconSource().url)if(((e,t)=>void 0!==e?._$litType$)(n)){if(this.svg=n,o){await this.updateComplete;const e=this.shadowRoot.querySelector("[part='svg']");"function"==typeof o.mutator&&e&&o.mutator(e)}}else switch(n){case Ui:case Ni:this.svg=null,this.emit("sl-error");break;default:this.svg=n.cloneNode(!0),null==(e=null==o?void 0:o.mutator)||e.call(o,this.svg),this.emit("sl-load")}}render(){return this.svg}};Vi.styles=[mi,Ii],bi([Ci()],Vi.prototype,"svg",2),bi([wi({reflect:!0})],Vi.prototype,"name",2),bi([wi()],Vi.prototype,"src",2),bi([wi()],Vi.prototype,"label",2),bi([wi({reflect:!0})],Vi.prototype,"library",2),bi([fi("label")],Vi.prototype,"handleLabelChange",1),bi([fi(["name","src","library"])],Vi.prototype,"setIcon",1);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ji=1;let Di=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fi=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends Di{constructor(e){if(super(e),e.type!==ji||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const r=e.element.classList;for(const e of this.st)e in t||(r.remove(e),this.st.delete(e));for(const e in t){const o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(r.add(e),this.st.add(e)):(r.remove(e),this.st.delete(e)))}return Lo}}),Wi=Symbol.for(""),qi=e=>{if(e?.r===Wi)return e?._$litStatic$},Zi=(e,...t)=>({_$litStatic$:t.reduce(((t,r,o)=>t+(e=>{if(void 0!==e._$litStatic$)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+e[o+1]),e[0]),r:Wi}),Gi=new Map,Ji=(e=>(t,...r)=>{const o=r.length;let i,n;const s=[],a=[];let l,d=0,c=!1;for(;d<o;){for(l=t[d];d<o&&void 0!==(n=r[d],i=qi(n));)l+=i+t[++d],c=!0;d!==o&&a.push(n),s.push(l),d++}if(d===o&&s.push(t[o]),c){const e=s.join("$$lit$$");void 0===(t=Gi.get(e))&&(s.raw=s,Gi.set(e,t=s)),r=a}return e(t,...r)})(Uo),Xi=e=>e??Vo;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Qi=class extends Ai{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?Zi`a`:Zi`button`;return Ji`
      <${t}
        part="base"
        class=${Fi({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${Xi(e?void 0:this.disabled)}
        type=${Xi(e?void 0:"button")}
        href=${Xi(e?this.href:void 0)}
        target=${Xi(e?this.target:void 0)}
        download=${Xi(e?this.download:void 0)}
        rel=${Xi(e&&this.target?"noreferrer noopener":void 0)}
        role=${Xi(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${Xi(this.name)}
          library=${Xi(this.library)}
          src=${Xi(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};Qi.styles=[mi,Oi],Qi.dependencies={"sl-icon":Vi},bi([$i(".icon-button")],Qi.prototype,"button",2),bi([Ci()],Qi.prototype,"hasFocus",2),bi([wi()],Qi.prototype,"name",2),bi([wi()],Qi.prototype,"library",2),bi([wi()],Qi.prototype,"src",2),bi([wi()],Qi.prototype,"href",2),bi([wi()],Qi.prototype,"target",2),bi([wi()],Qi.prototype,"download",2),bi([wi()],Qi.prototype,"label",2),bi([wi({type:Boolean,reflect:!0})],Qi.prototype,"disabled",2);const Yi=new Set,en=new Map;let tn,rn="ltr",on="en";const nn="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(nn){const e=new MutationObserver(an);rn=document.documentElement.dir||"ltr",on=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function sn(...e){e.map((e=>{const t=e.$code.toLowerCase();en.has(t)?en.set(t,Object.assign(Object.assign({},en.get(t)),e)):en.set(t,e),tn||(tn=e)})),an()}function an(){nn&&(rn=document.documentElement.dir||"ltr",on=document.documentElement.lang||navigator.language),[...Yi.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}let ln=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Yi.add(this.host)}hostDisconnected(){Yi.delete(this.host)}dir(){return`${this.host.dir||rn}`.toLowerCase()}lang(){return`${this.host.lang||on}`.toLowerCase()}getTranslationData(e){var t,r;const o=new Intl.Locale(e.replace(/_/g,"-")),i=null==o?void 0:o.language.toLowerCase(),n=null!==(r=null===(t=null==o?void 0:o.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==r?r:"";return{locale:o,language:i,region:n,primary:en.get(`${i}-${n}`),secondary:en.get(i)}}exists(e,t){var r;const{primary:o,secondary:i}=this.getTranslationData(null!==(r=t.lang)&&void 0!==r?r:this.lang());return t=Object.assign({includeFallback:!1},t),!!(o&&o[e]||i&&i[e]||t.includeFallback&&tn&&tn[e])}term(e,...t){const{primary:r,secondary:o}=this.getTranslationData(this.lang());let i;if(r&&r[e])i=r[e];else if(o&&o[e])i=o[e];else{if(!tn||!tn[e])return console.error(`No translation found for: ${String(e)}`),String(e);i=tn[e]}return"function"==typeof i?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}};var dn={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};sn(dn);var cn=dn,hn=class extends ln{};sn(cn);var pn=class extends Ai{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new hn(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const e=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver((()=>{this.repositionIndicator(),this.updateScrollControls()})),this.mutationObserver=new MutationObserver((e=>{const t=e.filter((({target:e})=>{if(e===this)return!0;if(e.closest("sl-tab-group")!==this)return!1;const t=e.tagName.toLowerCase();return"sl-tab"===t||"sl-tab-panel"===t}));if(0!==t.length)if(t.some((e=>!["aria-labelledby","aria-controls"].includes(e.attributeName)))&&setTimeout((()=>this.setAriaLabels())),t.some((e=>"disabled"===e.attributeName)))this.syncTabsAndPanels();else if(t.some((e=>"active"===e.attributeName))){const e=t.filter((e=>"active"===e.attributeName&&"sl-tab"===e.target.tagName.toLowerCase())).map((e=>e.target)),r=e.find((e=>e.active));r&&this.setActiveTab(r)}})),this.updateComplete.then((()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then((()=>{const e=new IntersectionObserver(((e,t)=>{var r;e[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab(null!=(r=this.getActiveTab())?r:this.tabs[0],{emitEvents:!1}),t.unobserve(e[0].target))}));e.observe(this.tabGroup)}))}))}disconnectedCallback(){var e,t;super.disconnectedCallback(),null==(e=this.mutationObserver)||e.disconnect(),this.nav&&(null==(t=this.resizeObserver)||t.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter((e=>"sl-tab-panel"===e.tagName.toLowerCase()))}getActiveTab(){return this.tabs.find((e=>e.active))}handleClick(e){const t=e.target.closest("sl-tab");(null==t?void 0:t.closest("sl-tab-group"))===this&&null!==t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}handleKeyDown(e){const t=e.target.closest("sl-tab");if((null==t?void 0:t.closest("sl-tab-group"))===this&&(["Enter"," "].includes(e.key)&&null!==t&&(this.setActiveTab(t,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const t=this.tabs.find((e=>e.matches(":focus"))),r="rtl"===this.localize.dir();let o=null;if("sl-tab"===(null==t?void 0:t.tagName.toLowerCase())){if("Home"===e.key)o=this.focusableTabs[0];else if("End"===e.key)o=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&e.key===(r?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&"ArrowUp"===e.key){const e=this.tabs.findIndex((e=>e===t));o=this.findNextFocusableTab(e,"backward")}else if(["top","bottom"].includes(this.placement)&&e.key===(r?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&"ArrowDown"===e.key){const e=this.tabs.findIndex((e=>e===t));o=this.findNextFocusableTab(e,"forward")}if(!o)return;o.tabIndex=0,o.focus({preventScroll:!0}),"auto"===this.activation?this.setActiveTab(o,{scrollBehavior:"smooth"}):this.tabs.forEach((e=>{e.tabIndex=e===o?0:-1})),["top","bottom"].includes(this.placement)&&Ei(o,this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:"rtl"===this.localize.dir()?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:"rtl"===this.localize.dir()?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t=gi({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const r=this.activeTab;this.activeTab=e,this.tabs.forEach((e=>{e.active=e===this.activeTab,e.tabIndex=e===this.activeTab?0:-1})),this.panels.forEach((e=>{var t;return e.active=e.name===(null==(t=this.activeTab)?void 0:t.panel)})),this.syncIndicator(),["top","bottom"].includes(this.placement)&&Ei(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(r&&this.emit("sl-tab-hide",{detail:{name:r.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach((e=>{const t=this.panels.find((t=>t.name===e.panel));t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))}))}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,r=e.clientHeight,o="rtl"===this.localize.dir(),i=this.getAllTabs(),n=i.slice(0,i.indexOf(e)).reduce(((e,t)=>({left:e.left+t.clientWidth,top:e.top+t.clientHeight})),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=o?-1*n.left+"px":`${n.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${r}px`,this.indicator.style.translate=`0 ${n.top}px`}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter((e=>!e.disabled)),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then((()=>this.updateScrollControls()))}findNextFocusableTab(e,t){let r=null;const o="forward"===t?1:-1;let i=e+o;for(;e<this.tabs.length;){if(r=this.tabs[i]||null,null===r){r="forward"===t?this.focusableTabs[0]:this.focusableTabs[this.focusableTabs.length-1];break}if(!r.disabled)break;i+=o}return r}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return"rtl"===this.localize.dir()?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(e){const t=this.tabs.find((t=>t.panel===e));t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}render(){const e="rtl"===this.localize.dir();return Uo`
      <div
        part="base"
        class=${Fi({"tab-group":!0,"tab-group--top":"top"===this.placement,"tab-group--bottom":"bottom"===this.placement,"tab-group--start":"start"===this.placement,"tab-group--end":"end"===this.placement,"tab-group--rtl":"rtl"===this.localize.dir(),"tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?Uo`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${Fi({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${e?"chevron-right":"chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?Uo`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${Fi({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${e?"chevron-left":"chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};pn.styles=[mi,si],pn.dependencies={"sl-icon-button":Qi,"sl-resize-observer":xi},bi([$i(".tab-group")],pn.prototype,"tabGroup",2),bi([$i(".tab-group__body")],pn.prototype,"body",2),bi([$i(".tab-group__nav")],pn.prototype,"nav",2),bi([$i(".tab-group__indicator")],pn.prototype,"indicator",2),bi([Ci()],pn.prototype,"hasScrollControls",2),bi([Ci()],pn.prototype,"shouldHideScrollStartButton",2),bi([Ci()],pn.prototype,"shouldHideScrollEndButton",2),bi([wi()],pn.prototype,"placement",2),bi([wi()],pn.prototype,"activation",2),bi([wi({attribute:"no-scroll-controls",type:Boolean})],pn.prototype,"noScrollControls",2),bi([wi({attribute:"fixed-scroll-controls",type:Boolean})],pn.prototype,"fixedScrollControls",2),bi([function(e){return(t,r)=>{const o="function"==typeof t?t:t[r];Object.assign(o,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */({passive:!0})],pn.prototype,"updateScrollButtons",1),bi([fi("noScrollControls",{waitUntilFirstUpdate:!0})],pn.prototype,"updateScrollControls",1),bi([fi("placement",{waitUntilFirstUpdate:!0})],pn.prototype,"syncIndicator",1);var un=(e,t)=>{let r=0;return function(...o){window.clearTimeout(r),r=window.setTimeout((()=>{e.call(this,...o)}),t)}},_n=(e,t,r)=>{const o=e[t];e[t]=function(...e){o.call(this,...e),r.call(this,o,...e)}};(()=>{if("undefined"==typeof window)return;if(!("onscrollend"in window)){const e=new Set,t=new WeakMap,r=t=>{for(const r of t.changedTouches)e.add(r.identifier)},o=t=>{for(const r of t.changedTouches)e.delete(r.identifier)};document.addEventListener("touchstart",r,!0),document.addEventListener("touchend",o,!0),document.addEventListener("touchcancel",o,!0),_n(EventTarget.prototype,"addEventListener",(function(r,o){if("scrollend"!==o)return;const i=un((()=>{e.size?i():this.dispatchEvent(new Event("scrollend"))}),100);r.call(this,"scroll",i,{passive:!0}),t.set(this,i)})),_n(EventTarget.prototype,"removeEventListener",(function(e,r){if("scrollend"!==r)return;const o=t.get(this);o&&e.call(this,"scroll",o,{passive:!0})}))}})();var gn=oo`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,bn=0,vn=class extends Ai{constructor(){super(...arguments),this.localize=new hn(this),this.attrId=++bn,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(e){e.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,Uo`
      <div
        part="base"
        class=${Fi({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?Uo`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};vn.styles=[mi,gn],vn.dependencies={"sl-icon-button":Qi},bi([$i(".tab")],vn.prototype,"tab",2),bi([wi({reflect:!0})],vn.prototype,"panel",2),bi([wi({type:Boolean,reflect:!0})],vn.prototype,"active",2),bi([wi({type:Boolean,reflect:!0})],vn.prototype,"closable",2),bi([wi({type:Boolean,reflect:!0})],vn.prototype,"disabled",2),bi([wi({type:Number,reflect:!0})],vn.prototype,"tabIndex",2),bi([fi("active")],vn.prototype,"handleActiveChange",1),bi([fi("disabled")],vn.prototype,"handleDisabledChange",1),vn.define("sl-tab");let fn=class extends pn{constructor(){super(...arguments),this._mouseIsDown=!1,this._scrolled=!1,this._scrollStartX=0,this._scrollLeft=0,this._mouseDown=e=>{const t=this._scrollContainer;t&&(this._scrollStartX=e.pageX-t.offsetLeft,this._scrollLeft=t.scrollLeft,this._mouseIsDown=!0,this._scrolled=!1,window.addEventListener("mousemove",this._mouseMove),window.addEventListener("mouseup",this._mouseUp,{once:!0}))},this._mouseUp=()=>{this._mouseIsDown=!1,this._scrolled&&(this._mouseReleasedAt=(new Date).getTime()),window.removeEventListener("mousemove",this._mouseMove)},this._mouseMove=e=>{if(!this._mouseIsDown)return;const t=this._scrollContainer;if(!t)return;const r=e.pageX-t.offsetLeft-this._scrollStartX;this._scrolled||(this._scrolled=Math.abs(r)>1),t.scrollLeft=this._scrollLeft-r}}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mousemove",this._mouseMove),window.removeEventListener("mouseup",this._mouseUp)}setAriaLabels(){}getAllPanels(){return[]}firstUpdated(e){super.firstUpdated(e);const t=this._scrollContainer;t&&t.addEventListener("mousedown",this._mouseDown)}handleClick(e){this._mouseReleasedAt&&(new Date).getTime()-this._mouseReleasedAt<100||super.handleClick(e)}};fn.styles=[si,l`
      :host {
        --sl-spacing-3x-small: 0.125rem;
        --sl-spacing-2x-small: 0.25rem;
        --sl-spacing-x-small: 0.5rem;
        --sl-spacing-small: 0.75rem;
        --sl-spacing-medium: 1rem;
        --sl-spacing-large: 1.25rem;
        --sl-spacing-x-large: 1.75rem;
        --sl-spacing-2x-large: 2.25rem;
        --sl-spacing-3x-large: 3rem;
        --sl-spacing-4x-large: 4.5rem;

        --sl-transition-x-slow: 1000ms;
        --sl-transition-slow: 500ms;
        --sl-transition-medium: 250ms;
        --sl-transition-fast: 150ms;
        --sl-transition-x-fast: 50ms;
        --transition-speed: var(--sl-transition-fast);
        --sl-border-radius-small: 0.1875rem;
        --sl-border-radius-medium: 0.25rem;
        --sl-border-radius-large: 0.5rem;
        --sl-border-radius-x-large: 1rem;
        --sl-border-radius-circle: 50%;
        --sl-border-radius-pill: 9999px;

        --sl-color-neutral-600: inherit;

        --sl-font-weight-semibold: 500;
        --sl-font-size-small: 14px;

        --sl-color-primary-600: var(
          --ha-tab-active-text-color,
          var(--primary-color)
        );
        --track-color: var(--ha-tab-track-color, var(--divider-color));
        --indicator-color: var(--ha-tab-indicator-color, var(--primary-color));
      }
      ::slotted(sl-tab:not([active])) {
        opacity: 0.8;
      }
    `],e([Wr(".tab-group__nav",!0)],fn.prototype,"_scrollContainer",void 0),fn=e([Lr("sl-tab-group")],fn);let mn=class extends ne{constructor(){super(...arguments),this._selectedCard=0,this._GUImode=!0,this._guiModeAvailable=!0,this._keys=new Map}setConfig(e){var t;this.config=e,this.config.keep_background=null===(t=this.config.keep_background)||void 0===t||t}formData(){return this.config}render(){var e,t,r,o,i,n,s,a,l,d;if(!this.hass||!this.config)return V;const c=this._selectedCard,h=null!==(t=null===(e=this.config.cards)||void 0===e?void 0:e.length)&&void 0!==t?t:0,p=this._GUImode;return U`
      <ha-form
        .hass=${this.hass}
        .data=${this.config}
        .schema=${[{title:this.localize("container_card_settings",this.getLocale()),type:"expandable",flatten:!1,expanded:!1,locale:this.getLocale(),schema:[{name:"title",locale:this.getLocale(),selector:{text:{}}},{name:"mode",locale:this.getLocale(),selector:{select:{multiple:!1,options:[{label:this.localize("vertical",this.getLocale()),value:"vertical"},{label:this.localize("horizontal",this.getLocale()),value:"horizontal"}]}}},{name:"is_inner_container",locale:this.getLocale(),selector:{boolean:{}}},{title:this.localize("keep_settings",this.getLocale()),type:"expandable",flatten:!1,expanded:!1,locale:this.getLocale(),schema:[{name:"keep_margin",locale:this.getLocale(),selector:{boolean:{}}},{name:"keep_background",locale:this.getLocale(),selector:{boolean:{}}},{name:"keep_box_shadow",locale:this.getLocale(),selector:{boolean:{}}},{name:"keep_border_radius",locale:this.getLocale(),selector:{boolean:{}}},{name:"keep_outer_padding",locale:this.getLocale(),selector:{boolean:{}}}]},{name:"card_background_override",locale:this.getLocale(),selector:{text:{}}}]},{name:"inner_cards",locale:this.getLocale(),selector:{constant:{value:this.localize("inner_cards",this.getLocale())}}}]}
        .computeLabel=${e=>this.computeLabel(e)}
        @value-changed=${e=>{this.valueChanged(e)}}
      ></ha-form>
      <div class="card-config">
        <div class="toolbar">
          <sl-tab-group @sl-tab-show=${e=>{this._handleSelectedCard(e)}}>
            ${null===(r=this.config.cards)||void 0===r?void 0:r.map(((e,t)=>U`<sl-tab slot="nav" .panel=${t.toString()} .active=${t===c}>
                  ${t+1}
                </sl-tab>`))}
          </sl-tab-group>
          <ha-icon-button
            @click=${()=>{this._handleAddCard()}}
            .path=${"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"}
          ></ha-icon-button>
        </div>

        <div id="editor">
          ${c<h?U`
                <div id="card-options">
                  <ha-icon-button
                    class="gui-mode-button"
                    @click=${()=>{this._toggleMode()}}
                    .disabled=${!this._guiModeAvailable}
                    .label=${null===(o=this.hass)||void 0===o?void 0:o.localize(p?"ui.panel.lovelace.editor.edit_card.show_code_editor":"ui.panel.lovelace.editor.edit_card.show_visual_editor")}
                    .path=${p?"M8,3A2,2 0 0,0 6,5V9A2,2 0 0,1 4,11H3V13H4A2,2 0 0,1 6,15V19A2,2 0 0,0 8,21H10V19H8V14A2,2 0 0,0 6,12A2,2 0 0,0 8,10V5H10V3M16,3A2,2 0 0,1 18,5V9A2,2 0 0,0 20,11H21V13H20A2,2 0 0,0 18,15V19A2,2 0 0,1 16,21H14V19H16V14A2,2 0 0,1 18,12A2,2 0 0,1 16,10V5H14V3H16Z":"M11 15H17V17H11V15M9 7H7V9H9V7M11 13H17V11H11V13M11 9H17V7H11V9M9 11H7V13H9V11M21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5M19 5H5V19H19V5M9 15H7V17H9V15Z"}
                  ></ha-icon-button>

                  <ha-icon-button-arrow-prev
                    .disabled=${0===c}
                    .label=${null===(i=this.hass)||void 0===i?void 0:i.localize("ui.panel.lovelace.editor.edit_card.move_before")}
                    @click=${e=>{this._handleMove(e)}}
                    .move=${-1}
                  ></ha-icon-button-arrow-prev>

                  <ha-icon-button-arrow-next
                    .label=${null===(n=this.hass)||void 0===n?void 0:n.localize("ui.panel.lovelace.editor.edit_card.move_after")}
                    .disabled=${c===h-1}
                    @click=${e=>{this._handleMove(e)}}
                    .move=${1}
                  ></ha-icon-button-arrow-next>

                  <ha-icon-button
                    .label=${null===(s=this.hass)||void 0===s?void 0:s.localize("ui.panel.lovelace.editor.edit_card.copy")}
                    .path=${"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"}
                    @click=${()=>{this._handleCopyCard()}}
                  ></ha-icon-button>

                  <ha-icon-button
                    .label=${null===(a=this.hass)||void 0===a?void 0:a.localize("ui.panel.lovelace.editor.edit_card.cut")}
                    .path=${"M19,3L13,9L15,11L22,4V3M12,12.5A0.5,0.5 0 0,1 11.5,12A0.5,0.5 0 0,1 12,11.5A0.5,0.5 0 0,1 12.5,12A0.5,0.5 0 0,1 12,12.5M6,20A2,2 0 0,1 4,18C4,16.89 4.9,16 6,16A2,2 0 0,1 8,18C8,19.11 7.1,20 6,20M6,8A2,2 0 0,1 4,6C4,4.89 4.9,4 6,4A2,2 0 0,1 8,6C8,7.11 7.1,8 6,8M9.64,7.64C9.87,7.14 10,6.59 10,6A4,4 0 0,0 6,2A4,4 0 0,0 2,6A4,4 0 0,0 6,10C6.59,10 7.14,9.87 7.64,9.64L10,12L7.64,14.36C7.14,14.13 6.59,14 6,14A4,4 0 0,0 2,18A4,4 0 0,0 6,22A4,4 0 0,0 10,18C10,17.41 9.87,16.86 9.64,16.36L12,14L19,21H22V20L9.64,7.64Z"}
                    @click=${()=>{this._handleCutCard()}}
                  ></ha-icon-button>

                  <ha-icon-button
                    .label=${null===(l=this.hass)||void 0===l?void 0:l.localize("ui.panel.lovelace.editor.edit_card.delete")}
                    .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
                    @click=${()=>{this._handleDeleteCard()}}
                  ></ha-icon-button>
                </div>
                ${Xr(this._getKey(null!==(d=this.config.cards)&&void 0!==d?d:[],c),U`<hui-card-element-editor
                    .hass=${this.hass}
                    .value=${this.config.cards?this.config.cards[c]:[]}
                    .lovelace=${this.lovelace}
                    @config-changed=${e=>{this._handleConfigChanged(e)}}
                    @GUImode-changed=${e=>{this._handleGUIModeChanged(e)}}
                  ></hui-card-element-editor>`)}
              `:U`
                <hui-card-picker
                  .hass=${this.hass}
                  .lovelace=${this.lovelace}
                  @config-changed=${e=>{this._handleCardPicked(e)}}
                ></hui-card-picker>
              `}
        </div>
      </div>
    `}getLocale(){var e,t;return null!==(t=null!==(e=this.config.locale)&&void 0!==e?e:this.hass.locale.language)&&void 0!==t?t:"en-US"}computeLabel(e){return Hr("editor."+e.name,e.locale)}localize(e,t){return Hr("editor."+e,t)}_handleSelectedCard(e){this._setMode(!0),this._guiModeAvailable=!0,this._selectedCard=parseInt(e.detail.name,10)}_setMode(e){this._GUImode=e,this._cardEditorEl&&(this._cardEditorEl.GUImode=e)}_handleAddCard(){return t(this,void 0,void 0,(function*(){var e,t,r,o;this._selectedCard=null!==(r=null===(t=null===(e=this.config)||void 0===e?void 0:e.cards)||void 0===t?void 0:t.length)&&void 0!==r?r:0,yield this.updateComplete,null===(o=this.renderRoot.querySelector("sl-tab-group"))||void 0===o||o.syncIndicator()}))}_toggleMode(){var e;null===(e=this._cardEditorEl)||void 0===e||e.toggleMode()}_handleMove(e){var t;if(!this.config)return;const r=e.currentTarget.move,o=this._selectedCard+r,i=[...null!==(t=this.config.cards)&&void 0!==t?t:[]],n=i.splice(this._selectedCard,1)[0];i.splice(o,0,n),this.config=Object.assign(Object.assign({},this.config),{cards:i}),this._selectedCard=o,this._keys.clear(),et(this,"config-changed",{config:this.config})}_handleCopyCard(){this.config&&(this._clipboard=Zr(this.config.cards?this.config.cards[this._selectedCard]:[]))}_handleCutCard(){this._handleCopyCard(),this._handleDeleteCard()}_handleDeleteCard(){var e;if(!this.config)return;const t=[...null!==(e=this.config.cards)&&void 0!==e?e:[]];t.splice(this._selectedCard,1),this.config=Object.assign(Object.assign({},this.config),{cards:t}),this._selectedCard=Math.max(0,this._selectedCard-1),this._keys.clear(),et(this,"config-changed",{config:this.config})}_getKey(e,t){const r=`${e[t].type}${t}${e.length}`;return this._keys.has(r)||this._keys.set(r,Math.random().toString()),this._keys.get(r)}_handleCardPicked(e){var t;if(e.stopPropagation(),!this.config)return;const r=e.detail.config,o=[...null!==(t=this.config.cards)&&void 0!==t?t:[],r];this.config=Object.assign(Object.assign({},this.config),{cards:o}),this._keys.clear(),et(this,"config-changed",{config:this.config})}_handleConfigChanged(e){var t;if(e.stopPropagation(),!this.config)return;const r=[...null!==(t=this.config.cards)&&void 0!==t?t:[]],o=e.detail.config;r[this._selectedCard]=o,this.config=Object.assign(Object.assign({},this.config),{cards:r}),this._guiModeAvailable=e.detail.guiModeAvailable,et(this,"config-changed",{config:this.config})}_handleGUIModeChanged(e){e.stopPropagation(),this._GUImode=e.detail.guiMode,this._guiModeAvailable=e.detail.guiModeAvailable}valueChanged(e){if(!this.config||!this.hass)return;const t=Object.assign({},this.config);t.mode=e.detail.value.mode,t.title=e.detail.value.title,t.keep_background=e.detail.value.keep_background,t.keep_border_radius=e.detail.value.keep_border_radius,t.keep_box_shadow=e.detail.value.keep_box_shadow,t.keep_margin=e.detail.value.keep_margin,t.keep_outer_padding=e.detail.value.keep_outer_padding,t.card_background_override=e.detail.value.card_background_override,t.is_inner_container=e.detail.value.is_inner_container,t.cards=e.detail.value.cards,t.styles=e.detail.value.styles,this.config=t;const r=new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0});this.dispatchEvent(r)}};e([Dr({attribute:!1})],mn.prototype,"hass",void 0),e([Dr({attribute:!1})],mn.prototype,"lovelace",void 0),e([Fr()],mn.prototype,"config",void 0),e([Fr()],mn.prototype,"_selectedCard",void 0),e([Fr()],mn.prototype,"_GUImode",void 0),e([Fr()],mn.prototype,"_guiModeAvailable",void 0),e([Wr("hui-card-element-editor")],mn.prototype,"_cardEditorEl",void 0),mn=e([Lr("bolder-container-card-editor")],mn);var yn=Object.freeze({__proto__:null,get BolderContainerCardEditor(){return mn}});
