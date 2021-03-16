import React from 'react';

export const generateNavigator = (Navigator, config) => props => (
  <Navigator.Navigator {...config.config} {...props}>
    {config.screens.map(screen => (
      <Navigator.Screen key={screen.name} {...screen} />
    ))}
  </Navigator.Navigator>
);
