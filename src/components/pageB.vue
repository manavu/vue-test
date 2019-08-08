<style>
  .yellow {
    color: #f0f;
  }
</style>

<template>
  <div>
    <h1 class="yellow">apge B</h1>
    <p v-if="errors.length">
      <b>エラーがあるよ</b>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
    </p>
    <form @submit="checkForm" method="post">
      <input type="text" name="param1" v-model="param1" value="">
      <input type="text" name="param2" v-model="param2" value="">
      <button type="submit">送信</button>
    </form>
    <div>
      <router-link to="/">戻る</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        errors: [],
        param1: 'うはｗｗｗ',
        param2: 'おｋｗｗｗ'
      }
    },
    methods: {
      checkForm: function (e)  {
        console.log('checkForm')

        this.errors = [];

        if(this.param1 === 'うはｗｗｗ')
        {
          this.errors.push('エラー1');
        }

        if(this.param2 === 'おｋｗｗｗ')
        {
          this.errors.push('エラー2');
        }

        e.preventDefault()
      }
    }
  }
</script>