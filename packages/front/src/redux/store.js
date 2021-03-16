import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, combineReducers as CR, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { fetchMiddleware, configureMergeState, wrapCombineReducers } from 'redux-recompose';

import modal from './Modal/reducer';
import users from './Users/reducer';
import settings from './Settings/reducer';
import auth from './Auth/reducer';

configureMergeState((state, diff) => state.merge(diff));

const combineReducers = wrapCombineReducers(CR);

export const history = createBrowserHistory();

// Add reducers here
const reducers = combineReducers({
  router: connectRouter(history),
  modal,
  users,
  settings,
  auth
});

const middlewares = [thunk, fetchMiddleware, routerMiddleware(history)];
const enhancers = [];

/* ------------- Assemble Middleware ------------- */
enhancers.push(applyMiddleware(...middlewares));

const composeEnhancers =
  // eslint-disable-next-line no-underscore-dangle
  (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const rootReducer = (state, action) => reducers(state, action);

const store = createStore(rootReducer, composeEnhancers(...enhancers));

export default store;
