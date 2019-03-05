import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import * as echarts from '@/components/ec-canvas/echarts'
import '@/scss/pages/report/day.scss'

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {
  ec: any
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps
  state: PageState
}

function initChart(canvas, width, height) {
  var chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
};


  chart.setOption(option);
  return chart;
}


class Index extends Component {
  config: Config = {
    navigationBarTitleText: '日交易分析报表',
    // 定义需要引入的第三方组件
    usingComponents: {
      'ec-canvas': '../../components/ec-canvas/ec-canvas' // 书写第三方组件的相对路径
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      ec: {
        onInit: initChart
      }
    }
  }

  render () {
    return (
      <View className="d">
        <ec-canvas id='mychart-dom-area' canvas-id='mychart-area' ec={this.state.ec}></ec-canvas>
      </View>
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>
