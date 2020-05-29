const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV === 'development'

// webpack v4
module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',

  // ソースマップの種類を明示する
  devtool: 'inline-source-map',

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: './src/index.js',

  // ファイルの出力設定
  output: {
    // 出力ファイルのディレクトリ名
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: 'main.js',
  },

  // これを入れないと正しくコンパイルされない
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js', // 'vue/dist/vue.common.js' webpack 1 用
    },
  },

  optimization: {
    splitChunks: {
      // cacheGroups内にバンドルの設定を複数記述できる
      cacheGroups: {
        // 今回はvendorだが、任意の名前で問題ない
        vendor: {
          // node_modules配下のモジュールをバンドル対象とする
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true,
        },
      },
    },
  },

  module: {
    rules: [
      // require 等で参照されたファイルの拡張子が.vue だった場合は、vue-loader に処理を渡す
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      // this will apply to both plain `.js` files AND `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      // this will apply to both plain `.css` files AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader', // 次にスタイルシートをJSからlinkタグに展開する機能
          'css-loader', // 最初にCSSをバンドルするための機能が呼び出される
        ],
      },
      // 画像参照をバイナリとして埋め込む
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader',
      },
      // HTMLファイルもビルド対象にする
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },

  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    // HTMLを自動生成してくれるプラグイン。今回はベースのHTMLを使用する
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  // ローカル開発用Webサーバーを立ち上げる
  // 正しいかわからないが、ビルド結果は dist に出力される（デバッグ時はオンメモリ）。
  // それをコンテンツのルートとする為に、contentBase を dist にする。
  // そこをパブリックフォルダとするという感じの設定。
  // ただ、ヘルプページや説明しているサイトを見るとなんか意味が違う気がする
  devServer: {
    contentBase: './dist', // webpackの扱わないファイル(HTMLや画像など)が入っているディレクトリ
    watchContentBase: true, // コンテンツベースに置かれたファイル(htmlやcssなど)の変更を監視する
    lazy: false, // ファイルの変更を監視するかしないか。lazyの値をtrueにした場合は、コンパイルとブラウザの再読み込みを手動で行います。
    host: 'localhost',
    port: '8081',
    publicPath: '/',
    // CORSを回避する方法。/apiへのリクエストは全て他のサーバーに処理を委譲する
    /*
    proxy: {
      '/api': {
          target: 'http://redirecthost:5000', // local api server
          pathRewrite: {'^/api' : ''} // rewrite
      }
    },*/
    open: false, // ブラウザを自動的に開くかどうか
  },
}
