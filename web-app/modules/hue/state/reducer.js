import {combineReducers} from 'redux'
import {Status} from 'redux-middleware-async';
import {LightType} from '../../../constants/hue';
import {HueActionTypes} from './actions';

const initialState = {
  poweredOn: false,
  initializing: true,
  requestStatus: null,
  lightState: null
};

function createLightReducer (lightType) {
  return function (state = initialState, action = {}) {
    switch (action.type) {
      case HueActionTypes.POWER_ON:
        if (action.light === lightType) {
          return {
            ...state,
            requestStatus: action.status,
            poweredOn: action.status === Status.SUCCESS ? true : state.poweredOn
          };
        }
        return state;

      case HueActionTypes.POWER_OFF:
        if (action.light === lightType) {
          return {
            ...state,
            requestStatus: action.status,
            poweredOn: action.status === Status.SUCCESS ? false : state.poweredOn
          };
        }
        return state;

      case HueActionTypes.GET_POWER:
        if (action.light === lightType) {
          return {
            ...state,
            requestStatus: action.status,
            initializing: state.initializing && action.status === Status.REQUEST,
            poweredOn: action.status === Status.SUCCESS ? action.response.lastAction.on : state.poweredOn,
            lightState: action.status === Status.SUCCESS ? action.response.lastAction : state.lightState
          };
        }
        return state;

      case HueActionTypes.SET_BRIGHTNESS:
        if (action.light === lightType) {
          return {
            ...state,
            lightState: state.lightState ? {...state.lightState, bri: action.brightness} : null
          };
        }
        return state;

      default:
        return state;
    }
  }
}

export default combineReducers({
  [LightType.KITCHEN]: createLightReducer(LightType.KITCHEN),
  [LightType.LIVING_ROOM]: createLightReducer(LightType.LIVING_ROOM),
  [LightType.BEDROOM]: createLightReducer(LightType.BEDROOM)
});
