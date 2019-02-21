import { SET_SECTION } from '@constants/index/section'
import {SectionStateModel} from '@models/index'

const INITIAL_STATE: SectionStateModel = {
  list: []
};

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_SECTION:
      return {
        ...state,
        list: [...action.list]
      }
    default:
      return state;
  }
}
