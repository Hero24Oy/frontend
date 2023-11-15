import { ReactNode } from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';

import { Input } from '@hero24/ui';

type BusinessCustomerFormProps<Type extends FieldValues> = {
  businessIdControllerName: Path<Type>;
  businessNameControllerName: Path<Type>;
  control: Control<Type>;
  isBusinessCustomerControllerName: Path<Type>;
};

export const BusinessCustomerForm = <Type extends FieldValues>(
  props: BusinessCustomerFormProps<Type>,
): ReactNode => {
  // TODO remove react note
  const {
    control,
    businessIdControllerName,
    businessNameControllerName,
    isBusinessCustomerControllerName,
  } = props;

  const {
    field: { value: isBusinessCustomer },
  } = useController({ name: isBusinessCustomerControllerName, control });

  if (!isBusinessCustomer) {
    return null;
  }

  return (
    <>
      <View style={styles.inputFieldContainer}>
        <Input
          placeholder="Enter"
          control={control}
          name={businessNameControllerName}
          title="Business name"
        />
      </View>
      <View style={styles.inputFieldContainer}>
        <Input
          placeholder="Enter"
          control={control}
          name={businessIdControllerName}
          title="Business Id"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  form: {
    marginHorizontal: 16,
    marginTop: 16,
    justifyContent: 'space-around',
    flex: 1,
    gap: 24,
  },
  header: { fontSize: 24, fontWeight: '600', lineHeight: 28.8 },
  inputFieldsContainer: { flex: 1, gap: 24 },
  inputFieldContainer: {
    height: 65,
  },
});
