import { ChevronDownIcon, Icon } from '@gluestack-ui/themed';
import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '$atoms';
import { Menu, MenuItem } from '$molecules';

import { addCodePrefix } from '../../helpers';
import { CallingCodeProps } from '../types';

export const SelectCallingCode = (props: CallingCodeProps): JSX.Element => {
  const { value, onSelect, country } = props;

  const menuItems = useMemo((): MenuItem[] => {
    if (country && country?.callingCode?.length > 1) {
      return country.callingCode.map((code) => {
        const prefixedCode = addCodePrefix(code);

        return { key: code, value: prefixedCode, label: prefixedCode };
      });
    }

    return [];
  }, [country?.callingCode]);

  return (
    <Menu items={menuItems} onSelect={onSelect}>
      <View style={styles.wrapper}>
        <Text>{value}</Text>
        <Icon as={ChevronDownIcon} />
      </View>
    </Menu>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
