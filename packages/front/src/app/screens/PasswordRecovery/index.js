import React from 'react';
import i18next from 'i18next';
import { useDispatch } from 'react-redux';

import FormWrapper from '~app/components/FormWrapper';
import Header from '~app/components/Header';
import { getParam, useQuery } from '~utils/query';
import { setAuthHeader } from '~config/api';
import UsersActions from '~redux/Users/actions';
import { ROUTES } from '~constants/routes';

import { INITIAL_VALUES, TOKEN } from './constants';
import styles from './styles.module.scss';
import { VALIDATION_SCHEMA } from './utils';
import PasswordRecoveryForm from './components/PasswordRecoveryForm';

const PasswordRecovery = () => {
  const dispatch = useDispatch();
  const query = useQuery();
  const token = getParam(query, TOKEN);
  const handleSubmit = values => {
    setAuthHeader(token);
    dispatch(UsersActions.updatePassword({ password: values, closeUrl: ROUTES.LOGIN_USER.path }));
  };
  return (
    <div className="row full-width center middle">
      <div className={`column center ${styles.container}`}>
        <Header
          title={i18next.t('PasswordRecovery:title')}
          iconClassName={styles.passwordRecoveryIconTitle}
          titleClassName={styles.title}
        />
        <FormWrapper
          initialValues={INITIAL_VALUES}
          form={PasswordRecoveryForm}
          onSubmit={handleSubmit}
          validationSchema={VALIDATION_SCHEMA}
        />
      </div>
    </div>
  );
};

export default PasswordRecovery;
