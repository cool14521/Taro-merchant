import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import styles from '@/scss/pages/report/index.scss'

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps
  state: PageState
}

class Index extends Component {
  config: Config = {
    navigationBarTitleText: '统计分析'
  }

  // 本月每日交易分析报表
  goDay() {
    Taro.navigateTo({
      url: '/pages/report/day'
    })
  }

  render () {
    return (
      <View className={styles.reportIndex}>
        <View onClick={this.goDay} className={styles.list}>本月每日交易分析报表</View>
        <View className={styles.list}>每月交易分析报表</View>
        <View className={styles.list}>本月服务类型分析报表</View>
        <View className={styles.list}>下单未核销报表</View>
        <View className={styles.list}>本月评价统计表</View>
      </View>
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>
