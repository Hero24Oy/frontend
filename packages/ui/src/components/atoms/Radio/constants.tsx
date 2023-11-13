import { RadioVariant } from './types';

import { Chip } from '$atoms/Chip';
import { RadioIndicator } from '$atoms/RadioIndicator';

export const radioVariantMapper = {
  [RadioVariant.CHIP]: Chip,
  [RadioVariant.RADIO_INDICATOR]: RadioIndicator,
};
