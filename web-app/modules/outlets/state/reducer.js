import {combineReducers} from 'redux'
import {Status} from 'redux-middleware-async';
import {OutletType} from '../../../constants/outlets';
import {OutletActionTypes} from './actions';

const initialState = {
  poweredOn: false,
  initializing: true,
  requestStatus: null
};

function createOutletReducer (outletType) {
  return function (state = initialState, action = {}) {
    switch (action.type) {
      case OutletActionTypes.POWER_ON:
        if (action.outlet === outletType) {
          return {
            ...state,
            requestStatus: action.status,
            poweredOn: action.status === Status.SUCCESS ? true : state.poweredOn
          };
        }
        return state;

      case OutletActionTypes.POWER_OFF:
        if (action.outlet === outletType) {
          return {
            ...state,
            requestStatus: action.status,
            poweredOn: action.status === Status.SUCCESS ? false : state.poweredOn
          };
        }
        return state;

      case OutletActionTypes.GET_POWER:
        if (action.outlet === outletType) {
          return {
            ...state,
            requestStatus: action.status,
            initializing: state.initializing && action.status === Status.REQUEST,
            poweredOn: action.status === Status.SUCCESS ? action.response.state : state.poweredOn
          };
        }
        return state;

      default:
        return state;
    }
  }
}

export default combineReducers({
  [OutletType.STANDING_LIGHTS]: createOutletReducer(OutletType.STANDING_LIGHTS),
  [OutletType.STRING_LIGHTS]: createOutletReducer(OutletType.STRING_LIGHTS)
});
