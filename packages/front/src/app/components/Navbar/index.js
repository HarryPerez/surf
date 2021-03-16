import { string } from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

function Navbar({ containerClassName = '', navbarClassName = '', children }) {
  return (
    <div className={`${styles.navbarContainer} ${containerClassName}`}>
      <nav className={`${styles.navbar} ${navbarClassName}`}>{children}</nav>
    </div>
  );
}

Navbar.propTypes = {
  containerClassName: string,
  navbarClassName: string
};

export default Navbar;
