import Vue from 'vue'
import VueRouter from 'vue-router'
import PageA from './components/pageA.vue'
import PageB from './components/pageB.vue'

import App from './app.vue'

Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    { path: '/', component: App },
    { path: '/pageA', component: PageA },
    { path: '/pageB', component: PageB },
  ]
})

new Vue({
  el: '#app',
  router
})

/*
// ユーザー詳細ページのコンポーネント定義
var User = {
  template:
    '<div class="user">' +
      '<h2>ユーザーIDは {{ $route.params.userId }} です。</h2>' +
      '<router-link :to="\'/user/\' + $route.params.userId + \'/profile\'">ユーザーのプロフィールページを見る</router-link><br>' +
      '<router-link :to="\'/user/\' + $route.params.userId + \'/posts\'">ユーザーの投稿ページを見る</router-link>' +
      '<router-view></router-view>' +
    '</div>'
}

// 擬似的にAPI経由で情報を取得したようにする
var getUsers = function (callback) {
  setTimeout(function () {
    callback(null, [
      {
        id: '001',
        name: 'Takuya Tejima'
      },
      {
        id: '002',
        name: 'Yohei Noda'
      }
    ])
  }, 1000)
}

// ユーザー一覧ページのコンポーネント定義
var UserList = {
  template: '#user-list',
  data: function () {
    return {
      loading: false,
      // 初期値の空配列を定義
      users: function () { return [] },
      error: null
    }
  },

  // 初期化時にデータを取得する
  created: function () {
    this.fetchData()
  },

  // ルーティングが変更された時に再度データを取得するために$routeの変更をwatchする
  watch: {
    '$route': 'fetchData'
  },

  methods: {
    fetchData: function () {
      this.loading = true
      // 取得したデータの結果をusersに格納する
      getUsers((function (err, users) {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.users = users
        }
      }).bind(this))
    }
  }
}

// ユーザー詳細ページ内で部分的に表示されるユーザーのプロフィールページ
var UserProfile = {
  template:
    '<div class="user-profile">' +
      '<h3>こちらはユーザー {{ $route.params.userId }} のプロフィールページです。</h3>' +
    '</div>'
}

// ユーザー詳細ページ内で部分的に表示されるユーザーの投稿ページ
var UserPosts = {
  template:
    '<div class="user-posts">' +
      '<h3>こちらはユーザー {{ $route.params.userId }} の投稿ページです。</h3>' +
    '</div>'
}

// ルートオプションを渡してルーターインスタンスを生成します
var router = new VueRouter({
  // 各ルートにコンポーネントをマッピングします
  // コンポーネントはVue.extend() によって作られたコンポーネントコンストラクタでも
  // コンポーネントオプションのオブジェクトでも構いません
  routes: [
    {
      path: '/user/:userId',
      name: 'user',
      component: User,
      children: [
        {
          // /user/:userId/profile がマッチした時に
          // UserProfileコンポーネントはUserコンポーネントの <router-view> 内部でレンダリングされます
          path: 'profile',
          component: UserProfile
        },
        {
          // /user/:userId/posts がマッチした時に
          // UserPostsコンポーネントはUserコンポーネントの <router-view> 内部でレンダリングされます
          path: 'posts',
          component: UserPosts
        }
      ]
    },
    {
      path: '/top',
      component: {
        template: '<div>トップページです。</div>'
      }
    },
    {
      path: '/users',
      component: UserList
    }
  ]
})

var app1 = new Vue({
  router: router
}).$mount('#app')
*/