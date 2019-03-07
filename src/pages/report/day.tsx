import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Picker } from '@tarojs/components'
import * as echarts from '@/components/ec-canvas/echarts'
import fly from '@/config/fly'
import {ResponseSuccess} from '@/constants/response'
import { reportDay, orderDetail } from '@/models/report'
// import '@/scss/pages/report/day.scss'
import styles from '@/scss/pages/report/day.scss'
import moment from 'moment'
import OrderDetail from '@/components/orderDetail'

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {
  ec: any,
  refChart: any,
  startMinDate: string,
  startMaxDate: string,
  endMinDate: string,
  endMaxDate: string,
  startDate: string,
  endDate: string,
  data: orderDetail[]
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps
  state: PageState
}

function setChartData(chart, data) {
  let xValue: string[] = []
  let seriesValue: string[] = []
  data.forEach(element => {
    xValue.push(element.name)
    seriesValue.push(element.money)
  })
  var option = {
    xAxis: {
        type: 'category',
        data: xValue
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: seriesValue,
        type: 'line'
    }]
  }
  chart.setOption(option);
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
      refChart: null,
      ec: {
        lazyLoad: true
      },
      data: [],
      startMinDate: moment().subtract(31, 'd').format('YYYY-MM-DD'), // 开始日期的最小值
      startMaxDate: moment().format('YYYY-MM-DD'), // 开始日期的最大值
      endMinDate: moment().format('YYYY-MM-DD'), // 结束日期的最小值
      endMaxDate: moment().add(31, 'd').format('YYYY-MM-DD'), // 结束日期的最大值
      startDate: moment().format('YYYY-MM') + '-01', // 开始日期
      endDate: moment().format('YYYY-MM-DD') // 结束日期
    }
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
        this.setState({
          data: res.data.data
        })
        this.refresh(res.data.data)
      }
      Taro.hideLoading()
    }catch(e) {
      Taro.hideLoading()
    }
  }

  refresh(data) {
    this.state.refChart.init((canvas, width, height) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      setChartData(chart, data)
    })
  }

  // 选择开始时间
  onStartDataChange(e) {
    this.setState({
      startDate: e.detail.value
    }, () => {
      this.fetchData()
    })
  }

  // 选择结束时间
  onEndDataChange(e) {
    this.setState({
      endDate: e.detail.value
    }, () => {
      this.fetchData()
    })
  }

  // 实例化之后再去请求接口
  onChart = node => {
    this.setState({
      refChart: node
    }, () => {
      this.fetchData()
    })
  }

  render () {
    return (
      <View className="">
        <View className={styles.canvasWrap}>
          <View className={styles.selectArea}>
            <View className={styles.title}>统计日期为：{this.state.startDate} 至 {this.state.endDate}</View>
            <View className={styles.pickerContent}>
              <Picker
                value={this.state.startDate}
                mode='date'
                start={this.state.startMinDate}
                end={this.state.startMaxDate}
                onChange={this.onStartDataChange}>
                  <View className={styles.start}>
                  {this.state.startDate}
                  </View>
              </Picker>
              <View className={styles.separate}>至</View>
              <Picker
                value={this.state.endDate}
                mode='date'
                start={this.state.startDate}
                end={this.state.endMaxDate}
                onChange={this.onEndDataChange}>
                  <View className={styles.start}>
                  {this.state.endDate}
                  </View>
              </Picker>
            </View>
          </View>
          <ec-canvas ref={this.onChart} id='mychart-dom-area' canvas-id='mychart-area' ec={this.state.ec}></ec-canvas>
        </View>

        <OrderDetail headerList={['日期', '订单数', '结算金额']} bodyList={this.state.data}/>
      </View>
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>
