import { StyleSheet } from 'react-native';
import { verticalScale } from '@utils/scaling';
import { white, black } from '@constants/colors';
import Routes from '@constants/routes';

export default StyleSheet.create({
  container: {
    height: verticalScale(60)
  },
  [Routes.Home]: {
    paddingHorizontal: 10,
    paddingBottom: 5,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: white,
    shadowColor: black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 24
  }
});
