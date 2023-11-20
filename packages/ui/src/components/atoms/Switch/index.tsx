import { Switch as GluestackSwitch } from '@gluestack-ui/themed';
import { FC } from 'react';

import { Size } from '$theme';

export type SwitchSize = Extract<Size, 'sm' | 'md' | 'lg'>;

type Props = {
  defaultValue?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  onToggle?: () => unknown;
  size?: `${SwitchSize}`;
  value?: boolean;
};

export const Switch: FC<Props> = (props) => {
  return <GluestackSwitch {...props} />;
};
