import Taro, {Component} from '@tarojs/taro'
import { ComponentClass } from 'react'
import {View, Text, Button} from '@tarojs/components'
import styles from '@scss/pages/vip/privilege-component.scss'

type PageOwnProps = {

}
type PageState = {}

type IProps = PageOwnProps

interface CouponList {
  props: IProps;
}

class CouponList extends Component{
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <View className={styles.couponList}>
        <View className={styles.item}>
          <View className={styles.couponLeft}>
            <View>
              <Text className={styles.icon}>￥</Text>
              <Text className={styles.amount}>50</Text>
            </View>
            <View className={styles.condition}>满1元可用</View>
          </View>
          <View className={styles.couponRight}>
            <View className={styles.title}>会员优惠券会员优惠券会员优惠券会员优惠券会员优惠券</View>
            <View className={styles.date}>
              <Text className={styles.subtitle}>2017.12.03至2017.12.30</Text>
              <Text className={styles.btnPrimary}>查看</Text>
            </View>
            <View className={styles.subtitle}>全品类可用，不可与其它优惠活动叠加使用。</View>
          </View>
          <View className={styles.tag}>
            <Text className={styles.tagText}>2张</Text>
          </View>
        </View>
        <View className={styles.item}>
          <View className={styles.couponLeft}>
            <View>
              <Text className={styles.icon}>￥</Text>
              <Text className={styles.amount}>50</Text>
            </View>
            <View className={styles.condition}>满1元可用</View>
          </View>
          <View className={styles.couponRight}>
            <View className={styles.title}>会员优惠券会员优惠券会员优惠券会员优惠券会员优惠券</View>
            <View className={styles.date}>
              <Text className={styles.subtitle}>2017.12.03至2017.12.30</Text>
              <Text className={styles.btnPrimary}>查看</Text>
            </View>
            <View className={styles.subtitle}>全品类可用，不可与其它优惠活动叠加使用。</View>
          </View>
          <View className={styles.tag}>
            <Text className={styles.tagText}>2张</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default CouponList as ComponentClass<PageOwnProps, PageState>
