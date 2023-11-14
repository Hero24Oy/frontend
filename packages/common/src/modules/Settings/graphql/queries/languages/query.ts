import { Settings } from '../../types';
import { createSettingsQuery } from '../builder';

export const PREFIX = 'languages';

export type Data = Pick<Settings, 'langs'>;

export const QUERY = createSettingsQuery({
  langs: {
    en: true,
    fi: true,
  },
});
