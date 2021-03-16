module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'import-glob',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@app': './src/app',
          '@home': './src/app/screens/Home',
          '@assets': './src/app/assets',
          '@components': './src/app/components',
          '@config': './src/config',
          '@constants': './src/constants',
          '@screens': './src/app/screens',
          '@services': './src/services',
          '@propTypes': './src/propTypes',
          '@redux': './src/redux',
          '@utils': './src/utils',
          '@i18n': './src/app/i18n'
        }
      }
    ]
  ]
};
