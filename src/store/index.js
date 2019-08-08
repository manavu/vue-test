import Vue from 'vue'
import Vuex from 'vuex'

// プラグインを登録
Vue.use(Vuex)
 
// ストアを作成
const store = new Vuex.Store({
  modules: {
  },
  state: {
    count: 0
  },
  getters: {
    count: state => state.count
  },
  mutations: {
    // カウントアップするミューテーションを登録（ミューテーションは同期でなくてはだめ）
    increment: state => state.count++,
    decrement: state => state.count--
  }
})
 
export default store