<template>
	<div class="myxuetang">
		<div class="header">
			   <div class="h-box">
			   	 <div class="nav-logo">
			   	 	<a href="#"><img src="../../assets/xuetangimg/logo.png" /></a> 
			   	 </div>			   	 
			   	 <ul class="nav-list">
			   	 	 <li>
			   	 	 	<router-link to='/xuetang/xt-index'>首页</router-link>
			   	 	 </li>
			   	 	 <li>
			   	 	 	<router-link to='/xuetang/xt-writer'>作者学堂</router-link>
			   	 	 </li>
			   	 	 <li>
			   	 	 	<router-link to='/xuetang/xt-wordvalue'>言值爆表</router-link>
			   	 	 </li>
			   	 	 <li>
			   	 	 	<router-link to='/xuetang/xt-bigshot'>大咖面对面</router-link>
			   	 	 </li>
			   	 	 <li>
			   	 	 	<router-link to='/xuetang/xt-story'>物语故事课堂</router-link>
			   	 	 </li>
			   	 
			   	 </ul>
			   	 <div class="nav-right">
			   	 	<div class="login">
			   	 	  <span class="func">登录</span>
			   	 	</div>
			   	 	<div title="我的已购">
			   	 		<i class="el-icon-shopping-bag-2"></i>
			   	 	</div>
			   	 	<div title="学习记录">
			   	 		<i class="el-icon-tickets"></i>
			   	 	</div>
			   	 	<div title="搜索">
			   	 		<i class="el-icon-search"></i>
			   	 	</div>
			   	 </div>
			   </div>
		</div>
		<div class="clear"></div>
		<div class="content">
			<div>
			   <router-view></router-view>
		    </div>
		</div>
		<div class="footer">
		
		</div>

	</div>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				msg: ''
			}
		}
	}
</script>

<style scoped lang="less">
	*{
		padding: 0;
		margin: 0;
	}
	.header{
		height: 72px;
		width: 100%;
		background: white;
		.h-box{
		  width: 1200px;
		  height: 100%;
		/*  border: 1px solid red;*/
		  margin: 0 auto;
		
		  .nav-logo{
		  	 width: 240px;
		  	 /*border: 1px solid red;*/
		  	 margin-top: 16px;
		     text-align: left;
		     float: left;
		  }
		  .nav-list{
		  	width: 700px;
		  	/*border: 1px solid red;*/
		  	float: left;
		  	li{
		  		list-style: none;
		  		float: left;
		  		line-height: 72px;
		  		font-size: 14px;
		  		
		  		margin-right: 66px;
		  		cursor: pointer;
		  		a{
		  			text-decoration: none;
		  			color: #353535;
		  		}
		  		a:hover{
		  			color: deepskyblue;
		  		}
		  		
		  	}
		  }
		  .nav-right{
		  	width: 180px;
		  	line-height: 72px;
		  	float: right;
		  	div{
		  		float: right;
		  		margin-left: 25px;
		  		font-size: 14px;
		  	
		  	}
		  	.func{
		  		color: dodgerblue;
		  	}
		  }
	  }
	}
	.clear{
	   	clear: both;
	}
	.content{
		height: 1500px;
		width: 100%;
		background: #F5F6F9;
		
	}
  
	
</style>