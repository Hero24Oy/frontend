import { createSettingsQuery } from '../builder';

export const PREFIX = 'englishLanguages';

export const QUERY = createSettingsQuery({
  langs: {
    en: true,
    fi: true,
  },
});
