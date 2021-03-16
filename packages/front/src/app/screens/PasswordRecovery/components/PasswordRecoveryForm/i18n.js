import i18next from 'i18next';

i18next.addResources('es', 'PasswordRecoveryForm', {
  password: 'Contraseña',
  passwordConfirmation: 'Repetir contraseña',
  submit: 'Cambiar contraseña'
});

i18next.addResources('es', 'PasswordRecoveryFormErrors', {
  required: 'Requerido',
  passwordConfirmation: 'Las contraseñas deben coincidir',
  passwordStrength: 'La contraseña debe contener como mínimo una letra mayúscula y un número',
  passwordMinimumLength: 'La contraseña debe tener como mínimo 8 caracteres'
});
