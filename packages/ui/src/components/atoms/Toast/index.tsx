import {
  Toast as ToastOrigin,
  ToastDescription,
  ToastTitle,
  VStack,
} from '@gluestack-ui/themed';
import React, { FC } from 'react';

export interface ToastProps {
  description?: string;
  title?: string;
}

export const Toast: FC<ToastProps> = (props) => {
  const { title, description, ...rest } = props;

  return (
    <ToastOrigin {...rest}>
      <VStack>
        {title && <ToastTitle>{title}</ToastTitle>}
        {description && <ToastDescription>{description}</ToastDescription>}
      </VStack>
    </ToastOrigin>
  );
};
