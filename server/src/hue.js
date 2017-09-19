import Hue from 'node-hue-api';

const userId = process.env.HUE_USER_ID;
var bridgeAPI = null;

const Groups = {};
const Lights = {};

export function discover() {
  Hue.nupnpSearch().then(bridges => {
    if (bridges.length > 0) {
      bridgeAPI = new Hue.HueApi(bridges[0].ipaddress, userId);
      bridgeAPI.groups().then(groups => {
        groups.forEach(group => {
          if (group.lights) {
            Groups[group.name] = group;
          }
        });
        console.log('discovered hue groups', Object.keys(Groups))
      });
      bridgeAPI.lights().then(lights => {
        lights.lights.forEach(light => {
          Lights[light.id] = light;
        })
        console.log('discovered hue lights', Object.keys(Lights))
      });
    }
  })
}

export function turnOn (group) {
  bridgeAPI.setGroupLightState(Groups[group].id, Hue.lightState.create().on());
}

export function turnOff (group) {
  bridgeAPI.setGroupLightState(Groups[group].id, Hue.lightState.create().off());
}

const lightStateFields = ['on', 'bri', 'hue', 'sat'];

export function setGroupState (group, state) {
  var lightState = Hue.lightState.create();

  lightStateFields.forEach(field => {
    if (field in state) {
      lightState[field].call(lightState, state[field])
    }
  });

  return bridgeAPI.setGroupLightState(Groups[group].id, lightState);
}

export function getGroup (group) {
  return bridgeAPI.getGroup(Groups[group].id)
}

export function getGroups () {
  return bridgeAPI.getGroups()
}

export function turnAllOn () {
  Object.keys(Groups).forEach(turnOn)
}
export function turnAllOff () {
  Object.keys(Groups).forEach(turnOff);
}
