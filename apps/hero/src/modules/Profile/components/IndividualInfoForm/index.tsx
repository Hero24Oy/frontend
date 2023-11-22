import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { DateInput } from '@hero24/common';
import { Button, Input, ScrollView, View } from '@hero24/ui';

import { NameInputs } from './components';
import {
  BIRTH_DATE_INPUT_PLACEHOLDER,
  BIRTH_DATE_MASK,
  SOCIAL_SECURITY_ID_MASK,
  SOCIAL_SECURITY_ID_PLACEHOLDER,
} from './constants';
import { PersonalInfoFormProps } from './types';

export const IndividualInfoForm: FC<PersonalInfoFormProps> = (props) => {
  const { control, submitData, isValid, setValue, watch } = props;

  return (
    // TODO replace text in inputs and button with i18n call
    <ScrollView style={styles.view}>
      <View style={styles.form}>
        <NameInputs control={control} setValue={setValue} watch={watch} />
        <DateInput
          control={control}
          name="birthday"
          title="Birth day"
          dateMask={BIRTH_DATE_MASK}
          placeholder={BIRTH_DATE_INPUT_PLACEHOLDER}
        />
        <Input
          control={control}
          name="socialId"
          placeholder={SOCIAL_SECURITY_ID_PLACEHOLDER}
          mask={SOCIAL_SECURITY_ID_MASK}
          title="Social security ID"
          keyboardType="number-pad"
        />
        <Input
          control={control}
          name="email"
          placeholder="Enter"
          title="Email"
          keyboardType="email-address"
        />
      </View>

      <Button style={styles.button} isDisabled={!isValid} onPress={submitData}>
        Continue
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  form: {
    gap: 3,
    marginBottom: 4,
  },
  button: {
    width: '100%',
  },
});
