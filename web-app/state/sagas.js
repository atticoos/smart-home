import {spawn} from 'redux-saga/effects'
import hueSagas from '../modules/hue/state/saga'

export default function* appSagas () {
  yield [
    spawn(hueSagas)
  ];
}
