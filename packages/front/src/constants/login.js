import i18next from 'i18next';

import AuthActions from '~redux/Auth/actions';
import { mapAdmin } from '~utils/login';

import { ROLES } from './users';

export const LOGIN_PROPS = {
  [ROLES.USER]: {
    title: i18next.t('LoginUser:welcome'),
    submitAction: (values, setCode) => AuthActions.signIn({ user: values, setCode }),
    signUp: true
  },
  [ROLES.ADMIN]: {
    title: i18next.t('LoginAdmin:welcome'),
    submitAction: values => AuthActions.signIn({ user: mapAdmin(values) }),
    signUp: false
  }
};
