import Taro, {Component} from '@tarojs/taro'

import {View, Image} from '@tarojs/components'
import searchPng from '@static/images/icon/icon-search.png'
import logoPng from '@static/images/logo.png'
import messagePng from '@static/images/icon/icon-message.png'
import styles from '@scss/pages/index/top-bar.scss'
export default class TopBar extends Component {
  render() {
    return (
      <View
        className={styles.topBar}>
        <View className={styles.bar}>
          <View className={styles.barItem}>
            <Image className={styles.iconSearch} src={searchPng}></Image>
          </View>
          <View className={styles.barItem}>
            <Image src={logoPng} className={styles.iconLogo} />
          </View>
          <View className={styles.barItem}>
            <View className={styles.message}>
              <Image src={messagePng} className={styles.iconSearch}/>
              <View className={`${styles.badge} ${styles._solid} ${styles.badgeCircle}`}></View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
