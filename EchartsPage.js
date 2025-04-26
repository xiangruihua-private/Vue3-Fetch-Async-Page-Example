const echarts = await import('./echarts.esm.5.4.3.min.js');
// const echarts = await import('https://cdn.staticfile.net/echarts/5.4.3/echarts.esm.min.js');
const i18n = {
  en_US: {
    'First ECharts Example': 'First ECharts Example'
  },
  zh_CN: {
    'First ECharts Example': '第一个 ECharts 实例'
  }
};
export default {
  template: `<div id="main" style="width: 600px;height:400px;"></div>`,
  setup() {
    const { locale, t: mt, } = VueI18n.useI18n({ messages: i18n, });
    const chartTitle = computed(() => mt('First ECharts Example'));
    return { locale, mt, chartTitle };
  },
  watch: {
    locale: {
      handler() {
        this.initChart();
      },
    },
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    this.myChart = echarts.init(document.getElementById('main'));
    this.initChart();
  },
  methods: {
    initChart() {
      var option = {
        title: {
          text: this.mt('First ECharts Example'),
        },
        tooltip: {},
        legend: {
          data: [ '销量' ]
        },
        xAxis: {
          data: [ "衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子" ]
        },
        yAxis: {},
        series: [ {
          name: '销量',
          type: 'bar',
          data: [ 5, 20, 36, 10, 10, 20 ]
        } ]
      };

      // 使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(option);
    }
  }
};