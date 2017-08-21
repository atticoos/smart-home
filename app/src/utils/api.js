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
  });
}

const BASE_URL = 'http://10.0.0.102:4111';

export function getOutletState (name) {
  return GET(`${BASE_URL}/outlets/${name}`)
}

export function turnOutletsOn (name) {
  return POST(`${BASE_URL}/outlets/${name}/on`)
}

export function turnOutletsOff (name) {
  return POST(`${BASE_URL}/outlets/${name}/off`)
}
