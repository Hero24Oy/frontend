import { Control, FieldValues, Path } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { HStack, JsxElement, Switch, Text } from '@hero24/ui';

import { useLogic } from './useLogic';

type BusinessCustomerSwitchProps<Type extends FieldValues> = {
  control: Control<Type>;
  name: Path<Type>;
};

export const BusinessCustomerSwitch = <Type extends FieldValues>(
  props: BusinessCustomerSwitchProps<Type>,
): JsxElement => {
  const switchProps = useLogic(props);

  // * business customer creation will be handler in another PR
  // TODO replace Switch with component from hero24-ui
  return (
    <HStack style={styles.container}>
      <Text>I am a business customer</Text>
      <Switch {...switchProps} />
    </HStack>
  );
};

const styles = StyleSheet.create({
  container: { justifyContent: 'space-between', alignItems: 'center' },
});
