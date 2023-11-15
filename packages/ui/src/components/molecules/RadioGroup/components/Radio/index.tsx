import { memo } from 'react';

import { radioVariantMapper } from './constants';

import { RadioOption, RadioSize, RadioVariant } from '$atoms';
import { LayoutStyles } from '$types';

type Props<Value> = {
  options: RadioOption<Value>[];
  variant: `${RadioVariant}`;
  isRadioGroupDisabled?: boolean;
  size?: RadioSize;
  style?: LayoutStyles;
};

export const Radio = memo(<Value,>(props: Props<Value>) => {
  const { options, variant, isRadioGroupDisabled, ...restProps } = props;

  const Component = radioVariantMapper[variant];

  return (
    Component &&
    options.map(({ label, isDisabled, ...restOptionProps }) => (
      <Component
        key={label}
        isDisabled={isDisabled || isRadioGroupDisabled}
        {...restProps}
        {...restOptionProps}
      >
        {label}
      </Component>
    ))
  );
});
