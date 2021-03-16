import i18next from 'i18next';

i18next.addResources('es', 'SignUpForm', {
  name: 'Nombre',
  surname: 'Apellido',
  email: 'Email',
  password: 'Contraseña',
  passwordConfirmation: 'Repetir contraseña',
  register: 'Registrarse'
});

i18next.addResources('es', 'SignUpFormErrors', {
  required: 'Requerido',
  invalidEmail: 'Email inválido',
  passwordConfirmation: 'Las contraseñas deben coincidir',
  passwordStrength: 'La contraseña debe contener como mínimo una letra mayúscula y un número',
  passwordMinimumLength: 'La contraseña debe tener como mínimo 8 caracteres'
});
