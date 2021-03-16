import api from '~config/api';

export const getSettings = () => api.get('/settings');
