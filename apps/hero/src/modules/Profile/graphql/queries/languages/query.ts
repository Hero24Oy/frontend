import { createSettingsQuery, Settings } from '@hero24/common';

export const PREFIX = 'languages';

export type Data = Pick<Settings, 'langs'>;

export const QUERY = createSettingsQuery({
  langs: {
    en: true,
    fi: true,
  },
});
