import i18next from 'i18next';
import { bool } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '~constants/routes';

import styles from './styles.module.scss';

const Links = ({ signUp }) => (
  <>
    {signUp && (
      <div className={`row m-bottom-2 ${styles.signUpContainer}`}>
        <span className="m-right-1">{i18next.t('Login:noUser')}</span>
        <Link to={ROUTES.SIGN_UP_USER.path} className={styles.signUp}>
          {i18next.t('Login:signUp')}
        </Link>
      </div>
    )}
    <span className={styles.forgotPassword}>{i18next.t('Login:forgotPassword')}</span>
  </>
);

Links.propTypes = {
  signUp: bool
};

export default Links;
