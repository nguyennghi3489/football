import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import video from './video'

export default combineReducers({
  routing: routerReducer,
  video
})