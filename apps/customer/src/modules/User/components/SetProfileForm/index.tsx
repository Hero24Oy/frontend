import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Heading, KeyboardAwareScrollView, View, VStack } from '@hero24/ui';

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
    isBusinessCustomer,
  } = useLogic(props);

  return (
    <View style={styles.form}>
      <BusinessCustomerSwitch control={control} name="isBusinessCustomer" />
      <KeyboardAwareScrollView
        scrollEnabled={false}
        contentContainerStyle={styles.keyboardAwareView}
      >
        <VStack>
          <Heading variant="H2">Add personal info</Heading>
          <InputSection control={control} inputFields={basicInputFields} />
          <BusinessCustomerSection
            isShown={isBusinessCustomer}
            control={control}
            inputFields={businessCustomerInputFields}
          />
        </VStack>
      </KeyboardAwareScrollView>
      <SubmitButton
        isLoading={isLoading}
        isDisabled={!isValid}
        onPress={onSubmitHandler}
      />
    </View>
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
  keyboardAwareView: { flex: 1 },
});
