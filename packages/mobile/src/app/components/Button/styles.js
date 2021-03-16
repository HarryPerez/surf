import { StyleSheet } from 'react-native';
import { emperor, silver } from '@constants/colors';
import { verticalScale } from '@utils/scaling';

export default StyleSheet.create({
  container: {
    height: verticalScale(40)
  },
  disabled: {
    backgroundColor: silver
  },
  title: {
    color: emperor
  }
});
