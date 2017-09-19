import {
  put,
  takeLatest
} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {
  HueActionTypes,
  executeSetBrightness
} from './actions'

function* observeSetBrightness (action) {
  yield delay(500);
  yield put(executeSetBrightness(action.light, action.brightness))
}

export default function* rootSaga () {
  yield takeLatest(HueActionTypes.SET_BRIGHTNESS, observeSetBrightness);
}
