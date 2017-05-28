<template>
  <div class="header"> 
    <div class="content-wrapper">
    	<div class="avatar">
    		<img :src="seller.avatar" width="64" height="64" alt="">
    	</div>
    	<div class="content">
    		<div class="title">
    			<span class="brand"></span>
    			<span class="name">{{ seller.name }}</span>
    		</div>
    		<div class="descrip">
    			{{ seller.description }}/{{ seller.deliveryTime }}分钟送达
    		</div>
    		<div v-if="seller.supports" class="supports">
    			<span class="icon" :class="classMap[seller.supports[0].type]"></span>
    			<span class="description">{{ seller.supports[0].description }}</span>
    		</div>
    	</div>
    	<div v-if="seller.supports" class="count" @click="showDetail">
    		<span class="number">{{ seller.supports.length }}个</span>
    		<i class="icon-keyboard_arrow_right"></i>
    	</div>
    </div>
    <div class="affiche-wrapper" @click="showDetail">
    	<span class="icon"></span>
    	<span class="content">{{ seller.bulletin }}</span>
    	<i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="bgImage">
    	<img :src="seller.avatar" width="100%" height="100%" alt="">
    </div>
    <transition name="fade">
	    <div v-show="detailInfo" class="detailInfo">
	    	<div class="detail-wrapper clearfix">
	    		<div class="detail-main">
					<h1 class="title">{{ seller.name }}</h1>
					<div class="star-wrapper">
						<star :score="3.5" :size="48"></star>
					</div>
					<div class="info">
						<div class="line"></div>
						<div class="text">优惠信息</div>
						<div class="line"></div>
					</div>
					<ul v-if="seller.supports" class="supports">
						<li class="supports-item" v-for="(item,index) in seller.supports">
							<span class="icon" :class="classMap[item.type]"></span>
							<span class="text">{{ item.description }}</span>
						</li>
					</ul>
					<div class="info">
						<div class="line"></div>
						<div class="text">商家公告</div>
						<div class="line"></div>
					</div>
					<div class="bulletin">
						<p class="content">{{ seller.bulletin }}</p>
					</div>
	    		</div>
	    	</div>
	    	<div class="detail-close" @click="closeDetail">
	    		<i class="icon-close"></i>
	    	</div>
	    </div>
    </transition>
  </div>
</template>

<script>
import star from "../stars/stars"

    export default {
    	props: {
    		seller: {
    			type: Object
    		}
    	},
    	components: {
    		star
    	},
    	data () {
    		return {
    			detailInfo: false,
    			classMap : ["decrease", "discount", "special", "invoice", "guarantee"]
    		}
    	},
    	methods: {
    		showDetail () {
    			this.detailInfo = true
    		},
    		closeDetail () {
    			this.detailInfo = false
    		}
    	}

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixin'
	.header
		position: relative
		background-color: rgba(7,17,27,0.5)
		// overflow: hidden
		.content-wrapper
			position: relative
			padding: 24px 0px 18px 24px
			background: rgba(0,0,0,0.4)
			font-size: 0
			.avatar
				display: inline-block
				vertical-align: top
				border-radius: 2px
			.content
				display: inline-block
				margin:2px 0px 2px 16px
				.title
					margin-bottom: 8px
					.brand
						display: inline-block
						width: 30px
						height: 18px
						vertical-align: top
						bg-img('brand')
						background-size: 30px 18px
						background-repeat: no-repeat
					.name
						margin-left: 6px
						line-height: 18px
						font-size: 16px 
						font-weight: bold
				.descrip
					line-height:12px
					font-size: 12px
				.supports
					margin-top: 10px
					font-size: 10px
					line-height:12px
					.icon
						display: inline-block
						width: 12px
						height: 12px
						background-size: 12px 12px
						background-repeat: no-repeat
						vertical-align: top
						&.decrease
							bg-img('decrease_1')
						&.discount
							bg-img('discount_1')
						&.guarantee
							bg-img('guarantee_1')
						&.invoice
							bg-img('invoice_1')
						&.special
							bg-img('special_1')
					.description
						margin-left:4px
			.count
				position: absolute
				right: 12px
				bottom: 18px
				padding: 7px 8px
				background-color: rgba(0,0,0,0.2)
				border-radius: 14px
				.number
					display: inline-block
					font-size: 10px
					line-height: 12px
					text-align: center
					vertical-align: top
				.icon-keyboard_arrow_right
					display: inline-block
					margin-left: 2px
					font-size: 10px
		.affiche-wrapper
			position: relative
			height: 28px
			line-height: 28px
			padding: 0 20px 0 12px
			overflow: hidden
			white-space: nowrap
			text-overflow: ellipsis
			background-color: rgba(7,17,27,0.2)
			.icon
				display: inline-block
				width:22px
				height:12px
				bg-img('bulletin')
				background-size: 22px 12px
				background-repeat: no-repeat
				vertical-align: center
			.content
				vertical-align:top
				margin-left: 4px
				font-size:10px
			.icon-keyboard_arrow_right
				position: absolute
				font-size: 10px
				bottom: 8px
				right: 12px
		.bgImage
			position:absolute
			top: 0
			left: 0
			width: 100%
			height: 100%
			z-index: -1
			filter: blur(10px)
		.fade-enter-active, .fade-leave-active
			transition: all .5s
			opacity: 1
		.fade-enter, .fade-leave-active
			opacity: 0
		.detailInfo
			position: fixed
			top: 0
			left: 0
			width: 100%
			height: 100%
			z-index: 100
			overflow: auto
			background-color: rgba(7,17,27,0.8)
			.detail-wrapper
				min-height: 100%
				width: 100%
				.detail-main
					margin-top: 64px
					padding-bottom: 64px
					.title
						font-size: 16px
						font-weight: 16px
						line-height: 16px
						text-align: center
					.star-wrapper
						margin-top: 16px
						padding: 2px 0
						text-align: center
					.info
						display: flex
						margin: 28px auto 24px
						width: 80%
						.line
							flex: 1
							position: relative
							border-bottom: 1px solid rgba(255,255,255,0.2)
							top: -6px
						.text
							padding: 0px 12px
							font-size:14px
							font-weight: 700
					.supports
						width: 80%
						margin: 0 auto
						.supports-item
							margin-bottom: 12px
							&:last-child
								margin-bottom: 0
							.icon
								display: inline-block
								width: 16px
								height: 16px
								background-size: 16px 16px
								background-repeat: no-repeat
								vertical-align: top
								margin:0 6px 0 12px
								&.decrease
									bg-img('decrease_2')
								&.discount
									bg-img('discount_2')
								&.guarantee
									bg-img('guarantee_2')
								&.invoice
									bg-img('invoice_2')
								&.special
									bg-img('special_2')
							.text
								line-height: 12px
								font-size: 12px
					.bulletin
						width: 80%
						margin: 0 auto
						.content
							padding: 0 12px
							font-size: 12px
							line-height: 24px
			.detail-close
				position: relative
				width: 32px
				height: 32px
				margin: -64px auto 0 auto
				clear: both
				font-size: 32px
				
</style>
