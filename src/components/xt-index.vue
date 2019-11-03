<template>
	<div class="content">
		<!--<span class="index">这是首页</span>-->
		<div class="banner">
			<div class="banner-side">
				<ul>
					<li class="li-item" >
						<span>作者学堂</span>
						<i class="el-icon-arrow-right"></i>
						<div class="xbox no1 " id="add1"  >
							<h4><a href="#">好故事</a></h4>
							<p>好故事比赛说明</p>
						</div>
					</li>
					<li class="li-item">
						<span>作者必学</span>
						<i class="el-icon-arrow-right"></i>
						<div class="xbox no2 ">
							<h4><a href="#">新作者必学</a></h4>
							<p>升级攻略</p>
						</div>
					</li>
					<li class="li-item">
						<span>物语课堂</span>
						<i class="el-icon-arrow-right"></i>
						<div class="xbox no3 ">
							<h4><a href="#">物语故事课堂</a></h4>
							<p>针对签约作者的故事做点评</p>
						</div>
					</li>
				</ul>
			</div>
			<el-carousel class='wriper' indicator-position="outside" height='448px'>
				<el-carousel-item v-for="item in imgArr" :key="item.id">
					<img :src="item.idView" class="image" />
				</el-carousel-item>
			</el-carousel>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				imgArr: [{
						id: 0,
						idView: require('../assets/xuetangimg/002.png')
					},
					{
						id: 1,
						idView: require('../assets/xuetangimg/006.png')
					},
					{
						id: 2,
						idView: require('../assets/xuetangimg/005.png')
					},
					{
						id: 3,
						idView: require('../assets/xuetangimg/004.png')
					},
				]
			}

		},
		methods: {

		}
	}
</script>

<style scoped lang="less">
	.index {
		display: block;
		height: 30px;
	}
	
	.content {
		padding-top: 30px;
	}
	
	.banner {
		width: 1200px;
		height: 448px;
		border: 1px solid red;
		margin: 0 auto;
		position: relative;
		.banner-side {
			position: absolute;
			top: 0;
			left: 0;
			width: 240px;
			height: 100%;
			z-index: 10;
			background: rgba(53, 53, 53, .6);
			/*border: 1px solid blue;	*/
			ul {
				margin-top: 25px;
				li {
					list-style: none;
					height: 60px;
					width: 100%;					
					cursor: pointer;
					color: white;
					span {
						display: block;
						font-size: 16px;
						float: left;
						padding-left: 25px;
						line-height: 60px;
					}
					i {
						display: block;
						font-size: 18px;
						line-height: 60px;
						float: right;
						padding-right: 30px;
					}
					.xbox {
						border: 1px solid red;
						z-index: 11;
						width: 250px;
						height: 100%;
						background: white;
						position: absolute;
						top: 0px;
						left: 240px;
						padding-left: 30px;
						text-align: left;
						h4 {
							font-size: 18px;
							font-weight: normal;
							margin: 36px 0 10px 0;
							a {
								text-decoration: none;
								color: black;
							}
						}
						p {
							color: silver;
							font-size: 14px;
						}
					}
				}
				li:hover {
					background-color: dodgerblue;
				}
			}
		}
	}
	
	.el-carousel__item h3 {
		color: #475669;
		font-size: 18px;
		opacity: 0.75;
		line-height: 300px;
		margin: 0;
	}
	
	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}
	
	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
</style>
<style>
	.wriper {
		height: 448px;
		border: 1px solid yellow;
	}
	
	.image {
		background-size: cover;
	}
</style>