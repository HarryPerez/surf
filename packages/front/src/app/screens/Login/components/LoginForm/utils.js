import i18next from 'i18next';

import { LOGIN_ERRORS } from './constants';

export const mapError = code => i18next.t(`LoginErrors:${LOGIN_ERRORS[code] || 'genericError'}`);
