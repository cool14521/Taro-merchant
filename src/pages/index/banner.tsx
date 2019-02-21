import { ComponentClass } from 'react'
import Taro, {Component} from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import {Swiper, SwiperItem, Image} from '@tarojs/components'
import {BannerStateModel} from '@models/index'


import styles from '@scss/pages/index/banner.scss'

type PageStateProps = {
  banner: BannerStateModel
}

type PageDispatchProps = {}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Banner {
  props: IProps;
}

const mapStateToProps = (state, ownProps) => {
  return {
    banner: state.index.banner
  }
}

@connect(mapStateToProps)
class Banner extends Component {
  render() {
    const list = this.props.banner.list || []
    const swiperItems = list.map((banner) => {
      return (
        <SwiperItem key={banner.imgUrl}>
          <Image
            className={styles.swiperImage}
            src={banner.imgUrl}/>

            />
        </SwiperItem>
      )
    })
    return (
      <Swiper
        className={styles.swiper}
        autoplay
        indicatorDots>
        {swiperItems}
      </Swiper>
    )
  }
}
export default Banner as ComponentClass<PageOwnProps, PageState>
