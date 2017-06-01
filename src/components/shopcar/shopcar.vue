<template>
	<div class="shopcar">
		<div class="content">
			<div class="content-left">
				<div class="logo-wrapper">
					<div class="logo" :class="{'highlight': totalCount>0}">
						<i class="icon-shopping_cart" :class="{'highlight': totalCount>0}"></i>
					</div>
					<span class="count" v-show="totalCount>0">{{ totalCount }}</span>
				</div>
				<div class="price" :class="{'highlight': totalPrice>0}">￥{{totalPrice}}</div>
				<div class="desc">另需配送费￥{{deliveryPrice}}元</div>
			</div>
			<div class="content-right">
				<div class="pay" :class="deliveryBg">{{ deliveryStatus }}</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	props: {
		foodsBuy: {
			type: Array,
			default () {
				return [{
					count: 1,
					price: 10
				}]
			}
		},
		deliveryPrice: {
			type: Number,
			default: 0
		},
		minPrice: {
			type: Number,
			default: 0
		}
	},
	computed: {
		totalPrice () {
			let total = 0
			this.foodsBuy.forEach((food) => {
				total += food.count * food.price
			})
			return total
		},
		totalCount (){
			let count = 0
			this.foodsBuy.forEach((food) => {
				count += food.count
			})
			return count
		},
		deliveryStatus () {
			if(this.totalPrice === 0) {
				return `￥${this.minPrice}起送`
			}else if(this.totalPrice < this.minPrice) {
				let diff = this.minPrice - this.totalPrice
				return `还差￥${diff}起送`
			}else{
				return "去结算"
			}
		},
		deliveryBg () {
			if(this.totalPrice < this.minPrice){
				return 'not-enough'
			}else{
				return 'enough'
			}
		}

	},
	data () {
		return {
		}
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.shopcar
		position: fixed
		left: 0
		bottom: 0
		z-index: 50
		width: 100%
		height: 48px
		.content
			display: flex
			background: #141d27
			font-size: 0
			color: rgba(255, 255, 255, 0.4)
			.content-left
				flex: 1
				.logo-wrapper
					display: inline-block
					position: relative
					top: -10px
					margin: 0 12px
					padding: 6px
					width: 56px
					height: 56px
					box-sizing: border-box
					vertical-align: top
					border-radius: 50%
					background: #141d27
					.logo
						width: 100%
						height: 100%
						border-radius: 50%
						background: #2b343c
						text-align: center
						&.highlight
							background: rgb(0, 160, 220)
						.icon-shopping_cart
							font-size: 24px
							line-height: 44px
							color: #80858a
							&.highlight
								color: #ffffff
					.count
						position: absolute
						top: 0
						right: 0
						width: 24px
						height: 16px
						line-height: 16px
						border-radius: 12px
						background: rgb(240, 20, 20)
						box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.4)
						color: rgb(255,255,255)
						font-size: 9px
						font-weight: 700
						text-align: center
				.price
					display:inline-block
					vertical-align: top
					margin-top: 12px
					line-height: 24px
					padding-right: 12px
					box-sizing: border-box
					border-right: 1px solid rgba(255,255,255,0.1)
					font-size:16px
					font-weight: 700
					color: rgba(255,255,255,0.4)
					&.highlight
						color: rgb(255, 255, 255)
				.desc
					display:inline-block
					vertical-align: top
					margin: 12px 0 0 12px
					line-height: 24px
					font-size: 10px
			.content-right
				flex: 0 0 105px
				width: 105px
				.pay
					height: 48px
					line-height: 48px
					font-size:12px
					font-weight: 700
					text-align: center
					&.not-enough
						background: #2b333b
					&.enough
						background: #00b43c
						color: #fff
						
					
					
</style>