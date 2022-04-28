import Vue from 'vue'
import Vuex from 'vuex'
//需要使用插件一次
Vue.use(Vuex)
//state: 仓库存储数据的地方
const state = {
  count: 1
}

//actions: 处理action,可以书写自己的逻辑,也可以处理异步
const actions = {
  //可以写业务逻辑, 但是不能修改state
  // add(commit) {
  //   commit.commit("ADD")
  // }
  add({commit}) {
    commit("ADD")
  }
}

//mutations: 修改state的唯一手段
const mutations = {
  ADD(state) {
    state.count++
  }
}

//getters: 理解为计算属性,用于简化仓库数据,让组件获取数局更加方便
const getters ={}

//对外暴露Store类的一个实例
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})