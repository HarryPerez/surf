import i18next from 'i18next';
import * as Yup from 'yup';

export const VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string()
    .required(i18next.t('LoginFormErrors:required'))
    .email(i18next.t('LoginFormErrors:invalidEmail')),
  password: Yup.string().required(i18next.t('LoginFormErrors:required'))
});
