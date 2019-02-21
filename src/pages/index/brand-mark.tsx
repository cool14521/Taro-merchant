import Taro, { Component } from '@tarojs/taro'
import { View,Image } from '@tarojs/components'
import brandMarkPng1 from '@static/images/icon/icon-brand-mark-1.png'
import brandMarkPng2 from '@static/images/icon/icon-brand-mark-2.png'
import brandMarkPng3 from '@static/images/icon/icon-brand-mark-3.png'
import styles from '@scss/pages/index/brand-mark.scss'
export default class BrandMark extends Component {
  render () {
    return (
      <View className={styles.brandMark}>
        <View className={styles.item}>
          <Image className={styles.itemImg} src={brandMarkPng1}/>
          澳洲进口
        </View>
        <View className={styles.item}>
          <Image className={styles.itemImg} src={brandMarkPng2}/>
          澳洲进口
        </View>
        <View className={styles.item}>
          <Image className={styles.itemImg} src={brandMarkPng3}/>
          100%纯精油
        </View>
      </View>
    )
  }
}

