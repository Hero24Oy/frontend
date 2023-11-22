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
  action?: `${AlertAction}`;
  Icon?: BaseIcon;
  text?: string;
};

export const Alert: FC<Props> = (props) => {
  const { text, Icon, ...restProps } = props;

  return (
    <GluestackAlert {...restProps}>
      <VStack>
        <HStack style={styles.content}>
          <AlertIcon as={Icon} />
          <AlertText>{text}</AlertText>
        </HStack>
      </VStack>
    </GluestackAlert>
  );
};

const styles = StyleSheet.create({
  content: {
    gap: 12,
  },
});
