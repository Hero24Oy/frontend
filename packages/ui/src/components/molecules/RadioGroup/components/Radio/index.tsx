import { Divider } from '@gluestack-ui/themed';
import { Fragment } from 'react';

import { radioVariantMapper } from './constants';

import { RadioOption, RadioSize, RadioVariant } from '$atoms';
import { JsxElement, LayoutStyles } from '$types';

type Props<Value> = {
  hasDivider: boolean;
  options: RadioOption<Value>[];
  variant: `${RadioVariant}`;
  isRadioGroupDisabled?: boolean;
  size?: RadioSize;
  style?: LayoutStyles;
};

export const Radio = <Value,>(props: Props<Value>): JsxElement[] => {
  const { options, variant, isRadioGroupDisabled, hasDivider, ...restProps } =
    props;

  const Component = radioVariantMapper[variant];

  return (
    Component &&
    options.map(({ label, isDisabled, ...restOptionProps }, index) => (
      <Fragment key={label}>
        <Component
          isDisabled={isDisabled || isRadioGroupDisabled}
          hasDivider={hasDivider}
          {...restProps}
          {...restOptionProps}
        >
          {label}
        </Component>

        {hasDivider && index !== options.length - 1 && <Divider />}
      </Fragment>
    ))
  );
};
