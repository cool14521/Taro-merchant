import '@tarojs/async-await'
import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/community/index',

      'pages/community/comment',
      'pages/index/index',
      'pages/vip/index',
      'pages/cart/index',
      'pages/user/index',
      'pages/community/detail',
      'pages/community/search',
      'pages/community/searchResult',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'In Essence',
      navigationBarTextStyle: 'black'
    },
    'tabBar': {
      color: '#333',
      selectedColor: '#ff2d47',
      backgroundColor: '#fff',
      borderStyle: 'black',
      position: 'bottom',
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: 'static/images/tabs/index.png',
          selectedIconPath: 'static/images/tabs/index-active.png'
        },
        {
          pagePath: 'pages/community/index',
          text: '社群',
          iconPath: 'static/images/tabs/community.png',
          selectedIconPath: 'static/images/tabs/community-active.png'
        },
        {
          pagePath: 'pages/vip/index',
          text: 'VIP会员',
          iconPath: 'static/images/tabs/vip.png',
          selectedIconPath: 'static/images/tabs/vip-active.png'
        },
        {
          pagePath: 'pages/cart/index',
          text: '购物车',
          iconPath: 'static/images/tabs/cart.png',
          selectedIconPath: 'static/images/tabs/cart-active.png'
        },
        {
          pagePath: 'pages/user/index',
          text: '我的',
          iconPath: 'static/images/tabs/user.png',
          selectedIconPath: 'static/images/tabs/user-active.png'
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
