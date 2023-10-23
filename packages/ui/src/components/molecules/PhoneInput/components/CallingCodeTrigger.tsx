import { ChevronDownIcon, Icon, Pressable } from '@gluestack-ui/themed';
import { Text } from 'components/atoms/Text';
import React from 'react';
import { StyleSheet } from 'react-native';

interface Props {
  code: string;
  triggerProps: Record<string, unknown>;
}

export const Trigger = (props: Props): JSX.Element => {
  const { triggerProps, code } = props;

  return (
    <Pressable {...triggerProps} style={styles.wrapper}>
      <Text>{code}</Text>
      <Icon as={ChevronDownIcon} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
