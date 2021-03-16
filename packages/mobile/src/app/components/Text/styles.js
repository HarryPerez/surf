import { StyleSheet } from 'react-native';
import fonts from '@config/fonts';
import * as Colors from '@constants/colors';
import { SIZES } from '@constants/fonts';

import { moderateScale } from '@utils/scaling';

const getColors = colorsObj =>
  Object.keys(colorsObj).reduce(
    (colors, color) => ({
      ...colors,
      ...{ [color]: { color: colorsObj[color] } },
    }),
    {}
  );

const getSizes = sizesObj =>
  Object.keys(sizesObj).reduce(
    (sizes, size) => ({
      ...sizes,
      ...{ [size]: { fontSize: moderateScale(sizesObj[size]) } },
    }),
    {}
  );

export default StyleSheet.create({
  base: {
    ...fonts.baseFont,
    backgroundColor: Colors.transparent
  },
  bold: fonts.boldFont,
  semiBold: fonts.semiBoldFont,
  light: fonts.lightFont,
  center: {
    textAlign: 'center'
  },
  justify: {
    textAlign: 'justify'
  },
  right: {
    textAlign: 'right'
  },
  title: fonts.titlesFont,
  // Colors
  ...getColors(Colors),
  // Sizes
  ...getSizes({
    xxsmall: SIZES.XXSMALL,
    xsmall: SIZES.XSMALL,
    small: SIZES.SMALL,
    medium: SIZES.MEDIUM,
    big: SIZES.BIG,
    xbig: SIZES.XBIG,
    xxbig: SIZES.XXBIG
  }),
  disabled: {
    color: Colors.alto
  },
  tabFont: {
    ...fonts.tabFont
  },
  uppercase: {
    textTransform: 'uppercase'
  },
  storeDetails: fonts.storeDetails
});
