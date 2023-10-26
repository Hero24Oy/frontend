import { RadioGroup as GluestackRadioGroup } from '@gluestack-ui/themed';
import React, { FC, ReactNode } from 'react';

import { GluestackProps } from './types';

type Props = {
  children: ReactNode | ReactNode[];
} & GluestackProps;

export const RadioGroup: FC<Props> = (props) => {
  const { children, onChange, value, ...rest } = props;

  return (
    <GluestackRadioGroup value={value} onChange={onChange} {...rest}>
      {children}
    </GluestackRadioGroup>
  );
};

export * from './types';
