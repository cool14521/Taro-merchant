import { SET_POPULAR } from '@constants/index/popular'
import {PopularItemModel} from '@models/index'

export const setPopular = (list: PopularItemModel[]) => {
  return {
    type: SET_POPULAR,
    list
  };
};
