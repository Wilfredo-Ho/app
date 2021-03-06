<template>
  <div class="goods">
  	<div class="menu-wrapper" ref="menu">
  		<ul>
  			<li v-for="(item,index) in goods" class="menu-item" :class="{'current': currentIndex === index}" @click="selectMenu(index, $event)">
  				<span class="text border-1px">
  					<span class="icon" v-show="item.type>0" :class="classMap[item.type]"></span>{{item.name}}
  				</span>
  			</li>
  		</ul>
  	</div>
  	<div class="foods-wrapper" ref="foods">
  		<ul>
  			<li v-for="item in goods" class="good-list good-list-hook">
  				<h1 class="title">{{ item.name }}</h1>
  				<ul>
  					<li v-for="food in item.foods" class="food-list border-1px">
  						<div class="icon">
  							<img :src="food.icon" alt="" width="57" height="57">
  						</div>
  						<div class="content">
  							<h2 class="name">{{ food.name }}</h2>
  							<p class="desc">{{ food.description }}</p>
  							<div class="extra">
  								<span class="count">月售{{ food.sellCount }}份</span>
  								<span class="rate">好评率{{ food.rating }}%</span>
  							</div>
  							<div class="price">
  								<span class="new">￥{{ food.price }}</span>
  								<span class="old" v-show="food.oldPrice">￥{{ food.oldPrice }}</span>
  							</div>
  							<div class="cartcontrol-wrapper">
  								<cartcontrol :food="food"></cartcontrol>
  							</div>
  						</div>
  					</li>
  				</ul>
  			</li>
  		</ul>
  	</div>
  	<shopcar :foods-buy="selectFood" :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"></shopcar>
  </div>
</template>

<script>
	import BScroll from "better-scroll"
	import shopcar from "../shopcar/shopcar"
	import cartcontrol from "../cartcontrol/cartcontrol"

	const OK_Status = 0

    export default {
    	props: {
    		seller: {
    			type: Object
    		}
    	},
    	data () {
    		return {
    			goods: [],
    			classMap: ["decrease", "discount", "special", "invoice", "guarantee"],
    			listHeight: [],
    			scrollY: 0
    		}
    	},
    	computed: {
    		currentIndex() {
    			for(let i =0; i < this.listHeight.length; i++){
    				let height1 = this.listHeight[i]
    				let height2 = this.listHeight[i+1]
    				if(!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
    					return i
    				}
    			}
    			return 0
    		},
    		selectFood () {
    			let selectFoods = []
    			this.goods.forEach((good) => {
    				good.foods.forEach((food) => {
    					if(food.count > 0){
    						selectFoods.push(food)
    					}
    				})
    			})
    			return selectFoods
    		}
    	},
    	created () {
    		this.$http.get('/api/goods').then((res) => {
    			if(res.body.errno == OK_Status){
    				this.goods = res.body.data
    				this.$nextTick(() => {
    					this._initScroll()
    					this._calculate()
    				})
    			}
    		})
    	},
    	methods: {
    		selectMenu(index, event) {
    			if(!event._constructed){
    				return
    			}
    			let goodLists = this.$refs.foods.getElementsByClassName('good-list-hook')
    			let el = goodLists[index]
    			this.foodScroll.scrollToElement(el, 300)
    		},
    		_initScroll() {
    			this.menuScroll = new BScroll(this.$refs.menu, {
    				click: true
    			})

    			this.foodScroll = new BScroll(this.$refs.foods, {
    				click: true,  
    				probeType: 3
    			})

    			this.foodScroll.on('scroll', (pos) => {
    				this.scrollY = Math.abs(Math.round(pos.y))
    			})
    		},
    		_calculate() {
    			let lists = this.$refs.foods.getElementsByClassName('good-list-hook')
    			let height = 0
    			this.listHeight.push(height)
    			for(let i=0; i<lists.length; i++){
    				height += lists[i].clientHeight
    				this.listHeight.push(height)
    			}
    		}

    	},
    	components: {
    		shopcar,
    		cartcontrol
    	}
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import "../../common/stylus/mixin.styl"

	.goods
		display: flex
		position: absolute
		top: 174px
		bottom: 46px
		width: 100%
		overflow: hidden
		color: rgb(7,17,27)
		.menu-wrapper
			flex: 0 0 80px
			width: 80px
			background: #f3f5f7
			.menu-item
				display: table
				height: 54px
				width: 56px
				line-height: 14px
				padding: 0 12px
				&.current
					position: relative
					z-index: 10
					margin-top: -1px
					background:#fff
					font-weight: 700
					border-none()
				.icon
					display: inline-block
					width: 12px
					height: 12px
					background-size: 12px 12px
					background-repeat: no-repeat
					margin-right: 2px
					vertical-align: top
					&.decrease
						bg-img('decrease_3')
					&.discount
						bg-img('discount_3')
					&.guarantee
						bg-img('guarantee_3')
					&.invoice
						bg-img('invoice_3')
					&.special
						bg-img('special_3')
				.text
					display: table-cell
					width: 56px
					vertical-align: middle
					border-bottom-1px(rgba(7,17,27,0.1))
					font-size: 12px
		.foods-wrapper
			flex: 1
			.title
				padding-left: 14px
				height: 26px
				line-height: 26px
				border-left: 2px solid #d9dde1
				font-size: 12px
				color: rgb(147, 153, 159)
				background: #f3f5f7
			.food-list
				display: flex
				margin: 18px
				padding-bottom: 18px
				border-bottom-1px(rgba(7,17,27,0.1))
				&:last-child
					border-none()
					margin-bottom: 0
				.icon
					flex: 0 0 57px
					margin-right: 10px
				.content
					flex: 1
					.name
						margin: 2px 0 8px 0
						height: 14px
						line-height:14px
						font-size: 14px
					.desc, .extra
						line-height:10px
						font-size:10px
						color: rgb(147, 153, 159)
					.desc
						margin-bottom: 8px
					.extra
						.count
							margin-right: 12px
					.price
						font-weight: 700
						line-height: 24px
						.new
							margin-right: 8px
							font-size: 14px
							color: rgb(240,20,20)
						.old
							font-size: 10px
							color: rgb(147, 153, 159)
							text-decoration: line-through
					.cartcontrol-wrapper
						position: absolute
						right: 0
						bottom: 12px
					
</style>
