import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { Image, Swiper, SwiperItem } from '@tarojs/components'
import { admTopicTags } from '@models/community'
import styles from '@scss/pages/community/detail/swiperDetail.scss'

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {
  admTopicTags: admTopicTags[]
}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface SwiperDetail {
  props: IProps
  state: PageState
}

class SwiperDetail extends Component {
  config: Config = {
    navigationBarTitleText: '首页'
  }

  static defaultProps = {
    admTopicTags: []
  }

  render () {
    return (
      <Swiper
        className={styles.swiperWrap}
        autoplay>
        {
          this.props.admTopicTags.map( items => {
            return (
              <SwiperItem key={items.id}>
                <Image src={items.imagePath} className={styles.swiperImg}/>
              </SwiperItem>
            )
          })
        }
      </Swiper>
    )
  }
}

export default SwiperDetail as ComponentClass<PageOwnProps, PageState>
