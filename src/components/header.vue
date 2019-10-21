<template><!--头部公共部分-->
  <div  class="header">
  	 <div class="headerWrap">
  	 			<a class="logo fl" href="#"><img src="../assets/indexImages/logo.png" height="25px" width="84px"/></a>
  	 			<ul class="fl">
  	 				  <li><a href="#">首页</a></li>
  	 				  <li><a href="#">故事大赛</a></li>
  	 				  <li><a href="#">APP下载</a></li>
  	 				  <li><a href="#">学堂</a></li>
  	 			</ul>
  	 			<div class="fr">
  	 				  <div class="search">
  	 				  	 <input type="text"/>
  	 				  	 <a href="#"><img src="../assets/indexImages/search.png"/></a>
  	 				  </div>
  	 				  <div class="writeStory">
  	 				  	 <a href="#">写故事</a>
  	 				  </div>
  	 				  <span class="login fl">
  	 				  	 登录|注册
  	 				  </span>
  	 			</div>
  	 </div>
  </div>
</template>

<script>
export default {
	  
}
</script>

<style scoped>
		*{margin:0;padding: 0;}
		.fl{float: left}
		.fr{float: right;}
		.header{
			background-color: #222;
	    height: 50px;
	    box-sizing: border-box;
	    -webkit-box-sizing: border-box;
		}
		.headerWrap{width: 1200px;margin: 0 auto;}
		.headerWrap  a.logo{margin-top: 11px;}
	  .headerWrap	 ul{display: flex;margin-left: 40px;}
	  .headerWrap	 ul li{list-style: none;height: 50px;line-height: 50px;}
	  .headerWrap	 ul li a{color:#D2D2D2;text-decoration: none;margin: 0 26px;}
	  .headerWrap	 ul li:first-child a{color:white;}
	  .headerWrap div.search{float:left;position:relative;margin-top: 9px;}
	  .headerWrap div.search input{height: 32px;width: 190px;background: #666;
	  		border-radius: 100px;border: none;outline: none;text-indent:1rem;color: white;}
	  .headerWrap div.search img{position: absolute;right:12px;top:8px;}
	  .headerWrap div.writeStory{float: left;width: 110px;height: 32px;line-height: 32px;
	  		border-radius:16px;background:url(../assets/indexImages/writeStory.png) no-repeat 16px 6px;
	  		background-color: #f7644a;font-size: 18px;text-indent: 20px;margin:9px 15px;}
	  .headerWrap div.writeStory a{text-decoration: none;color: #fff;font-size: 18px;font-weight: 600;}
	  .headerWrap span.login{color: #999;height: 50px;line-height: 50px;font-size: 14px;}
	  
</style>