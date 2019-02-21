import Taro, {Component} from '@tarojs/taro'
import { ComponentClass } from 'react'
import {View} from '@tarojs/components'
import HalfPrice from './privilege/half-price'
import CouponEmpty from './privilege/coupon-empty'
import CouponList from './privilege/coupon-list'
import BirthdayEmpty from './privilege/birthday-empty'
import BirthdayList from './privilege/birthday-list'
import PromotionEmpty from './privilege/promotion-empty'
import PromotionList from './privilege/promotion-list'
import TimeLimitedEmpty from './privilege/time-limited-empty'
import TimeLimitedList from './privilege/time-limited-list'
import styles from '@scss/pages/vip/privilege.scss'

type PageOwnProps = {
}
type PageState = {
  hasData: boolean,
  hasCoupon: boolean,
  hasBirthday: boolean,
  hasPromotion: boolean,
  hasTimeLimited: boolean
}

type IProps = PageOwnProps

interface Privilege {
  props: IProps;
  state: PageState;
}

class Privilege extends Component{
  constructor (props) {
    super(props)
    this.state = {
      hasData: true,
      hasCoupon: true,
      hasBirthday: true,
      hasPromotion: true,
      hasTimeLimited: true
    }
  }
  render() {
    let {hasData, hasCoupon, hasBirthday, hasPromotion, hasTimeLimited} = this.state
    return (
      <View>
        <View className={styles.privilege}>
          <View className={`${styles.privilegeItem} ${styles._selected}`}>
            <View className={styles.privilegeIconWrap}>
              <View className={`${styles.privilegeIcon} ${styles.privilege0}`}></View>
            </View>
            <View className={styles.privilegeText}>半价试用</View>
          </View>
          <View className={`${styles.privilegeItem} ${styles._selected}`}>
            <View className={styles.privilegeIconWrap}>
              <View className={`${styles.privilegeIcon} ${styles.privilege1}`}></View>
            </View>
            <View className={styles.privilegeText}>优惠券</View>
          </View>
          <View className={`${styles.privilegeItem} ${styles._selected}`}>
            <View className={styles.privilegeIconWrap}>
              <View className={`${styles.privilegeIcon} ${styles.privilege2}`}></View>
            </View>
            <View className={styles.privilegeText}>生日礼</View>
          </View>
          <View className={`${styles.privilegeItem} ${styles._selected}`}>
            <View className={styles.privilegeIconWrap}>
              <View className={`${styles.privilegeIcon} ${styles.privilege3}`}></View>
            </View>
            <View className={styles.privilegeText}>晋级礼</View>
          </View>
          <View className={`${styles.privilegeItem} ${styles._selected} ${styles._current}`}>
            <View className={styles.privilegeIconWrap}>
              <View className={`${styles.privilegeIcon} ${styles.privilege4}`}></View>
            </View>
            <View className={styles.privilegeText}>限时购</View>
          </View>
          <View className={`${styles.privilegeItem} ${styles._selected}`}>
            <View className={styles.privilegeIconWrap}>
              <View className={`${styles.privilegeIcon} ${styles.privilege5}`}></View>
            </View>
            <View className={styles.privilegeText}>新品免费试用</View>
          </View>
          <View className={`${styles.privilegeItem}`}>
            <View className={styles.privilegeIconWrap}>
              <View className={`${styles.privilegeIcon} ${styles.privilege6}`}></View>
            </View>
            <View className={styles.privilegeText}>专家服务</View>
          </View>
        </View>
        <View className={styles.privilegeContent}>
          {/* <HalfPrice hasData={hasData} /> */}
          {/* <View>{hasCoupon ? <CouponList /> : <CouponEmpty />}</View> */}
          {/* <View>{hasBirthday ? <BirthdayList /> : <BirthdayEmpty />}</View> */}
          {/* <View>{hasPromotion ? <PromotionList /> : <PromotionEmpty />}</View> */}
          <View>{hasTimeLimited ? <TimeLimitedList /> : <TimeLimitedEmpty />}</View>
        </View>
      </View>
    )
  }
}

export default Privilege as ComponentClass<PageOwnProps, PageState>
