!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VuePlugin=t():e.VuePlugin=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t,n){"use strict";var r=n(2),o=n.n(r);t.default=o.a},function(e,t){},function(e,t,n){"use strict";var r=function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n  I am a custom component provided by your plugin, you can delete me if you wish.\n  This is a value from instance:\n  "),t("b",[this._v(this._s(this.$$vueGmapsPlaces.world()))])])},o=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){"use strict";var r=n(3),o=n(1),i=n(7),u=Object(i.a)(o.default,r.a,r.b,!1,null,null,null);t.default=u.exports},function(e,t,n){"use strict";function r(e,t,n,r,o,i,u,s){var c,a="function"==typeof e?e.options:e;if(t&&(a.render=t,a.staticRenderFns=n,a._compiled=!0),r&&(a.functional=!0),i&&(a._scopeId="data-v-"+i),u?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},a._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(a.functional){a._injectStyles=c;var f=a.render;a.render=function(e,t){return c.call(t),f(e,t)}}else{var l=a.beforeCreate;a.beforeCreate=l?[].concat(l,c):[c]}return{exports:e,options:a}}n.d(t,"a",function(){return r})},function(e,t,n){e.exports=n(9)},function(e,t,n){"use strict";n.r(t);var r=n(4),o=n.n(r),i=n(5),u=n.n(i),s=n(0),c=n.n(s);var a=n(6);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach(function(t){c()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}n.d(t,"default",function(){return p}),n.d(t,"install",function(){return d});var p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o()(this,e),c()(this,"initialized",!1);this.options=l({},{accessorName:"$$vueGmapsPlaces"},{},t)}return u()(e,[{key:"world",value:function(){return"world0"}},{key:"init",value:function(t,n){this.initialized||(e.register(t,this.options,n),this.initialized=!0)}}]),e}();function d(e){d.installed&&e||(e.mixin(l({beforeCreate:function(){var t=this.$options,n=t.$vueGmapsPlacesSettings,r=t.store,o=t.parent,i=null;n?(i="function"==typeof n?new n:new p(n)).init(e,r):o&&o.__$VueGmapsPlacesInstance&&(i=o.__$VueGmapsPlacesInstance).init(e,o.$store),i&&(this.__$VueGmapsPlacesInstance=i,this[i.options.accessorName]=i)}},p.mixin())),d.installed=!0)}c()(p,"register",function(e,t,n){console.log("Here is the options of the component",t),console.log("Here is the store of the app",n),e.component("VueGmapsPlaces",a.default)}),c()(p,"mixin",function(){return{mounted:function(){console.log("Hey! I am running on every mount, please remove me!"),console.log(this.$store)}}}),p.install=d}])});