import { FC } from 'react';
import {
  Control,
  UseFormGetValues,
  UseFormResetField,
  UseFormSetValue,
} from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { Button, RadioGroup, View, VStack } from '@hero24/ui';

import { chipOptions } from './constants';

import { ExpertiseSelect } from '$modules/Profile/components/ExpertiseSelect';
import { PlacesToWorkSelect } from '$modules/Profile/components/PlacesToWorkSelect';
import { ProfileCreation } from '$modules/Profile/stores';

type Props = {
  control: Control<ProfileCreation['workData']>;
  getValues: UseFormGetValues<ProfileCreation['workData']>;
  isValid: boolean;
  resetField: UseFormResetField<ProfileCreation['workData']>;
  setValue: UseFormSetValue<ProfileCreation['workData']>;
  submitData: () => void;
};

export const WorkDataForm: FC<Props> = (props) => {
  const { control, isValid, submitData, ...restProps } = props;

  return (
    <VStack style={styles.container}>
      <View style={styles.form}>
        <ExpertiseSelect
          control={control}
          isValid={isValid}
          name="expertise"
          {...restProps}
        />
        <RadioGroup
          control={control}
          name="experience"
          variant="chip"
          options={chipOptions}
          title="Work experience"
          style={styles.radioGroup}
          childrenStyle={styles.chips}
        />
        <PlacesToWorkSelect
          control={control}
          name="places"
          isValid={isValid}
          {...restProps}
        />
      </View>
      <Button style={styles.button} isDisabled={!isValid} onPress={submitData}>
        Continue
      </Button>
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  form: {
    gap: 24,
  },
  radioGroup: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  chips: {
    flexBasis: '49%',
  },
  button: {
    width: '100%',
  },
});
