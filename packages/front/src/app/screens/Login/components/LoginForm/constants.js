import i18next from 'i18next';

export const FIELDS = [
  {
    name: 'email',
    label: i18next.t('Login:user')
  },
  {
    name: 'password',
    label: i18next.t('Login:password'),
    type: 'password'
  }
];

export const LOGIN_ERRORS = {
  CLIENT_ERROR: 'emailInvalid',
  204: 'mailSent'
};
