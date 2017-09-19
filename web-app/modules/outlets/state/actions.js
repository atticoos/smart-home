import * as API from '../../../utils/api';

export const OutletActionTypes = {
  POWER_ON: 'OutletActions/POWER_ON',
  POWER_OFF: 'OutletActions/POWER_OFF',
  GET_POWER: 'OutletActions/GET_POWER'
};

export function powerOn (outlet) {
  return {
    type: OutletActionTypes.POWER_ON,
    payload: {outlet},
    callAPI: () => API.turnOutletsOn(outlet)
  };
}

export function powerOff (outlet) {
  return {
    type: OutletActionTypes.POWER_OFF,
    payload: {outlet},
    callAPI: () => API.turnOutletsOff(outlet)
  };
}

export function getPower (outlet) {
  return {
    type: OutletActionTypes.GET_POWER,
    payload: {outlet},
    callAPI: () => API.getOutletState(outlet)
  };
}
