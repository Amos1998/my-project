<template>
  <div class="item" @click="fn">
    <!--<img src="../assets/images/ic_tab_home_normal.png"/>-->
    <span v-show="bol"><slot name="activeImg"></slot></span>
    <span v-show="!bol"><slot name="nomalImg"></slot></span>
	  <br />
	  <span>{{txt}}</span>
  </div>
</template>

<script>
export default { 
	props:['txt','mark','sel'],
	computed:{
		bol:function(){
			if(this.mark==this.sel){
				return true;
			}
			return false;
		}
	},
  methods:{
  	fn(){
  		//将当前点击的mark-item传递给tabbar的curr
  		this.$emit('change',this.mark) 
  		//改变路由地址
  		this.$router.push('/'+this.mark);
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.item{ flex:1;  }
.item img{ width: 40/100rem; }
.item span{font-size: 13px;color: #CCCCCC;}
</style>
