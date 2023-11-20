import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { SelectLabel } from '../SelectLabel';
import { SelectText } from '../SelectText';

import { View } from '$atoms';
import { SelectSize } from '$components/organisms/Select/types';

type Props = {
  badgeValue: number;
  size: SelectSize;
  text: string;
  label?: string;
};

export const SelectInput: FC<Props> = (props) => {
  const { label, ...restProps } = props;

  return (
    <View style={styles.container}>
      <SelectLabel label={label} />
      <SelectText {...restProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 2,
  },
});
