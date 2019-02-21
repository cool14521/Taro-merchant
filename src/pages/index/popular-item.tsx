import { ComponentClass } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import classNames from 'classnames'

import styles from '@scss/pages/index/popular-item.scss'
import {PopularItemModel} from '@models/index'
type PageStateProps = {

}

type PageDispatchProps = {
}

type PageOwnProps = {
  item: PopularItemModel
  index: number
}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface PopularGoods {
  props: IProps;
}

class PopularGoods extends Component {
  render () {
    const {item, index} = this.props
    // 奇数位
    const isEven = (index % 2 === 0)
    const itemClass = classNames({
      [styles.item]: true,
      [styles.item_reverse]: isEven
    })
    const mediaTagClass = classNames({
      [styles.mediaTag] : true,
      [styles.mediaTagLeft]: !isEven,
      [styles.mediaTagRight]: isEven
    })
    return (
      <View className={itemClass}>
        <View className={styles.media}>
          <Image className={styles.mediaImg} src={item.imgPath}/>
          <View className={mediaTagClass}>
            <Text className={styles.mediaTagText}>
              热销推荐
            </Text>
          </View>
        </View>

        <View className={styles.inner}>
          <View className={styles.promotion}>
            {item.promotion || '买精油到 IN ESSENCE'}
          </View>
          <View className={styles.title}>
            {item.name}
          </View>
          <View className={styles.subtitle}>
            {item.subtitle}&ensp;
          </View>
          <View className={styles.price}>
            <View className={styles.priceItem}>
              <Text className={styles.priceSale}>
                ￥
              </Text>
              {item.activityPrice || item.salePrice}
            </View>
            {item.activityPrice && item.salePrice &&
            <View className={styles.priceOrigin}>
              ￥{item.salePrice}
            </View>
            }
            {item.typeName &&
            <View className={styles.priceType}>{item.typeName}</View>
            }
          </View>
        </View>
      </View>
    )
  }
}

export default PopularGoods as ComponentClass<PageOwnProps, PageState>
