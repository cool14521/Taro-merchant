import Taro, {Component} from '@tarojs/taro'
import { ComponentClass } from 'react'
import {View, Text} from '@tarojs/components'
import styles from '@scss/pages/vip/privilege-component.scss'

type PageOwnProps = {

}
type PageState = {}

type IProps = PageOwnProps

interface CouponEmpty {
  props: IProps;
}

class CouponEmpty extends Component{
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <View className={`${styles.wrap} ${styles.couponWrap}`}>
        <View className={styles.itemGoods}>
          <View className={styles.itemInner}>
            <View className={styles.itemTitle}>优惠券</View>
            <View className={styles.line}></View>
            <View className={styles.itemSubtitle}>点亮之后即有<Text className={styles.textPrimary}>50元无门槛</Text>优惠券奉上</View>
            <View className={styles.itemSubtitle}>还望小主莫要嫌弃</View>
            <View className={styles.btnPrimary}>积分赢取</View>
          </View>
        </View>
      </View>
    )
  }
}

export default CouponEmpty as ComponentClass<PageOwnProps, PageState>
