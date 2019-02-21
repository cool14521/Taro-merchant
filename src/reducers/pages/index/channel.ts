import { TOGGLE_VISIBLE,SET_VISIBLE, SET_ACTIVE_CHANNEL, APPEND_CHANNEL } from '@constants/index/channel'
import {ChannelStateModel} from '@models/index'

const DefaultList = [
  {
    name: "精选",
    _checked: true
  },
  {
    name: "领券中心",
    hot: true
  },
  {
    name: "全部商品"
  }
]

const INITIAL_STATE: ChannelStateModel = {
  visible: false,
  list: DefaultList,
  activeIndex: 0
};

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TOGGLE_VISIBLE:
      return {
        ...state,
        visible: !state.visible
      }
    case SET_VISIBLE:
      return {
        ...state,
        visible: action.visible
      }
    case SET_ACTIVE_CHANNEL:
      return {
        ...state,
        activeIndex: action.activeIndex,
        list: state.list.map((channel, index) => {
          if (index === action.activeIndex) {
            return {
              ...channel,
              _checked: true
            };
          } else {
            channel._checked = false;
            return channel;
          }
        })
      }
    case APPEND_CHANNEL:
      return {
        ...state,
        list: DefaultList.concat(action.channels)
      }
    default:
      return state;
  }
}
