import { RadioGroup as GluestackRadioGroup } from '@gluestack-ui/themed';
import React, { FC, ReactNode } from 'react';
import { StyleSheet } from 'react-native';

interface Props {
  children: ReactNode | ReactNode[];
  onChange: (value: string) => void;
  value: string;
}

export const RadioGroup: FC<Props> = (props) => {
  const { children, onChange, value } = props;

  return (
    <GluestackRadioGroup
      value={value}
      onChange={onChange}
      style={styles.radioGroup}
    >
      {children}
    </GluestackRadioGroup>
  );
};

const styles = StyleSheet.create({
  radioGroup: {
    display: 'flex',
    gap: 6,
  },
});
