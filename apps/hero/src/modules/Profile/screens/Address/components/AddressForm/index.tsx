import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { defaultCountry } from '@hero24/common';
import { Button, Input, View } from '@hero24/ui';

import { CitySelect, CountrySelect } from './components';
import { Postcodes } from './constants';
import { useLogic } from './useLogic';

export const AddressForm: FC = () => {
  const { onChange, isValid, control } = useLogic();
  const { mask, placeholder } = Postcodes[defaultCountry];

  return (
    <View style={styles.view}>
      <View style={styles.form}>
        <CountrySelect />
        <CitySelect />
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
      <Button isDisabled={!isValid} onPress={onChange}>
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
    gap: 3,
  },
});
