import ResponseModel from './response'

export interface list {
  data: cate[]
}
// 服务分类
export interface cate {
  label: string,
  value: string
}

// 服务分类数据列表
export interface serviceCateList extends ResponseModel<list> {}
