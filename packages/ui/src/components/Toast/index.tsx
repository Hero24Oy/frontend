import {
  Toast as ToastOrigin,
  ToastDescription,
  ToastTitle,
  VStack,
} from '@gluestack-ui/themed';
import React from 'react';

export interface ToastProps extends React.ComponentProps<typeof ToastOrigin> {
  description?: string;
  title?: string;
}

export const Toast: React.FC<ToastProps> = (props) => {
  const { title, description, ...rest } = props;

  return (
    <ToastOrigin {...rest}>
      <VStack space="xs">
        {title && <ToastTitle>{title}</ToastTitle>}
        {description && <ToastDescription>{description}</ToastDescription>}
      </VStack>
    </ToastOrigin>
  );
};
