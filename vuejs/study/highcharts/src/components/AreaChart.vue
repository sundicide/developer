<template>
  <div>
    <highcharts :options="options" ref="areaChart" />
  </div>
</template>

<script>
var options = {
  chart: {
    type: 'area'
  },
  title: {
    text: 'Area Chart Test'
  }, 
  credits: {
    enabled: false
  },
  yAxis: {
    title: false,
    labels: {
      formatter: function(){  // y field customizing
          return this.value + '개';
      }
    }
  },
  plotOptions: {
    area: { // area chart의 최대 최소 값 label 설정
      dataLabels: {
        enabled: true,
        formatter: function() {
          // 최대값 표현
          if(this.y >= this.series.dataMax){
            return this.y;
          }

          // 최소값표현
          if(this.y <= this.series.dataMin){
            return this.y;
          }
        }
      }
    }
  },
  tooltip: {
    valueSuffix: '개',
    crosshairs: true,
    shared: true
  },
  legend: {
    layout: 'horizontal',
    verticalAlign: 'bottom'
  },
  series: [
    {
      name: 'data1',
      data: [10, 15, 2, 8, 7, 13, 23]
    },
    {
      name: 'data2',
      data: [17, 12, 18, 15, 10, 4, 7]
    },
    {
      name: 'data3',
      data: [2, 3, 7, 8, 13, 10, 8]
    }
  ]
}
export default {
  name: 'AreaChart',
  data () {
    return {
      options: options
    }
  },
  created() {
    let r = false;
    let jsfiddle = document.createElement('script');
    jsfiddle.src = '//jsfiddle.net/sundicide/77n0tsaq/embed/'
    document.head.appendChild(jsfiddle);
  },
}
</script>
