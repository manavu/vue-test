<style>
  .yellow {
    color: #f0f;
  }
</style>

<template>
  <div>
    <common-view value='渡したメッセージ' @input="receivedMsg = $event"></common-view>
    <p>{{receivedMsg}}</p>
    <h1 class="yellow">apge A</h1>
    <p>
      this page is A!!!
    </p>
    <table border="1">
      <tr v-for="item in items" v-bind:key="item.name">
        <td>{{item.name}}</td>
        <td>{{item.value}}</td>
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
      'common-view': CommonView
    },
    data: function () {
      return {
        items: [],
        receivedMsg: null,
      }
    },
    created: function () {
      // コンポーネントが作られる度に呼ばれるっぽい
      console.log('created ' + this.msg)
      this.get_ajax()
    },
    methods: {
      // Ajax通信でJsonを取得し、特定のプロパティに格納する
      // 取得したら GET_AJAX_COMPLETE で通知する
      get_ajax() {
        return Axios.get('http://localhost:8081/')
          .then((res) => {
            var data = [
              {name: 'test1', value:'value1' },
              {name: 'test2', value:'value2' },
              {name: 'test3', value:'value3' },
              {name: 'test4', value:'value4' },
            ]
            
            // 
            this.$set(this, 'items', data)
            // イベント通知
            this.$emit('GET_AJAX_COMPLETE')
          })
      },
    }
  }
</script>