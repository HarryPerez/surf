import api from '~config/api';

export const signIn = user => api.post('/sign_in', user);
