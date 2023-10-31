import { Chip } from '$atoms/Chip';
import { Radio } from '$atoms/Radio';
import { RadioVariant } from '$atoms/RadioGroup/types';

export const radioComponent = {
  [RadioVariant.CHIP]: Chip,
  [RadioVariant.RADIO]: Radio,
};
