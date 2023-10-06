import {
  Button as ButtonOrigin,
  ButtonText as ButtonTextOrigin,
} from '@gluestack-ui/themed';
import React from 'react';

export interface ButtonProps {
  children: string;
  disabled?: boolean;
  onPress?: () => void;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, disabled = false, onPress } = props;

  return (
    <ButtonOrigin disabled={disabled} onPress={onPress}>
      <ButtonTextOrigin>{children}</ButtonTextOrigin>
    </ButtonOrigin>
  );
};
