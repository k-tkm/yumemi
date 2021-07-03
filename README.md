# 都道府県別の総人口推移グラフ
![スクリーンショット 2021-07-03 23 27 51](https://user-images.githubusercontent.com/73158391/124357446-713c2f80-dc56-11eb-912a-9d3293e81232.png)
demo: https://optimistic-shirley-ebf8c6.netlify.app/

## このページで使用したAPIとライブラリ
* RESAS API: https://opendata.resas-portal.go.jp/
* RESAS API Documents: https://opendata.resas-portal.go.jp/docs/api/v1/index.html
* Highcharts: https://www.highcharts.com/
* Vue2-highcharts: https://www.npmjs.com/package/vue2-highcharts
* Nuxt.js: https://nuxtjs.org
* Netlify: https://www.netlify.com/

## 使用法
.envファイルを作成して下記のようにAPI_KEYを書いてください。
```bash
API_kEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```


```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
