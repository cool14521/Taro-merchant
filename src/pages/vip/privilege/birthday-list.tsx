import Taro, {Component} from '@tarojs/taro'
import { ComponentClass } from 'react'
import {View, Image, Text} from '@tarojs/components'
import BirthdayImg from '@static/images/vip/240x240.jpg'
import styles from '@scss/pages/vip/privilege-component.scss'

type PageOwnProps = {

}
type PageState = {}

type IProps = PageOwnProps

interface BirthdayList {
  props: IProps;
}

class BirthdayList extends Component{
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <View>
        <View className={styles.goodsList}>
          <View className={styles.item}>
            <Image src={BirthdayImg} className={styles.goodsImg}></Image>
            <View className={styles.goodsContent}>
              <View>
                <View className={styles.title}>澳大利亚景观单方系列-海岸 9ml澳大利亚景观单方系列-海岸 9ml</View>
                <View className={styles.subtitle}>海岸沙滩，恣意自然</View>
              </View>
              <View className={styles.goodsFooter}>
                <View>
                  <Text className={styles.currentPrice}>
                    <Text>￥</Text>
                    <Text className={styles.amount}>50</Text>
                  </Text>
                  <Text className={styles.originPrice}>
                    <Text>￥</Text>
                    <Text className={styles.amount}>500</Text>
                  </Text>
                </View>
                <View className={styles.goodsBtn}>立即领取</View>
              </View>
            </View>
          </View>
          <View className={styles.item}>
            <Image src={BirthdayImg} className={styles.goodsImg}></Image>
            <View className={styles.goodsContent}>
              <View>
                <View className={styles.title}>澳大利亚景观单方系列-海岸 9ml澳大利亚景观单方系列-海岸 9ml</View>
                <View className={styles.subtitle}>海岸沙滩，恣意自然</View>
              </View>
              <View className={styles.goodsFooter}>
                <View>
                  <Text className={styles.currentPrice}>
                    <Text>￥</Text>
                    <Text className={styles.amount}>50</Text>
                  </Text>
                  <Text className={styles.originPrice}>
                    <Text>￥</Text>
                    <Text className={styles.amount}>500</Text>
                  </Text>
                </View>
                <View className={styles.goodsBtn}>立即领取</View>
              </View>
            </View>
          </View>
        </View>
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
              <Text className={styles.tagText}>12张</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default BirthdayList as ComponentClass<PageOwnProps, PageState>
