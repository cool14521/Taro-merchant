import Taro, {Component} from '@tarojs/taro'
import { ComponentClass } from 'react'
import {View, Image} from '@tarojs/components'
import styles from '@scss/components/emptyList.scss'
import emptyImg from '@static/images/icon-no-result.png'

/**
 * @功能 : 空列表展示样式
 * @text : 展示的文案
 * @img : 展示的图片
 * @className : 不用图片不同尺寸
 */

type PageOwnProps = {
  text?: string,
  img?: any,
  className?: string
}
type PageState = {}

type IProps = PageOwnProps

interface EmptyList {
  props: IProps;
}

class EmptyList extends Component{
  static defaultProps = {
    img: emptyImg,
    text: '相关内容'
  }

  render() {
    return (
      <View className={styles.tipBox}>
        <View className={styles.tipsNoResult}>
          <Image src={this.props.img} className={`${styles.icon} ${this.props.className}`}/>
          <View>很抱歉，没有找到</View>
          <View>{this.props.text}</View>
        </View>
      </View>
    )
  }
}

export default EmptyList as ComponentClass<PageOwnProps, PageState>
