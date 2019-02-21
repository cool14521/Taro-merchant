import Taro, {Component} from '@tarojs/taro'
import { ComponentClass } from 'react'
import {View} from '@tarojs/components'
import styles from '@scss/pages/vip/privilege-component.scss'

type PageOwnProps = {

}
type PageState = {}

type IProps = PageOwnProps

interface BirthdayEmpty {
  props: IProps;
}

class BirthdayEmpty extends Component{
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <View className={`${styles.wrap} ${styles.birthdayWrap}`}>
        <View className={styles.itemGoods}>
          <View className={styles.itemInner}>
            <View className={styles.itemTitle}>生日礼</View>
            <View className={styles.line}></View>
            <View className={styles.itemSubtitle}>当所有人都忘记你的生日，别难过，还有我记得，答应我要照顾好自己，这是我的一点心意(指定精油一支)，收好。</View>
            <View className={styles.btnPrimary}>积分赢取</View>
          </View>
        </View>
      </View>
    )
  }
}

export default BirthdayEmpty as ComponentClass<PageOwnProps, PageState>
