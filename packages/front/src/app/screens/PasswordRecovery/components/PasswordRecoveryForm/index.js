import i18next from 'i18next';
import { func, shape } from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

import Button from '~app/components/Button';
import Input from '~app/components/Input';
import LoadingWrapper from '~app/components/LoadingWrapper';

import { FORM_FIELDS } from './constants';
import styles from './styles.module.scss';

const PasswordRecoveryForm = ({ values, onChange, errors }) => {
  const { updatePasswordLoading, updatePasswordError } = useSelector(state => state.users);
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
      <LoadingWrapper loading={updatePasswordLoading}>
        <Button
          type="submit"
          label={i18next.t('PasswordRecoveryForm:submit')}
          className={`full-width m-top-4 ${styles.button}`}
        />
        {updatePasswordError && (
          <Error message={i18next.t('PasswordRecoveryErrors:genericError')} className={styles.codeError} />
        )}
      </LoadingWrapper>
    </div>
  );
};

PasswordRecoveryForm.propTypes = {
  errors: shape,
  values: shape,
  onChange: func
};

export default PasswordRecoveryForm;
