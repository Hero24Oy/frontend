import { HERO_COMPANY_NAME } from '$configs';

export const INDIVIDUAL_HERO_NAME_SEPARATOR = ' / ';
export const SOCIAL_SECURITY_ID_MASK = '999 999 999 99';
export const SOCIAL_SECURITY_ID_PLACEHOLDER = '000 000 000 00';
export const DISPLAYED_NAME_PLACEHOLDER = HERO_COMPANY_NAME.concat(
  INDIVIDUAL_HERO_NAME_SEPARATOR,
  'Name',
);

export const BIRTH_DATE_MASK = 'dd.MM.yyyy';
export const BIRTH_DATE_INPUT_PLACEHOLDER = 'DD.MM.YYYY';
