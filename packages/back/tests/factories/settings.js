import Settings from '../../src/models/settings.js';
import settingsObj from '../mocks/settings.js';

// eslint-disable-next-line import/prefer-default-export
export const createSettings = (settings = settingsObj) => new Settings(settings).save();
