(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{282:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{timer:-1,percentComplete:0}},beforeDestroy:function(){clearInterval(this.timer)},created:function(){var t=this;this.timer=setInterval(function(){t.percentComplete+=5*Math.random(),t.percentComplete>=110&&(t.percentComplete=-10)},200)}},s=r(0),i=Object(s.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h2",{staticClass:"ms-font-l"},[this._v("Default ProgressIndicator")]),this._v(" "),e("VProgressIndicator",{attrs:{"percent-complete":this.percentComplete,label:"Example title",description:"Example description"}}),this._v(" "),e("h2",{staticClass:"ms-font-l"},[this._v("Indeterminate ProgressIndicator")]),this._v(" "),e("VProgressIndicator",{attrs:{label:"Example title",description:"Example description"}})],1)},[],!1,null,null,null);i.options.__file="PageProgressIndicator.vue";e.default=i.exports}}]);