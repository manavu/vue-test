<style>
.yellow {
  color: #f0f;
  background-image: url('./img/disp-img.jpg');
  background-repeat: no-repeat;
}
</style>

<template>
  <div>
    <!-- @inputed イベントはメソッドで受け取ってもよいし匿名メソッドでもよい -->
    <common-view
      value="渡したメッセージ"
      @inputed="receivedMsg = $event"
    ></common-view>
    <p>{{ receivedMsg }}</p>
    <h1 class="yellow">page A</h1>
    <p>
      this page is A!!!
    </p>
    <button v-on:click="onButtonClickHander">aiueo</button>
    <table border="1">
      <tr v-for="item in items" v-bind:key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.value }}</td>
      </tr>
    </table>

    <div>
      <router-link to="/">戻る</router-link>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import CommonView from './commonView.vue'

export default {
  // 使用するコンポーネント
  components: {
    'common-view': CommonView,
  },
  data: function() {
    return {
      items: [],
      receivedMsg: null,
    }
  },
  created: function() {
    // コンポーネントが作られる度に呼ばれるっぽい
    console.log('created ' + this.msg)
    this.get_ajax()
  },
  methods: {
    async onButtonClickHander() {
      var config = {
        headers: { 'X-Api-Key': 'test' },
        data: {}, // これがないとダメらしい
      }

      var res = await Axios.get('http://localhost:8081/', config)
      if (res.status == 200) {
        var data = [
          { name: 'test5', value: 'value5' },
          { name: 'test6', value: 'value6' },
          { name: 'test7', value: 'value7' },
          { name: 'test8', value: 'value8' },
        ]

        // データに反映させる
        this.$set(this, 'items', data)
      }
    },

    // Ajax通信でJsonを取得し、特定のプロパティに格納する
    // 取得したら GET_AJAX_COMPLETE で通知する
    get_ajax() {
      var config = {
        headers: { 'X-Api-Key': 'test' },
        data: {}, // これがないとダメらしい
      }
      return Axios.get('http://localhost:8081/', config).then((res) => {
        var data = [
          { name: 'test1', value: 'value1' },
          { name: 'test2', value: 'value2' },
          { name: 'test3', value: 'value3' },
          { name: 'test4', value: 'value4' },
        ]

        // データに反映させる
        this.$set(this, 'items', data)
      })
    },
  },
}
</script>
