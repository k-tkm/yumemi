<template>
  <highcharts :options="chartOptions" />
</template>

<script>
export default {
  props: {
    displayData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {}
  },

  computed: {
    chartOptions() {
      return {
        chart: {
          height: 350,
          zoomType: 'xy',
          backgroundColor: 'transparent',
        },
        title: {
          text: null,
        },
        xAxis: {
          labels: {
            style: {
              fontSize: '12px',
            },
          },
          tickInterval: 5,
          title: {
            text: 'データ提供年(単位: 年)',
          },
          type: 'years',
          categories: [
            1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010,
            2015, 2020, 2025, 2030, 2035, 2040, 2045,
          ],
          lineWidth: 2,
        },
        yAxis: {
          title: {
            text: '人口(単位: 人)',
          },
          labels: {
            formatter() {
              return this.value.toLocaleString()
            },
          },
          lineWidth: 2,
        },
        responsive: {
          rules: [
            {
              condition: {
                maxheight: 400,
                maxWidth: 500,
              },
            },
          ],
        },
        plotOptions: {
          series: {
            animation: false,
            pointWidth: 10,
            label: {
              connectorAllowed: false,
            },
          },
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
        },
        tooltip: {
          crosshairs: true,
          shared: true,
        },
        credits: {
          enabled: false,
        },
        series: this.displayData,
      }
    },
  },
}
</script>
