import { SET_BANNER } from '@constants/index/banner'
import {BannerStateModel} from '@models/index'

const INITIAL_STATE: BannerStateModel = {
  list: []
};

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_BANNER:
      return {
        ...state,
        list: [...action.banners]
      }
    default:
      return state;
  }
}
