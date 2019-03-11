import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Input } from '@tarojs/components'
import styles from '@/scss/pages/order/index.scss'
import Filter from '@/components/filter'

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
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className={styles['order_wrap']}>
        <View className={styles['search_wrap']}>
          <Input className={styles['search']} placeholder="输入订单号" />
        </View>
        <Filter />
      </View>
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>
