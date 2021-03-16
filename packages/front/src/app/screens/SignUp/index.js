import React from 'react';
import i18next from 'i18next';
import { useDispatch } from 'react-redux';
import { func, string } from 'prop-types';

import FormWrapper from '~app/components/FormWrapper';
import Header from '~app/components/Header';

import SignUpForm from './components/SignUpForm';
import { INITIAL_VALUES } from './constants';
import styles from './styles.module.scss';
import { mapUser, VALIDATION_SCHEMA } from './utils';

const SignUp = ({ submitAction, closeUrl }) => {
  const dispatch = useDispatch();
  const handleSubmit = values => {
    const user = mapUser(values);
    dispatch(submitAction({ user, closeUrl }));
  };
  return (
    <div className="row full-width center middle">
      <div className={`column center ${styles.container}`}>
        <Header
          title={i18next.t('SignUp:title')}
          iconClassName={styles.signUpIconTitle}
          titleClassName={styles.title}
        />
        <FormWrapper
          initialValues={INITIAL_VALUES}
          form={SignUpForm}
          onSubmit={handleSubmit}
          validationSchema={VALIDATION_SCHEMA}
        />
      </div>
    </div>
  );
};

SignUp.propTypes = {
  closeUrl: string,
  submitAction: func
};

export default SignUp;
