import { Chip, RadioIndicatorItem, RadioVariant } from '$atoms';

export const radioVariantMapper = {
  [RadioVariant.CHIP]: Chip,
  [RadioVariant.RADIO_INDICATOR]: RadioIndicatorItem,
};
