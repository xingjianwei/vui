webpackJsonp([3,6],{69:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{noDataText:"没有更多数据啦~",len:6}},computed:{lists:function(){for(var e=[],t=1;t<this.len+1;t++)e.push("列表"+t);return e}},methods:{refresh:function(e){var t=this;setTimeout(function(){t.len=6},1e3),this.noDataText="",console.log("refresh")},infinite:function(e){var t=this;setTimeout(function(){return t.len>=10?void e(!0):(t.len++,t.noDataText="没有更多数据啦~",void e())},1e3),console.log("infinite")}}}},108:function(e,t,n){t=e.exports=n(9)(),t.push([e.id,".scroller-page[data-v-102cd64e]{height:100%}ul[data-v-102cd64e]{padding:20px 0}li[data-v-102cd64e]{width:100%;height:40px;line-height:40px;border-bottom:1px solid #eee;text-align:center}","",{version:3,sources:["/./src/pages/scroller.vue"],names:[],mappings:"AACA,gCACE,WAAa,CACd,AACD,oBACE,cAAe,CAChB,AACD,oBACE,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,6BAA8B,AAC9B,iBAAmB,CACpB",file:"scroller.vue",sourcesContent:["\n.scroller-page[data-v-102cd64e] {\n  height: 100%;\n}\nul[data-v-102cd64e] {\n  padding: 20px 0\n}\nli[data-v-102cd64e] {\n  width: 100%;\n  height: 40px;\n  line-height: 40px;\n  border-bottom: 1px solid #eee; \n  text-align: center;\n}\n"],sourceRoot:"webpack://"}])},115:function(e,t,n){var i=n(108);"string"==typeof i&&(i=[[e.id,i,""]]);n(10)(i,{});i.locals&&(e.exports=i.locals)},151:function(e,t,n){var i,o;n(115),i=n(69);var r=n(156);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,o._scopeId="data-v-102cd64e",e.exports=i},156:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"title",rawName:"v-title"}],staticClass:"scroller-page",attrs:{"data-title":"scroller"}},[n("x-scroller",{attrs:{"on-refresh":e.refresh,"on-infinite":e.infinite,noDataText:e.noDataText}},[n("ul",e._l(e.lists,function(t,i){return n("li",{key:i},[e._v(e._s(t))])}))])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=3.c24b41337b7c62bad1f5.js.map