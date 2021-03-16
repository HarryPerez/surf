import { completeTypes, createTypes, withPostSuccess } from 'redux-recompose';
import { push } from 'connected-react-router';

import { setAuthHeader } from '~config/api';
import * as AuthService from '~services/AuthService';
import LocalStorage from '~services/LocalStorageService';
import { ROUTES } from '~constants/routes';

import { MAIL_SENT } from './constants';

export const actions = createTypes(completeTypes(['SIGN_IN']), '@@AUTH');

const targets = {
  SIGN_IN: 'signIn'
};

export const actionCreators = {
  signIn: ({ user, setCode }) => ({
    type: actions.SIGN_IN,
    target: targets.SIGN_IN,
    payload: user,
    service: AuthService.signIn,
    injections: [
      withPostSuccess((dispatch, response) => {
        if (response.status === MAIL_SENT) {
          setCode(response.status);
        } else {
          setAuthHeader(response.data.token);
          LocalStorage.setTokenManager(response.data);
          dispatch(push(ROUTES.PLAYGROUND.path));
        }
      })
    ]
  })
};

export default actionCreators;
