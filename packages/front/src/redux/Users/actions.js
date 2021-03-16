import { replace } from 'connected-react-router';
import { createTypes, completeTypes, withPostSuccess } from 'redux-recompose';

import UsersServices from '~services/Users/service';

export const actions = createTypes(
  completeTypes(['CREATE_USER', 'ADMIN_CREATE_USER', 'UPDATE_PASSWORD'], []),
  '@@USERS'
);

const targets = {
  CREATE_USER: 'createUser',
  UPDATE_PASSWORD: 'updatePassword'
};

const actionCreators = {
  createUser: ({ user, closeUrl }) => ({
    type: actions.CREATE_USER,
    target: targets.CREATE_USER,
    payload: user,
    service: UsersServices.createUser,
    injections: [
      withPostSuccess(dispatch => {
        dispatch(replace(closeUrl));
      })
    ]
  }),
  adminCreateUser: ({ user, closeUrl }) => ({
    type: actions.ADMIN_CREATE_USER,
    target: targets.CREATE_USER,
    payload: user,
    service: UsersServices.adminCreateUser,
    injections: [
      withPostSuccess(dispatch => {
        dispatch(replace(closeUrl));
      })
    ]
  }),
  updatePassword: ({ password, closeUrl }) => ({
    type: actions.UPDATE_PASSWORD,
    target: targets.UPDATE_PASSWORD,
    payload: password,
    service: UsersServices.updatePassword,
    injections: [
      withPostSuccess(dispatch => {
        dispatch(replace(closeUrl));
      })
    ]
  })
};

export default actionCreators;
