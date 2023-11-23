import { RadioChipItem, RadioIndicatorItem, RadioVariant } from '$atoms';

export const radioVariantMapper = {
  [RadioVariant.CHIP]: RadioChipItem,
  [RadioVariant.RADIO_INDICATOR]: RadioIndicatorItem,
};
