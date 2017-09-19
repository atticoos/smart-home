import 'isomorphic-unfetch'

function GET (path, options = {}) {
  options.method = 'GET';
  return fetch(path, options).then(resp => {
    return resp.json()
  });
}

function POST (path, body = {}, options = {}) {
  options.method = 'POST';
  options.headers = {
    ...options.headers,
    'Content-Type': 'application/json'
  }

  if (body) {
    options.body = JSON.stringify(body);
  }

  return fetch(path, options).then(resp => {
    return resp.json()
  })
}

const BASE_URL = 'http://apartment:43975';

export function getOutletState (name) {
  return GET(`${BASE_URL}/outlets/${name}`)
}

export function turnOutletsOn (name) {
  return POST(`${BASE_URL}/outlets/${name}/on`)
}

export function turnOutletsOff (name) {
  return POST(`${BASE_URL}/outlets/${name}/off`)
}

export function turnLightsOn (name) {
  return POST(`${BASE_URL}/lights/${name}/on`)
}

export function turnLightsOff (name) {
  return POST(`${BASE_URL}/lights/${name}/off`)
}

export function setLightState (name, state) {
  return POST(`${BASE_URL}/lights/${name}`, state)
}

export function getLightState (name) {
  return GET(`${BASE_URL}/lights/${name}`)
}

export function getLightGroups () {
  return GET(`${BASE_URL}/lights`)
}
