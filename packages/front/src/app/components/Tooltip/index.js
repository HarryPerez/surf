import React, { useState, useRef } from 'react';
import { node, string } from 'prop-types';

import styles from './styles.module.scss';
import { DELAY } from './constants';

const Tooltip = ({ children, content, className }) => {
  const timeout = useRef();
  const [active, setActive] = useState(false);
  const showTip = () => {
    timeout.current = setTimeout(() => {
      setActive(true);
    }, DELAY);
  };
  const hideTip = () => {
    clearInterval(timeout.current);
    setActive(false);
  };
  return (
    <div className={styles.container} onMouseEnter={showTip} onMouseLeave={hideTip}>
      {children}
      {active && content && (
        <div className={`${styles.tooltip} ${styles.tooltipTop} ${className}`}>{content}</div>
      )}
    </div>
  );
};

Tooltip.propTypes = {
  children: node,
  className: string,
  content: string
};

Tooltip.defaultProps = {
  className: ''
};

export default Tooltip;
