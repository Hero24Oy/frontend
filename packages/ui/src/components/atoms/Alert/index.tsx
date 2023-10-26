import {
  Alert as GluestackAlert,
  HStack,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

import { View } from '../View';

import { AlertAction, AlertVariant } from './constants';

export * from './constants';

export type AlertProps = {
  title: string;
  action?: `${AlertAction}`;
  Icon?: FC;
  text?: string;
  variant?: `${AlertVariant}`;
};

export const Alert: FC<AlertProps> = (props) => {
  const { title, text, Icon, ...restProps } = props;

  return (
    <GluestackAlert {...restProps}>
      <VStack>
        <HStack alignItems="center">
          {Icon && (
            <View style={styles.icon}>
              <Icon />
            </View>
          )}
          <Text style={styles.title}>{title}</Text>
        </HStack>
        {text && (
          <HStack>
            {Icon && (
              <View style={[styles.icon, styles.invisible]}>
                <Icon />
              </View>
            )}
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
