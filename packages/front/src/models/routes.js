import { ROUTES } from '~constants/routes';
import { alphabeticCompare } from '~utils/string';

import { hasAccess, isLogged, mapExpirationTime } from './session';

export const isInPublicOrInRestricted = (logged, access, publicRoute) => logged && (publicRoute || !access);

export const shouldShowView = (logged, access, publicRoute) => (logged && access) || publicRoute;

export const isForbidden = (route, tokenManager) =>
  tokenManager && !route.supportedRoles.includes(tokenManager.role);

export const isPublicOrForbidden = (route, tokenManager) =>
  route.publicRoute || isForbidden(route, tokenManager);

export const isPublicOrHasNotAccess = (tokenManager, pathname) => {
  const routes = Object.values(ROUTES);
  return routes.some(
    route => alphabeticCompare(route.path, pathname) && isPublicOrForbidden(route, tokenManager)
  );
};

export const mapRedirects = (tokenManager, pathname, search) => {
  // TODO: move playground and login path to 404 path
  const currentPath = { pathname, search };
  const playgroundPath = { pathname: ROUTES.PLAYGROUND.path };
  const login = { pathname: ROUTES.LOGIN_USER.path };
  return isPublicOrHasNotAccess(tokenManager, pathname)
    ? { logged: playgroundPath, notLogged: currentPath }
    : { logged: currentPath, notLogged: login };
};

export const getCurrentRouteInformation = (tokenManager, pathname, search, supportedRoles) => {
  const expirationTime = tokenManager && mapExpirationTime(tokenManager.expirationTime);
  const logged = isLogged(expirationTime);
  const access = hasAccess(tokenManager, supportedRoles);
  const redirects = mapRedirects(tokenManager, pathname, search);
  return { logged, access, redirects };
};
