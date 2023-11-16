import { HStack, Switch } from '@gluestack-ui/themed';
import { Control, FieldValues, Path, useController } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { JsxElement, Text } from '@hero24/ui';

type BusinessCustomerSwitchProps<Type extends FieldValues> = {
  control: Control<Type>;
  name: Path<Type>;
  isDisabled?: boolean;
};

export const BusinessCustomerSwitch = <Type extends FieldValues>(
  props: BusinessCustomerSwitchProps<Type>,
): JsxElement => {
  const { control, name, isDisabled } = props;

  const {
    field: { value, onChange },
  } = useController({ name, control });

  // TODO replace Switch with component from hero24-ui
  return (
    <HStack style={styles.container}>
      <Text style={styles.businessCustomer}>I'am a business customer</Text>
      <Switch isDisabled={isDisabled} onToggle={onChange} value={value} />
    </HStack>
  );
};

const styles = StyleSheet.create({
  container: { justifyContent: 'space-between', alignItems: 'center' },
  businessCustomer: {
    fontSize: 14,
  },
});
