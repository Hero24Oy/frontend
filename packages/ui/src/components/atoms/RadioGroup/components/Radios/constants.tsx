import { RadioVariant } from '../../types';

import { Chip } from '$atoms/Chip';
import { Radio } from '$atoms/Radio';

export const radioComponent = {
  [RadioVariant.CHIP]: Chip,
  [RadioVariant.RADIO]: Radio,
};
