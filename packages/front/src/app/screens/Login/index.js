import React, { useState } from 'react';
import { func, string, bool } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import LoginBanner from '~assets/zerf-banner.jpg';
import FormWrapper from '~app/components/FormWrapper';
import Header from '~app/components/Header';
import LoadingWrapper from '~app/components/LoadingWrapper';

import { INITIAL_VALUES } from './constants';
import styles from './styles.module.scss';
import LoginForm from './components/LoginForm';
import Links from './components/Links';
import { VALIDATION_SCHEMA } from './utils';

function Login({ submitAction, title, signUp }) {
  const dispatch = useDispatch();
  const [code, setCode] = useState(null);
  const handleSubmit = values => {
    dispatch(submitAction(values, setCode));
  };
  const { signInLoading } = useSelector(state => state.auth);
  return (
    <div className="row full-width center middle space-between">
      <div className="column full-width center">
        <div className={`column full-width center ${styles.loginContainer}`}>
          <Header title={title} titleClassName={styles.loginWelcome} iconClassName={styles.loginIconTitle} />
          <div className={`column full-width center ${styles.loginFormContainer}`}>
            <LoadingWrapper loading={signInLoading}>
              <FormWrapper
                form={LoginForm}
                initialValues={INITIAL_VALUES}
                onSubmit={handleSubmit}
                validationSchema={VALIDATION_SCHEMA}
                mailCode={code}
              />
              <Links signUp={signUp} />
            </LoadingWrapper>
          </div>
        </div>
        <img src={LoginBanner} className={`full-width ${styles.loginBanner}`} />
      </div>
    </div>
  );
}

Login.propTypes = {
  signUp: bool,
  submitAction: func,
  title: string
};

export default Login;
