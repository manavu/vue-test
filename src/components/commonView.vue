<template>
  <div>
    <h1>共通のビュー</h1>
    <input type="text" v-model="msg" />
  </div>
</template>

<script>
export default {
  // 親から渡されるパラメータを受け取るプロパティを定義（絶対に変更してはだめ）
  props: {
    value: null,
  },
  /*
    data: function () {
      return {
        msg: this.value,
      }
    },
*/
  // 加工した値を返したい場合のコンポーネント用のプロパティ
  computed: {
    msg: {
      get: function() {
        // 親から渡された値をそのまま返す
        return this.value
      },
      set: function(newValue) {
        // イベントを発行する。親側で受け取ることができる
        this.$emit('inputed', newValue)
      },
    },
  },
  created: function() {
    // コンポーネントが作られる度に呼ばれるっぽい
    console.log('created ' + this.msg)
  },
  methods: {},
}
</script>
