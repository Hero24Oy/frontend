import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { SelectSize } from '../../types';
import { SelectLabel } from '../SelectLabel';
import { SelectText } from '../SelectText';

import { View } from '$atoms';

type Props = {
  badgeValue: number;
  size: SelectSize;
  text: string;
  label?: string;
};

export const SelectInput: FC<Props> = (props) => {
  const { label, ...restProps } = props;

  return (
    <View style={styles.input}>
      <SelectLabel label={label} />
      <SelectText {...restProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 293,
  },
});
