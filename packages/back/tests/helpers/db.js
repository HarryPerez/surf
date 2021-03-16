/* eslint-disable import/prefer-default-export */

import { mongoose } from '../../src/db.js';

export const deleteDocumentsFrom = (models) => {
  const promises = [];
  const modelsInMongoose = mongoose.modelNames();
  modelsInMongoose.forEach(async (modelInMongoose) => {
    const modelToRemoveDocs = models.find((model) => model === modelInMongoose);
    if (modelToRemoveDocs) {
      promises.push(mongoose.model(modelToRemoveDocs).deleteMany({}).catch(
        (err) => (err.message === 'ns not found' ? Promise.resolve() : Promise.reject(err)),
      ));
    }
  });
  return Promise.all(promises);
};
