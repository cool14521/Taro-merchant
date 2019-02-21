import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import fly from '@configs/fly'

import TopBar from './top-bar'
import Channel from './channel'
import Banner from './banner'
import BrandMark from './brand-mark'
import Popular from './popular'
import Trial from './trial'
import Section from './section'

import {ResponseSuccess} from '@constants/response'
import { toggleVisible, appendChannel } from '@actions/index/channel'
import { setBanner } from '@actions/index/banner'
import { setPopular } from '@actions/index/popular'
import { setSection } from '@actions/index/section'

import {ConstantGoldGiftResponse,
  SelectedAndShopCarNumResponse,
  ChannelStateModel, ChannelModel,
  BannerStateModel, BannerModel,
  PopularItemModel,
  SectionStateModel, SectionModel} from '@models/index'

import styles from '@scss/pages/index/index.scss'
// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

type PageStateProps = {
  channel: ChannelStateModel,
  banner: BannerStateModel,
  section: SectionStateModel
}

type PageDispatchProps = {
  dispatchToggleVisible: () => void
  dispatchAppendChannel: (channels: ChannelModel[]) => void
  dispatchSetBanner: (banners: BannerModel[]) => void
  dispatchSetPopular: (list: PopularItemModel[]) => void
  dispatchSetSection: (list: SectionModel[]) => void
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
}

const mapStateToProps = (state, ownProps) => {
  return {
    channel: state.index.channel,
    banner: state.index.banner,
    popular: state.index.popular,
    section: state.index.section
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchToggleVisible() {
      dispatch(toggleVisible())
    },
    dispatchAppendChannel(channels: ChannelModel[]) {
      dispatch(appendChannel(channels))
    },
    dispatchSetBanner(banners: BannerModel[]) {
      dispatch(setBanner(banners))
    },
    dispatchSetPopular(list: PopularItemModel[]) {
      dispatch(setPopular(list))
    },
    dispatchSetSection(list: SectionModel[]) {
      dispatch(setSection(list))
    }
  }
}


@connect(mapStateToProps, mapDispatchToProps)
class Index extends Component {

    /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
    config: Config = {
    navigationBarTitleText: '首页'
  }
  componentWillMount() {
    this.fetchIndexInfo()
  }
  componentWillReceiveProps (nextProps) {
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  async fetchIndexInfo() {
    Taro.showLoading({
      title: '正在加载',
      mask: true
    })
    try{
      await this.fetchConstantGoldGift()
      await this.fetchSelectedAndShopCarNum()
    }catch(e) {

    }
    Taro.hideLoading()
  }

  async fetchConstantGoldGift() {
    const res = await fly.get<ConstantGoldGiftResponse>('/api/wap/index/constantAndGoldGift')
    if(res.data.code === ResponseSuccess) {
      const data = res.data.data

      this.props.dispatchAppendChannel(data.catalogs)
      this.props.dispatchSetBanner(data.banners)


      // const {banners, catalogs, isShowGoldGiftBagTip,tags, unread, upgradeHint,useGroups} = res.data.data
    }
  }

  async fetchSelectedAndShopCarNum() {
    const res = await fly.get<SelectedAndShopCarNumResponse>('/api/wap/index/selectedAndShopCarNum')
    if(res.data.code === ResponseSuccess) {
      const data = res.data.data
      this.props.dispatchSetPopular(data.faddishProducts)
      const list = [{
        type: 'like',
        img: 'http://wx-img-upload.oss-cn-beijing.aliyuncs.com/img-new-express.e6ca1d4592adf353d7f71f95d5bb5807.jpg',
        link: 'https://www.baidu.com',
        list: data.like
      }, {
        type: 'newProducts',
        img: 'http://wx-img-upload.oss-cn-beijing.aliyuncs.com/img-new-express.e6ca1d4592adf353d7f71f95d5bb5807.jpg',
        link: 'https://www.baidu.com',
        list: data.newProducts
      }]
      this.props.dispatchSetSection(list)
    }
  }

  onMaskClick (e) {
    this.props.dispatchToggleVisible()
  }
  render () {
    const {channel, section} = this.props
    const sectionItems = section.list.map(item => {
      return (
        <Section key={item.type} item={item}></Section>
      )
    })
    return (
      <View className={styles.wrap}>
        {channel.visible &&
        <View onClick={this.onMaskClick.bind(this)} className={styles.maskLayer}></View>}
        <View className={styles.header}>
          <TopBar></TopBar>
          <Channel></Channel>
        </View>
        <View className={styles.content}>
          {<Banner></Banner>}
          <BrandMark></BrandMark>
          <Popular></Popular>
          <Trial></Trial>
          {sectionItems}
        </View>
      </View>
    )
  }
}

// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default Index as ComponentClass<PageOwnProps, PageState>
