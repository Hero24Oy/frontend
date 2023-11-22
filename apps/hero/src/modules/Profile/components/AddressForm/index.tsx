import { FC } from 'react';
import { Control, UseFormGetValues, UseFormResetField } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { DEFAULT_COUNTRY } from '@hero24/common';
import { Button, Input, View } from '@hero24/ui';

import { CitySelect, CountrySelect } from './components';
import { Postcodes } from './constants';

import { ProfileCreation } from '$modules/Profile/stores';

type Props = {
  control: Control<ProfileCreation['address']>;
  getValues: UseFormGetValues<ProfileCreation['address']>;
  isValid: boolean;
  resetField: UseFormResetField<ProfileCreation['address']>;
  submitData: () => void;
};

export const AddressForm: FC<Props> = (props) => {
  const { submitData, isValid, control, ...restProps } = props;
  const { mask, placeholder } = Postcodes[DEFAULT_COUNTRY];

  return (
    <View style={styles.view}>
      <View style={styles.form}>
        <CountrySelect control={control} name="country" />

        <CitySelect control={control} name="city" {...restProps} />

        <View style={styles.inputs}>
          <Input
            control={control}
            name="address"
            placeholder="Enter"
            title="Address"
          />

          <Input
            control={control}
            name="postcode"
            placeholder={placeholder}
            title="Postcode"
            mask={mask}
          />
        </View>
      </View>

      <Button isDisabled={!isValid} onPress={submitData}>
        Continue
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'space-between',
  },
  form: {
    gap: 24,
  },
  inputs: {
    gap: 3,
  },
});

export * from './constants';
