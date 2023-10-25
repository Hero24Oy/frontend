import {
  Alert as GluestackAlert,
  AlertIcon,
  HStack,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import React, { FC, ReactNode } from 'react';

type AlertProps = {
  header: string;
  action?: 'error' | 'warning' | 'success' | 'info' | 'muted';
  icon?: ReactNode;
  text?: string;
  variant?: 'solid' | 'outline' | 'accent';
};

export const Alert: FC<AlertProps> = (props) => {
  const { header, text, icon, ...restProps } = props;

  return (
    <GluestackAlert {...restProps}>
      <VStack>
        <HStack alignItems="center">
          <AlertIcon marginRight={5}>{icon}</AlertIcon>
          <Text fontWeight="$bold">{header}</Text>
        </HStack>
        {text && (
          <HStack>
            <AlertIcon opacity={0} marginRight={5}>
              {icon}
            </AlertIcon>
            <Text>{text}</Text>
          </HStack>
        )}
      </VStack>
    </GluestackAlert>
  );
};
