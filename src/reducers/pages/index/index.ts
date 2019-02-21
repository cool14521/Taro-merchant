import { combineReducers } from 'redux'
import channel from './channel'
import banner from './banner'
import popular from './popular'
import section from './section'

export default combineReducers({
  channel,
  banner,
  popular,
  section
})
