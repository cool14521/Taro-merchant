import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, ScrollView, Button, Textarea } from '@tarojs/components'
import fly from '@configs/fly'
import {ResponseSuccess} from '@constants/response'
import { commentListDetail, commentList } from '@models/community'
import CommentList from '@components/community/commentList'
import styles from '@scss/pages/community/comment.scss'

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {
  form: {
    limit: number,
    offset: number,
    topicId: string
  },
  total: number,
  list: commentListDetail[],
  content: string,
  placeholder: string,
  replyData: {
    admTopic: {
      id: number
    },
    parentComment: {
      id: number
    },
    prevComment: {
      id: number
    },
    receiver: {
      id: number
    },
    receiverType: number,
    level: number
  }
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps
  state: PageState
}

class Index extends Component {
  config: Config = {
    navigationBarTitleText: '评论'
  }

  constructor (props) {
    super(props)
    this.state = {
      form: {
        limit: 10,
        offset: 0,
        topicId: ''
      },
      list: [],
      total: 0,
      content: '',
      placeholder: '说出你的想法',
      replyData: {
        admTopic: {
          id: 0
        },
        parentComment: {
          id: 0
        },
        prevComment: {
          id: 0
        },
        receiver: {
          id: 0
        },
        receiverType: 0,
        level: 1
      }
    }
  }

  componentWillMount () {
    let form = this.state.form
    form.topicId = JSON.parse(this.$router.params.data).topicId
    // form.topicId = '313'
    this.setState({
      form: form
    }, () => {
      this.fetchList()
    })
  }

  onScrollToLower() {

  }

  // 获取list数据
  async fetchList() {
    Taro.showLoading({
      title: '正在加载',
      mask: true
    })

    try{
      const res = await fly.get<commentList>('/api/wap/topic/comment/queryTopicComments', this.state.form)
      if(res.data.code === ResponseSuccess){
        let form = this.state.form
        form.offset = this.state.form.offset + this.state.form.limit
        this.setState({
          list: this.state.list.concat(res.data.data.rows),
          total: res.data.data.total,
          form: form
        })
      }
      Taro.hideLoading()
    }catch(e) {
      Taro.hideLoading()
    }
  }

  onReply(items) {
    console.log(items)
  }

  render () {
    return (
      <View className={styles.commentWrap}>
        <ScrollView
          className={styles.scrollView}
          scrollY
          scrollWithAnimation
          onScrollToLower={this.onScrollToLower.bind(this)}>
          {
            this.state.list.map( items => {
              return (
                <CommentList onReply={this.onReply.bind(this)} key={items.id} items={items}/>
              )
            })
          }
        </ScrollView>
        <View className={styles.barBottom}>
          <View className={styles.textareaWrap}>
            <Textarea value={this.state.content} placeholder={this.state.placeholder} auto-height fixed className={styles.textareaContent}/>
          </View>
          <Button className={styles.btn}>评论</Button>
        </View>
      </View>
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>
