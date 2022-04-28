import Vue from 'vue'
import App from '@/App.vue'
// import router from '@/router'
import store from '@/store'
//测试
import {reqCategoryList} from '@/api'
import "swiper/css/swiper.css"
// import Carousel from '@components/Carousel'
// Vue.component('Carousel', Carousel)
  // let res = reqCategoryList().then((value) => {
  //   console.log(value)
  //   console.log(222);
  // },(reason) => {
  //   console.log(reason)
  // })
  // console.log(res)
  
async function timeout() {
  let result = await reqCategoryList()
  console.log(result)
}
console.log(timeout());


new Vue({
  render: h => h(App),
  //注册路由, KV写法省略V(router小写的)
  //注册路由信息, 当这里书写router时,组件身上都会有$router,$route属性
  // router,
  //注册仓库: 组件实例的身上会多一个$store属性
  store,
}).$mount('#app')
