import Immutable from 'seamless-immutable';
import { createReducer, completeState, completeReducer } from 'redux-recompose';

import { actions } from './actions';

const initialState = {
  onInitialLoad: true,
  signIn: null
};

const completedState = completeState(initialState);

const reducerDescription = {
  primaryActions: [actions.SIGN_IN]
};

const reducer = createReducer(new Immutable(completedState), completeReducer(reducerDescription));

export default reducer;
