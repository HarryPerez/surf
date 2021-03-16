import React from 'react';
import i18next from 'i18next';
import { View } from 'react-native';
import Text from '@components/Text';

import styles from './styles';

function Information() {
  return (
    <View style={styles.container}>
      <Text>{i18next.t('Information:Welcome')}</Text>
    </View>
  );
}

export default Information;
