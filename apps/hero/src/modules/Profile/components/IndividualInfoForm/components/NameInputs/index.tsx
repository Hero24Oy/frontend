import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Input, View } from '@hero24/ui';

import { INDIVIDUAL_HERO_NAME_PLACEHOLDER } from '../../constants';

import { NameInputsProps } from './types';
import { useLogic } from './useLogic';

export const NameInputs: FC<NameInputsProps> = (props) => {
  const { control, ...restProps } = props;

  useLogic(restProps);

  return (
    <>
      <Input
        control={control}
        name="firstName"
        placeholder="Enter"
        title="Name"
      />
      <Input
        control={control}
        name="lastName"
        placeholder="Enter"
        title="Last name"
      />
      <View style={styles.displayedName}>
        <Input
          isDisabled
          isHelperEnabled={false}
          control={control}
          name="name"
          placeholder={INDIVIDUAL_HERO_NAME_PLACEHOLDER}
          title="Displayed name"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  displayedName: {
    marginBottom: 24,
  },
});
