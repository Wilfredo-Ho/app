webpackJsonp([0],[,function(t,s){},function(t,s,e){e(24);var a=e(0)(e(9),e(34),null,null);t.exports=a.exports},function(t,s,e){e(21);var a=e(0)(e(10),e(31),null,null);t.exports=a.exports},function(t,s,e){e(18);var a=e(0)(e(12),e(28),"data-v-2456ce1d",null);t.exports=a.exports},function(t,s,e){e(19);var a=e(0)(e(13),e(29),"data-v-39f0a74f",null);t.exports=a.exports},,,,function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(25),i=e.n(a);s.default={name:"app",components:{vHeader:i.a},data:function(){return{seller:{}}},created:function(){var t=this;this.$http.get("/api/seller").then(function(s){0===s.body.errno&&(t.seller=s.body.data)})}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(17),i=e.n(a),n=e(26),r=e.n(n);s.default={props:{seller:{type:Object}},data:function(){return{goods:[],classMap:["decrease","discount","special","invoice","guarantee"],listHeight:[],scrollY:0}},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],e=this.listHeight[t+1];if(!e||this.scrollY>=s&&this.scrollY<e)return t}return 0}},created:function(){var t=this;this.$http.get("/api/goods").then(function(s){0==s.body.errno&&(t.goods=s.body.data,t.$nextTick(function(){t._initScroll(),t._calculate()}))})},methods:{selectMenu:function(t,s){if(s._constructed){var e=this.$refs.foods.getElementsByClassName("good-list-hook"),a=e[t];this.foodScroll.scrollToElement(a,300)}},_initScroll:function(){var t=this;this.menuScroll=new i.a(this.$refs.menu,{click:!0}),this.foodScroll=new i.a(this.$refs.foods,{probeType:3}),this.foodScroll.on("scroll",function(s){t.scrollY=Math.abs(Math.round(s.y))})},_calculate:function(){var t=this.$refs.foods.getElementsByClassName("good-list-hook"),s=0;this.listHeight.push(s);for(var e=0;e<t.length;e++)s+=t[e].clientHeight,this.listHeight.push(s)}},components:{shopcar:r.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(27),i=e.n(a);s.default={props:{seller:{type:Object}},components:{star:i.a},data:function(){return{detailInfo:!1,classMap:["decrease","discount","special","invoice","guarantee"]}},methods:{showDetail:function(){this.detailInfo=!0},closeDetail:function(){this.detailInfo=!1}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:{deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0}},data:function(){return{}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});s.default={props:{size:{type:Number},score:{type:Number}},computed:{starClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=s%1,a=Math.floor(s),i=0;i<a;i++)t.push("on");for(e&&t.push("half");t.length<5;)t.push("off");return t},starType:function(){return"star-"+this.size}},data:function(){return{}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(8),i=e(7),n=e(6),r=e(2),l=e.n(r),o=e(3),c=e.n(o),u=e(4),d=e.n(u),v=e(5),p=e.n(v),_=e(1);e.n(_);a.a.config.productionTip=!1,a.a.use(i.a),a.a.use(n.a);var f=new i.a({linkActiveClass:"active",mode:"history",routes:[{path:"/",redirect:"/goods"},{path:"/goods",component:c.a},{path:"/ratings",component:d.a},{path:"/seller",component:p.a}]});new a.a({el:"#app",router:f,template:"<App/>",components:{App:l.a}})},,function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s,e){e(20);var a=e(0)(e(11),e(30),null,null);t.exports=a.exports},function(t,s,e){e(23);var a=e(0)(e(14),e(33),null,null);t.exports=a.exports},function(t,s,e){e(22);var a=e(0)(e(15),e(32),null,null);t.exports=a.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",[t._v("\n  ratings\n")])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",[t._v("\n  seller\n")])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.seller.avatar,width:"64",height:"64",alt:""}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"descrip"},[t._v("\n    \t\t\t"+t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达\n    \t\t")]),t._v(" "),t.seller.supports?e("div",{staticClass:"supports"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[0].type]}),t._v(" "),e("span",{staticClass:"description"},[t._v(t._s(t.seller.supports[0].description))])]):t._e()]),t._v(" "),t.seller.supports?e("div",{staticClass:"count",on:{click:t.showDetail}},[e("span",{staticClass:"number"},[t._v(t._s(t.seller.supports.length)+"个")]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),t._v(" "),e("div",{staticClass:"affiche-wrapper",on:{click:t.showDetail}},[e("span",{staticClass:"icon"}),t._v(" "),e("span",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),e("div",{staticClass:"bgImage"},[e("img",{attrs:{src:t.seller.avatar,width:"100%",height:"100%",alt:""}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.detailInfo,expression:"detailInfo"}],staticClass:"detailInfo"},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"title"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{score:3.5,size:48}})],1),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,a){return e("li",{staticClass:"supports-item"},[e("span",{staticClass:"icon",class:t.classMap[s.type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])])})):t._e(),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("商家公告")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"bulletin"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])])])]),t._v(" "),e("div",{staticClass:"detail-close",on:{click:t.closeDetail}},[e("i",{staticClass:"icon-close"})])])])],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{ref:"menu",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,a){return e("li",{staticClass:"menu-item",class:{current:t.currentIndex===a},on:{click:function(s){t.selectMenu(a,s)}}},[e("span",{staticClass:"text border-1px"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type>0"}],staticClass:"icon",class:t.classMap[s.type]}),t._v(t._s(s.name)+"\n\t\t\t\t")])])}))]),t._v(" "),e("div",{ref:"foods",staticClass:"foods-wrapper"},[e("ul",t._l(t.goods,function(s){return e("li",{staticClass:"good-list good-list-hook"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s){return e("li",{staticClass:"food-list border-1px"},[e("div",{staticClass:"icon"},[e("img",{attrs:{src:s.icon,alt:"",width:"57",height:"57"}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("月售"+t._s(s.sellCount)+"份")]),t._v(" "),e("span",{staticClass:"rate"},[t._v("好评率"+t._s(s.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"new"},[t._v("￥"+t._s(s.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(s.oldPrice))])])])])}))])}))]),t._v(" "),e("shopcar",{attrs:{"delivery-price":t.seller.deliveryPrice,"min-price":t.seller.minPrice}})],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"star",class:t.starType},t._l(t.starClasses,function(t){return e("span",{staticClass:"star-item",class:t})}))},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shopcar"},[e("div",{staticClass:"content"},[e("div",{staticClass:"content-left"},[t._m(0),t._v(" "),e("div",{staticClass:"price"},[t._v("0元")]),t._v(" "),e("div",{staticClass:"desc"},[t._v("另需配送费￥"+t._s(t.deliveryPrice)+"元")])]),t._v(" "),e("div",{staticClass:"content-right"},[e("div",{staticClass:"pay"},[t._v("\n\t\t\t\t￥"+t._s(t.minPrice)+"起送\n\t\t\t")])])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"logo-wrapper"},[e("div",{staticClass:"logo"},[e("i",{staticClass:"icon-shopping_cart"})])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("v-header",{attrs:{seller:t.seller}}),t._v(" "),e("div",{staticClass:"tab border-1px"},[e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:{path:"/goods"}}},[t._v("商品")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:{path:"/ratings"}}},[t._v("评价")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:{path:"/seller"}}},[t._v("商家")])],1)]),t._v(" "),e("router-view",{attrs:{seller:t.seller}})],1)},staticRenderFns:[]}},,,function(t,s){}],[16]);
//# sourceMappingURL=app.fcb666b0865a9a87d7f6.js.map