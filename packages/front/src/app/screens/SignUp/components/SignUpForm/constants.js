import i18next from 'i18next';

import { FIELDS } from '../../constants';

export const FORM_FIELDS = [
  {
    name: FIELDS.NAME,
    label: i18next.t('SignUpForm:name')
  },
  {
    name: FIELDS.SURNAME,
    label: i18next.t('SignUpForm:surname')
  },
  {
    name: FIELDS.EMAIL,
    label: i18next.t('SignUpForm:email')
  },
  {
    name: FIELDS.PASSWORD,
    label: i18next.t('SignUpForm:password'),
    type: 'password'
  },
  {
    name: FIELDS.PASSWORD_CONFIRMATION,
    label: i18next.t('SignUpForm:passwordConfirmation'),
    type: 'password'
  }
];
