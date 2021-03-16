import immutable from 'seamless-immutable';
import { createReducer, completeReducer, completeState } from 'redux-recompose';

import { actions } from './actions';

const defaultState = completeState({
  createUser: null,
  updatePassword: null
});

const reducerDescription = {
  primaryActions: [actions.CREATE_USER, actions.ADMIN_CREATE_USER, actions.UPDATE_PASSWORD]
};

const reducer = createReducer(immutable(defaultState), completeReducer(reducerDescription));
export default reducer;
