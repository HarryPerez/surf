import React from 'react';
import { string } from 'prop-types';
import i18next from 'i18next';
import { boolean } from 'yup/lib/locale';

const Error = ({ message, className, show }) =>
  show && <div className={className}>{message ? message : i18next.t('Error:default')}</div>;

Error.propTypes = {
  className: string,
  message: string,
  show: boolean
};

export default Error;
