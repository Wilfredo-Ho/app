webpackJsonp([0],[,,function(t,s){},function(t,s,e){e(26);var a=e(0)(e(9),e(38),null,null);t.exports=a.exports},function(t,s,e){e(23);var a=e(0)(e(11),e(35),null,null);t.exports=a.exports},function(t,s,e){e(19);var a=e(0)(e(13),e(31),"data-v-2456ce1d",null);t.exports=a.exports},function(t,s,e){e(21);var a=e(0)(e(14),e(33),"data-v-39f0a74f",null);t.exports=a.exports},,,function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(28),i=e.n(a);s.default={name:"app",components:{vHeader:i.a},data:function(){return{seller:{}}},created:function(){var t=this;this.$http.get("/api/seller").then(function(s){0===s.body.errno&&(t.seller=s.body.data)})}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(1);s.default={props:{food:{type:Object}},data:function(){return{}},methods:{addCart:function(t){t._constructed&&(this.food.count?this.food.count++:a.a.set(this.food,"count",1))},decCart:function(t){t._constructed&&this.food.count--}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(18),i=e.n(a),n=e(29),r=e.n(n),o=e(27),c=e.n(o);s.default={props:{seller:{type:Object}},data:function(){return{goods:[],classMap:["decrease","discount","special","invoice","guarantee"],listHeight:[],scrollY:0}},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],e=this.listHeight[t+1];if(!e||this.scrollY>=s&&this.scrollY<e)return t}return 0},selectFood:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count>0&&t.push(s)})}),t}},created:function(){var t=this;this.$http.get("/api/goods").then(function(s){0==s.body.errno&&(t.goods=s.body.data,t.$nextTick(function(){t._initScroll(),t._calculate()}))})},methods:{selectMenu:function(t,s){if(s._constructed){var e=this.$refs.foods.getElementsByClassName("good-list-hook"),a=e[t];this.foodScroll.scrollToElement(a,300)}},_initScroll:function(){var t=this;this.menuScroll=new i.a(this.$refs.menu,{click:!0}),this.foodScroll=new i.a(this.$refs.foods,{click:!0,probeType:3}),this.foodScroll.on("scroll",function(s){t.scrollY=Math.abs(Math.round(s.y))})},_calculate:function(){var t=this.$refs.foods.getElementsByClassName("good-list-hook"),s=0;this.listHeight.push(s);for(var e=0;e<t.length;e++)s+=t[e].clientHeight,this.listHeight.push(s)}},components:{shopcar:r.a,cartcontrol:c.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(30),i=e.n(a);s.default={props:{seller:{type:Object}},components:{star:i.a},data:function(){return{detailInfo:!1,classMap:["decrease","discount","special","invoice","guarantee"]}},methods:{showDetail:function(){this.detailInfo=!0},closeDetail:function(){this.detailInfo=!1}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:{foodsBuy:{type:Array,default:function(){return[{count:1,price:10}]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0}},computed:{totalPrice:function(){var t=0;return this.foodsBuy.forEach(function(s){t+=s.count*s.price}),t},totalCount:function(){var t=0;return this.foodsBuy.forEach(function(s){t+=s.count}),t},deliveryStatus:function(){if(0===this.totalPrice)return"￥"+this.minPrice+"起送";if(this.totalPrice<this.minPrice){return"还差￥"+(this.minPrice-this.totalPrice)+"起送"}return"去结算"},deliveryBg:function(){return this.totalPrice<this.minPrice?"not-enough":"enough"}},data:function(){return{}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});s.default={props:{size:{type:Number},score:{type:Number}},computed:{starClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=s%1,a=Math.floor(s),i=0;i<a;i++)t.push("on");for(e&&t.push("half");t.length<5;)t.push("off");return t},starType:function(){return"star-"+this.size}},data:function(){return{}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(1),i=e(8),n=e(7),r=e(3),o=e.n(r),c=e(4),l=e.n(c),u=e(5),d=e.n(u),v=e(6),p=e.n(v),f=e(2);e.n(f);a.a.config.productionTip=!1,a.a.use(i.a),a.a.use(n.a);var _=new i.a({linkActiveClass:"active",routes:[{path:"/",redirect:"/goods"},{path:"/goods",component:l.a},{path:"/ratings",component:d.a},{path:"/seller",component:p.a}]});new a.a({el:"#app",router:_,template:"<App/>",components:{App:o.a}})},,function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s,e){e(20);var a=e(0)(e(10),e(32),null,null);t.exports=a.exports},function(t,s,e){e(22);var a=e(0)(e(12),e(34),null,null);t.exports=a.exports},function(t,s,e){e(25);var a=e(0)(e(15),e(37),null,null);t.exports=a.exports},function(t,s,e){e(24);var a=e(0)(e(16),e(36),null,null);t.exports=a.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",[t._v("\n  ratings\n")])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"rollToLeft"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count > 0"}],staticClass:"cart-decrease",on:{click:t.decCart}},[e("span",{staticClass:"inner icon-remove_circle_outline"})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count > 0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))]),t._v(" "),e("div",{staticClass:"cart-add icon-add_circle",on:{click:t.addCart}})],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",[t._v("\n  seller\n")])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.seller.avatar,width:"64",height:"64",alt:""}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"descrip"},[t._v("\n    \t\t\t"+t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达\n    \t\t")]),t._v(" "),t.seller.supports?e("div",{staticClass:"supports"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[0].type]}),t._v(" "),e("span",{staticClass:"description"},[t._v(t._s(t.seller.supports[0].description))])]):t._e()]),t._v(" "),t.seller.supports?e("div",{staticClass:"count",on:{click:t.showDetail}},[e("span",{staticClass:"number"},[t._v(t._s(t.seller.supports.length)+"个")]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),t._v(" "),e("div",{staticClass:"affiche-wrapper",on:{click:t.showDetail}},[e("span",{staticClass:"icon"}),t._v(" "),e("span",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),e("div",{staticClass:"bgImage"},[e("img",{attrs:{src:t.seller.avatar,width:"100%",height:"100%",alt:""}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.detailInfo,expression:"detailInfo"}],staticClass:"detailInfo"},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"title"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{score:3.5,size:48}})],1),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,a){return e("li",{staticClass:"supports-item"},[e("span",{staticClass:"icon",class:t.classMap[s.type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])])})):t._e(),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("商家公告")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"bulletin"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])])])]),t._v(" "),e("div",{staticClass:"detail-close",on:{click:t.closeDetail}},[e("i",{staticClass:"icon-close"})])])])],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{ref:"menu",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,a){return e("li",{staticClass:"menu-item",class:{current:t.currentIndex===a},on:{click:function(s){t.selectMenu(a,s)}}},[e("span",{staticClass:"text border-1px"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type>0"}],staticClass:"icon",class:t.classMap[s.type]}),t._v(t._s(s.name)+"\n\t\t\t\t")])])}))]),t._v(" "),e("div",{ref:"foods",staticClass:"foods-wrapper"},[e("ul",t._l(t.goods,function(s){return e("li",{staticClass:"good-list good-list-hook"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s){return e("li",{staticClass:"food-list border-1px"},[e("div",{staticClass:"icon"},[e("img",{attrs:{src:s.icon,alt:"",width:"57",height:"57"}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("月售"+t._s(s.sellCount)+"份")]),t._v(" "),e("span",{staticClass:"rate"},[t._v("好评率"+t._s(s.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"new"},[t._v("￥"+t._s(s.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(s.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s}})],1)])])}))])}))]),t._v(" "),e("shopcar",{attrs:{"foods-buy":t.selectFood,"delivery-price":t.seller.deliveryPrice,"min-price":t.seller.minPrice}})],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"star",class:t.starType},t._l(t.starClasses,function(t){return e("span",{staticClass:"star-item",class:t})}))},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shopcar"},[e("div",{staticClass:"content"},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wrapper"},[e("div",{staticClass:"logo",class:{highlight:t.totalCount>0}},[e("i",{staticClass:"icon-shopping_cart",class:{highlight:t.totalCount>0}})]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount>0"}],staticClass:"count"},[t._v(t._s(t.totalCount))])]),t._v(" "),e("div",{staticClass:"price",class:{highlight:t.totalPrice>0}},[t._v("￥"+t._s(t.totalPrice))]),t._v(" "),e("div",{staticClass:"desc"},[t._v("另需配送费￥"+t._s(t.deliveryPrice)+"元")])]),t._v(" "),e("div",{staticClass:"content-right"},[e("div",{staticClass:"pay",class:t.deliveryBg},[t._v(t._s(t.deliveryStatus))])])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("v-header",{attrs:{seller:t.seller}}),t._v(" "),e("div",{staticClass:"tab border-1px"},[e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:{path:"/goods"}}},[t._v("商品")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:{path:"/ratings"}}},[t._v("评价")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:{path:"/seller"}}},[t._v("商家")])],1)]),t._v(" "),e("router-view",{attrs:{seller:t.seller}})],1)},staticRenderFns:[]}},,,function(t,s){}],[17]);
//# sourceMappingURL=app.675ebe428dc9748c392c.js.map