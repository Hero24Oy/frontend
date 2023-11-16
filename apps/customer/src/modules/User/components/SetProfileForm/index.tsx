import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { KeyboardAwareScrollView, Text, VStack } from '@hero24/ui';

import {
  BusinessCustomerSection,
  BusinessCustomerSwitch,
  InputSection,
  SubmitButton,
} from './components';
import { useLogic, UseLogicParams } from './hooks';

type SetProfileFormProps = UseLogicParams;

export const SetProfileForm: FC<SetProfileFormProps> = (props) => {
  const {
    control,
    basicInputFields,
    businessCustomerInputFields,
    isLoading,
    isValid,
    onSubmitHandler,
  } = useLogic(props);

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.form}
      scrollEnabled={false}
    >
      <BusinessCustomerSwitch
        isDisabled={isLoading}
        control={control}
        name="isBusinessCustomer"
      />

      <VStack style={styles.inputFieldsContainer}>
        <Text style={styles.header}>Add personal info</Text>
        <InputSection control={control} inputFields={basicInputFields} />
        <BusinessCustomerSection
          control={control}
          inputFields={businessCustomerInputFields}
        />
      </VStack>
      <SubmitButton
        isLoading={isLoading}
        isDisabled={!isValid}
        onPress={onSubmitHandler}
      />
    </KeyboardAwareScrollView>
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
});
