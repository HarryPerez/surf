import Information from '@home/screens/Information';
import Playground from '@home/screens/Playground';
import { mainTabNavConfig } from '@config/navigation';
import Routes from '@constants/routes';

export const TAB_BAR_SCREENS = {
  config: mainTabNavConfig,
  screens: [
    {
      name: Routes.Information,
      component: Information
    },
    {
      name: Routes.Playground,
      component: Playground
    }
  ]
};
