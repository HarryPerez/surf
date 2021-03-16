import i18next from 'i18next';
import * as Yup from 'yup';

import { PASSWORD_REGEX } from '~constants/regex';
import { alphabeticCompare } from '~utils/string';

const passwordValidation = () =>
  Yup.string()
    .required(i18next.t('PasswordRecoveryFormErrors:required'))
    .min(8, i18next.t('PasswordRecoveryFormErrors:passwordMinimumLength'))
    .matches(PASSWORD_REGEX, i18next.t('PasswordRecoveryFormErrors:passwordStrength'))
    .test({
      name: 'passwordConfirmationValidation',
      message: i18next.t('PasswordRecoveryFormErrors:passwordConfirmation'),
      test() {
        const { password, passwordConfirmation } = this.parent;
        return password && passwordConfirmation && alphabeticCompare(password, passwordConfirmation);
      }
    });

export const VALIDATION_SCHEMA = Yup.object().shape({
  password: passwordValidation(),
  passwordConfirmation: passwordValidation()
});
