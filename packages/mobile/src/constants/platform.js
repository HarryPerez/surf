/* eslint-disable no-magic-numbers */
import { Platform, StatusBar, Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const ROOT = 'root';

export const isAndroid = Platform.OS === 'android';
export const isIos = Platform.OS === 'ios';

const IOS_STATUS_BAR_HEIGHT = 20;
const NATIVE_BAR_CURRENT_HEIGHT = StatusBar.currentHeight || 0;
export const STATUS_BAR_HEIGHT = isIos
  ? IOS_STATUS_BAR_HEIGHT
  : NATIVE_BAR_CURRENT_HEIGHT;
export const STATUS_BAR_IS_FIXED = isAndroid && Platform.Version < 21;
export const ACTION_BAR_HEIGHT = STATUS_BAR_IS_FIXED ? 74 : 64;
export const TABBAR_HEIGHT = 50;

const screenDimensions = Dimensions.get('screen');
export const SCREEN_HEIGHT = screenDimensions.height;
export const SCREEN_WIDTH = screenDimensions.width;

const windowDimensions = Dimensions.get('window');
export const WINDOW_HEIGHT = windowDimensions.height;
export const WINDOW_WIDTH = windowDimensions.width;

export const VIEWPORT_HEIGHT =
  WINDOW_HEIGHT -
  TABBAR_HEIGHT -
  ACTION_BAR_HEIGHT -
  (STATUS_BAR_IS_FIXED ? STATUS_BAR_HEIGHT : 0);

export const IS_SMALL_DEVICE = WINDOW_HEIGHT < 570;
export const NOTCH = DeviceInfo.hasNotch();
