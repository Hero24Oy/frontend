import { createSettingsQuery, Settings } from '@hero24/common';

export const PREFIX = 'workareas';

export type Data = Pick<Settings, 'workareas'>;

export const QUERY = createSettingsQuery({
  workareas: {
    en: true,
    fi: true,
  },
});
