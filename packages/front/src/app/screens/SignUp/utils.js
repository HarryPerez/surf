import i18next from 'i18next';
import * as Yup from 'yup';

import { PASSWORD_REGEX } from '~constants/regex';
import { alphabeticCompare } from '~utils/string';

import { SIGN_UP_ERRORS, USERS_SECTION } from './constants';

const passwordValidation = () =>
  Yup.string()
    .required(i18next.t('SignUpFormErrors:required'))
    .min(8, i18next.t('SignUpFormErrors:passwordMinimumLength'))
    .matches(PASSWORD_REGEX, i18next.t('SignUpFormErrors:passwordStrength'))
    .test({
      name: 'passwordConfirmationValidation',
      message: i18next.t('SignUpFormErrors:passwordConfirmation'),
      test() {
        const { password, passwordConfirmation } = this.parent;
        return password && passwordConfirmation && alphabeticCompare(password, passwordConfirmation);
      }
    });

export const VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string()
    .required(i18next.t('SignUpFormErrors:required'))
    .email(i18next.t('SignUpFormErrors:invalidEmail')),
  name: Yup.string().required(i18next.t('SignUpFormErrors:required')),
  password: passwordValidation(),
  passwordConfirmation: passwordValidation(),
  surname: Yup.string().required(i18next.t('SignUpFormErrors:required'))
});

export const mapUser = values => ({ ...values, section: USERS_SECTION });

export const mapError = code => i18next.t(`SignUpErrors:${SIGN_UP_ERRORS[code] || 'genericError'}`);
