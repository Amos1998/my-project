import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/header.vue'

//import Index from '../pages/Index/index.vue'   //首页路径
import XueTang from '../pages/XueTang/xuetang.vue'
import Search from '../pages/Search/search.vue'

import Index from '../components/xt-index'
import Writer from '../components/xt-writer'
import Wordvalue from '../components/xt-wordvalue'
import Bigshot from '../components/xt-bigshot'
import Story from '../components/xt-story'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    },
    {
      path: '/search',
      name: 'Search',
      component:Search
    },
    {
    	path: '/xuetang',
    	name: 'XueTang',
    	component: XueTang,
    	children:[
    	   {path:'',component:Index},
    	   {path:'xt-index',component:Index},
    	   {path:'xt-writer',component:Writer},
    	   {path:'xt-wordvalue',component:Wordvalue},
    	   {path:'xt-bigshot',component:Bigshot},
    	   {path:'xt-story',component:Story},
    	]
    },
//  {
//  	path: '/',
//  	name: 'XT-Header',
//  	component: XT-Header
//  }
  ]
})
