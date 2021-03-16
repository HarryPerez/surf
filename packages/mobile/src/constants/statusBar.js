import { white, black } from './colors';

const statusBarConfig = {
  transparentStatusBar: {
    barStyle: 'dark-content',
    translucent: true,
    backgroundColor: 'rgba(255, 255, 255, 0.6)'
  },
  whiteStatusBar: { barStyle: 'dark-content', backgroundColor: white },
  darkStatusBar: { barStyle: 'light-content', backgroundColor: black }
};

export default statusBarConfig;
