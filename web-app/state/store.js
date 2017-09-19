import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';
import {callAPI as asyncMiddleware, Status} from 'redux-middleware-async';
import reducers from './reducers'

const logger = createLogger({
  collapsed: true
});

export const initStore = () => createStore(reducers, applyMiddleware(asyncMiddleware, logger));
