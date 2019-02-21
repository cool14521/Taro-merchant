import { ComponentClass } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

import classNames from 'classnames'
import styles from '@scss/pages/index/trial.scss'

type PageStateProps = {
}

type PageDispatchProps = {
}

type PageOwnProps = {}

type PageState = {
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps
type IState = PageState
interface Popular {
  props: IProps;
  state: IState;
}

class Popular extends Component {
  render () {
    return (
      <View className={styles.trial}>
        <View className={styles.title}>
          <Text className={styles.text}>限量试用</Text>
        </View>
        <View className={styles.wrap}>

          <View className={styles.item}>
            <View className={styles.inner}>
              <View className={styles.itemTitle}>
                澳洲本土系列薰衣草单方精油 25ML
              </View>
              <View className={styles.line}></View>
              <View className={styles.subtitles}>
                <Text className={classNames({
                  [styles.subtitle]:true,
                  [styles.marginRight]: true
                })}>
                  澳洲限量特供商品
                </Text>
                <Text className={styles.subtitle}>
                  澳洲限量特供商品
                </Text>
              </View>

              <View className={styles.price}>
                <Text className={styles.salePrice}>￥</Text>118
              </View>
              <Button className={styles.button}>立即试用</Button>

            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Popular as ComponentClass<PageOwnProps, PageState>
