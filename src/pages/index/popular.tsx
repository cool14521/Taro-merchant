import { ComponentClass } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import { connect } from '@tarojs/redux'
import PopularItem from './popular-item'
import {PopularStateModel} from '@models/index'
import styles from '@scss/pages/index/popular.scss'

type PageStateProps = {
  popular: PopularStateModel
}

type PageDispatchProps = {
}
type PageState = {}
type PageOwnProps = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps
interface Popular {
  props: IProps;
}
const mapStateToProps = (state, ownProps) => {
  return {
    popular: state.index.popular
  }
}
@connect(mapStateToProps)
class Popular extends Component {
  render () {
    const items = this.props.popular.list.map((item, index) => {
      return <PopularItem key={item.id} item={item} index={index}></PopularItem>
    })
    return (
      <View className={styles.popular}>
        <View className={styles.title}>
          <Text className={styles.text}>甄选商品人气爆款</Text>
        </View>
        {items}
      </View>
    )
  }
}

export default Popular as ComponentClass<PageOwnProps, PageState>
