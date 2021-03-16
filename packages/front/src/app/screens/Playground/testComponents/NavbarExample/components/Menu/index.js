import i18next from 'i18next';
import { string } from 'prop-types';
import React, { useState } from 'react';

import Button from '~app/components/Button';

function Menu({ containerClassName, dropdownClassName, children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <div className={containerClassName}>
      <Button label={i18next.t('Navbar:Menu')} onClick={openMenu} type="button" />
      {isMenuOpen && <div className={`column ${dropdownClassName}`}>{children}</div>}
    </div>
  );
}

Menu.propTypes = {
  containerClassName: string,
  dropdownClassName: string
};

export default Menu;
