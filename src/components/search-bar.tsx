import Taro, {Component} from '@tarojs/taro'
import { ComponentClass } from 'react'
import {View, Image, Input} from '@tarojs/components'
import styles from '@scss/components/search-bar.scss'
import searchPng from '@static/images/icon/icon-search.png'
import arrowLeft from '@static/images/icon/arrow-left.png'

/**
 * @功能 : 搜索页面头部
 * @keyword : 展示的文案
 * @onSearch : 点击搜索callback
 */

type PageOwnProps = {
  keyword?: string,
  onSearch: (value: string) => void
}
type PageState = {
  value?: string
}

type IProps = PageOwnProps

interface SearchBar {
  props: IProps;
  state: PageState
}

class SearchBar extends Component{
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  onSearch() {
    this.state.value && this.props.onSearch && this.props.onSearch(this.state.value)
  }

  componentWillMount() {
    this.setState({
      value: this.props.keyword
    })
  }

  goBack() {
    Taro.navigateBack()
  }

  onInput(e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <View className={styles.barAbsoluteTop}>
        <View className={`${styles.bar} ${styles.barSearch} ${styles.border}`}>
          <View onClick={this.goBack}>
            <Image className={styles.arrowLeft} src={arrowLeft}></Image>
          </View>
          <View className={styles.inputWrap}>
            <View className={styles.searchImgWrap}>
              <Image src={searchPng} className={styles.searchImg}/>
            </View>
              <Input value={this.state.value} onInput={this.onInput} onConfirm={this.onSearch.bind(this)} className={styles.searchInput} type="text" placeholder="查找话题"/>
          </View>
          <View onClick={this.onSearch.bind(this)}>搜索</View>
        </View>
      </View>
    )
  }
}

export default SearchBar as ComponentClass<PageOwnProps, PageState>
