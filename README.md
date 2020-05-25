# 実行するまでの環境構築

node.js をインストールする。使っていたバージョンは、12.7.0

コマンドプロンプト（パワーシェルでもよい）を起動し、プログラムのカレントディレクトリまで移動し、下記のコマンドを実行する。
`npm install`

特にエラーがなければ次のコマンドを実行して、ローカルの Web サーバーを起動させる。
`npm run debug`

VSCode を使っている場合は、F5 を押すことでデバッグ起動できる。
launch.json で制御を行っている

# VSCode でコーディングするときに便利な拡張機能

Vuter と Prettier が連動しているので保存時に Prettier の書式でソースがフォーマットされる

# webpack で環境変数を渡す場合

cross-env というライブラリを使う。Windows の npm で NODE_ENV=production をするとコマンドが停止するらしいので環境に依存しないこのライブラリを使って設定を行う

# webpack を直接使わない方法もある

vue-cli-service というツールを使う。このツールが webpack のスクリプトを自動で生成してくれるっぽい。
なので、必要最低限の設定だけを行えば webpack に関する知識を必要としないでも作れる。
webpack を直接利用する必要がない場合は vue-cli-service を使ったほうが楽だと思う。

```
$ npm install -g @vue/cli
$ vue ui
```
