import { RadioGroup as GluestackRadioGroup } from '@gluestack-ui/themed';
import React, { ComponentProps, FC, ReactNode } from 'react';

interface Props extends ComponentProps<typeof GluestackRadioGroup> {
  children: ReactNode | ReactNode[];
  onChange: (value: string) => void;
}

export const RadioGroup: FC<Props> = (props) => {
  const { children, onChange, value, ...rest } = props;

  return (
    <GluestackRadioGroup value={value} onChange={onChange} {...rest}>
      {children}
    </GluestackRadioGroup>
  );
};
