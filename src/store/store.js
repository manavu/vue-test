export default {
    // そもそもシンプルなcrud アプリケーションだと状態管理なんてほとんど不要。
    // 必要なのはログインしているかしていないかとか？
    // それに関してはcookieを使った認証になるだろうけど
    debug: true,
    state: {
      message: 'Hello!'
    },
    setMessageAction (newValue) {
      if (this.debug) console.log('setMessageAction triggered with', newValue)
      this.state.message = newValue
    },
    clearMessageAction () {
      if (this.debug) console.log('clearMessageAction triggered')
      this.state.message = ''
    }
}