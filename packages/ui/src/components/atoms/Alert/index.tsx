import {
  Alert as GluestackAlert,
  AlertIcon,
  HStack,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import React, { FC, ReactNode } from 'react';
import { StyleSheet } from 'react-native';

import { AlertAction, AlertVariant } from './constants';

export * from './constants';

export type AlertProps = {
  title: string;
  action?: `${AlertAction}`;
  icon?: ReactNode;
  text?: string;
  variant?: `${AlertVariant}`;
};

export const Alert: FC<AlertProps> = (props) => {
  const { title, text, icon, ...restProps } = props;

  return (
    <GluestackAlert {...restProps}>
      <VStack>
        <HStack alignItems="center">
          <AlertIcon style={styles.icon}>{icon}</AlertIcon>
          <Text style={styles.title}>{title}</Text>
        </HStack>
        {text && (
          <HStack>
            <AlertIcon style={[styles.icon, styles.invisible]}>
              {icon}
            </AlertIcon>
            <Text>{text}</Text>
          </HStack>
        )}
      </VStack>
    </GluestackAlert>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 5,
  },
  invisible: {
    opacity: 0,
  },
  title: {
    fontWeight: 'bold',
  },
});
