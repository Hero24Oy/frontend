import React, { FC, useMemo } from 'react';

import { VStack } from '../VStack';

import { CheckboxOption } from './CheckboxOption';
import { CheckboxOptionsProps } from './types';

export const CheckboxOptions: FC<CheckboxOptionsProps> = (props) => {
  const { options, ...restProps } = props;

  const optionsToRender = useMemo(() => {
    return options.map((optionProps) => (
      <CheckboxOption key={optionProps.label} {...optionProps} {...restProps} />
    ));
  }, [options]);

  return <VStack>{optionsToRender}</VStack>;
};
