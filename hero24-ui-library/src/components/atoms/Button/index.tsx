import {
  Button as GluestackButton,
  ButtonText as GluestackTextOrigin,
} from '@gluestack-ui/themed';
import { ComponentProps, FC, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  children: string;
  disabled?: boolean;
  onPress?: ComponentProps<typeof GluestackButton>['onPress'];
}

export const Button: FC<Props> = (props) => {
  const { children, disabled = false, onPress } = props;

  return (
    <GluestackButton disabled={disabled} onPress={onPress}>
      <GluestackTextOrigin>{children}</GluestackTextOrigin>
    </GluestackButton>
  );
};
