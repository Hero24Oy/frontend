import { FC, memo } from 'react';

import { radioVariantMapper } from './constants';
import { BlankRadioOption, RadioSize, RadioVariant } from './types';

import { LayoutStyles } from '$types';

type Props = {
  options: BlankRadioOption[];
  variant: `${RadioVariant}`;
  isGloballyDisabled?: boolean;
  size?: RadioSize;
  style?: LayoutStyles;
};

export const Radio: FC<Props> = memo((props) => {
  const { options, variant, isGloballyDisabled, ...restProps } = props;

  const Component = radioVariantMapper[variant];

  return (
    Component &&
    options.map(({ label, isDisabled, ...restOptionProps }) => (
      <Component
        key={label}
        isDisabled={isDisabled || isGloballyDisabled}
        {...restProps}
        {...restOptionProps}
      >
        {label}
      </Component>
    ))
  );
});

export * from './types';
