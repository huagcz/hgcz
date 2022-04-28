<template>
  <div class="swiper-container" ref="floor1Swiper">
    <!-- 全局轮播结构,需要一个数组 -->
    <div class="swiper-slide" v-for="(item, index) in bannerList" :key="item.id">
      <img :src="item.imgUrl" alt="">
      <!-- 分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper"
export default {
  name: "Carousel",
  data() {
    return {
      bannerList: [
        {id: "001", imgUrl: "https://ossweb-img.qq.com/upload/adw/image/194/20220420/5cdd0c79207716327cfdff83497848ed.jpeg"},
        {id: "002", imgUrl: "https://ossweb-img.qq.com/upload/adw/image/194/20220421/9792bf2cdc1e6936f5eb7b6c8ed0d78f.jpeg"},
        {id: "003", imgUrl: "//ossweb-img.qq.com/upload/adw/image/194/20220422/6de904f4c087587aa366ec241ea3db11.jpeg"},
      ]
    }
  },
  mounted(){
    new Swiper(this.$refs.floor1Swiper, {
      loop: false,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        //分页器小球点击的时候切换图片
        clickable: true,
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    })
  }
}
</script>