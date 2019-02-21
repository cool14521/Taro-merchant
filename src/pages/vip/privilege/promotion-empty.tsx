import Taro, {Component} from '@tarojs/taro'
import { ComponentClass } from 'react'
import {View} from '@tarojs/components'
import styles from '@scss/pages/vip/privilege-component.scss'

type PageOwnProps = {

}
type PageState = {}

type IProps = PageOwnProps

interface PromotionEmpty {
  props: IProps;
}

class PromotionEmpty extends Component{
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <View className={`${styles.wrap} ${styles.promotionWrap}`}>
        <View className={styles.itemGoods}>
          <View className={styles.itemInner}>
            <View className={styles.itemTitle}>晋级礼包</View>
            <View className={styles.line}></View>
            <View className={styles.itemSubtitle}>不同的等级自然有不同的待遇</View>
            <View className={styles.itemSubtitle}>你敢升，我就敢送</View>
            <View className={styles.btnPrimary}>积分赢取</View>
          </View>
        </View>
      </View>
    )
  }
}

export default PromotionEmpty as ComponentClass<PageOwnProps, PageState>
