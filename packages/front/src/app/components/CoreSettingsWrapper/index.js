import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LoadingWrapper from '~components/LoadingWrapper';
import settingsActions from '~redux/Settings/actions';

function CoreSettingsWrapper({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(settingsActions.getSettings());
  }, []);

  const { settingsLoading, settings } = useSelector(state => state.settings);

  useEffect(() => {
    if (settings) {
      const { brandPrimary } = settings;
      document.documentElement.style.setProperty('--brand-primary', brandPrimary);
    }
  }, [settings]);

  return <LoadingWrapper loading={settingsLoading || !settings}>{children}</LoadingWrapper>;
}
export default CoreSettingsWrapper;
