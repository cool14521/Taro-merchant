import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import fly from '@configs/fly'
import {ResponseSuccess} from '@constants/response'
import { communityList, mainList } from '@models/community'
import styles from '@scss/pages/community/search.scss'
import SearchBar from '@components/search-bar'
import EmptyList from '@components/emptyList'
import Card from './card'

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {
  keyword?: string,
  historyName: string,
  list: mainList[],
  form: {
    limit: number,
    offset: number,
    searchTag: string,
    keyword?: string
  },
  total: number
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface SearchResult {
  props: IProps,
  state: PageState
}

class SearchResult extends Component {
  config: Config = {
    navigationBarTitleText: '搜索'
  }

  constructor(props){
    super(props)
    this.state = {
      keyword: '',
      historyName: 'topicHistory',
      form: {
        limit: 10,
        offset: 0,
        searchTag: 'HOT',
        keyword: this.$router.params.keyword
      },
      list: [],
      total: 0
    }
  }

  componentWillMount () {
    this.fetchList()
  }

  onSearch(value: string) {
    this.setStorage(value)
    this.setState({
      list: [],
      form: {
        limit: 10,
        offset: 0,
        searchTag: 'HOT',
        keyword: value
      }
    }, () => {
      this.fetchList()
    })
  }

  // 存储信息
  setStorage(keyword) {
    let history = Taro.getStorageSync(this.state.historyName) || []
    history.length >= 10 && history.pop()
    history.unshift(keyword)
    history = this.unique(history)
    Taro.setStorageSync(this.state.historyName, history)
  }

  // 数组去重
  unique(history) {
    return Array.from(new Set(history))
  }

  // list滚动到底部
  onScrollToLower() {
    this.fetchList()
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
            offset: this.state.form.offset + this.state.form.limit,
            keyword: this.state.form.keyword,
          }
        })
      }
      Taro.hideLoading()
    }catch(e) {
      Taro.hideLoading()
    }
  }

  render () {
    return (
      <View className={styles.wrap}>
        <SearchBar keyword={this.$router.params.keyword} onSearch={this.onSearch.bind(this)} />
        <View className={styles.content}>
          <ScrollView
            className={styles.scrollView}
            scrollY
            onScrollToLower={this.onScrollToLower.bind(this)}
            scrollWithAnimation>
            {
              this.state.list.map(items => {
                return (
                  <Card key={items.id} items={items} />
                )
              })
            }
            {!this.state.list.length && <EmptyList text={`“${this.state.form.keyword}”相关话题`}/> }
          </ScrollView>
        </View>
      </View>
    )
  }
}

export default SearchResult as ComponentClass<PageOwnProps, PageState>
