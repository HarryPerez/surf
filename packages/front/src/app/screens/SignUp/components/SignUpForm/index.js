import i18next from 'i18next';
import { func, shape } from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

import Button from '~app/components/Button';
import Error from '~app/components/Error';
import Input from '~app/components/Input';

import { mapError } from '../../utils';

import { FORM_FIELDS } from './constants';
import styles from './styles.module.scss';

const SignUpForm = ({ values, onChange, errors }) => {
  const { createUserLoading, createUserError } = useSelector(state => state.users);
  const error = createUserError && mapError(createUserError);
  return (
    <div className="column full-width middle center">
      {FORM_FIELDS.map(({ name, label, type }) => (
        <Input
          key={name}
          value={values[name]}
          name={name}
          label={label}
          error={errors[name]}
          handleChange={onChange}
          type={type}
          inputClassName={styles.input}
          className="full-width m-bottom-4"
          errorClassName={styles.error}
        />
      ))}
      <Button
        type="submit"
        label={i18next.t('SignUpForm:register')}
        className={`full-width m-top-4 ${styles.button}`}
        loading={createUserLoading}
      />
      <Error message={error} className={styles.codeError} show={error} />
    </div>
  );
};

SignUpForm.propTypes = {
  errors: shape,
  values: shape,
  onChange: func
};

export default SignUpForm;
