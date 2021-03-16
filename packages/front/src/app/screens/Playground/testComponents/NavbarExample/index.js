import i18next from 'i18next';
import React from 'react';

import Button from '~app/components/Button';
import Navbar from '~app/components/Navbar';

import Menu from './components/Menu';
import styles from './styles.module.scss';

function NavbarExample() {
  return (
    <div className={`row middle full-width m-bottom-3 ${styles.container}`}>
      <h3 className="subtitle bold text-center m-bottom-4">{i18next.t('Navbar:title')}</h3>
      <Navbar navbarClassName="row middle">
        <Menu containerClassName={styles.mobileNavbar} dropdownClassName={styles.dropdown}>
          <Button label={i18next.t('Navbar:firstLink')} />
          <Button label={i18next.t('Navbar:secondLink')} />
        </Menu>
        <div className={`row ${styles.wideNavbar}`}>
          <Button label={i18next.t('Navbar:firstLink')} />
          <Button className="m-left-3" label={i18next.t('Navbar:secondLink')} />
        </div>
      </Navbar>
    </div>
  );
}

export default NavbarExample;
