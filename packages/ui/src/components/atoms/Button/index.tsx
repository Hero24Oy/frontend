import {
  Button as GluestackButton,
  ButtonText as GluestackTextOrigin,
} from '@gluestack-ui/themed';
import { ComponentProps, FC, PropsWithChildren } from 'react';
// import { CommonStyles } from 'types';

interface Props extends PropsWithChildren {
  children: string;
  isDisabled?: boolean;
  onPress?: ComponentProps<typeof GluestackButton>['onPress'];
  // style?: CommonStyles;
}

export const Button: FC<Props> = (props) => {
  const {
    children,
    isDisabled = false,
    onPress,
    // style
  } = props;

  return (
    <GluestackButton
      isDisabled={isDisabled}
      onPress={onPress}
      //  style={style}
    >
      <GluestackTextOrigin>{children}</GluestackTextOrigin>
    </GluestackButton>
  );
};
