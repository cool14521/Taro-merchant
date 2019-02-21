import Taro, {Component} from '@tarojs/taro'
import { ComponentClass } from 'react'
import {View} from '@tarojs/components'
import styles from '@scss/components/tag.scss'

/**
 * @功能 : 显示tag，（目前没有太多功能，样式也是简单写）
 * @text : 展示的文案
 */

type PageOwnProps = {
  text: string
}
type PageState = {}

type IProps = PageOwnProps

interface Tag {
  props: IProps;
}

class Tag extends Component{
  render() {
    return (
      <View className={styles.tag}>
        {this.props.text}
      </View>
    )
  }
}

export default Tag as ComponentClass<PageOwnProps, PageState>
