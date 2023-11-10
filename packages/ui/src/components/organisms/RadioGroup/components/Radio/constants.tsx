import { Chip } from '$atoms/Chip';
import { RadioIndicator } from '$components/atoms/RadioIndicator';
import { RadioVariant } from '$organisms/RadioGroup/types';

export const radioVariantMapper = {
  [RadioVariant.CHIP]: Chip,
  [RadioVariant.RADIO_INDICATOR]: RadioIndicator,
};
