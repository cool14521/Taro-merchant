import ResponseModel from './response'

export interface list {
  data: any[]
}
// 订单明细
export interface orderDetail {
  name: string,
  count: string,
  money: string
}

// 报表日交易数据
export interface reportDay extends ResponseModel<list> {}
