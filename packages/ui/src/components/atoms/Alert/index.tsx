import {
  Alert as GluestackAlert,
  AlertIcon,
  AlertText,
} from '@gluestack-ui/themed';
import React, { FC, ReactNode } from 'react';

type AlertProps = {
  text: string;
  action?: 'error' | 'warning' | 'success' | 'info' | 'muted';
  icon?: ReactNode;
  variant?: 'solid' | 'outline' | 'accent';
};

export const Alert: FC<AlertProps> = (props) => {
  const { text, icon, ...rest } = props;

  return (
    <GluestackAlert {...rest}>
      <AlertIcon marginRight={5}>{icon}</AlertIcon>
      <AlertText>{text}</AlertText>
    </GluestackAlert>
  );
};
