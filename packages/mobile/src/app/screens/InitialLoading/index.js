import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { black } from '@constants/colors';
import { useNavigation } from '@react-navigation/native';
import Routes from '@constants/routes';

import styles from './styles';

function InitialLoading() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => navigation.navigate(Routes.Home), 500);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={black} />
    </View>
  );
}

export default InitialLoading;
