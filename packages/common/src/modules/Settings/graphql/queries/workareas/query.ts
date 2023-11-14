import { createSettingsQuery } from '../builder';

export const PREFIX = 'workareas';

export const QUERY = createSettingsQuery({
  workareas: {
    en: true,
    fi: true,
  },
});
