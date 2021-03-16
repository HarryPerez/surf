import DEFAULT_ES from '../roots/es';
import addResources from '../utils';

// Example of how to overWrite translations on the root languaje
// 1- Add the namespace asthe key of the overWrites object, if not already added
// 2- Add the translation's key and the overWrite translation as the value
// 3- Pass the overWrites object as a property of the same name in the object parameter of translations function

/* const overWrites = {
  ProductList: {
    TITLE: 'Detallesitos'
  }
}; */

export const translations = () => addResources({ lng: 'es', defaultTranslations: DEFAULT_ES });
