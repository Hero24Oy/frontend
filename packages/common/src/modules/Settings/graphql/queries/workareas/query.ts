import { createSettingsQuery } from '../builder';

export const PREFIX = 'englishLanguages';

export const QUERY = createSettingsQuery({
  workareas: {
    en: true,
    fi: true,
  },
});
