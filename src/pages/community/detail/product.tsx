import { ComponentClass } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text, Button } from '@tarojs/components'
import styles from '@scss/pages/community/detail/product.scss'
import { sku } from '@models/community'

type PageStateProps = {}
type PageDispatchProps = {}

type PageOwnProps = {
  sku: sku
}

type PageState = {}
type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Product {
  props: IProps
  state: PageState
}

class Product extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    let sku = this.props.sku
    /* 相关商品 */
    return (
      <View className={styles.productBox}>
        <View className={styles.cardTitle}>相关商品</View>
        <View className={styles.productInfo}>
          <Image src={sku.product.productImagePath} className={styles.productImage}/>
          <View className={styles.itemInner}>
            <View className={styles.title}>{sku.name}</View>
            <View className={styles.subtitle}>{sku.product.subtitle}</View>
            <View className={styles.itemBottom}>
              <View className={styles.price}>
                <View>
                  <Text className={styles.symbol}>¥</Text>{sku.salePrice}
                </View>
                <Button className={styles.btn}>去购买</Button>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Product as ComponentClass<PageOwnProps, PageState>
