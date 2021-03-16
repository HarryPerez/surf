import React from 'react';
import i18next from 'i18next';
import { View } from 'react-native';
import Text from '@components/Text';
import Button from '@components/Button';

import styles from './styles';

function Playground() {
  return (
    <View style={styles.container}>
      <Text>{i18next.t('Playground:Text')}</Text>
      <Button style={styles.button} textStyle={styles.buttonText} title={i18next.t('Playground:Button')} />
    </View>
  );
}

export default Playground;
