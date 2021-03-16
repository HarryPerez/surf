import { onlyNumbers } from '~utils/string';
import { addHours } from '~utils/date';
import { convertDecimal } from '~utils/number';

export const isLogged = expirationTime => {
  const currentDate = new Date();
  return expirationTime && addHours(currentDate, expirationTime) > currentDate;
};

export const hasAccess = (tokenManager, supportedRoles) =>
  tokenManager && supportedRoles.includes(tokenManager.role);

export const mapExpirationTime = string => convertDecimal(onlyNumbers(string), 10);
