import {
  CheckboxIcon,
  CheckboxIndicator as GluestackCheckboxIndicator,
} from '@gluestack-ui/themed';
import { Check, Minus } from 'lucide-react-native';
import { FC } from 'react';

type CheckboxIndicatorProps = {
  isIndeterminate?: boolean;
};

export const CheckboxIndicator: FC<CheckboxIndicatorProps> = ({
  isIndeterminate,
}) => (
  <GluestackCheckboxIndicator>
    <CheckboxIcon as={isIndeterminate ? Minus : Check} />
  </GluestackCheckboxIndicator>
);
