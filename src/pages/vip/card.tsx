import Taro, {Component} from '@tarojs/taro'
import { ComponentClass } from 'react'
import {View, Image, Text} from '@tarojs/components'
import gradeIcon from '@static/images/vip/grade-icon.png'
import arrowRight from '@static/images/vip/arrow-right.png'
import iconStar from '@static/images/vip/star.png'
import iconMetal from '@static/images/vip/metal.png'
import styles from '@scss/pages/vip/card.scss'

type PageOwnProps = {

}
type PageState = {}

type IProps = PageOwnProps

interface Card {
  props: IProps;
}

class Card extends Component{
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <View className={styles.cardBox}>
        <View className={styles.cardHeader}>等级规则</View>
        <View className={`${styles.cardBody} ${styles.cardGrade1}`}>
          <View className={styles.gradeHeader}>
            <View className={styles.gradeLeft}>
              <View className={styles.authorAvatar}></View>
              <View className={styles.memberGrade}>
                <Image src={gradeIcon} className={styles.gradeIcon}></Image>4
              </View>
              <Text className={styles.gradeName}>铂金卡会员</Text>
            </View>
            <View className={styles.gradeRight}>积分9970
              <Image src={arrowRight} className={styles.gradeIcon}></Image>
            </View>
          </View>
          <View className={styles.gradeBody}>
            <Image src={iconStar} className={styles.progressIcon}></Image>
            <View className={styles.progressColumn}>
              <View className={styles.progressBar}></View>
              <View className={styles.progressPercent}>
                <Text className={styles.percentData}>200</Text>/300
              </View>
            </View>
            <Image src={iconMetal} className={styles.progressIcon}></Image>
          </View>
          <View className={styles.gradeFooter}>2018.01.01 0点前,再获得610积分升级为银卡会员</View>
        </View>
      </View>
    )
  }
}

export default Card as ComponentClass<PageOwnProps, PageState>
