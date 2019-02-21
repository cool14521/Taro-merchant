import Taro, {Component} from '@tarojs/taro'
import { ComponentClass } from 'react'
import {View, Image, Text} from '@tarojs/components'
import PromotionImg from '@static/images/vip/240x240.jpg'
import styles from '@scss/pages/vip/privilege-component.scss'

type PageOwnProps = {

}
type PageState = {}

type IProps = PageOwnProps

interface PromotionList {
  props: IProps;
}

class PromotionList extends Component{
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <View className={styles.goodsList}>
        <View className={styles.item}>
          <Image src={PromotionImg} className={styles.goodsImg}></Image>
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
          <Image src={PromotionImg} className={styles.goodsImg}></Image>
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
              <View className={`${styles.goodsBtn} ${styles.btnDisabled}`}>已领取</View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default PromotionList as ComponentClass<PageOwnProps, PageState>
