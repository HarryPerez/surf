import React from 'react';
import i18next from 'i18next';

import Info from '~assets/info.svg';
import Tooltip from '~app/components/Tooltip';

import styles from './styles.module.scss';

function TooltipExample() {
  return (
    <div className={`full-width ${styles.tooltipExample}`}>
      <h2 className="subtitle bold m-right-10">{i18next.t('TooltipExample:tooltip')}</h2>
      <div className={`full-width ${styles.tooltips}`}>
        <Tooltip content={i18next.t('TooltipExample:plainContent')}>
          <span className="text-center underline">{i18next.t('TooltipExample:textTooltip')}</span>
        </Tooltip>
        <Tooltip className={styles.customTooltip} content={i18next.t('TooltipExample:styledContent')}>
          <span className="text-center full-width">{i18next.t('TooltipExample:styledTooltip')}</span>
        </Tooltip>
        <div className="row center middle">
          <span className="small-text m-right-2">{i18next.t('TooltipExample:imageTooltip')}</span>
          <Tooltip content={i18next.t('TooltipExample:imageContent')}>
            <img src={Info} />
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default TooltipExample;
