import { StyleSheet } from 'react-native';
import { success, white } from '@constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: success,
    marginVertical: 20,
    padding: 10
  },
  buttonText: {
    color: white
  }
});
