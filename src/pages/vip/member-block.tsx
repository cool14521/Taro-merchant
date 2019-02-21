import Taro, {Component} from '@tarojs/taro'
import { ComponentClass } from 'react'
import {View} from '@tarojs/components'
import Privilege from './privilege'
import Commodity from './commodity'
import styles from '@scss/pages/vip/member-block.scss'

type PageOwnProps = {

}
type PageState = {}

type IProps = PageOwnProps

interface MemberBlock {
  props: IProps;
}

class MemberBlock extends Component{
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <View>
        <View className={styles.memberBlock}>
          <View className={styles.blockTitle}>
            <View className={styles.title}>会员特权</View>
            <View className={styles.subtitle}>查看不同级别会员服务特权</View>
          </View>
          <Privilege />
        </View>
        <View className={styles.memberBlock}>
          <View className={styles.blockTitle}>
            <View className={styles.title}>会员商品</View>
            <View className={styles.subtitle}>会员积分专享兑换商品</View>
          </View>
          <Commodity />
        </View>
      </View>
    )
  }
}

export default MemberBlock as ComponentClass<PageOwnProps, PageState>
