import { FC } from 'react';

import { RadioChipItem, RadioIndicatorItem, RadioVariant } from '$atoms';

export const radioItemsMapper = {
  [RadioVariant.CHIP]: RadioChipItem,
  [RadioVariant.RADIO_INDICATOR]: RadioIndicatorItem,
} satisfies Record<RadioVariant, FC<never>>;
