import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { Button, Input, RadioGroup, View } from '@hero24/ui';

import { chipOptions } from './constants';

import {
  CompanyCreation,
  companyCreationInitialState,
} from '$modules/Profile/stores';

export const CompanyInfoForm: FC = () => {
  // TODO replace in useLogic after logic implementation
  const { control } = useForm<CompanyCreation['companyInfo']>({
    defaultValues: companyCreationInitialState.companyInfo,
    mode: 'onChange',
  });

  return (
    // TODO replace text in inputs and button with i18n call
    <View style={styles.view}>
      <View style={styles.form}>
        <Input
          control={control}
          name="name"
          placeholder="Enter"
          title="Company name"
        />

        <Input
          control={control}
          name="email"
          placeholder="Enter"
          title="Email"
        />

        <RadioGroup
          control={control}
          name="employees"
          variant="chip"
          options={chipOptions}
          title="Number of employees"
          style={styles.radioGroup}
          childrenStyle={styles.chips}
        />
      </View>

      <Button style={styles.button}>Continue</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'space-between',
  },
  form: {
    gap: 3,
  },
  radioGroup: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  chips: {
    flexBasis: '32%',
  },
  button: {
    width: '100%',
  },
});
