import { ComponentClass } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { toggleVisible, setVisible, setActiveChannel } from '@actions/index/channel'
import ChannelItem from './channel-item'
import {ChannelStateModel, ChannelModel} from '@models/index'
import styles from '@scss/pages/index/channel.scss'

type PageStateProps = {
  channel: ChannelStateModel
}

type PageDispatchProps = {
  dispatchToggleVisible: () => void
  dispatchInvisible: () => void
  dispatchSetActiveChannel: (activeIndex: number) => void
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Channel {
  props: IProps;
}

const mapStateToProps = (state, ownProps) => {
  return {
    channel: state.index.channel
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchToggleVisible() {
      dispatch(toggleVisible())
    },
    dispatchSetActiveChannel(activeIndex: number) {
      dispatch(setActiveChannel(activeIndex))
    },
    dispatchInvisible() {
      dispatch(setVisible(false))
    }
  }
}

@connect(mapStateToProps,mapDispatchToProps)
class Channel extends Component {

  componentWillReceiveProps (nextProps) {
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  onArrowClick = () => {
    this.props.dispatchToggleVisible()
  }
  channelSelectHandler(channel:ChannelModel, index: number){
    console.log(channel)
    this.props.dispatchInvisible()
    this.props.dispatchSetActiveChannel(index)
  }

  render () {
    const channelProp = this.props.channel
    const channels = channelProp.list.map((channel,i) => {
      return (
        <ChannelItem
          key={channel.name}
          item={channel}
          index={i}
          tag={false}
          activeIndex={channelProp.activeIndex}
          onChannelSelect={this.channelSelectHandler.bind(this)}
        ></ChannelItem>
      )
    })
    const tags = channelProp.list.map((channel,i) => {
      return (
        <ChannelItem
          key={channel.name}
          item={channel}
          index={i}
          tag={true}
          activeIndex={channelProp.activeIndex}
          onChannelSelect={this.channelSelectHandler.bind(this)}
        ></ChannelItem>
      )
    })
    return (
      <View className={styles.channelContainer}>
        <View className={styles.channelPanel}>
          {/* 横滚动条 */}
          {!channelProp.visible &&
          <View className={styles.channelScrollWrapper}>
            {channels}
          </View>
          }
          {/* 全部频道 */}
          {
            channelProp.visible &&
          <View className={styles.text}>全部频道</View>
          }

          {/* 箭头 */}
          <View onClick={this.onArrowClick}
            className={`${styles.icon} ${channelProp.visible ? styles.iconVTop : styles.iconVBottom}`}>
          </View>
        </View>

        {/* 列表 */}
        {channelProp.visible &&
        <View className={styles.channelList}>
          {tags}
        </View>}
      </View>
    )
  }
}

export default Channel as ComponentClass<PageOwnProps, PageState>
