import Taro, {Component} from '@tarojs/taro'
import { ComponentClass } from 'react'
import {View, Image} from '@tarojs/components'
import styles from '@scss/pages/community/card.scss'
import mainImg from '@static/staticImg/banner750x400.jpg'
import { mainList } from '@models/community'
import Tag from '@components/tag'
import brandMarkPng1 from '@static/images/icon/icon-brand-mark-1.png'

type PageOwnProps = {
  items: mainList
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
  // 跳转详情
  navTo(id: number, e) {
    e.stopPropagation()
    Taro.navigateTo({
      url: `/pages/community/detail?id=${id}`
    })
  }
  render() {
    let items = this.props.items
    return (
      <View onClick={this.navTo.bind(this, items.id)} className={`${styles.card} ${styles.cardArticle}`}>
        <View className={styles.cardHeader}>
          <View className={styles.authorColumn}>
            <Image src={items.member.profileImage ? items.member.profileImage : brandMarkPng1} className={styles.authorImg} />
            <View className={styles.itemTitle}>{items.member.nickname}</View>
          </View>
          {items.status === 'FEATURED' && <Tag text='精选' />}
        </View>
        <View className={styles.cardBody}>
          <View className={styles.itemGoods}>
            <View className={styles.mediaColumn}>
              <View className={`${styles.itemMedia} ${styles.itemMediaColumn1}`}>
                <Image src={items.admTopicTags[0] ? items.admTopicTags[0].imagePath : mainImg} className={styles.itemImg} />
              </View>
              <View className={`${styles.itemMedia} ${styles.itemMediaColumn2}`}>
                <Image src={items.admTopicTags[0] ? items.admTopicTags[0].imagePath : mainImg} className={`${styles.itemImg} ${styles.itemImgTop}`} />
                <Image src={items.admTopicTags[0] ? items.admTopicTags[0].imagePath : mainImg} className={styles.itemImg} />
              </View>
            </View>
            <View className={styles.itemInner}>
              <View className={styles.itemFlexBetween}>
                <View className={styles.title}>{items.name}</View>
              </View>
              <View className={styles.itemSubtitle}>{items.contentText}</View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Card as ComponentClass<PageOwnProps, PageState>
