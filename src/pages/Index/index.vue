<template>
  <div>
  	<Header></Header>
  	<h1>这是首页</h1>
  </div>
</template>

<script>
	import Header from '../../components/header'
  export default {
	  components:{
		  Header
	  },
    data () {
      return {msg:''}
    }
  }
</script>

<style scoped>
		
</style>
