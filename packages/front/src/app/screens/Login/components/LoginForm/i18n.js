const { default: i18next } = require('i18next');

i18next.addResources('es', 'LoginErrors', {
  genericError: 'Ocurrió un error en el inicio de sesión',
  emailInvalid: 'El email o la contraseña son incorrectos',
  mailSent: 'Se ha enviado un mail para que haga un cambio de contraseña'
});
i18next.addResources('es', 'LoginFormErrors', {
  required: 'Requerido',
  invalidEmail: 'Email inválido',
  passwordConfirmation: 'Las contraseñas deben coincidir'
});
