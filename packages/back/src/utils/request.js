import axios from 'axios';

export const get = (config) => axios({ method: 'get', ...config });

export const post = (config) => axios({ method: 'post', ...config });

export const put = (config) => axios({ method: 'put', ...config });
