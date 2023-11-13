import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { SelectProps } from '$components';
import { StyledSelectLabel } from '$components/styled';

type Props = Pick<SelectProps, 'label'>;

export const SelectLabel: FC<Props> = ({ label }) => {
  if (!label) {
    return null;
  }

  return <StyledSelectLabel style={styles.label}>{label}</StyledSelectLabel>;
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 2,
  },
});
