import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import styles from '@scss/pages/community/search.scss'
import SearchBar from '@components/search-bar'
import SearchHistory from '@components/search-history'

type PageStateProps = {}
type PageDispatchProps = {}
type PageOwnProps = {}
type PageState = {
  keyword?: string,
  historyName: string
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Search {
  props: IProps
  state: PageState
}

class Search extends Component {
  config: Config = {
    navigationBarTitleText: '搜索'
  }

  constructor(props){
    super(props)
    this.state = {
      keyword: '',
      historyName: 'topicHistory'
    }
  }

  onSearch(value: string) {
    this.setState({
      keyword: value
    })
  }

  // 存储完毕跳转页面
  onStorageCompleted(keyword){
    this.navToSearchResult(keyword)
  }

  // 跳转搜索结果页面
  navToSearchResult(keyword) {
    Taro.navigateTo({
      url: `/pages/community/searchResult?keyword=${keyword}`
    })
  }

  render () {
    return (
      <View className={styles.wrap}>
        <SearchBar onSearch={this.onSearch.bind(this)} />
        <View className={styles.content}>
          <SearchHistory historyName={this.state.historyName} keyword={this.state.keyword} onStorageCompleted={this.onStorageCompleted.bind(this)}/>
        </View>
      </View>
    )
  }
}

export default Search as ComponentClass<PageOwnProps, PageState>
