<template>
  <div class="body">
    <!-- 都道府県とチェックボックスをここで描画させている -->
    <h2>都道府県</h2>
    <div
      v-for="(prefecture, index) in prefectures"
      :key="index"
      class="checkbox"
    >
      <input
        v-model="check_box_pref"
        type="checkbox"
        :value="prefecture"
        @change="checkbox_change"
      />
      {{ prefecture.prefName }}
      &nbsp;&nbsp;
    </div>
    <time-line-chart :display-data="displayData()" />
  </div>
</template>

<script>
import TimeLineChart from '@/components/TimeLineChart.vue'
export default {
  components: {
    TimeLineChart,
  },
  data() {
    return {
      // 都道府県名と都道府県コードを保持
      prefectures: [],
      // 総人口
      // 初期値としれ空文字と０を入れることにより枠のみを取得できる
      population: [{ name: '', data: 0 }],
      resasUrl: 'population/composition/perYear?',
      // チェックされた都道府県名と都道府県コード
      check_box_pref: [],
      // 全ての市町村を取得するためのparametersの一部
      cityCode: '-',
    }
  },
  created() {
    this.fetchprefectures()
    this.displayData()
  },
  methods: {
    displayData() {
      console.log(this.population)
      return this.population
    },
    async fetchSomething(prefCodeName) {
      const res = await this.$api(
        `${this.resasUrl}prefCode=${prefCodeName.prefCode}&cityCode=${this.cityCode}`
      )
      this.population.push(
        res.data.result.data
          .map((item) => {
            return {
              // .filterで総人口だけ取得する際に必要
              info: item.label,
              // 県名
              name: prefCodeName.prefName,
              data: item.data.map((d) => {
                return {
                  x: d.year,
                  y: d.value,
                }
              }),
            }
          })
          .filter((item) => item.info === '総人口')[0]
      )
      this.displayData()
    },
    // 都道府県の名称とコードを取得
    async fetchprefectures() {
      const res = await this.$api('prefectures')
      // 都道府県名と都道府県コードを配列にまとめる
      const PrefNameArray = res.data.result
      this.prefectures = PrefNameArray
    },
    checkbox_change() {
      // checkを入れるたびにグラフを再描画
      this.check_box_pref.forEach((prefCodeName) => {
        // 一度全消去
        this.population = []
        // チェックされた都道府県名とコードを引数に入れる
        this.fetchSomething(prefCodeName)
      })
    },
  },
}
</script>
<style scoped>
.body {
  padding: 30px;
}
.checkbox {
  display: inline-block;
}
</style>
