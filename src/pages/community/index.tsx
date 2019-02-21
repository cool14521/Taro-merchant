import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import fly from '@configs/fly'
import {ResponseSuccess} from '@constants/response'
import TopBar from '@components/top-bar'
import Tab from '@components/tab'
import EmptyList from '@components/emptyList'
import ScrollTop from '@components/scrollTop'
import styles from '@scss/pages/community/index.scss'
import {TabModel} from '@models/tab'
import Card from './card'
import SwiperAttention from './swiperAttention'
import { communityList, mainList } from '@models/community'

type PageStateProps = {}

type PageDispatchProps = {
  add: () => void
  dec: () => void
  asyncAdd: () => any
}

type PageOwnProps = {}

type PageState = {
  tabList: TabModel[],
  currentTab: string,
  AttentionSwiper: Array<any>,
  form: {
    limit: number,
    offset: number,
    searchTag: string
  },
  total: number,
  list: mainList[],
  top: number,
  scrollTopNum: number
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
  state: PageState
}

class Index extends Component {
  config: Config = {
    navigationBarTitleText: '首页'
  }
  constructor (props) {
    super(props)
    this.state = {
      tabList: [
        {
        name: '热门',
        value: 'HOT'
      },
      {
        name: '关注',
        value: 'FAVORITE'
      },
      {
        name: '试用报告',
        value: 'REPORT'
      }],
      currentTab: 'HOT', // 当前tab
      AttentionSwiper: [], //
      form: {
        limit: 10,
        offset: 0,
        searchTag: 'HOT'
      },
      list: [],
      total: 0,
      top: 0,
      scrollTopNum: 0
    }
  }

  componentWillMount () {
    this.fetchList()
    // this.fetchAttention()
  }

  // list滚动到底部
  onScrollToLower() {
    this.fetchList()
  }

  // 滚动位置
  onScroll(e, event) {
    this.setState({
      top: e.detail ? e.detail.scrollTop : event.detail.scrollTop,
      scrollTopNum: e.detail ? e.detail.scrollTop : event.detail.scrollTop
    })
  }

  // scroll-view 返回顶部
  onScrollViewToTop(){
    this.setState({
      scrollTopNum: 0
    })
  }
  // 获取list数据
  async fetchList() {
    Taro.showLoading({
      title: '正在加载',
      mask: true
    })

    try{
      const res = await fly.get<communityList>('/api/wap/topic', this.state.form)
      if(res.data.code === ResponseSuccess){
        this.setState({
          list: this.state.list.concat(res.data.data.rows),
          total: res.data.data.total,
          form: {
            limit: this.state.form.limit,
            searchTag: this.state.form.searchTag,
            offset: this.state.form.offset + this.state.form.limit
          }
        })
      }
      Taro.hideLoading()
    }catch(e) {
      Taro.hideLoading()
    }
  }

  // 获取关注的人
  async fetchAttention() {
    Taro.showLoading({
      title: '正在加载',
      mask: true
    })

    try{
      const res = await fly.get<communityList>('/api/wap/forum/myFollows?limit=12')
      if(res.data.code === ResponseSuccess){
        console.log(res)
        // this.setState({
        //   list: res.data.data.rows
        // })
      }
      Taro.hideLoading()
    }catch(e) {
      Taro.hideLoading()
    }
  }

  // 点击tab
  onTabClick (value) {
    if(value === this.state.currentTab){
      return
    }
    this.setState({
      currentTab: value,
      total: 0,
      list: [],
      form: {
        limit: this.state.form.limit,
        searchTag: value,
        offset: 0
      }
    }, () => {
      this.fetchList()
    })
  }

  render () {
    return (
      <View className={styles.wrap}>
        <ScrollTop top={this.state.top} onScrollViewToTop={this.onScrollViewToTop.bind(this)} isScrollView/>
        <View className={styles.barAbsoluteTop}>
          <TopBar url='/pages/community/search'/>
          <Tab
            list={this.state.tabList}
            currentTab={this.state.currentTab}
            onTabClick={this.onTabClick.bind(this)}
          />
        </View>
        <View className={styles.content}>
          <ScrollView
            className={styles.scrollView}
            scrollY
            scrollWithAnimation
            scrollTop={this.state.scrollTopNum}
            onScroll={this.onScroll.bind(this)}
            onScrollToLower={this.onScrollToLower.bind(this)}>
            {this.state.currentTab === 'FAVORITE' && <SwiperAttention />}
            {
              this.state.list.map(items => {
                return (
                  <Card key={items.id} items={items} />
                )
              })
            }
            {!this.state.list.length && <EmptyList text='相关话题'/> }
          </ScrollView>
        </View>
      </View>
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>
