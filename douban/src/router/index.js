import Vue from 'vue'
import Router from 'vue-router' 
import Audio from '../pages/Audio/audio.vue'
import Broadcast from '../pages/Broadcast/broadcast.vue'
import Group from '../pages/Group/group.vue'
import Home from '../pages/Home/home.vue'
import Mine from '../pages/Mine/mine.vue' 
//引入二级路由组件 
import Film from '../components/Film.vue'
import Read from '../components/Read.vue'
import Tv from '../components/Tv.vue'
import City from '../components/City.vue'
import Music from '../components/Music.vue'
Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home1',
      component: Home
    },
    {path:'/home',name:'Home',component:Home},
    {path:'/audio',name:'Audio',component:Audio,
    	//二级路由配置
    	children:[
    	   {path:'film',component:Film},
    	   {path:'read',component:Read},
    	   {path:'tv',component:Tv},
    	   {path:'city',component:City},
    	   {path:'music',component:Music}
    	]
    },
    {path:'/broadcast',name:'Broadcast',component:Broadcast},
    {path:'/group',name:'Group',component:Group},
    {path:'/mine',name:'Mine',component:Mine}
  ]
})
