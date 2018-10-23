(function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=2)})({"01f9":function(t,e,n){"use strict";var r=n("2d00"),o=n("5ca1"),i=n("2aba"),c=n("32e9"),a=n("84f2"),u=n("41a0"),s=n("7f20"),f=n("38fd"),l=n("2b4c")("iterator"),p=!([].keys&&"next"in[].keys()),d="@@iterator",v="keys",h="values",b=function(){return this};t.exports=function(t,e,n,y,m,g,x){u(n,e,y);var _,w,C,S=function(t){if(!p&&t in L)return L[t];switch(t){case v:return function(){return new n(this,t)};case h:return function(){return new n(this,t)}}return function(){return new n(this,t)}},O=e+" Iterator",j=m==h,E=!1,L=t.prototype,T=L[l]||L[d]||m&&L[m],M=T||S(m),k=m?j?S("entries"):M:void 0,I="Array"==e&&L.entries||T;if(I&&(C=f(I.call(new t)),C!==Object.prototype&&C.next&&(s(C,O,!0),r||"function"==typeof C[l]||c(C,l,b))),j&&T&&T.name!==h&&(E=!0,M=function(){return T.call(this)}),r&&!x||!p&&!E&&L[l]||c(L,l,M),a[e]=M,a[O]=b,m)if(_={values:j?M:S(h),keys:g?M:S(v),entries:k},x)for(w in _)w in L||i(L,w,_[w]);else o(o.P+o.F*(p||E),e,_);return _}},"07f3":function(t,e,n){"use strict";var r=n("f3b6"),o=n.n(r);o.a},"081c":function(t,e,n){"use strict";var r=function(){var t,e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"ms-Layer",class:(t={},t["ms-Layer--fixed"]=!e.hostId,t)},[r("div",{staticClass:"ms-Fabric ms-Layer-content"},[e._t("default")],2)])},o=[],i=(n("cadf"),n("551c"),n("097d"),n("0c56")),c=(n("ac6a"),{}),a=null;function u(t,e){c[t]||(c[t]=[]),c[t].push(e)}function s(t,e){if(c[t]){var n=c[t].indexOf(e);n>=0&&(c[t].splice(n,1),0===c[t].length&&delete c[t])}}function f(){return a}var l={props:{hostId:{type:String,default:null}},data:function(){return{node:{}}},computed:{isFixed:function(){return!0}},created:function(){this.hostId&&u(this.hostId,this)},beforeDestroy:function(){this.hostId&&s(this.hostId,this);var t=this.node.parentNode;t&&t.removeChild(this.node),this.node=void 0},mounted:function(){var t=this.getHost();this.node=t.appendChild(this.$el)},methods:{getHost:function(){var t=this.hostId,e=Object(i["a"])();if(t)return e.getElementById(t);var n=f();return n?e.querySelector(n):e.body}}},p=l,d=(n("243e"),n("2877")),v=Object(d["a"])(p,r,o,!1,null,null,null);v.options.__file="Layer.vue";e["a"]=v.exports},"097d":function(t,e,n){"use strict";var r=n("5ca1"),o=n("8378"),i=n("7726"),c=n("ebd6"),a=n("bcaa");r(r.P+r.R,"Promise",{finally:function(t){var e=c(this,o.Promise||i.Promise),n="function"==typeof t;return this.then(n?function(n){return a(e,t()).then(function(){return n})}:t,n?function(n){return a(e,t()).then(function(){throw n})}:t)}})},"0c56":function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=!1;function o(t){return r||"undefined"===typeof document?void 0:t&&t.ownerDocument?t.ownerDocument:document}},"0d58":function(t,e,n){var r=n("ce10"),o=n("e11e");t.exports=Object.keys||function(t){return r(t,o)}},"11e9":function(t,e,n){var r=n("52a7"),o=n("4630"),i=n("6821"),c=n("6a99"),a=n("69a8"),u=n("c69a"),s=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?s:function(t,e){if(t=i(t),e=c(e,!0),u)try{return s(t,e)}catch(t){}if(a(t,e))return o(!r.f.call(t,e),t[e])}},1495:function(t,e,n){var r=n("86cc"),o=n("cb7c"),i=n("0d58");t.exports=n("9e1e")?Object.defineProperties:function(t,e){o(t);var n,c=i(e),a=c.length,u=0;while(a>u)r.f(t,n=c[u++],e[n]);return t}},"18d5":function(t,e,n){var r=n("427d");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("499e").default;o("2eade390",r,!0,{sourceMap:!1,shadowMode:!1})},1991:function(t,e,n){var r,o,i,c=n("9b43"),a=n("31f4"),u=n("fab2"),s=n("230e"),f=n("7726"),l=f.process,p=f.setImmediate,d=f.clearImmediate,v=f.MessageChannel,h=f.Dispatch,b=0,y={},m="onreadystatechange",g=function(){var t=+this;if(y.hasOwnProperty(t)){var e=y[t];delete y[t],e()}},x=function(t){g.call(t.data)};p&&d||(p=function(t){var e=[],n=1;while(arguments.length>n)e.push(arguments[n++]);return y[++b]=function(){a("function"==typeof t?t:Function(t),e)},r(b),b},d=function(t){delete y[t]},"process"==n("2d95")(l)?r=function(t){l.nextTick(c(g,t,1))}:h&&h.now?r=function(t){h.now(c(g,t,1))}:v?(o=new v,i=o.port2,o.port1.onmessage=x,r=c(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",x,!1)):r=m in s("script")?function(t){u.appendChild(s("script"))[m]=function(){u.removeChild(this),g.call(t)}}:function(t){setTimeout(c(g,t,1),0)}),t.exports={set:p,clear:d}},"1fa8":function(t,e,n){var r=n("cb7c");t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t["return"];throw void 0!==i&&r(i.call(t)),e}}},2:function(t,e,n){t.exports=n("7fa7")},"230e":function(t,e,n){var r=n("d3f4"),o=n("7726").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},2350:function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"===typeof btoa){var i=r(o),c=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[n].concat(c).concat([i]).join("\n")}return[n].join("\n")}function r(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,"+e;return"/*# "+n+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"===typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"===typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var c=t[o];"number"===typeof c[0]&&r[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="("+c[2]+") and ("+n+")"),e.push(c))}},e}},"23c6":function(t,e,n){var r=n("2d95"),o=n("2b4c")("toStringTag"),i="Arguments"==r(function(){return arguments}()),c=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=c(e=Object(t),o))?n:i?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},"243e":function(t,e,n){"use strict";var r=n("18d5"),o=n.n(r);o.a},"27ee":function(t,e,n){var r=n("23c6"),o=n("2b4c")("iterator"),i=n("84f2");t.exports=n("8378").getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},2877:function(t,e,n){"use strict";function r(t,e,n,r,o,i,c,a){var u,s="function"===typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),c?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},s._ssrRegister=u):o&&(u=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(s.functional){s._injectStyles=u;var f=s.render;s.render=function(t,e){return u.call(e),f(t,e)}}else{var l=s.beforeCreate;s.beforeCreate=l?[].concat(l,u):[u]}return{exports:t,options:s}}n.d(e,"a",function(){return r})},"2aba":function(t,e,n){var r=n("7726"),o=n("32e9"),i=n("69a8"),c=n("ca5a")("src"),a="toString",u=Function[a],s=(""+u).split(a);n("8378").inspectSource=function(t){return u.call(t)},(t.exports=function(t,e,n,a){var u="function"==typeof n;u&&(i(n,"name")||o(n,"name",e)),t[e]!==n&&(u&&(i(n,c)||o(n,c,t[e]?""+t[e]:s.join(String(e)))),t===r?t[e]=n:a?t[e]?t[e]=n:o(t,e,n):(delete t[e],o(t,e,n)))})(Function.prototype,a,function(){return"function"==typeof this&&this[c]||u.call(this)})},"2aeb":function(t,e,n){var r=n("cb7c"),o=n("1495"),i=n("e11e"),c=n("613b")("IE_PROTO"),a=function(){},u="prototype",s=function(){var t,e=n("230e")("iframe"),r=i.length,o="<",c=">";e.style.display="none",n("fab2").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+c+"document.F=Object"+o+"/script"+c),t.close(),s=t.F;while(r--)delete s[u][i[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(a[u]=r(t),n=new a,a[u]=null,n[c]=t):n=s(),void 0===e?n:o(n,e)}},"2b4c":function(t,e,n){var r=n("5537")("wks"),o=n("ca5a"),i=n("7726").Symbol,c="function"==typeof i,a=t.exports=function(t){return r[t]||(r[t]=c&&i[t]||(c?i:o)("Symbol."+t))};a.store=r},"2d00":function(t,e){t.exports=!1},"2d95":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},"31f4":function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},"32e9":function(t,e,n){var r=n("86cc"),o=n("4630");t.exports=n("9e1e")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},"33a4":function(t,e,n){var r=n("84f2"),o=n("2b4c")("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},"38fd":function(t,e,n){var r=n("69a8"),o=n("4bf8"),i=n("613b")("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},"41a0":function(t,e,n){"use strict";var r=n("2aeb"),o=n("4630"),i=n("7f20"),c={};n("32e9")(c,n("2b4c")("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(c,{next:o(1,n)}),i(t,e+" Iterator")}},"427d":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"\n.ms-Layer{z-index:1000000;top:0;left:0;width:100%;height:100vh;visibility:hidden\n}\n.ms-Layer>*{visibility:visible\n}\n.ms-Layer--fixed{position:fixed\n}",""])},4588:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},4630:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"499e":function(t,e,n){"use strict";function r(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],c=i[0],a=i[1],u=i[2],s=i[3],f={id:t+":"+o,css:a,media:u,sourceMap:s};r[c]?r[c].parts.push(f):n.push(r[c]={id:c,parts:[f]})}return n}n.r(e),n.d(e,"default",function(){return v});var o="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},c=o&&(document.head||document.getElementsByTagName("head")[0]),a=null,u=0,s=!1,f=function(){},l=null,p="data-vue-ssr-id",d="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(t,e,n,o){s=n,l=o||{};var c=r(t,e);return h(c),function(e){for(var n=[],o=0;o<c.length;o++){var a=c[o],u=i[a.id];u.refs--,n.push(u)}e?(c=r(t,e),h(c)):c=[];for(o=0;o<n.length;o++){u=n[o];if(0===u.refs){for(var s=0;s<u.parts.length;s++)u.parts[s]();delete i[u.id]}}}}function h(t){for(var e=0;e<t.length;e++){var n=t[e],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(y(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var c=[];for(o=0;o<n.parts.length;o++)c.push(y(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:c}}}}function b(){var t=document.createElement("style");return t.type="text/css",c.appendChild(t),t}function y(t){var e,n,r=document.querySelector("style["+p+'~="'+t.id+'"]');if(r){if(s)return f;r.parentNode.removeChild(r)}if(d){var o=u++;r=a||(a=b()),e=g.bind(null,r,o,!1),n=g.bind(null,r,o,!0)}else r=b(),e=x.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function g(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=m(e,o);else{var i=document.createTextNode(o),c=t.childNodes;c[e]&&t.removeChild(c[e]),c.length?t.insertBefore(i,c[e]):t.appendChild(i)}}function x(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),l.ssrId&&t.setAttribute(p,e.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{while(t.firstChild)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},"4a59":function(t,e,n){var r=n("9b43"),o=n("1fa8"),i=n("33a4"),c=n("cb7c"),a=n("9def"),u=n("27ee"),s={},f={};e=t.exports=function(t,e,n,l,p){var d,v,h,b,y=p?function(){return t}:u(t),m=r(n,l,e?2:1),g=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(i(y)){for(d=a(t.length);d>g;g++)if(b=e?m(c(v=t[g])[0],v[1]):m(t[g]),b===s||b===f)return b}else for(h=y.call(t);!(v=h.next()).done;)if(b=o(h,m,v.value,e),b===s||b===f)return b};e.BREAK=s,e.RETURN=f},"4bf8":function(t,e,n){var r=n("be13");t.exports=function(t){return Object(r(t))}},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"551c":function(t,e,n){"use strict";var r,o,i,c,a=n("2d00"),u=n("7726"),s=n("9b43"),f=n("23c6"),l=n("5ca1"),p=n("d3f4"),d=n("d8e8"),v=n("f605"),h=n("4a59"),b=n("ebd6"),y=n("1991").set,m=n("8079")(),g=n("a5b8"),x=n("9c80"),_=n("a25f"),w=n("bcaa"),C="Promise",S=u.TypeError,O=u.process,j=O&&O.versions,E=j&&j.v8||"",L=u[C],T="process"==f(O),M=function(){},k=o=g.f,I=!!function(){try{var t=L.resolve(1),e=(t.constructor={})[n("2b4c")("species")]=function(t){t(M,M)};return(T||"function"==typeof PromiseRejectionEvent)&&t.then(M)instanceof e&&0!==E.indexOf("6.6")&&-1===_.indexOf("Chrome/66")}catch(t){}}(),P=function(t){var e;return!(!p(t)||"function"!=typeof(e=t.then))&&e},N=function(t,e){if(!t._n){t._n=!0;var n=t._c;m(function(){var r=t._v,o=1==t._s,i=0,c=function(e){var n,i,c,a=o?e.ok:e.fail,u=e.resolve,s=e.reject,f=e.domain;try{a?(o||(2==t._h&&F(t),t._h=1),!0===a?n=r:(f&&f.enter(),n=a(r),f&&(f.exit(),c=!0)),n===e.promise?s(S("Promise-chain cycle")):(i=P(n))?i.call(n,u,s):u(n)):s(r)}catch(t){f&&!c&&f.exit(),s(t)}};while(n.length>i)c(n[i++]);t._c=[],t._n=!1,e&&!t._h&&A(t)})}},A=function(t){y.call(u,function(){var e,n,r,o=t._v,i=R(t);if(i&&(e=x(function(){T?O.emit("unhandledRejection",o,t):(n=u.onunhandledrejection)?n({promise:t,reason:o}):(r=u.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=T||R(t)?2:1),t._a=void 0,i&&e.e)throw e.v})},R=function(t){return 1!==t._h&&0===(t._a||t._c).length},F=function(t){y.call(u,function(){var e;T?O.emit("rejectionHandled",t):(e=u.onrejectionhandled)&&e({promise:t,reason:t._v})})},V=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),N(e,!0))},B=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw S("Promise can't be resolved itself");(e=P(t))?m(function(){var r={_w:n,_d:!1};try{e.call(t,s(B,r,1),s(V,r,1))}catch(t){V.call(r,t)}}):(n._v=t,n._s=1,N(n,!1))}catch(t){V.call({_w:n,_d:!1},t)}}};I||(L=function(t){v(this,L,C,"_h"),d(t),r.call(this);try{t(s(B,this,1),s(V,this,1))}catch(t){V.call(this,t)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=n("dcbc")(L.prototype,{then:function(t,e){var n=k(b(this,L));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=T?O.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&N(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=s(B,t,1),this.reject=s(V,t,1)},g.f=k=function(t){return t===L||t===c?new i(t):o(t)}),l(l.G+l.W+l.F*!I,{Promise:L}),n("7f20")(L,C),n("7a56")(C),c=n("8378")[C],l(l.S+l.F*!I,C,{reject:function(t){var e=k(this),n=e.reject;return n(t),e.promise}}),l(l.S+l.F*(a||!I),C,{resolve:function(t){return w(a&&this===c?L:this,t)}}),l(l.S+l.F*!(I&&n("5cc5")(function(t){L.all(t)["catch"](M)})),C,{all:function(t){var e=this,n=k(e),r=n.resolve,o=n.reject,i=x(function(){var n=[],i=0,c=1;h(t,!1,function(t){var a=i++,u=!1;n.push(void 0),c++,e.resolve(t).then(function(t){u||(u=!0,n[a]=t,--c||r(n))},o)}),--c||r(n)});return i.e&&o(i.v),n.promise},race:function(t){var e=this,n=k(e),r=n.reject,o=x(function(){h(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return o.e&&r(o.v),n.promise}})},5537:function(t,e,n){var r=n("8378"),o=n("7726"),i="__core-js_shared__",c=o[i]||(o[i]={});(t.exports=function(t,e){return c[t]||(c[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("2d00")?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},"5c53":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"\n.ms-Callout-container{position:relative\n}\n.ms-Callout-container .ms-Callout{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:rgba(0,0,0,.4) 0 0 5px 0;box-shadow:0 0 5px 0 rgba(0,0,0,.4);border-width:1px;border-style:solid;border-color:#eaeaea;outline:transparent\n}\n.ms-Callout-container .ms-Callout .ms-Callout-beak{position:absolute;background-color:#fff;-webkit-box-shadow:inherit;box-shadow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform:rotate(45deg);transform:rotate(45deg);height:16px;width:16px;border:inherit\n}\n.ms-Callout-container .ms-Callout .ms-Callout-beakCurtain{position:absolute;top:0;right:0;bottom:0;left:0;background-color:#fff\n}\n.ms-Callout-container .ms-Callout .ms-Callout-main{background-color:#fff;overflow-x:hidden;overflow-y:auto;position:relative\n}",""])},"5ca1":function(t,e,n){var r=n("7726"),o=n("8378"),i=n("32e9"),c=n("2aba"),a=n("9b43"),u="prototype",s=function(t,e,n){var f,l,p,d,v=t&s.F,h=t&s.G,b=t&s.S,y=t&s.P,m=t&s.B,g=h?r:b?r[e]||(r[e]={}):(r[e]||{})[u],x=h?o:o[e]||(o[e]={}),_=x[u]||(x[u]={});for(f in h&&(n=e),n)l=!v&&g&&void 0!==g[f],p=(l?g:n)[f],d=m&&l?a(p,r):y&&"function"==typeof p?a(Function.call,p):p,g&&c(g,f,p,t&s.U),x[f]!=p&&i(x,f,d),y&&_[f]!=p&&(_[f]=p)};r.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},"5cc5":function(t,e,n){var r=n("2b4c")("iterator"),o=!1;try{var i=[7][r]();i["return"]=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],c=i[r]();c.next=function(){return{done:n=!0}},i[r]=function(){return c},t(i)}catch(t){}return n}},"5dbc":function(t,e,n){var r=n("d3f4"),o=n("8b97").set;t.exports=function(t,e,n){var i,c=e.constructor;return c!==n&&"function"==typeof c&&(i=c.prototype)!==n.prototype&&r(i)&&o&&o(t,i),t}},"613b":function(t,e,n){var r=n("5537")("keys"),o=n("ca5a");t.exports=function(t){return r[t]||(r[t]=o(t))}},"626a":function(t,e,n){var r=n("2d95");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},6821:function(t,e,n){var r=n("626a"),o=n("be13");t.exports=function(t){return r(o(t))}},"69a8":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"6a99":function(t,e,n){var r=n("d3f4");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},7726:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"77f1":function(t,e,n){var r=n("4588"),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},"79e5":function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},"7a56":function(t,e,n){"use strict";var r=n("7726"),o=n("86cc"),i=n("9e1e"),c=n("2b4c")("species");t.exports=function(t){var e=r[t];i&&e&&!e[c]&&o.f(e,c,{configurable:!0,get:function(){return this}})}},"7f20":function(t,e,n){var r=n("86cc").f,o=n("69a8"),i=n("2b4c")("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},"7fa7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.doNotLayer?n("VCalloutContent",t._b({on:{onBlur:function(e){t.$emit("onBlur",e)}}},"VCalloutContent",t.$props,!1)):n("VLayer",[n("VCalloutContent",t._b({on:{onBlur:function(e){t.$emit("onBlur",e)}}},"VCalloutContent",t.$props,!1),[t._t("default")],2)],1)},o=[],i=n("081c"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"container",staticClass:"ms-Callout-container"},[n("div",{staticClass:"ms-Callout",style:t.styleContainer},[t.isBeakVisible?n("div",{staticClass:"ms-Callout-beak",staticStyle:{left:"51.2344px",top:"-8px"}}):t._e(),n("div",{staticClass:"ms-Callout-beakCurtain"}),n("div",{staticClass:"ms-Callout-main"},[t._t("default",[n("p",{staticClass:"ms-font-xl"},[t._v("All of your favorite people")]),n("p",[t._v("Message body is optional. If help documentation is available, consider adding a link to learn more at the bottom.")])])],2)])])},a=[],u=(n("c5f6"),{props:{calloutMaxHeight:{type:Number,default:null},doNotLayer:{type:Boolean,default:!0},target:{type:Object,required:!0},isBeakVisible:{type:Boolean,default:!0}}}),s={mixins:[u],computed:{styleContainer:function(){var t=this.target.getBoundingClientRect();return{width:"".concat(t.width,"px"),left:"".concat(t.left,"px"),top:"".concat(t.top+t.height,"px")}}},beforeDestroy:function(){window.removeEventListener("click",this.onClick)},mounted:function(){window.addEventListener("click",this.onClick)},methods:{onClick:function(t){var e=t.path.indexOf(this.$refs.container);e>-1||this.$emit("onBlur",t)}}},f=s,l=(n("07f3"),n("2877")),p=Object(l["a"])(f,c,a,!1,null,null,null);p.options.__file="CalloutContent.vue";var d=p.exports,v={components:{VLayer:i["a"],VCalloutContent:d},mixins:[u]},h=v,b=Object(l["a"])(h,r,o,!1,null,null,null);b.options.__file="Callout.vue";var y=b.exports;n.d(e,"VCallout",function(){return y})},8079:function(t,e,n){var r=n("7726"),o=n("1991").set,i=r.MutationObserver||r.WebKitMutationObserver,c=r.process,a=r.Promise,u="process"==n("2d95")(c);t.exports=function(){var t,e,n,s=function(){var r,o;u&&(r=c.domain)&&r.exit();while(t){o=t.fn,t=t.next;try{o()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};if(u)n=function(){c.nextTick(s)};else if(!i||r.navigator&&r.navigator.standalone)if(a&&a.resolve){var f=a.resolve(void 0);n=function(){f.then(s)}}else n=function(){o.call(r,s)};else{var l=!0,p=document.createTextNode("");new i(s).observe(p,{characterData:!0}),n=function(){p.data=l=!l}}return function(r){var o={fn:r,next:void 0};e&&(e.next=o),t||(t=o,n()),e=o}}},8378:function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},"84f2":function(t,e){t.exports={}},"86cc":function(t,e,n){var r=n("cb7c"),o=n("c69a"),i=n("6a99"),c=Object.defineProperty;e.f=n("9e1e")?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},"8b97":function(t,e,n){var r=n("d3f4"),o=n("cb7c"),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},9093:function(t,e,n){var r=n("ce10"),o=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},"9b43":function(t,e,n){var r=n("d8e8");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},"9c6c":function(t,e,n){var r=n("2b4c")("unscopables"),o=Array.prototype;void 0==o[r]&&n("32e9")(o,r,{}),t.exports=function(t){o[r][t]=!0}},"9c80":function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},"9def":function(t,e,n){var r=n("4588"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},"9e1e":function(t,e,n){t.exports=!n("79e5")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},a25f:function(t,e,n){var r=n("7726"),o=r.navigator;t.exports=o&&o.userAgent||""},a5b8:function(t,e,n){"use strict";var r=n("d8e8");function o(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=r(e),this.reject=r(n)}t.exports.f=function(t){return new o(t)}},aa77:function(t,e,n){var r=n("5ca1"),o=n("be13"),i=n("79e5"),c=n("fdef"),a="["+c+"]",u="​",s=RegExp("^"+a+a+"*"),f=RegExp(a+a+"*$"),l=function(t,e,n){var o={},a=i(function(){return!!c[t]()||u[t]()!=u}),s=o[t]=a?e(p):c[t];n&&(o[n]=s),r(r.P+r.F*a,"String",o)},p=l.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(s,"")),2&e&&(t=t.replace(f,"")),t};t.exports=l},ac6a:function(t,e,n){for(var r=n("cadf"),o=n("0d58"),i=n("2aba"),c=n("7726"),a=n("32e9"),u=n("84f2"),s=n("2b4c"),f=s("iterator"),l=s("toStringTag"),p=u.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=o(d),h=0;h<v.length;h++){var b,y=v[h],m=d[y],g=c[y],x=g&&g.prototype;if(x&&(x[f]||a(x,f,p),x[l]||a(x,l,y),u[y]=p,m))for(b in r)x[b]||i(x,b,r[b],!0)}},bcaa:function(t,e,n){var r=n("cb7c"),o=n("d3f4"),i=n("a5b8");t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t),c=n.resolve;return c(e),n.promise}},be13:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},c366:function(t,e,n){var r=n("6821"),o=n("9def"),i=n("77f1");t.exports=function(t){return function(e,n,c){var a,u=r(e),s=o(u.length),f=i(c,s);if(t&&n!=n){while(s>f)if(a=u[f++],a!=a)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}}},c5f6:function(t,e,n){"use strict";var r=n("7726"),o=n("69a8"),i=n("2d95"),c=n("5dbc"),a=n("6a99"),u=n("79e5"),s=n("9093").f,f=n("11e9").f,l=n("86cc").f,p=n("aa77").trim,d="Number",v=r[d],h=v,b=v.prototype,y=i(n("2aeb")(b))==d,m="trim"in String.prototype,g=function(t){var e=a(t,!1);if("string"==typeof e&&e.length>2){e=m?e.trim():p(e,3);var n,r,o,i=e.charCodeAt(0);if(43===i||45===i){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var c,u=e.slice(2),s=0,f=u.length;s<f;s++)if(c=u.charCodeAt(s),c<48||c>o)return NaN;return parseInt(u,r)}}return+e};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof v&&(y?u(function(){b.valueOf.call(n)}):i(n)!=d)?c(new h(g(e)),n,v):g(e)};for(var x,_=n("9e1e")?s(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;_.length>w;w++)o(h,x=_[w])&&!o(v,x)&&l(v,x,f(h,x));v.prototype=b,b.constructor=v,n("2aba")(r,d,v)}},c69a:function(t,e,n){t.exports=!n("9e1e")&&!n("79e5")(function(){return 7!=Object.defineProperty(n("230e")("div"),"a",{get:function(){return 7}}).a})},ca5a:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},cadf:function(t,e,n){"use strict";var r=n("9c6c"),o=n("d53b"),i=n("84f2"),c=n("6821");t.exports=n("01f9")(Array,"Array",function(t,e){this._t=c(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},cb7c:function(t,e,n){var r=n("d3f4");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},ce10:function(t,e,n){var r=n("69a8"),o=n("6821"),i=n("c366")(!1),c=n("613b")("IE_PROTO");t.exports=function(t,e){var n,a=o(t),u=0,s=[];for(n in a)n!=c&&r(a,n)&&s.push(n);while(e.length>u)r(a,n=e[u++])&&(~i(s,n)||s.push(n));return s}},d3f4:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},d53b:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},d8e8:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},dcbc:function(t,e,n){var r=n("2aba");t.exports=function(t,e,n){for(var o in e)r(t,o,e[o],n);return t}},e11e:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},ebd6:function(t,e,n){var r=n("cb7c"),o=n("d8e8"),i=n("2b4c")("species");t.exports=function(t,e){var n,c=r(t).constructor;return void 0===c||void 0==(n=r(c)[i])?e:o(n)}},f3b6:function(t,e,n){var r=n("5c53");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("499e").default;o("509c5ed1",r,!0,{sourceMap:!1,shadowMode:!1})},f605:function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},fab2:function(t,e,n){var r=n("7726").document;t.exports=r&&r.documentElement},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}});