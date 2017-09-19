import * as API from '../../../utils/api'
import {LightName} from '../../../constants/hue'


export const HueActionTypes = {
  POWER_ON: 'HueActions/POWER_ON',
  POWER_OFF: 'HueActions/POWER_OFF',
  GET_POWER: 'HueActions/GET_POWER'
}

export function powerOn (light) {
  return {
    type: HueActionTypes.POWER_ON,
    payload: {light},
    callAPI: () => API.turnLightsOn(LightName[light])
  }
}

export function powerOff (light) {
  return {
    type: HueActionTypes.POWER_OFF,
    payload: {light},
    callAPI: () => API.turnLightsOff(LightName[light])
  }
}

export function getPower (light) {
  return {
    type: HueActionTypes.GET_POWER,
    payload: {light},
    callAPI: () => Promise.resolve({state: 0})
  }
}
