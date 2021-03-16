import { isAndroid } from '@constants/platform';
import {
  MULISH,
  EXTRA_LIGHT,
  LIGHT,
  REGULAR,
  SEMIBOLD,
  BOLD,
  BLACK,
  EXTRA_BOLD,
  MEDIUM,
  NORMAL,
  NORMAL_STYLE,
  EXTRA_LIGHT_WEIGHT,
  LIGHT_WEIGHT,
  REGULAR_WEIGHT,
  SEMIBOLD_WEIGHT,
  BOLD_WEIGHT,
  BLACK_WEIGHT,
  EXTRA_BOLD_WEIGHT,
  MEDIUM_WEIGHT
} from '@constants/fonts';

const fonts = {
  [MULISH]: {
    weights: {
      [EXTRA_LIGHT]: EXTRA_LIGHT_WEIGHT,
      [LIGHT]: LIGHT_WEIGHT,
      [REGULAR]: REGULAR_WEIGHT,
      [SEMIBOLD]: SEMIBOLD_WEIGHT,
      [BOLD]: BOLD_WEIGHT,
      [BLACK]: BLACK_WEIGHT,
      [EXTRA_BOLD]: EXTRA_BOLD_WEIGHT,
      [MEDIUM]: MEDIUM_WEIGHT
    },
    styles: {
      [NORMAL]: NORMAL_STYLE
    }
  }
};

// TODO: Try to reduce the complexity of this function
export const fontMaker = options => {
  const { size = null, color = null } = options;
  let { weight = null, style, family = MULISH } = options;

  let font = {};
  const { weights, styles } = fonts[family];

  if (isAndroid) {
    weight = weight || REGULAR;
    style = style !== NORMAL && style && styles?.[style] ? style : '';

    family = family.split('-')[0];
    const suffix = weight + style;

    font = { fontFamily: family + (suffix.length ? `-${suffix}` : '') };
  } else {
    weight =
      (weight && weights?.[weight]) || weights?.[REGULAR] || REGULAR_WEIGHT;
    style = (style && styles?.[style]) || styles?.[NORMAL] || NORMAL_STYLE;

    font = { fontFamily: family, fontWeight: weight, fontStyle: style };
  }

  font = size ? { ...font, fontSize: size } : font;
  font = color ? { ...font, color } : font;

  return font;
};
