import Taro, {Component} from '@tarojs/taro'
import { ComponentClass } from 'react'
import {View} from '@tarojs/components'
import styles from '@scss/components/search-history.scss'

/**
 * @功能 : 搜索页面搜索历史
 * @historyName : 需要存储的name
 * @keyword : 展示的文案
 * @onStorageCompleted : 存储完成callback
 */

type PageOwnProps = {
  historyName: string,
  keyword?: string
  onStorageCompleted: (any) => void
}
type PageState = {
  list: string[]
}

type IProps = PageOwnProps

interface SearchHistory {
  props: IProps;
  state: PageState
}

class SearchHistory extends Component{
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  componentDidShow() {
    this.getList()
  }

  componentWillReceiveProps(nextProps) {
    this.setStorage(nextProps.keyword)
  }

  // 获取存储信息，设置list
  getList() {
    let list = Taro.getStorageSync(this.props.historyName) || []
    this.setState({
      list: list
    })
  }

  // 存储信息
  setStorage(keyword) {
    let history = Taro.getStorageSync(this.props.historyName) || []
    history.unshift(keyword)
    history = this.unique(history)
    history.length >= 11 && history.pop()
    Taro.setStorageSync(this.props.historyName, history)
    this.props.onStorageCompleted && this.props.onStorageCompleted(keyword)
  }

  // 数组去重
  unique(history) {
    return Array.from(new Set(history))
  }

  // 点击搜索历史列表
  onSearch(item) {
    this.setStorage(item)
  }

  // 清除历史记录
  onClear() {
    Taro.removeStorageSync(this.props.historyName)
    this.setState({
      list: []
    })
  }

  render() {
    return (
      <View className={styles.searchHistory}>
        <View className={styles.titleBlock}>历史搜索</View>
        {this.state.list.map(item => {
          return (
            <View onClick={this.onSearch.bind(this, item)} key={item} className={styles.searchItems}>{item}</View>
          )
        })}
        {this.state.list.length && <View onClick={this.onClear} className={styles.btn}>清除历史记录</View>}
      </View>
    )
  }
}

export default SearchHistory as ComponentClass<PageOwnProps, PageState>
