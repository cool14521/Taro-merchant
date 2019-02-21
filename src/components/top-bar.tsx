import Taro, {Component} from '@tarojs/taro'
import { ComponentClass } from 'react'

import {View, Image} from '@tarojs/components'
import searchPng from '@static/images/icon/icon-search.png'
import logoPng from '@static/images/logo.png'
import messagePng from '@static/images/icon/icon-message.png'
import styles from '@scss/pages/index/top-bar.scss'

/**
 * @功能 : 社群和首页的头部
 * @url : 左侧搜索跳转的地址
 */

type PageOwnProps = {
  url: string
}
type PageState = {}

type IProps = PageOwnProps

interface TopBar {
  props: IProps;
}

class TopBar extends Component {

  // 跳转搜索
  navToSearch(e) {
    e.stopPropagation()
    Taro.navigateTo({
      url: this.props.url
    })
  }

  // 跳转消息
  navToMessage(e) {
    e.stopPropagation()
    Taro.showToast({
      title: '暂未开发',
      icon: 'success',
      duration: 2000
    })
    // Taro.navigateTo({
    //   url: this.props.url
    // })
  }

  render() {
    return (
      <View
        className={styles.topBar}>
        <View className={styles.bar}>
          <View onClick={this.navToSearch} className={styles.barItem}>
            <Image className={styles.iconSearch} src={searchPng}></Image>
          </View>
          <View className={styles.barItem}>
            <Image src={logoPng} className={styles.iconLogo} />
          </View>
          <View className={styles.barItem}>
            <View onClick={this.navToMessage} className={styles.message}>
              <Image src={messagePng} className={styles.iconSearch}/>
              <View className={`${styles.badge} ${styles._solid} ${styles.badgeCircle}`}></View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default TopBar as ComponentClass<PageOwnProps, PageState>
