import { ComponentClass } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
/**
 * @功能 : 报表显示订单明细
 * @list : 展示的list
 * @currentTab : 当前tab
 * @onTabClick : 点击tab callback
 */

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps
  state: PageState
}

class Index extends Component {

  render () {
    return (
      <View></View>
    )
  }
}

export default Index as ComponentClass<PageOwnProps, PageState>
