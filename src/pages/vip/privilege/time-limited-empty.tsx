import Taro, {Component} from '@tarojs/taro'
import { ComponentClass } from 'react'
import {View} from '@tarojs/components'
import styles from '@scss/pages/vip/privilege-component.scss'

type PageOwnProps = {

}
type PageState = {}

type IProps = PageOwnProps

interface TimeLimitedEmpty {
  props: IProps;
}

class TimeLimitedEmpty extends Component{
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <View className={`${styles.wrap} ${styles.timeLimitedWrap}`}>
        <View className={styles.itemGoods}>
          <View className={styles.itemInner}>
            <View className={styles.itemTitle}>限时购</View>
            <View className={styles.line}></View>
            <View className={styles.itemSubtitle}>更多惊喜，敬请期待</View>
            <View className={styles.btnPrimary}>积分赢取</View>
          </View>
        </View>
      </View>
    )
  }
}

export default TimeLimitedEmpty as ComponentClass<PageOwnProps, PageState>
