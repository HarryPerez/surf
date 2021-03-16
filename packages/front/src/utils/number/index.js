export const isNumber = value => typeof value === 'number';

export const inRange = (value, min, max) => min <= value && max >= value;

export const formatPercentage = value => `${Math.round(value, 2)}%`;

export const isEven = value => value % 2 === 0;

export const isOdd = value => !isEven(value);

export const isInteger = value => isNumber(value) && isFinite(value) && Math.floor(value) === value;

export const isFloat = value => isNumber(value) && !!(value % 1);

export const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

/*
  Represents as string a decimal number in another base.
  radix: Which base to use for representing a numeric value. Must be an integer between 2 and 36.
    2 - The number will show as a binary value
    8 - The number will show as an octal value
    16 - The number will show as an hexadecimal value
*/
export const convertDecimal = (value, radix) => Number(value).toString(radix);

/*
  Formats the passed value to the locale and currency specified.
    locale is the IETF language tag. More info: http://www.lingoes.net/en/translator/langcode.htm
    currency is the one used in the country specified in locale.
*/
export const formatCurrency = (value, locale, currency) =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);
