import api from '~config/api';

const createUser = user => api.post('/users', user);
const updatePassword = password => api.post('/users/password', password);

const adminCreateUser = user => api.post('/admin/users', user);

export default {
  createUser,
  updatePassword,
  adminCreateUser
};
