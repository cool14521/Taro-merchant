import Taro, {Component} from '@tarojs/taro'
import { ComponentClass } from 'react'
import {View, Text} from '@tarojs/components'
import styles from '@scss/pages/vip/privilege-component.scss'

type PageOwnProps = {
  hasData: boolean
}
type PageState = {}

type IProps = PageOwnProps

interface HalfPrice {
  props: IProps;
  state: PageState
}

class HalfPrice extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    let {hasData} = this.props
    let subtitle1: any = null
    let subtitle2: any = null
    let btn: any = null
    if(hasData) {
      subtitle1 = <View className={styles.itemSubtitle}>我想不出对你的疼爱,还有什么比<Text className={styles.textPrimary}>5折</Text>更实在</View>
      subtitle2 = <View className={styles.itemSubtitle}>您的半价试用特权还剩<Text className={styles.textPrimary}>4次</Text></View>
      btn = <View className={styles.btnPrimary}>查看商品</View>
    }else {
      subtitle1 = <View className={styles.itemSubtitle}>我想不出对你的疼爱</View>
      subtitle2 = <View className={styles.itemSubtitle}>还有什么比<Text className={styles.textPrimary}>5折</Text>更实在</View>
      btn = <View className={styles.btnPrimary}>积分赢取</View>
    }
    return (
      <View className={`${styles.wrap} ${styles.halfPriceWrap}`}>
        <View className={styles.itemGoods}>
          <View className={styles.itemInner}>
            <View className={styles.itemTitle}>全场非活动商品半价试用</View>
            <View className={styles.line}></View>
            {subtitle1}
            {subtitle2}
            {btn}
          </View>
        </View>
      </View>
    )
  }
}

export default HalfPrice as ComponentClass<PageOwnProps, PageState>
