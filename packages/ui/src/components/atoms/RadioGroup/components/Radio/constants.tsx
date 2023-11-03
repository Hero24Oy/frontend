import { Chip } from '$atoms/Chip';
import { RadioVariant } from '$atoms/RadioGroup/types';
import { RadioIndicator } from '$components/atoms/RadioIndicator';

export const radioVariantMapper = {
  [RadioVariant.CHIP]: Chip,
  [RadioVariant.RADIO]: RadioIndicator,
};
