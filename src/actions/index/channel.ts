import { TOGGLE_VISIBLE, SET_VISIBLE, SET_ACTIVE_CHANNEL, APPEND_CHANNEL } from '@constants/index/channel'
import {ChannelModel} from '@models/index'
export const toggleVisible = () => {
  return {
    type: TOGGLE_VISIBLE
  };
};

export const setVisible = (visible: boolean) => {
  return {
    type: SET_VISIBLE,
    visible
  };
};

export const setActiveChannel = (activeIndex: number) => {
  return {
    type: SET_ACTIVE_CHANNEL,
    activeIndex
  };
};


export const appendChannel = (channels: ChannelModel[]) => {
  return {
    type: APPEND_CHANNEL,
    channels
  };
};
