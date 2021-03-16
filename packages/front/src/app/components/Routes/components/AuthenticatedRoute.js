import React from 'react';
import { bool, shape, string } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useLocation, withRouter } from 'react-router';

import LocalStorage from '~services/LocalStorageService';
import Helmet from '~app/components/Helmet';
import { isInPublicOrInRestricted, getCurrentRouteInformation, shouldShowView } from '~models/routes';
import { setAuthHeader } from '~config/api';

const AuthenticatedRoute = ({
  title,
  description,
  path,
  supportedRoles,
  publicRoute,
  component: Component,
  componentProps,
  ...props
}) => {
  const tokenManager = LocalStorage.getTokenManager();
  const { pathname, search } = useLocation();
  const { logged, access, redirects } = getCurrentRouteInformation(
    tokenManager,
    pathname,
    search,
    supportedRoles
  );
  if (logged) {
    setAuthHeader(tokenManager.token);
  }
  return isInPublicOrInRestricted(logged, access, publicRoute) ? (
    <Redirect to={redirects.logged} />
  ) : shouldShowView(logged, access, publicRoute) ? (
    <>
      <Helmet title={title} description={description} />
      <Route path={path} render={() => <Component {...componentProps} />} {...props} />
    </>
  ) : (
    <Redirect to={redirects.notLogged} />
  );
};

AuthenticatedRoute.propTypes = {
  path: string.isRequired,
  component: shape,
  componentProps: shape,
  description: string,
  publicRoute: bool,
  supportedRoles: shape,
  title: string
};

export default withRouter(AuthenticatedRoute);
