import { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { Input } from '@hero24/ui';

import { InputField } from '../useLogic';

type BasicInformationSectionProps = {
  inputFields: InputField<string>[];
};

export const BasicInformationSection: FC<BasicInformationSectionProps> = (
  props,
) => {
  const { inputFields } = props;

  return inputFields.map((restProps) => (
    <View key={restProps.title} style={styles.inputFieldContainer}>
      <Input {...restProps} />
    </View>
  ));
};

const styles = StyleSheet.create({
  inputFieldContainer: {
    height: 65,
  },
});
