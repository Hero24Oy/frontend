import i18n from 'i18next';

// TODO set up i18next
export const getCurrentLanguage = (): string =>
  (i18n.language || '').split('-')[0];
