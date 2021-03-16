import { ROLES } from './users';

export const ROUTES = {
  HOME: {
    path: '/',
    basePath: '',
    exact: true,
    supportedRoles: [ROLES.USER, ROLES.ADMIN]
  },
  LOGIN_USER: {
    path: '/login',
    basePath: '',
    publicRoute: true,
    supportedRoles: [ROLES.USER, ROLES.ADMIN],
    exact: false
  },
  LOGIN_ADMIN: {
    path: '/admin/login',
    basePath: '/admin',
    publicRoute: true,
    supportedRoles: [ROLES.USER, ROLES.ADMIN],
    exact: false
  },
  SIGN_UP_USER: {
    path: '/sign-up',
    basePath: '',
    publicRoute: true,
    supportedRoles: [ROLES.USER, ROLES.ADMIN],
    exact: false
  },
  SIGN_UP_ADMIN: {
    path: '/admin/sign-up',
    basePath: '/admin',
    publicRoute: false,
    adminRoute: true,
    supportedRoles: [ROLES.ADMIN],
    exact: false
  },
  PLAYGROUND: {
    path: '/playground',
    basePath: '',
    supportedRoles: [ROLES.USER, ROLES.ADMIN],
    exact: false
  },
  PASSWORD_RECOVERY: {
    path: '/recover',
    basePath: '',
    publicRoute: true,
    supportedRoles: [ROLES.USER, ROLES.ADMIN],
    exact: false
  }
};
