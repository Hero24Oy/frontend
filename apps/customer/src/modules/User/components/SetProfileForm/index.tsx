import { FC } from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button, KeyboardAwareScrollView, Text, VStack } from '@hero24/ui';

import { BusinessCustomerSwitch } from './components';
import { BasicInformationSection } from './components/BasicInformationSection';
import { useLogic, UseLogicParams } from './useLogic';

export const SetProfileForm: FC<UseLogicParams> = (props) => {
  const { control, inputFields, isLoading, isValid, onSubmitHandler } =
    useLogic(props);

  const { bottom } = useSafeAreaInsets();

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
        <BasicInformationSection inputFields={inputFields} />
        {/* <BusinessCustomerForm control={control} isDisabled={isLoading} /> */}
      </VStack>
      <Button
        isLoading={isLoading}
        isDisabled={isLoading || !isValid}
        onPress={onSubmitHandler}
        style={{ marginBottom: bottom }}
      >
        Continue
      </Button>
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
  inputFieldContainer: {
    height: 65,
  },
});
