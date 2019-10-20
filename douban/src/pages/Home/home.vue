<template>
  <div>
    <Header :hasbg="true">
    	 	<img src="../../assets/images/ic_chat_green.png" slot="imgright" class="imgright" alt="" />
     
    	<div slot="search"   class="search">
    		 <input type="text" placeholder="影视 图书 唱片 小组等" />
    		 <img src="../../assets/images/ic_group_search_small.png" alt="" class="searchimg" />
    		 <img src="../../assets/images/ic_scan_gray.png" alt=""  class="scanimg"/>
    	</div>
    </Header> 
    <!--轮播图 paginationType="fraction"-->
    <Banner swiperId="swiperA" >
    	<div slot="swiper-con" class="swiper-slide">
    		<img src="../../assets/banner/01.jpg" alt="" />
    	</div>
    	<div slot="swiper-con" class="swiper-slide">
    		<img src="../../assets/banner/02.jpg" alt="" />
    	</div>
    	<div slot="swiper-con" class="swiper-slide">
    		<img src="../../assets/banner/03.jpg" alt="" />
    	</div>
    </Banner>
  	<!--<Banner swiperId="swiperB"> 
    	<div slot="swiper-con" class="swiper-slide">
    		<img src="../../assets/banner/02.jpg" alt="" />
    	</div>
    	<div slot="swiper-con" class="swiper-slide">
    		<img src="../../assets/banner/03.jpg" alt="" />
    	</div>
  	</Banner>-->
  	<button @click="getData">测试</button>
  	<newLists v-for="(item,index) in arr" :key="index" :url="item.target.cover_url">
  		  <div slot="leftlist">
  		  	 <h3>{{item.title}}</h3>
  		  	 <p> {{item.target.desc}} </p>
  		  	 <span class="author"> {{item.target.author.name}}</span>
  		  </div>
  	</newLists>
  </div>
</template> 
<script>
import Header from '../../components/Header' 
import Banner from '../../components/Banner' 
import newLists from '../../components/newLists'
export default { 
  data () {
    return {
      msg: '',
      arr:[]
    }
  },
  components:{
   	 Header ,Banner,newLists
  },
  mounted(){
  	this.getData();
  },
  methods:{
  	getData(){
  		 this.$axios.get('../../../static/data/homeData.json')
  		 .then(res=>{ 
  		 	 console.log("res:",res)
  		 	 this.arr = res.data.recommend_feeds;
  		 })
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
