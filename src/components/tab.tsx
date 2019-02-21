import Taro, {Component} from '@tarojs/taro'
import { ComponentClass } from 'react'
import {View} from '@tarojs/components'
import styles from '@scss/components/tab.scss'
import {TabModel} from '@models/tab'

/**
 * @功能 : tab切换
 * @list : 展示的list
 * @currentTab : 当前tab
 * @onTabClick : 点击tab callback
 */

type PageOwnProps = {
  list: TabModel[],
  currentTab: string,
  onTabClick: (value: string) => void
}
type PageState = {}

type IProps = PageOwnProps

interface Tab {
  props: IProps;
}

class Tab extends Component{
  onTabClick(value) {
    this.props.onTabClick && this.props.onTabClick(value)
  }
  render() {
    const { list } = this.props
    return (
      <View className={styles.mainTab}>
        <View className={styles.mainTabLinks}>
          {list.map((items) => {
            return (
              <View
                key={items.value}
                className={`${styles.item} ${this.props.currentTab  === items.value ? styles.active : ''}`}
                onClick={this.onTabClick.bind(this, items.value)}
              >
                {items.name}
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}

export default Tab as ComponentClass<PageOwnProps, PageState>
