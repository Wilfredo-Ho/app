<template>
	<div class="cartcontrol">
		<transition name="rollToLeft">
			<div class="cart-decrease" v-show="food.count > 0" @click="decCart">
				<span class="inner icon-remove_circle_outline"></span>
			</div>
		</transition>
		<div class="cart-count" v-show="food.count > 0">{{food.count}}</div>
		<div class="cart-add icon-add_circle" @click="addCart"></div>
	</div>
</template>

<script>
import vue from "vue"

export default {
	props: {
		food: {
			type: Object
		}
	},
	data () {
		return {

		}
	},
	methods: {
		addCart (event) {
			if(!event._constructed){	//解决PC端触发两次的问题
				return
			}
			if(this.food.count){
				this.food.count ++	
			}else{
				vue.set(this.food, 'count', 1)	//无法响应
			}
		},
		decCart (event) {
			if(!event._constructed){	//解决PC端触发两次的问题
				return
			}
			this.food.count --
		}
	}
}
</script>

<style rel="stylesheet/stylus" lang="stylus">
	.rollToLeft-enter-active, .rollToLeft-leave-active
		transition: all .5s
	.rollToLeft-enter, .rollToLeft-leave-active
		opacity: 0
		transform: translateX(24px)
		.inner
			transform: rotate(0)
	.rollToLeft-enter-active, .rollToLeft-leave
		opacity: 1
		transform: translateX(0px)
		.inner
			transform: rotate(180deg)
	.cartcontrol
		font-size: 0
		.cart-decrease
			display: inline-block
			.inner
				line-height: 24px
				padding: 6px
				font-size: 24px
				color: rgb(0,160,220)
				transition: all .4s
			
		.cart-count
			display: inline-block
			width: 12px
			vertical-align: top
			padding-top: 6px
			line-height: 24px
			font-size: 10px
			text-align: center
			color: rgb(147, 153, 159)
		.cart-add
			display: inline-block
			line-height: 24px
			padding: 6px
			font-size: 24px
			color: rgb(0,160,220)
</style>