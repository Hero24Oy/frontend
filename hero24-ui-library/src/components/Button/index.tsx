import {
  Button as ButtonOrigin,
  ButtonText as ButtonTextOrigin,
} from '@gluestack-ui/themed';
import { FC } from 'react';

import { PropsWithChildren } from '../../types';

type OnPress = () => void;

interface ButtonProps extends PropsWithChildren<string> {
  disabled?: boolean;
  onPress?: OnPress;
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, disabled = false, onPress } = props;

  return (
    <ButtonOrigin disabled={disabled} onPress={onPress}>
      <ButtonTextOrigin>{children}</ButtonTextOrigin>
    </ButtonOrigin>
  );
};
