import { FC } from 'react';
import { Control, UseFormGetValues, UseFormResetField } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { Button, Input, View } from '@hero24/ui';

import { CitySelect, CountrySelect } from './components';
import { usePostcode } from './hooks';

import { ProfileCreation } from '$modules/Profile/stores';

type Props = {
  control: Control<ProfileCreation['address']>;
  getValues: UseFormGetValues<ProfileCreation['address']>;
  isValid: boolean;
  resetField: UseFormResetField<ProfileCreation['address']>;
  submitData: () => void;
};

export const AddressForm: FC<Props> = (props) => {
  const { submitData, isValid, control, getValues, ...restProps } = props;
  const postcode = usePostcode({ getValues });

  return (
    <View style={styles.view}>
      <View style={styles.form}>
        <CountrySelect control={control} name="country" />

        <CitySelect
          control={control}
          name="city"
          getValues={getValues}
          {...restProps}
        />

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
            placeholder={postcode?.placeholder}
            title="Postcode"
            mask={postcode?.mask}
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

export * from './hooks';
