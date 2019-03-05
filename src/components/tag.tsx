import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Tag {
  props: IProps
  state: PageState
}

class Tag extends Component {

  render () {
    return (
      <View>hhh </View>
    )
  }
}

export default Tag as ComponentClass<PageOwnProps, PageState>
