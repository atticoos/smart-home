import * as API from '../../../utils/api'
import {LightName} from '../../../constants/hue'


export const HueActionTypes = {
  POWER_ON: 'HueActions/POWER_ON',
  POWER_OFF: 'HueActions/POWER_OFF',
  GET_POWER: 'HueActions/GET_POWER',
  SET_BRIGHTNESS: 'HueActions/SET_BRIGHTNESS',
  EXECUTE_SET_BRIGHTNESS: 'HueActions/EXECUTE_SET_BRIGHTNESS'
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
    callAPI: () => API.getLightState(LightName[light])
  }
}

export function setBrightness (light, brightness) {
  return {
    type: HueActionTypes.SET_BRIGHTNESS,
    light,
    brightness
  };
}

export function executeSetBrightness (light, bri) {
  return {
    type: HueActionTypes.EXECUTE_SET_BRIGHTNESS,
    payload: {light, bri},
    callAPI: () => API.setLightState(LightName[light], {bri})
  }
}
