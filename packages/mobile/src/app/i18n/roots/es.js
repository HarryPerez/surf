import Routes from '@constants/routes';

const DEFAULT_ES = {
  App: {
    [Routes.Home]: 'Home',
    [Routes.Information]: 'Información',
    [Routes.Playground]: 'Arena'
  },
  Information: {
    Welcome: 'Bienvenidos al Bootstrap de React Native'
  },
  Playground: {
    Text: 'Este es un texto',
    Button: 'Este es un botón'
  }
};

export default DEFAULT_ES;
