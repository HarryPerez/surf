/* eslint-disable import/prefer-default-export */

import ejs from 'ejs';

export const renderFile = (filename, data, options) => new Promise(
  (resolve, reject) => ejs.renderFile(
    filename, data, options, (err, str) => {
      if (err) reject(err);
      return resolve(str);
    },
  ),
);
