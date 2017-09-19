import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';
import {callAPI as asyncMiddleware, Status} from 'redux-middleware-async';
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import sagas from './sagas'

const logger = createLogger({
  collapsed: true
});

const sagaMiddleware = createSagaMiddleware()

export const initStore = () => {
  const store = createStore(
    reducers,
    applyMiddleware(
      asyncMiddleware,
      sagaMiddleware,
      logger
    )
  )

  sagaMiddleware.run(sagas)

  return store
}
