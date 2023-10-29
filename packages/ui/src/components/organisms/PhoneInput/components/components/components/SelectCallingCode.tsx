import { ChevronDownIcon, Icon } from '@gluestack-ui/themed';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { HStack, Text } from '$atoms';
import { Menu, MenuItem } from '$molecules';

import { addCodePrefix } from '../../helpers';
import { CallingCodeProps } from '../types';

export const SelectCallingCode = (props: CallingCodeProps): JSX.Element => {
  const { value, onSelect, country } = props;

  const menuItems = useMemo((): MenuItem[] => {
    if (country && country?.callingCode?.length > 1) {
      return country.callingCode.map((code) => {
        const prefixedCode = addCodePrefix(code);

        return {
          key: code,
          value: prefixedCode,
          label: prefixedCode,
        };
      });
    }

    return [];
  }, [country?.callingCode]);

  return (
    <Menu items={menuItems} onSelect={onSelect}>
      <HStack style={styles.wrapper}>
        <Icon as={ChevronDownIcon} style={styles.icon} />
        <Text>{value}</Text>
      </HStack>
    </Menu>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  icon: {
    width: 15,
    height: 15,
  },
});
