import React, { Suspense } from 'react';
import { ConnectedRouter } from 'connected-react-router';

import Home from '~screens/Home';
import Playground from '~screens/Playground';
import { history } from '~redux/store';
import { ROUTES } from '~constants/routes';
import SignUp from '~app/screens/SignUp';
import Login from '~app/screens/Login';
import { LOGIN_PROPS } from '~constants/login';
import { ROLES } from '~constants/users';
import { SIGN_UP_PROPS } from '~constants/signUp';
import PasswordRecovery from '~app/screens/PasswordRecovery';

import styles from './styles.module.scss';
import AuthenticatedRoute from './components/AuthenticatedRoute';

const AppRoutesContainer = () => (
  <ConnectedRouter history={history}>
    <div className={`column center ${styles.container} ${styles.containerAlgo}`}>
      <Suspense>
        <AuthenticatedRoute {...ROUTES.PASSWORD_RECOVERY} component={PasswordRecovery} />
        <AuthenticatedRoute
          {...ROUTES.SIGN_UP_ADMIN}
          component={SignUp}
          componentProps={SIGN_UP_PROPS[ROLES.ADMIN]}
        />
        <AuthenticatedRoute
          {...ROUTES.SIGN_UP_USER}
          component={SignUp}
          componentProps={SIGN_UP_PROPS[ROLES.USER]}
        />
        <AuthenticatedRoute
          {...ROUTES.LOGIN_ADMIN}
          component={Login}
          componentProps={LOGIN_PROPS[ROLES.ADMIN]}
        />
        <AuthenticatedRoute
          {...ROUTES.LOGIN_USER}
          component={Login}
          componentProps={LOGIN_PROPS[ROLES.USER]}
        />
        <AuthenticatedRoute {...ROUTES.HOME} component={Home} exact />
        {process.env.NODE_ENV === 'development' && (
          <AuthenticatedRoute {...ROUTES.PLAYGROUND} component={Playground} />
        )}
      </Suspense>
    </div>
  </ConnectedRouter>
);

export default AppRoutesContainer;
