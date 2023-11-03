import { FC, memo } from 'react';

import { radioVariantMapper } from './constants';

import { RadioOption, RadioSize, RadioVariant } from '$atoms/RadioGroup/types';

type Props = {
  options: RadioOption[];
  size: RadioSize;
  variant: `${RadioVariant}`;
  isGloballyDisabled?: boolean;
};

export const Radio: FC<Props> = memo((props) => {
  const { options, variant, size, isGloballyDisabled } = props;

  const Component = radioVariantMapper[variant];

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
