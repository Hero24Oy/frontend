import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { SelectLabel, SelectText } from './components';

import { View } from '$atoms';
import { SelectSize } from '$components';

type Props = {
  badgeValue: number;
  size: SelectSize;
  label?: string;
  text?: string;
};

export const SelectInput: FC<Props> = (props) => {
  const { label, size, text, badgeValue } = props;

  return (
    <View style={styles.input}>
      <SelectLabel label={label} />
      <SelectText size={size} text={text} badgeValue={badgeValue} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 293,
  },
});
