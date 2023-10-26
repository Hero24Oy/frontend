import {
  Alert as GluestackAlert,
  AlertIcon,
  AlertText,
  HStack,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

import { AlertAction } from './constants';

export * from './constants';

export type AlertProps = {
  title: string;
  action?: `${AlertAction}`;
  Icon?: FC;
  text?: string;
};

export const Alert: FC<AlertProps> = (props) => {
  const { title, text, Icon, ...restProps } = props;

  return (
    <GluestackAlert {...restProps}>
      <VStack>
        <HStack alignItems="center">
          <AlertIcon style={styles.icon} as={Icon} />
          <AlertText style={styles.title}>{title}</AlertText>
        </HStack>
        <HStack>
          <AlertIcon style={styles.icon} opacity={0} as={Icon} />
          <Text>{text}</Text>
        </HStack>
      </VStack>
    </GluestackAlert>
  );
};

const styles = StyleSheet.create({
  icon: { marginRight: 5 },
  invisible: {
    opacity: 0,
  },
  title: {
    fontWeight: 'bold',
  },
});
