import ResponseModel from './response'

// 话题标签
export interface admTopicTags {
  id: number,
  imagePath: string
}

// 列表数据
export interface mainList {
  id: number;
  name: string;
  contentText: string;
  admTopicTags: admTopicTags[],
  status: string;
  member: {
    profileImage: string,
    nickname: string
  }
}

export interface list {
  rows: mainList[],
  total: number
}

// 社群详情返回的结构（包括普通信息和评论）
export interface detail {
  topic: detailBaseInfo,
  comments: comments
}

// 社群详情返回的基本信息
export interface detailBaseInfo {
  id: number,
  admTopicTags?: admTopicTags[],
  contentHtml: string,
  contentText: string,
  name: string,
  sku?: sku,
  member: {
    nickname: string,
    profileImage: string,
    addFollow: boolean
  },
  publishTime: string
}

// 商品
export interface sku {
  name: string,
  salePrice: string,
  product: {
    productImagePath: string,
    subtitle: string
  }
}

// 评论
export interface comments{
  rows: commentListDetail[],
  total: number
}

// 评论数据详细字段
export interface commentListDetail{
  id: number,
  text: string,
  createTime: string,
  admTopicComments: comments
  sender: {
    profileImage: string,
    nickname: string,
    id: string
  },
  receiver: {
    nickname: string,
    id: string
  }
}

// 社群页面列表数据
export interface communityList extends ResponseModel<list> {}

// 详情页面数据
export interface communityDetail extends ResponseModel<detail> {}

//评论页面列表数据
export interface commentList extends ResponseModel<comments> {}


