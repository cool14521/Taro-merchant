import Taro, {Component} from '@tarojs/taro'
import { ComponentClass } from 'react'
import {View, Image, Swiper, SwiperItem} from '@tarojs/components'
import styles from '@scss/pages/community/swiperAttention.scss'
import brandMarkPng1 from '@static/images/icon/icon-brand-mark-1.png'

type PageOwnProps = {

}
type PageState = {

}

type IProps = PageOwnProps

interface SwiperAttention {
  props: IProps;
  state: PageState
}

class SwiperAttention extends Component{
  constructor (props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Swiper
        className={styles.swiperContainer}
        next-margin='20px'
        displayMultipleItems= {4}>
        <SwiperItem>
          <View className={styles.itemGoods}>
            <View className={styles.authorColumn}>
              <Image src={brandMarkPng1} className={styles.authorAvatar} />
            </View>
            <View className={styles.itemTitle}>IN Essence</View>
          </View>
        </SwiperItem>
        <SwiperItem>
          <View className={styles.itemGoods}>
            <View className={styles.authorColumn}>
              <Image src={brandMarkPng1} className={styles.authorAvatar} />
            </View>
            <View className={styles.itemTitle}>IN Essence</View>
          </View>
        </SwiperItem>
        <SwiperItem>
          <View className={styles.itemGoods}>
            <View className={styles.authorColumn}>
              <Image src={brandMarkPng1} className={styles.authorAvatar} />
            </View>
            <View className={styles.itemTitle}>IN Essence</View>
          </View>
        </SwiperItem>
        <SwiperItem>
          <View className={styles.itemGoods}>
            <View className={styles.authorColumn}>
              <Image src={brandMarkPng1} className={styles.authorAvatar} />
            </View>
            <View className={styles.itemTitle}>IN Essence</View>
          </View>
        </SwiperItem>
        <SwiperItem>
          <View className={styles.itemGoods}>
            <View className={styles.authorColumn}>
              <Image src={brandMarkPng1} className={styles.authorAvatar} />
            </View>
            <View className={styles.itemTitle}>IN Essence</View>
          </View>
        </SwiperItem>
      </Swiper>
    )
  }
}

export default SwiperAttention as ComponentClass<PageOwnProps, PageState>
