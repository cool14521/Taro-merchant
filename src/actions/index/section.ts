import { SET_SECTION } from '@constants/index/section'
import {SectionModel} from '@models/index'

export const setSection = (list: SectionModel[]) => {
  return {
    type: SET_SECTION,
    list
  };
};
