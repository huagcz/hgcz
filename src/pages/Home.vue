<template>
  <div>
    <button @click="add">点击加1</button>
    <span>仓库数据{{count}}</span>
    <button>点击减1</button>
    <Carousel></Carousel>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Carousel from '@/components/Carousel'
  export default {
    name: '',
    components: {
      Carousel
    },
    computed: {
      //映射为组件身上的数据
      ...mapState(['count'])
    },
    methods: {
      add() {
        //派发action
        this.$store.dispatch('add')
      }
    }
  }
</script>