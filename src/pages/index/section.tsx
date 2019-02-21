import { ComponentClass } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View,Image } from '@tarojs/components'
import FavoriteItem from './section-item'
import {SectionModel} from '@models/index'
import styles from '@scss/pages/index/section.scss'

type PageStateProps = {
}

type PageDispatchProps = {
}

type PageOwnProps = {
  item: SectionModel
}

type PageState = {
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps
interface Section {
  props: IProps;
}

class Section extends Component {
  static defaultProps = {
    item: {
      type: '',
      img: '',
      list: [],
      link: ''
    }
  }
  render () {
    const left = this.props.item.list.filter((item, index) => {
      return index % 2 !== 0
    })
    const right = this.props.item.list.filter((item, index) => {
      return index % 2 === 0
    })
    const leftFavoriteItems = left.map((leftItem, index) => {
      return (
        <FavoriteItem
          key={leftItem.id}
          item={leftItem}
          index={index}
        ></FavoriteItem>
      )
    })
    const rightFavoriteItems = right.map((rightItem, index) => {
      return (
        <FavoriteItem
          key={rightItem.id}
          item={rightItem}
          index={index}
        ></FavoriteItem>
      )
    })
    return (
      <View className={styles.favorite}>
        <View className={styles.favoriteLeft}>
          <View className={styles.banner}>
            <Image className={styles.bannerImg}
              src={this.props.item.img}/>
          </View>
          {leftFavoriteItems}
        </View>
        <View className={styles.favoriteRight}>
          {rightFavoriteItems}
          <View className={styles.more}>
            查看更多
            <View className={styles.moreIcon}></View>
          </View>
        </View>
      </View>
    )
  }
}

export default Section as ComponentClass<PageOwnProps, PageState>
