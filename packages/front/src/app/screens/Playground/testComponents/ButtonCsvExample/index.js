import React from 'react';
import i18next from 'i18next';
import { useDispatch } from 'react-redux';

import Button from '~app/components/Button';
import fileActions from '~redux/File/actions';

import styles from './styles.module.scss';

function ButtonCsvExample() {
  const dispatch = useDispatch();

  const handleDownload = () => {
    dispatch(
      fileActions.downloadCSV(
        [
          {
            example: 1
          },
          {
            example: 2
          }
        ],
        `test_${new Date().getTime()}.csv`
      )
    );
  };

  return (
    <div className={`full-width m-bottom-3 ${styles.exampleButtonContainer}`}>
      <span className="subtitle bold">{i18next.t('PlaygroundButtonCsv:button')}</span>
      <Button
        label={i18next.t('PlaygroundButtonCsv:label')}
        onClick={handleDownload}
        type="button"
        className={`full-width m-bottom-2 ${styles.exampleButton}`}
      />
    </div>
  );
}

export default ButtonCsvExample;
