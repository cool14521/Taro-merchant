import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, RichText, Text, Image } from '@tarojs/components'
import fly from '@configs/fly'
import {ResponseSuccess} from '@constants/response'
import styles from '@scss/pages/community/detail.scss'
import SwiperDetail from './detail/swiperDetail'
import Product from './detail/product'
import { communityDetail, admTopicTags, detailBaseInfo, comments } from '@models/community'
import Tag from '@components/tag'
import CommentList from '@components/community/commentList'
import ScrollTop from '@components/scrollTop'

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {
  admTopicTags: admTopicTags[],
  topic: detailBaseInfo,
  comments: comments,
  top: number
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Detail {
  props: IProps
  state: PageState
}

class Detail extends Component {
  config: Config = {
    navigationBarTitleText: '详情'
  }

  constructor (props) {
    super(props)
    this.state = {
      admTopicTags: [],
      topic: {
        id: 0,
        contentHtml: '',
        name: '',
        contentText: '',
        sku: {
          name: '',
          salePrice: '',
          product: {
            productImagePath: '',
            subtitle: ''
          }
        },
        member: {
          nickname: '',
          profileImage: '',
          addFollow: false
        },
        publishTime: ''
      },
      comments: {
        rows: [],
        total: 0
      },
      top: 0
    }
  }
  componentWillMount () {
    this.fetchDetail()
  }

  // 监听滚动条坐标
  onPageScroll(e) {
    this.setState({
      top: e.scrollTop
    })
  }

  // 获取detail数据
  async fetchDetail() {
    Taro.showLoading({
      title: '正在加载',
      mask: true
    })
    // ${this.$router.params.id}
    // 313
    try{
      const res = await fly.get<communityDetail>(`/api/wap/topic/${this.$router.params.id}/get`)
      if(res.data.code === ResponseSuccess){
        this.setState({
          admTopicTags: res.data.data.topic.admTopicTags,
          topic: res.data.data.topic,
          comments: res.data.data.comments
        })
      }
      Taro.hideLoading()
    }catch(e) {
      Taro.hideLoading()
    }
  }

  goBack() {
    Taro.navigateBack()
  }

  // 跳转评论
  navTo(e) {
    e.stopPropagation()
    // this.$router.params.id
    let params = {
      topicId: this.$router.params.id
    }
    Taro.navigateTo({
      url: `/pages/community/comment?data=${JSON.stringify(params)}`
    })
  }

  // 关注按钮
  async followStatus(member) {
    const res = await fly.post<communityDetail>(`/api/wap/forum/${member.addFollow ? 'addFollow' : 'delFollow'}`, {
      memberIds: [member.id]
    })
    if(res.data.code === ResponseSuccess){
      // this.setState((prevState: PageState) => {
      //   prevState.topic.member.addFollow = !prevState.topic.member.addFollow
      // })
      let topic = this.state.topic
      topic.member.addFollow = !topic.member.addFollow
      this.setState({
        topic: topic
      })
    }
  }

  render () {
    let content = this.state.topic.contentHtml ? this.state.topic.contentHtml.replace(/\<img/gi, '<img style="max-width:100%;height:auto"') : this.state.topic.contentText
    return (
      <View className={styles.wrap}>
        <View onClick={this.goBack} className={styles.back}></View>
        <SwiperDetail admTopicTags={this.state.admTopicTags}/>
        <ScrollTop top={this.state.top} />
        <View className={styles.detailBox}>

          {/* 作者信息 */}
          <View className={styles.authorColumnBox}>
            <View className={styles.authorColumn}>
              <View>
                <Image src={this.state.topic.member.profileImage} className={styles.authorImg}/>
              </View>
              <View className={styles.inner}>
                <View className={styles.title}>{this.state.topic.member.nickname}</View>
                <View className={styles.subtitle}>{this.state.topic.publishTime}</View>
              </View>
            </View>
            <Button onClick={this.followStatus.bind(this, this.state.topic.member)} className={styles.attentionBtn}>  {this.state.topic.member.addFollow ? '关注' : '取消关注'}
            </Button>
          </View>

          {/* 话题内容 */}
          <View className={styles.articleContent}>
            <View className={styles.articleTitleColumn}>
              <View className={`${styles.title} ${styles._ellipsis2}`}>
                {this.state.topic.name}
              </View>
              <Tag text={'精选'}/>
            </View>
            <View className={styles.content}>
              <RichText nodes={content} />
            </View>
          </View>

          {/* 相关商品 */}
          {this.state.topic.sku && <Product sku={this.state.topic.sku} />}

          {/* 评论 */}
          <View className={styles.commentWrap}>
            <View className={styles.cardHeader}>
              <Text>评论</Text>
              <View onClick={this.navTo.bind(this)}>共{this.state.comments.total}条评论 > </View>
            </View>
            <View className={styles.cardBody}>
              {
                this.state.comments.rows.map(items => {
                  return (
                    <CommentList key={items.id} items={items} />
                  )
                })
              }
            </View>
          </View>

          {/* 底部 */}
          <View className={styles.bottomBar}></View>

        </View>
      </View>
    )
  }
}

export default Detail as ComponentClass<PageOwnProps, PageState>
