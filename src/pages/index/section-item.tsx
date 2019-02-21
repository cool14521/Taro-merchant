import { ComponentClass } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'

import styles from '@scss/pages/index/section-item.scss'
import {SectionItemModel} from '@models/index'
type PageStateProps = {

}

type PageDispatchProps = {
}

type PageOwnProps = {
  item: SectionItemModel
  index: number
}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface PopularGoods {
  props: IProps;
}

class PopularGoods extends Component {
  render () {
    const {item} = this.props
    return (
      <View className={styles.item}>
        <View className={styles.media}>
          <Image className={styles.img} src={item.imgPath}/>
        </View>
        <View className={styles.info}>
          <View className={styles.infoTitle}>
            {item.name}
          </View>
          <View className={styles.infoSubtitle}>
            {item.subtitle}
          </View>
          <View className={styles.infoPrice}>
            <Text className={styles.infoPriceText}>
              ￥{item.salePrice}
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

export default PopularGoods as ComponentClass<PageOwnProps, PageState>
