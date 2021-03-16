import i18next from 'i18next';
import { func, shape } from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { number } from 'yup/lib/locale';

import Button from '~app/components/Button';
import Error from '~app/components/Error';
import Input from '~app/components/Input';

import { FIELDS } from './constants';
import styles from './styles.module.scss';
import { mapError } from './utils';

const LoginForm = ({ values, onChange, errors, mailCode }) => {
  const { signInError } = useSelector(state => state.auth);
  const code = signInError || mailCode;
  const error = code && mapError(code);
  return (
    <div className="column full-width middle center m-bottom-4">
      {FIELDS.map(({ name, label, type }) => (
        <Input
          key={name}
          value={values[name]}
          name={name}
          label={label}
          error={errors[name]}
          handleChange={onChange}
          type={type}
          inputClassName={styles.input}
          className="full-width m-bottom-3"
          errorClassName={styles.error}
        />
      ))}
      <Button
        type="submit"
        label={i18next.t('Login:login')}
        className={`full-width m-top-3 ${styles.button}`}
      />
      <Error message={error} className={styles.codeError} show={error} />
    </div>
  );
};

LoginForm.propTypes = {
  errors: shape,
  mailCode: number,
  values: shape,
  onChange: func
};

export default LoginForm;
