import {combineReducers} from 'redux'
import lights from '../../modules/hue/state/reducer'
import outlets from '../../modules/outlets/state/reducer'

export default combineReducers({
  lights,
  outlets
});
