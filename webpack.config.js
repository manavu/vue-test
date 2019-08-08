const VueLoaderPlugin = require('vue-loader/lib/plugin')

// webpack v4

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "development",

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: `./src/index.js`,

  // ファイルの出力設定
  output: {
    // 出力ファイルのディレクトリ名
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: "main.js"
  },

  // これを入れないと正しくコンパイルされない
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' webpack 1 用
    }
  },

  module: {
    rules: [
      // require 等で参照されたファイルの拡張子が.vue だった場合は、vue-loader に処理を渡す
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // this will apply to both plain `.js` files AND `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // this will apply to both plain `.css` files AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader', // 次にスタイルシートをJSからlinkタグに展開する機能
          'css-loader'  // 最初にCSSをバンドルするための機能が呼び出される
        ]
      }
    ]
  },

  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ],

  // ローカル開発用環境を立ち上げる
  // 実行時にブラウザが自動的に localhost を開く
  devServer: {
    contentBase: "./",
    open: true
  }
};