import { Settings } from '../../types';
import { createSettingsQuery } from '../builder';

export const PREFIX = 'workareas';

export type Data = Pick<Settings, 'workareas'>;

export const QUERY = createSettingsQuery({
  workareas: {
    en: true,
    fi: true,
  },
});
