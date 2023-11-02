import { FC, memo } from 'react';

import { radioComponent } from './constants';

import { RadioOption, RadioVariant } from '$atoms/RadioGroup/types';
import { Size } from '$theme';

type Props = {
  options: RadioOption[];
  size: `${Size}`;
  variant: `${RadioVariant}`;
  isGloballyDisabled?: boolean;
};

export const Radios: FC<Props> = memo((props) => {
  const { options, variant, size, isGloballyDisabled } = props;

  const Component = radioComponent[variant];

  return (
    Component &&
    options.map(({ label, isDisabled, ...restProps }) => (
      <Component
        key={label}
        size={size}
        isDisabled={isDisabled || isGloballyDisabled}
        {...restProps}
      >
        {label}
      </Component>
    ))
  );
});
