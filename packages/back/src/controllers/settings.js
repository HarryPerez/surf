import Settings from '../models/settings.js';
import { endRequest, catchRequest } from '../helpers/request.js';
import { entityNotFound } from '../errors.js';

export default async (_, res) => {
  const settings = await Settings.findOne().select({ _id: 0 });
  if (settings) {
    endRequest({ response: settings, code: 200, res });
  } else {
    catchRequest({
      err: entityNotFound('Settings', 'settings', '1039'), res,
    });
  }
};
