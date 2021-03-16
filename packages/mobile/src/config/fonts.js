import { brightGray, doveGray, emperor } from '@constants/colors';
import { SEMIBOLD, BOLD, SIZES, LIGHT, REGULAR } from '@constants/fonts';
import { fontMaker } from '@utils/fonts';

// Here you can make your custom fonts
// I only recommend using family if you have more than one Font Family in the App.
export default {
  baseFont: fontMaker({ size: SIZES.MEDIUM, color: emperor }),
  headerFont: fontMaker({ size: SIZES.MEDIUM, color: doveGray, weight: BOLD }),
  titlesFont: fontMaker({
    size: SIZES.MEDIUM,
    color: brightGray,
    weight: SEMIBOLD,
  }),
  semiBoldFont: fontMaker({
    weight: SEMIBOLD,
    size: SIZES.MEDIUM,
    color: emperor,
  }),
  lightFont: fontMaker({ weight: LIGHT, size: SIZES.MEDIUM, color: emperor }),
  boldFont: fontMaker({ weight: BOLD, size: SIZES.MEDIUM, color: emperor }),
  tabFont: fontMaker({ weight: SEMIBOLD, size: SIZES.XSMALL }),
  detailTitle: fontMaker({ weight: SEMIBOLD, size: SIZES.XBIG }),
  inputText: fontMaker({ weight: LIGHT, size: SIZES.MEDIUM, color: emperor }),
  enterAddressInput: fontMaker({
    weight: REGULAR,
    size: SIZES.MEDIUM,
    color: doveGray,
  }),
  storeDetails: fontMaker({
    weight: REGULAR,
    size: SIZES.XXSMALL,
    color: doveGray,
  })
};
