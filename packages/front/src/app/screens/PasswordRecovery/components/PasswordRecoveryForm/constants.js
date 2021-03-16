import i18next from 'i18next';

import { FIELDS } from '../../constants';

export const FORM_FIELDS = [
  {
    name: FIELDS.PASSWORD,
    label: i18next.t('PasswordRecoveryForm:password'),
    type: 'password'
  },
  {
    name: FIELDS.PASSWORD_CONFIRMATION,
    label: i18next.t('PasswordRecoveryForm:passwordConfirmation'),
    type: 'password'
  }
];
