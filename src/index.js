import Vue from 'vue'
import VueRouter from 'vue-router'
import PageA from './components/pageA.vue'
import PageB from './components/pageB.vue'
import PageC from './components/pageC.vue'

import Store from './store/index.js'

import App from './app.vue'

// プラグインを登録
Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    { path: '/', component: App },
    { path: '/pageA', component: PageA },
    { path: '/pageB', component: PageB },
    { path: '/pageC', component: PageC },
  ],
})

new Vue({
  el: '#app',
  router: router,
  store: Store,
})
