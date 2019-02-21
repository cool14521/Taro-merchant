import { SET_POPULAR } from '@constants/index/popular'
import {BannerStateModel} from '@models/index'

const INITIAL_STATE: BannerStateModel = {
  list: []
};

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_POPULAR:
      return {
        ...state,
        list: [...action.list]
      }
    default:
      return state;
  }
}
