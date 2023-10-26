import { RadioGroup as GluestackRadioGroup } from '@gluestack-ui/themed';
import React, { FC, ReactNode } from 'react';

import { GluestackRadioGroupProps } from './types';

type Props = {
  children: ReactNode | ReactNode[];
} & GluestackRadioGroupProps;

export const RadioGroup: FC<Props> = (props) => {
  const { children, onChange, value, ...rest } = props;

  return (
    <GluestackRadioGroup value={value} onChange={onChange} {...rest}>
      {children}
    </GluestackRadioGroup>
  );
};

export * from './types';
