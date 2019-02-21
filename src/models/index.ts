import ResponseModel from './response'

export interface BannerModel {
  imgUrl: string
  linkUrl: string
}

export interface BannerStateModel {
  list: BannerModel[]
}

export interface ChannelModel {
  id?: number;
  name: string;
  hot?: boolean;
  _checked?: boolean;
}

export interface ChannelStateModel {
  visible: boolean;
  list: ChannelModel[];
  activeIndex: number;
}

export interface PopularItemModel {
  id: number;
  code: string;
  imgPath: string;
  name: string;
  productId: number;
  promotion: string;
  activityPrice?: number;
  salePrice: number;
  skuStatus: string;
  subtitle: string;
  type: string;
  typeName: string;
  viewQuantity: number;
  soldQuantity: number;
  attribute1?: string;
}

export interface PopularStateModel{
  list: PopularItemModel[]
}


export interface SectionItemModel {
  id: number;
  code: string;
  name: string;
  subtitle: string;
  promotion: string;
  productId: number;
  soldQuantity: number;
  viewQuantity: number;
  imgPath: string;
  salePrice: number;
  type: string;
  attribute1?: string;
  proStatus?: string;
  skuStatus: string;

  valid?: boolean;
}

export interface SectionModel {
  type: string
  img: string
  list: SectionItemModel[]
  link: string
}

export interface SectionStateModel {
  list: SectionModel[]
}

export interface ConstantGoldGift {
  banners: BannerModel[]
  catalogs: ChannelModel[]
  isShowGoldGiftBagTip: boolean
  tags: string[]
  unread: number
  upgradeHint: boolean
  useGroups: string[]
}

export interface SelectedAndShopCarNum {
  faddishProducts: PopularItemModel[]
  like: SectionItemModel[]
  newProducts: SectionItemModel[]
  totalQuantityOfCart: number
}

export interface ConstantGoldGiftResponse extends ResponseModel<ConstantGoldGift> {

}

export interface SelectedAndShopCarNumResponse extends ResponseModel<SelectedAndShopCarNum> {

}
