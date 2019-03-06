import ResponseModel from './response'

export interface list {
  rows: any[]
}

// 报表日交易数据
export interface reportDay extends ResponseModel<list> {}
