import { createSettingsQuery } from '../builder';

export const PREFIX = 'languages';

export const QUERY = createSettingsQuery({
  langs: {
    en: true,
    fi: true,
  },
});
