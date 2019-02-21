import { ComponentClass } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import classNames from 'classnames'

import {ChannelModel} from '@models/index'
import styles from '@scss/pages/index/channel-item.scss'

type PageStateProps = {
}

type PageDispatchProps = {

}

type PageOwnProps = {
  tag: boolean,
  index: number,
  item: ChannelModel,
  activeIndex: number,
  onChannelSelect: (channel: ChannelModel, index: number) => void
}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface ChannelItem {
  props: IProps;
}
class ChannelItem extends Component {
  static defaultProps = {
    item: {
      name: '',
      hot: false,
      _checked: false
    }
  }
  clickHandler(channel:ChannelModel, index: number, e){
    e.preventDefault()
    if(index !== this.props.activeIndex) {
      // callback要提前执行 dispatch 会造成渲染阻止回调
      this.props.onChannelSelect(channel, index)
    }
  }
  render () {
    const {tag, index, item} = this.props
    let result
    if(tag) {
      const tagClass = classNames({
        [styles.channelTag]: true,
        [styles._active]: item._checked
      })
      result = (
        <Text key={item.name}
          onClick={this.clickHandler.bind(this, item, index)}
          className={tagClass}>{item.name}</Text>
      )

    }else {
      const channelItemClass = classNames({
        [styles.channelItem]: true,
        [styles._active]: item._checked
      })

      const channelTagClass = classNames({
        [styles.text]: true,
        [styles._active]: item._checked
      })


      result = (
        <View
          key={item.name}
          onClick={this.clickHandler.bind(this, item, index)}
          className={channelItemClass}>
          <View className={channelTagClass}>
            {item.name}
            {item.hot && <View className={styles.badge}>hot</View>}
          </View>
        </View>
      )
    }
    return result
  }

}

export default ChannelItem as ComponentClass<PageOwnProps, PageState>
