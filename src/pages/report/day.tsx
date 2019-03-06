import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Picker } from '@tarojs/components'
import * as echarts from '@/components/ec-canvas/echarts'
import fly from '@/config/fly'
import {ResponseSuccess} from '@/constants/response'
import { reportDay } from '@/models/report'
// import '@/scss/pages/report/day.scss'
import styles from '@/scss/pages/report/day.scss'


type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {
  ec: any,
  value: string,
  startDate: string,
  endDate: string
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
      },
      value: '2019.03.02',
      startDate: '2019-03-01',
      endDate: '2019-03-06'
    }
  }

  componentWillMount() {
    this.fetchData()
  }

  // 获取数据
  async fetchData() {
    Taro.showLoading({
      title: '正在加载',
      mask: true
    })

    try{
      const res = await fly.get<reportDay>('/api/orders/getDayRevenueReport', {
        startDate: this.state.startDate,
        endDate: this.state.endDate
      })
      if(res.data.code === ResponseSuccess){
        console.log(8)
      }
      Taro.hideLoading()
    }catch(e) {
      Taro.hideLoading()
    }
  }

  onStartDataChange(e) {
    this.setState({
      startDate: e.detail.value
    })
  }

  onEndDataChange(e) {
    this.setState({
      endDate: e.detail.value
    })
  }

  render () {
    return (
      <View className="d">
        <View className={styles.canvasWrap}>
          <View className={styles.selectArea}>
            <View className={styles.title}>统计日期为：{this.state.startDate} 至 {this.state.endDate}</View>
            <View className={styles.pickerContent}>
              <Picker
                value={this.state.startDate}
                mode='date'
                start="2015-09-01"
                end="2017-09-01"
                onChange={this.onStartDataChange}>
                  <View className={styles.start}>
                  {this.state.startDate}
                  </View>
              </Picker>
              <View className={styles.separate}>至</View>
              <Picker
                value={this.state.endDate}
                mode='date'
                start="2015-09-01"
                end="2017-09-01"
                onChange={this.onEndDataChange}>
                  <View className={styles.start}>
                  {this.state.endDate}
                  </View>
              </Picker>
            </View>
          </View>
          <ec-canvas id='mychart-dom-area' canvas-id='mychart-area' ec={this.state.ec}></ec-canvas>
        </View>
      </View>
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>
