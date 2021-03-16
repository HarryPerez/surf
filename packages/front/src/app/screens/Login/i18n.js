import i18next from 'i18next';

i18next.addResources('es', 'Login', {
  user: 'Email',
  password: 'Contraseña',
  login: 'Iniciar sesión',
  noUser: '¿No tenés usuario aún?',
  signUp: 'Registrate ahora',
  forgotPassword: '¿Olvidaste tu contraseña?',
  loginError: 'El email o la contraseña son inválidos.'
});

i18next.addResources('en', 'Login', {
  welcome: 'Welcome!',
  user: 'Email',
  password: 'Password',
  login: 'Login',
  forgotPassword: 'Forgot password',
  loginError: 'The email or password are invalid'
});

i18next.addResources('es', 'LoginAdmin', {
  welcome: 'Bienvenido/a Admin!'
});

i18next.addResources('en', 'LoginAdmin', {
  welcome: 'Welcome Admin!'
});

i18next.addResources('es', 'LoginUser', {
  welcome: 'Bienvenido/a!'
});

i18next.addResources('en', 'LoginUser', {
  welcome: 'Welcome!'
});
