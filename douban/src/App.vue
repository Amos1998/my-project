<template>
  <div id="app">
    <router-view/>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
//1.引入
import Tabbar from './components/tabbar'
//1.引入util.js
import {obj} from '../static/js/util.js'
export default {
  name: 'App',
  components:{
  	//2.注册组件
  	Tabbar
  },
  mounted(){
	obj.setRem();
  },
  beforeCreate(){
  	this.$router.push('/');
  }
}
</script>

<style>
*{
	margin:0;
	padding:0;
}
body{
	font-size:16px;
}
#app {
	max-width: 640px;
	height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /*-webkit-font-smoothing: antialiased;*/ 
  text-align: center;
  color: #2c3e50;
  /*overflow: hidden;*/
  /*margin-top: 60px;*/
}

</style>
