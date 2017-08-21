import Promise from 'bluebird';
import Wemo from 'wemo-client';
import Devices from './devices';
const wemo = new Wemo();

const devices = Object.values(Devices.Wemo).reduce((map, key) => {
  map[key] = null;
  return map;
}, {});

export function discover() {
  wemo.discover((e, deviceInfo) => {
    console.log('FOUND', deviceInfo.friendlyName)
    if (deviceInfo) {
      devices[deviceInfo.friendlyName] = Promise.promisifyAll(wemo.client(deviceInfo));
    }
  });
}

export function turnAllOn () {
  Object.keys(devices).forEach(turnOn);
}

export function turnAllOff () {
  Object.keys(devices).forEach(turnOff);
}

export function turnOn (device) {
  console.log('turning on', device)
  if (devices[device]) {
    return devices[device].setBinaryStateAsync(1);
  }
  return Promise.reject(new Error('Not found'));
}

export function turnOff(device) {
  if (devices[device]) {
    return devices[device].setBinaryStateAsync(0);
  }
  return Promise.reject(new Error('Not found'));
}

export function getState (device) {
  if (devices[device]) {
    return devices[device].getBinaryStateAsync()
      .then(state => parseInt(state));
  }
  return Promise.reject(new Error('Not found'));
}


// const REQUEST_TIMEOUT = 3 * 1000;

// function withTimeout (promise, timeout = REQUEST_TIMEOUT) {
//   return new Promise((resolve, reject) => {
//     var timer = setTimeout(() => {
//       reject(new Error('Request timed out.'));
//     }, timeout);
//     console.log('prom', promise)
//     promise
//       .then(resolve, reject)
//       .finally(() => clearTimeout(timer));
//   });
// }

// function timeoutify (promiseFn, timeout = REQUEST_TIMEOUT) {
//   return (...args) => withTimeout(promiseFn(...args), timeout);
// }

// function withRetry (fn, attempts) {
//   return (...args) => fn(...args).catch(e => {
//     if (attempts > 0) {
//       console.log('failed attempt', attempts)
//       return withRetry(fn, attempts - 1)(...args);
//     }
//     throw new Error('Failed after all attempts');
//   })
// }

// export const wemo = createWemoClient();

// export default function createWemoClient (wemo = new Wemo()) {
//   console.log('creating wemo client');
//   const wemoDiscover = withRetry(
//     timeoutify(
//       Promise.promisify((...args) => wemo.discover(...args))
//     ),
//     5
//   );
//   var deviceInfo = null;
//   wemo.discoverAsync = () => {
//     if (deviceInfo !== null) {
//       return new Promise((resolve) => resolve(deviceInfo));
//     }
//     return wemoDiscover().then(device => {
//       deviceInfo = device;
//       return deviceInfo;
//     })
//   };
//   return wemo;
// }
