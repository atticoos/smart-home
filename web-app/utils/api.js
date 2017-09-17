import 'whatwg-fetch'

function GET (path, options = {}) {
  console.log(path)
  options.method = 'GET';
  return fetch(path, options).then(resp => {
    console.log('RES', resp)
    return resp.json()
  });
}

function POST (path, options = {}) {
  console.log(path)
  options.method = 'POST';
  return fetch(path, options).then(resp => {
    console.log('resp', resp)
    return resp.json()
  }).catch(e => {
    console.warn('failed with', e)
    throw e
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
