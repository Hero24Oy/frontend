import {
  Alert as GluestackAlert,
  AlertIcon,
  AlertText,
  HStack,
  VStack,
} from '@gluestack-ui/themed';
import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { AlertAction } from './constants';

import { BaseIcon } from '$icons/base';

export * from './constants';

type Props = {
  title: string;
  action?: `${AlertAction}`;
  Icon?: BaseIcon;
  text?: string;
};

export const Alert: FC<Props> = (props) => {
  const { title, text, Icon, ...restProps } = props;

  // * Icon with opacity 0 is used to align text
  return (
    <GluestackAlert {...restProps}>
      <VStack>
        <HStack alignItems="center">
          <AlertIcon as={Icon} />
          <AlertText style={styles.title}>{title}</AlertText>
        </HStack>
        <HStack>
          <AlertIcon style={styles.invisible} as={Icon} />
          <AlertText>{text}</AlertText>
        </HStack>
      </VStack>
    </GluestackAlert>
  );
};

const styles = StyleSheet.create({
  invisible: {
    opacity: 0,
  },
  title: {
    fontWeight: 'bold',
  },
});
