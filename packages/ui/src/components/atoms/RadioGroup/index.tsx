import { RadioGroup as GluestackRadioGroup } from '@gluestack-ui/themed';
import { FC, ReactNode } from 'react';

import { GluestackRadioGroupProps } from './types';

type Props = {
  children: ReactNode | ReactNode[];
} & GluestackRadioGroupProps;

export const RadioGroup: FC<Props> = (props) => {
  const { children, ...restProps } = props;

  return <GluestackRadioGroup {...restProps}>{children}</GluestackRadioGroup>;
};

export * from './types';
