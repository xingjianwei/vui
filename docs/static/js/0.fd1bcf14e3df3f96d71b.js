webpackJsonp([0,8],{100:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(104),r=n(s);t.default={data:function(){return{keyword:"",visible:!1,defaultResult:[{name:"Apple",price:5,amount:20},{name:"Banana",price:5,amount:30},{name:"Orange",price:3,amount:10},{name:"Durian",price:10,amount:25},{name:"Lemon",price:4,amount:30},{name:"Peach",price:5,amount:40},{name:"Cherry",price:20,amount:50},{name:"Berry",price:15,amount:60},{name:"Core",price:10,amount:21},{name:"Fig",price:10,amount:22},{name:"Haw",price:10,amount:23},{name:"Melon",price:10,amount:24},{name:"Plum",price:10,amount:25},{name:"Pear",price:10,amount:26},{name:"Peanut",price:10,amount:27},{name:"Other"}],copy:[]}},watch:{keyword:function(e){e||(this.visible=!1)}},methods:{searchFn:function(e){this.keyword=e,this.visible=!0,console.log("search",e)},searchEnter:function(e){this.keyword=e,console.log("enter",e)},closeFn:function(e){this.keyword=e,console.log("close",e)},listSearch:function(e){this.visible=!1,console.log(e,this.defaultResult[e].name)}},computed:{filterResult:function(){var e=this,t=this.defaultResult.filter(function(t){return new RegExp(e.keyword,"i").test(t.name)});return this.copy=JSON.parse((0,r.default)(t)),this.copy.forEach(function(t,a){var n=t.name,s=e.keyword;if(n=n.toLowerCase(),s=s.toLowerCase(),s&&n.indexOf(s)!==-1){var r=t.name.split(""),i=n.indexOf(s),o=s.length,c='<span class="price">'+r.splice(i,o).join("")+"</span>";r.splice(i,0,c),t.name=r.join("")}}),this.copy}}}},104:function(e,t,a){e.exports={default:a(111),__esModule:!0}},111:function(e,t,a){var n=a(4),s=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return s.stringify.apply(s,arguments)}},148:function(e,t,a){t=e.exports=a(2)(),t.push([e.id,".search-page{padding:0 10px;margin-top:10px}.search-page .search-result{position:relative;overflow:hidden}.search-page .search-result .l{width:100%;margin-bottom:5px}.search-page .search-result .r{position:absolute;right:0;top:50%;margin-top:-10px;line-height:20px}.search-page .search-result .price{color:#ff6f5c}.search-page .search-result .gray{font-size:12px}","",{version:3,sources:["/./src/pages/search.vue"],names:[],mappings:"AACA,aACE,eAAgB,AAChB,eAAiB,CAClB,AACD,4BACE,kBAAmB,AACnB,eAAiB,CAClB,AACD,+BACE,WAAY,AACZ,iBAAmB,CACpB,AACD,+BACE,kBAAmB,AACnB,QAAS,AACT,QAAS,AACT,iBAAkB,AAClB,gBAAkB,CACnB,AACD,mCACE,aAAe,CAChB,AACD,kCACE,cAAgB,CACjB",file:"search.vue",sourcesContent:["\n.search-page {\n  padding: 0 10px;\n  margin-top: 10px;\n}\n.search-page .search-result {\n  position: relative;\n  overflow: hidden;\n}\n.search-page .search-result .l {\n  width: 100%;\n  margin-bottom: 5px;\n}\n.search-page .search-result .r {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  margin-top: -10px;\n  line-height: 20px;\n}\n.search-page .search-result .price {\n  color: #ff6f5c;\n}\n.search-page .search-result .gray {\n  font-size: 12px;\n}"],sourceRoot:"webpack://"}])},161:function(e,t,a){var n=a(148);"string"==typeof n&&(n=[[e.id,n,""]]);a(3)(n,{});n.locals&&(e.exports=n.locals)},182:function(e,t,a){var n,s;a(161),n=a(100);var r=a(197);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=r.render,s.staticRenderFns=r.staticRenderFns,e.exports=n},197:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"title",rawName:"v-title"}],staticClass:"search-page",attrs:{"data-title":"search"}},[a("x-search",{attrs:{placeholder:"请输入搜索关键字",autofocus:!0,async:!1},on:{search:e.searchFn,enter:e.searchEnter,close:e.closeFn}},[a("x-search-list",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],attrs:{result:e.filterResult},on:{listSearch:e.listSearch},scopedSlots:e._u([{key:"list-item",fn:function(t){return a("div",{staticClass:"search-result"},[a("p",{staticClass:"l",domProps:{innerHTML:e._s(t.slotValue.name)}}),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:t.slotValue.price,expression:"props.slotValue.price"}],staticClass:"gray"},[e._v("￥"+e._s(t.slotValue.price)+"/斤")]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.slotValue.amount,expression:"props.slotValue.amount"}],staticClass:"gray r"},[e._v("剩余"+e._s(t.slotValue.amount)+"斤")])])}}])})],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=0.fd1bcf14e3df3f96d71b.js.map