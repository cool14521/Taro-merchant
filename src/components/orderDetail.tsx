import { ComponentClass } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import styles from '@/scss/components/orderDetail.scss'
import { orderDetail } from '@/models/report'

/**
 * @功能 : 报表显示订单明细
 * @headerList : 头部的list
 * @bodyList : 详细
 */

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {
  headerList: string[],
  bodyList: orderDetail[]
}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface OrderDetail {
  props: IProps
  state: PageState
}

class OrderDetail extends Component {

  render () {
    return (
      <View className={styles.orderWrap}>
        <View className={styles.title}>订单明细</View>
        <View className={styles.listTable}>
          <View className={styles.tableHeader}>
            {
              this.props.headerList.map( item =>{
                return(
                  <View key={item} className={styles.tableItem}>{item}</View>
                )
              })
            }
          </View>

          {
            this.props.bodyList.map( item =>{
              return(
                <View className={styles.tableBody} key={item.name}>
                  <View className={styles.tableItem}>{item.name}</View>
                  <View className={styles.tableItem}>{item.count}</View>
                  <View className={styles.tableItem}>{item.money}</View>
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }
}

export default OrderDetail as ComponentClass<PageOwnProps, PageState>
