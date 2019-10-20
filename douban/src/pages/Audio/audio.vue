<template>
  <div>
    <Header title="书影音">
    	<img src="../../assets/images/ic_actionbar_search_icon.png" slot="imgleft" class="imgleft" alt="" />
		 	<img src="../../assets/images/ic_chat_green.png" slot="imgright" class="imgright" alt="" />
    </Header>
    <!--二级导航菜单-->
    <nav class="nav">
    	 <span :class="{active:currIndex==0}" @click="currIndex=0"><router-link to='/audio/film'>电影</router-link></span>
    	 <span :class="{active:currIndex==1}" @click="currIndex=1"><router-link to='/audio/read'>读书</router-link></span>
    	 <span :class="{active:currIndex==2}" @click="currIndex=2"><router-link to='/audio/tv'>电视</router-link></span>
    	 <span :class="{active:currIndex==3}" @click="currIndex=3"><router-link to='/audio/city'>同城</router-link></span>
    	 <span :class="{active:currIndex==4}" @click="currIndex=4"><router-link to='/audio/music'>音乐</router-link></span>
    </nav>
    <div class="content">
    	 <!--二级路由显示的区域-->
    	 <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header'
export default { 
   components:{
   	 Header
   },
   data:function(){
   	 return {
   	 	currIndex:2 //当前的索引
   	 }
   }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .nav{
    	height: 30px;
    	line-height: 30px;
    	border-bottom: 1px solid gainsboro;
    }
    a{
    	width: 20%;
    	float: left;
			color: gray;
			text-decoration: none;
			font-size:12px;
    }
    .nav .active a{
    	background-color: #07d614;
    	color: #fff;
    }
    .content{
    	padding: 5px;
    }
</style>
