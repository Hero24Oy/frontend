import { createSettingsQuery, InferSelection } from '@hero24/common';

export const PREFIX = 'languages';

export const QUERY = createSettingsQuery({
  langs: {
    en: true,
    fi: true,
  },
});

export type Data = InferSelection<typeof QUERY>;
