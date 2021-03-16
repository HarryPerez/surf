import { createRef } from 'react';

export const navigationRef = createRef();

const useNavigation = () => navigationRef.current;

export const getRoute = state => {
  const route = state.routes[state.index];

  if (route.state) {
    return getRoute(route.state);
  }

  return route;
};

export const getActiveRoute = () => getRoute(navigationRef.current.getRootState());

export default useNavigation;
