/* eslint-disable react/button-has-type */
import { func, oneOf, string, boolean } from 'prop-types';
import React from 'react';

import LoadingWrapper from '../LoadingWrapper';

function Button({ label, onClick, type = 'button', className, loading }) {
  return (
    <LoadingWrapper loading={loading}>
      <button type={type} className={className} onClick={onClick}>
        {label}
      </button>
    </LoadingWrapper>
  );
}

Button.propTypes = {
  className: string,
  label: string,
  loading: boolean,
  type: oneOf(['button', 'submit', 'reset']),
  onClick: func
};

export default Button;
