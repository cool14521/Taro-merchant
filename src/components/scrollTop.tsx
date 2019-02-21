import { ComponentClass } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import styles from '@scss/components/scrollTop.scss'
import arrowLeft from '@static/images/icon/arrow-left.png'

/**
 * @功能 : 返回到顶部，有两种情况，1、普通页面 2、使用scroll-view
 * @top : 需要获取当前的滚动条位置，如果是普通样式page不能设置 height:100%，
 * @distance : 设置距离顶部多少显示返回顶部按钮，默认100
 * @isScrollView : 是否是scroll-view，如果是还需要传函数, 默认false
 * @onScrollViewToTop : 去设置 scroll-view 的 scrollTop值
 * ⚠️ Taro的 scroll-view 可能是版本问题，onScroll 和 scrollTop 存在问题，详见markdown
 */

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {
  top: number,
  distance?: number,
  isScrollView?: boolean,
  onScrollViewToTop?: () => void
}

type PageState = {
  show: boolean
}

type DefaultProps = Readonly<typeof defaultProps>

type IProps = PageStateProps & PageDispatchProps & PageOwnProps & DefaultProps

interface ScrollTop {
  props: IProps
  state: PageState
}

const defaultProps = {
  distance: 100,
  isScrollView: false
}
class ScrollTop extends Component {
  static defaultProps = defaultProps
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.top > this.props.distance && !this.state.show){
      this.setState({
        show: true
      })
    }else if(nextProps.top <= this.props.distance && this.state.show){
      this.setState({
        show: false
      })
    }
  }

  onClick() {
    Taro.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
    this.props.isScrollView && this.props.onScrollViewToTop && this.props.onScrollViewToTop()
  }

  render () {
    return (
      <View className={`${styles.scrollTopWrap} ${this.state.show ? '' : styles.disN}`} onClick={this.onClick.bind(this)}>
        <Image className={styles.arrowLeft} src={arrowLeft}></Image>
      </View>
    )
  }
}

export default ScrollTop as ComponentClass<PageOwnProps, PageState>
