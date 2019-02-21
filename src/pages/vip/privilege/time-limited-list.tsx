import Taro, {Component} from '@tarojs/taro'
import { ComponentClass } from 'react'
import {View, Text, Swiper, SwiperItem, Image} from '@tarojs/components'
import GoodsImg from '@static/images/vip/img200x200.jpg'
import styles from '@scss/pages/vip/privilege-component.scss'

type PageOwnProps = {

}
type PageState = {}

type IProps = PageOwnProps

interface TimeLimitedList {
  props: IProps;
}

class TimeLimitedList extends Component{
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <View className={styles.timeLimited}>
        <View className={styles.header}>
          距离活动结束<Text className={styles.time}>12</Text>时<Text className={styles.time}>24</Text>分<Text className={styles.time}>48</Text>秒
        </View>
        <View className={styles.content}>
          <Swiper className={styles.goodsWrap} displayMultipleItems={750/230}>
            <SwiperItem>
              <View className={styles.item}>
                <Image src={GoodsImg} className={styles.goodsImg}></Image>
                <View className={styles.goodsTitle}>纯天然罗马洋甘菊子</View>
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className={styles.item}>1</View>
            </SwiperItem>
            <SwiperItem>
              <View className={styles.item}>1</View>
            </SwiperItem>
            <SwiperItem>
              <View className={styles.item}>1</View>
            </SwiperItem>
            <SwiperItem>
              <View className={styles.item}>1</View>
            </SwiperItem>
            <SwiperItem>
              <View className={styles.item}>6</View>
            </SwiperItem>
          </Swiper>
        </View>
      </View>
    )
  }
}

export default TimeLimitedList as ComponentClass<PageOwnProps, PageState>
