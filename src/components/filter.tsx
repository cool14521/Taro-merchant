import { ComponentClass } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import styles from '@/scss/components/filter.scss'
import arrowImg from '@/static/images/arrow.png'
/**
 * @功能 : 筛选组件
 * @headerList : 头部的list
 * @bodyList : 详细
 * @author : Dragon
 */

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {}

// 单位
type unit = {
  text: string,
  value: string
}

type PageState = {
  showService: boolean,
  showMask: boolean,
  showUnit: boolean,
  unitList: unit[],
  currentUnit: string
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Filter {
  props: IProps
  state: PageState
}

class Filter extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showService: false, // 服务选项
      showMask: false, // 遮罩层
      showUnit: false, // 单位
      unitList: [{
        text: '日',
        value: 'day'
      },{
        text: '周',
        value: 'week'
      },{
        text: '月',
        value: 'month'
      }], // 单位列表
      currentUnit: 'day' // 当前的单位
    }
  }

  // 点击服务filter
  onFilterService() {
    this.setState({
      showMask: true,
      showService: true
    })
  }

  // 点击单位filter
  onFilterUnit() {
    this.setState({
      showMask: true,
      showUnit: true
    })
  }

  // 点击时间filter
  onFilterTime() {

  }

  // 点击遮罩层
  onMask() {
    this.setState({
      showMask: false,
      showService: false,
      showUnit: false
    })
  }

  // 点击单位item
  onUnitItem(item) {
    this.setState({
      currentUnit: item.value
    })
  }

  render () {
    return (
      <View className={styles['filter_box']}>
        {/* 遮罩层 */}
        {this.state.showMask && <View onClick={this.onMask} className={styles['filter_mask']}></View>}

        {/* bar */}
        <View className={styles['bar_filter']}>
          <View onClick={this.onFilterService} className={styles['bar_item']}>
            <View className={styles['text']}>全部服务</View>
            <Image src={arrowImg} className={`${styles['arrow']}`} />
          </View>
          <View onClick={this.onFilterUnit} className={styles['bar_item']}>
            <View className={styles['text']}>月（单位）</View>
            <Image src={arrowImg} className={styles['arrow']} />
          </View>
          <View onClick={this.onFilterTime} className={styles['bar_item']}>
            <View className={styles['text']}>月</View>
            <Image src={arrowImg} className={styles['arrow']} />
          </View>
        </View>

        {/* 服务列表 */}
        {this.state.showService
          &&
          <View className={styles['filter_drop_box']}>
            <View className={styles['filter_left']}>
              <View className={`${styles['filter_item']} ${styles['active']}`}>全服</View>
              <View className={styles['filter_item']}>全部服</View>
            </View>
            <View className={styles['filter_right']}>
              <View className={`${styles['filter_item']} ${styles['active']}`}>全部服</View>
            </View>
          </View>
        }

        {/* 单位 */}
        {this.state.showUnit
          &&
          <View className={styles['filter_drop_box']}>
            <View className={styles['filter_right']}>
              {
                this.state.unitList.map( item => {
                  return (
                    <View
                      onClick={this.onUnitItem.bind(this, item)}
                      key={item.value}
                      className={`${styles['filter_item']} ${this.state.currentUnit === item.value ? styles['active']: ''}`}>
                      {item.text}
                    </View>
                  )
                })
              }
            </View>
          </View>
        }
      </View>
    )
  }
}

export default Filter as ComponentClass<PageOwnProps, PageState>
