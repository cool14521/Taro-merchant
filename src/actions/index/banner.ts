import { SET_BANNER } from '@constants/index/banner'
import {BannerModel} from '@models/index'

export const setBanner = (banners: BannerModel[]) => {
  return {
    type: SET_BANNER,
    banners
  };
};
