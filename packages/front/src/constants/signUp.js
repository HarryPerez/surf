import UsersActions from '~redux/Users/actions';

import { ROUTES } from './routes';
import { ROLES } from './users';

export const SIGN_UP_PROPS = {
  [ROLES.USER]: {
    submitAction: values => UsersActions.createUser(values),
    closeUrl: ROUTES.LOGIN_USER.path
  },
  [ROLES.ADMIN]: {
    submitAction: values => UsersActions.adminCreateUser(values),
    // TODO: change closeUrl to the table of users in the future
    closeUrl: ROUTES.PLAYGROUND.path
  }
};
