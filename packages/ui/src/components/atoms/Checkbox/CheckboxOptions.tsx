import { Divider, VStack } from '@gluestack-ui/themed';
import React, { FC, useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { View } from '../View';

import { CheckboxOption } from './CheckboxOption';
import { CheckboxOptionsProps } from './types';

export const CheckboxOptions: FC<CheckboxOptionsProps> = (props) => {
  const { options, ...restProps } = props;

  const optionsToRender = useMemo(() => {
    return options.map((optionProps, index) => (
      <View key={optionProps.label}>
        <CheckboxOption
          wrapperStyle={styles.wrapper}
          {...optionProps}
          {...restProps}
        />
        {index !== options.length - 1 && <Divider />}
      </View>
    ));
  }, [options]);

  return <VStack>{optionsToRender}</VStack>;
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 32,
    paddingVertical: 8,
  },
});
