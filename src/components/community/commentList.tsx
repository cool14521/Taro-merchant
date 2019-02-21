import { ComponentClass } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import styles from '@scss/components/community/commentList.scss'
import { commentListDetail } from '@models/community'

/**
 * @功能 ：社群评论列表，
 * @items ： 详细list
 * ⚠️ 待完善回复功能...
 */

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {
  items: commentListDetail,
  onReply?: (value: string) => void
}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface CommentList {
  props: IProps
  state: PageState
}

class CommentList extends Component {
  // 一级回复
  replyOne(items){
    this.props.onReply && this.props.onReply(items)
  }
  render () {
    let items = this.props.items
    return (
      <View className={styles.commentWrap}>

        <View className={styles.commentHeader}>
          <View className={styles.author}>
            <View>
              <Image src={items.sender.profileImage} className={styles.authorImg}/>
            </View>
            <View className={styles.inner}>
              <View className={styles.title}>{items.sender.nickname}</View>
              <View className={styles.subtitle}>{items.createTime}</View>
            </View>
          </View>
          <View onClick={this.replyOne.bind(this, items)}>回复</View>
        </View>

        <View className={styles.commentBody}>
          <Text className={styles.text}>{items.text}</Text>
          {items.admTopicComments.total && <View className={styles.reply}>
            {
              items.admTopicComments.rows.map( item => {
                return (
                  <View key={item.id} className={styles.replyItem}>
                    <Text onClick={this.replyOne.bind(this, item)}>{item.sender.nickname}</Text>
                    <Text className={styles.receiver}>回复{item.receiver.nickname}:</Text>
                    {item.text}
                  </View>
                )
              })
            }
          </View>}
        </View>

      </View>
    )
  }
}

export default CommentList as ComponentClass<PageOwnProps, PageState>
