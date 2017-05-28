<template>
	<div class="star" :class="starType">
		<span class="star-item" v-for="item in starClasses" :class="item"></span>
	</div>
</template>

<script>
const LENGTH = 5
const CLS_ON = 'on'
const CLS_HALF = 'half'
const CLS_OFF = 'off'

export default {
	props: {
		size: {
			type: Number
		},
		score: {
			type: Number
		}
	},
	computed: {
		starClasses () {
			let scoreList = []
			let number = Math.floor(this.score * 2) / 2
			let halfNumber = number % 1
			let onNumber = Math.floor(number)
			for(let i =0; i<onNumber; i++){
				scoreList.push(CLS_ON)
			}
			if(halfNumber){
				scoreList.push(CLS_HALF)
			}
			while(scoreList.length < LENGTH){
				scoreList.push(CLS_OFF)
			}
			return scoreList
		},
		starType () {
			return "star-" + this.size
		}
	},
	data () {
		return {
		}
	}
}
</script>

<style rel="stylesheet/stylus" lang="stylus">
@import "../../common/stylus/mixin.styl"
	.star
		font-size: 0
		.star-item
			display: inline-block
			background-repeat: no-repeat
		&.star-48
			.star-item
				width: 20px
				height: 20px
				margin-right: 22px
				background-size: 20px 20px
				&:last-child
					margin-right: 0
				&.on
					bg-img('star48_on')
				&.half
					bg-img('star48_half')
				&.off
					bg-img('star48_off')
		&.star-36
			.star-item
				width: 15px
				height: 15px
				margin-right: 7px
				background-size: 15px 15px
				&:last-child
					margin-right: 0
				&.on
					bg-img('star36_on')
				&.half
					bg-img('star36_half')
				&.off
					bg-img('star36_off')
		&.star-24
			.star-item
				width: 10px
				height: 10px
				margin-right: 4px
				background-size: 10px 10px
				&:last-child
					margin-right: 0
				&.on
					bg-img('star24_on')
				&.half
					bg-img('star24_half')
				&.off
					bg-img('star24_off')
		
</style>