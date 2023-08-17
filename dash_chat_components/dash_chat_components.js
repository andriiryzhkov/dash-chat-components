/*! For license information please see dash_chat_components.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.dash_chat_components=t(require("react")):e.dash_chat_components=t(e.React)}(self,(e=>(()=>{var t={184:(e,t)=>{var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var i=n.apply(null,r);i&&e.push(i)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var s in r)a.call(r,s)&&r[s]&&e.push(s)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},588:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var a=r(81),n=r.n(a),o=r(645),i=r.n(o)()(n());i.push([e.id,".chat-message-received + .chat-message-outgoing,\n.chat-message-outgoing + .chat-message-received {\n  margin-top: 10px;\n}\n\n.chat-message-received + .chat-message-received .chat-message-avatar,\n.chat-message-outgoing + .chat-message-outgoing .chat-message-avatar {\n  visibility: collapse;\n}\n\n.chat-message-received:has(+ .chat-message-received) .chat-message-time,\n.chat-message-outgoing:has(+ .chat-message-outgoing) .chat-message-time {\n  display: none;\n}\n\n.avatar-received-none .chat-message-avatar-container-received {\n  display: none;\n}\n\n.avatar-outgoing-none .chat-message-avatar-container-outgoing {\n  display: none;\n}\n\n.timestamp-none .chat-message-time {\n  display: none;\n}\n",""]);const s=i},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",a=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),a&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),a&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,a,n,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);a&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),n&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=n):l[4]="".concat(n)),t.push(l))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},713:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>v});var a=r(379),n=r.n(a),o=r(795),i=r.n(o),s=r(565),c=r.n(s),u=r(216),l=r.n(u),d=r(589),f=r.n(d),p=r(588),m={};m.styleTagTransform=f(),m.setAttributes=c(),m.insert=function(e){var t=document.querySelector("head"),r=window._lastElementInsertedByStyleLoader;r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),window._lastElementInsertedByStyleLoader=e},m.domAPI=i(),m.insertStyleElement=l(),n()(p.Z,m);const v=p.Z&&p.Z.locals?p.Z.locals:void 0},379:e=>{"use strict";var t=[];function r(e){for(var r=-1,a=0;a<t.length;a++)if(t[a].identifier===e){r=a;break}return r}function a(e,a){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],u=a.base?c[0]+a.base:c[0],l=o[u]||0,d="".concat(u," ").concat(l);o[u]=l+1;var f=r(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var m=n(p,a);a.byIndex=s,t.splice(s,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function n(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,n){var o=a(e=e||[],n=n||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=r(o[i]);t[s].references--}for(var c=a(e,n),u=0;u<o.length;u++){var l=r(o[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=c}}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{"use strict";e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var a="";r.supports&&(a+="@supports (".concat(r.supports,") {")),r.media&&(a+="@media ".concat(r.media," {"));var n=void 0!==r.layer;n&&(a+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),a+=r.css,n&&(a+="}"),r.media&&(a+="}"),r.supports&&(a+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},91:function(e,t,r){"use strict";var a=this&&this.__assign||function(){return a=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},a.apply(this,arguments)},n=this&&this.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var i=o(r(812)),s=function(e){e.setProps;var t=e.id,r=e.children,o=e.height,s=(e.width,n(e,["setProps","id","children","height","width"]));return i.default.createElement("div",a({id:t,style:{height:o}},s),r)};s.defaultProps={},t.default=s},806:function(e,t,r){"use strict";var a=this&&this.__assign||function(){return a=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},a.apply(this,arguments)},n=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},s=this&&this.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var u=i(r(812)),l=c(r(184)),d=function(e){var t=e.setProps,r=e.id,n=e.className,o=e.value,i=e.autofocus,c=e.debounce,d=e.disabled,f=e.maxlength,p=e.n_submit,m=(e.n_submit_timestamp,e.value_on_submit,e.placeholder),v=(e.persistence,e.persisted_props,e.persistence_type,e.rows),h=s(e,["setProps","id","className","value","autofocus","debounce","disabled","maxlength","n_submit","n_submit_timestamp","value_on_submit","placeholder","persistence","persisted_props","persistence_type","rows"]),g=(0,u.useRef)(null),y=(0,u.useState)(o||void 0),b=y[0],_=y[1],O=(0,l.default)("position-relative",n),w=(0,l.default)("form-control"),j=(0,l.default)("btn btn-outline-primary border-0 position-absolute bottom-0 end-0 m-1 rounded-4");return(0,u.useEffect)((function(){i&&g.current.focus()}),[d]),(0,u.useEffect)((function(){o!==b&&_(o||void 0)}),[o]),u.default.createElement("div",a({id:r,className:O},h),u.default.createElement("textarea",{ref:g,className:w,onChange:function(e){var r=e.target.value;_(r),!c&&t&&t({value:r})},onBlur:function(){c&&t&&t({value:g.current.value})},onKeyDown:function(e){if(t&&"Enter"===e.key&&!1===e.altKey&&!1===e.shiftKey){e.preventDefault();var r={n_submit:p+1,n_submit_timestamp:Date.now(),value_on_submit:g.current.value,value:void 0};_(void 0),t(r)}},autoFocus:i,disabled:d,maxLength:f,rows:v,placeholder:m,style:{paddingRight:"50px"},value:o}),u.default.createElement("button",{type:"button",onClick:function(){if(t){var e={n_submit:p+1,n_submit_timestamp:Date.now(),value_on_submit:g.current.value,value:void 0};_(void 0),t(e)}},disabled:d,className:j},u.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"},u.default.createElement("path",{d:"M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"}))))};d.defaultProps={value:"",placeholder:"Type a message...",debounce:!1,maxlength:4e3,n_clicks:0,n_clicks_timestamp:-1,n_submit:0,n_submit_timestamp:-1,value_on_submit:"",persisted_props:["value"],persistence_type:"local",rows:2},t.default=d},472:function(e,t,r){"use strict";var a=this&&this.__assign||function(){return a=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},a.apply(this,arguments)},n=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},s=this&&this.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var u=i(r(812));r(713);var l=c(r(184)),d=r(605),f=function(e){var t=e.src,r=e.direction,a=e.className,n=(0,u.useState)(!1),o=n[0],i=n[1],s=(0,l.default)("rounded-circle","bg-light","d-flex","justify-content-center","align-items-center",a),c=(0,l.default)("rounded-circle",a);return o?u.default.createElement("div",{style:{width:45,height:45},className:s},u.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",viewBox:"0 0 16 16"},"received"===r?u.default.createElement(u.default.Fragment,null,u.default.createElement("path",{d:"M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z"}),u.default.createElement("path",{d:"M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z"})):u.default.createElement("path",{d:"M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"}))):u.default.createElement("img",{src:t,width:45,height:45,className:c,onError:function(){i(!0)}})},p=function(e){e.setProps;var t=e.children,r=e.id,n=e.avatar,o=e.className,i=e.direction,c=e.timestamp,p=s(e,["setProps","children","id","avatar","className","direction","timestamp"]),m=(0,l.default)("chat-message","chat-message-".concat(i),"d-flex","justify-content-end",o,{"flex-row-reverse":"received"===i,"flex-row":"outgoing"===i}),v=(0,l.default)("mb-1","mw-75"),h=(0,l.default)("chat-message-content","small","rounded-3","p-3","mb-1","text-break",o,{"bg-secondary-subtle":"received"===i,"bg-primary text-white":"outgoing"===i}),g=(0,l.default)("chat-message-time","small","mb-2","text-muted",o,{"text-start":"received"===i,"text-end":"outgoing"===i}),y=(0,l.default)({"chat-message-avatar-container-received":"received"===i,"chat-message-avatar-container-outgoing":"outgoing"===i}),b=(0,l.default)("chat-message-avatar","chat-message-avatar-".concat(i),"mb-2","text-muted",o,{"d-none":void 0===n,"float-start":"received"===i,"float-end":"outgoing"===i});return u.default.createElement("div",a({id:r,className:m},p),u.default.createElement("div",{className:v,style:{maxWidth:"75%"}},u.default.createElement("div",{className:h},t),u.default.createElement("p",{className:g},(0,d.formatTimestamp)(c))),u.default.createElement("div",{className:y,style:void 0!==n?{width:"53px"}:{}},u.default.createElement(f,{src:n,direction:i,className:b})))};p.defaultProps={avatar:void 0,timestamp:-1},t.default=p},777:function(e,t,r){"use strict";var a=this&&this.__assign||function(){return a=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},a.apply(this,arguments)},n=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},s=this&&this.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var u=i(r(812)),l=c(r(184)),d=function(e){e.setProps;var t=e.children,r=e.id,n=e.className,o=e.avatarReceived,i=e.avatarOutgoing,c=e.timestamp,d=s(e,["setProps","children","id","className","avatarReceived","avatarOutgoing","timestamp"]),f=(0,u.useRef)(null),p=(0,l.default)("vstack","w-100","position-relative","overflow-auto",n,{"avatar-received-none":!o,"avatar-outgoing-none":!i,"timestamp-none":!c});return(0,u.useEffect)((function(){var e,t;null==(t=null===(e=f.current)||void 0===e?void 0:e.lastElementChild)||t.scrollIntoView({behavior:"instant"})}),[t]),u.default.createElement("div",a({id:r,ref:f,className:p},d),t)};d.defaultProps={avatarReceived:!0,avatarOutgoing:!1,timestamp:!0},t.default=d},294:function(e,t,r){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0,t.ChatMessageList=t.ChatMessage=t.ChatInput=t.Chat=void 0;var n=a(r(91));t.Chat=n.default;var o=a(r(806));t.ChatInput=o.default;var i=a(r(472));t.ChatMessage=i.default;var s=a(r(777));t.ChatMessageList=s.default},605:(e,t)=>{"use strict";t.__esModule=!0,t.formatTimestamp=void 0,t.formatTimestamp=function(e,t){void 0===t&&(t="en-GB");var r=new Date(e),a={year:"numeric",month:"numeric",day:"numeric"};return new Intl.DateTimeFormat(t,a).format(r)===new Intl.DateTimeFormat(t,a).format(new Date)?new Intl.DateTimeFormat(t,{hour:"numeric",minute:"numeric"}).format(r):new Intl.DateTimeFormat(t,{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"}).format(r)}},812:t=>{"use strict";t.exports=e}},r={};function a(e){var n=r[e];if(void 0!==n)return n.exports;var o=r[e]={id:e,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.exports}return a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nc=void 0,a(294)})()));