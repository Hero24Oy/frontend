import { createSettingsQuery, InferSelection } from '@hero24/common';

export const PREFIX = 'workareas';

export const QUERY = createSettingsQuery({
  workareas: {
    en: true,
    fi: true,
  },
});

export type Data = InferSelection<typeof QUERY>;
