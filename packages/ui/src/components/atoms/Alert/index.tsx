import {
  Alert as GluestackAlert,
  AlertIcon,
  AlertText,
  HStack,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { AlertAction } from './constants';

export * from './constants';

type Props = {
  title: string;
  action?: `${AlertAction}`;
  Icon?: FC;
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
          <AlertIcon opacity={0} as={Icon} />
          <Text>{text}</Text>
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
