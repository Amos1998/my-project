<template>
	<div class="banner">
		<div class="swiper-container" :class="swiperId">
			<div class="swiper-wrapper">
				<!--<div class="swiper-slide">Slide 1</div>
				<div class="swiper-slide">Slide 2</div>
				<div class="swiper-slide">Slide 3</div>-->
				<slot name="swiper-con"></slot>
			</div>
			<!-- 如果需要分页器 -->
			<!--paginationShow为true显示样式，否则就是个空div而已-->
			<div :class="{'swiper-pagination':paginationShow}" ></div> 
		</div>
	</div>
</template>
<script>
	import Swiper from 'swiper'
	import 'swiper/css/swiper.css'
	export default {
		//由于swiper可以配置很多参数，有些参数又不一定是必填，要求是可以提供默认值，
		//这种情况可以使用props的高级用法
		props:{
			//区分多个swiper
			swiperId:{type:String,default:''},
			//控制分页器显示
			paginationShow:{type:Boolean,default:true},
			//分页器类型，默认是bullets 圆圈
			paginationType:{type:String,default:'bullets'}
			//分页器方向？？？
			//配置切换效果 effect
		},
		mounted() {
			//初始化swiper
			var mySwiper = new Swiper("."+this.swiperId, { 
				loop: true, // 循环模式选项 
				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination',
					type: this.paginationType,
				}, 
			})
		}
	}
</script>
<style>
	.swiper-pagination-bullet{
	background: red;
	opacity: 0.3;
}
.swiper-pagination-bullet-active{
	opacity: 1;
}
</style>
<style scoped lang="less">
.banner{
	height: 180/100rem;
	background: pink;
}
.swiper-wrapper>div{
	height: 180/100rem;
}
.banner .swiper-container .swiper-slide img{
	width: 100%;
	height: 180/100rem;
}

</style>