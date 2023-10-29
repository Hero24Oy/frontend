import { InputIcon, Pressable } from '@gluestack-ui/themed';
import { EyeIcon, EyeOffIcon } from 'lucide-react-native';
import { FC } from 'react';

import { Color } from '$theme';

type Props = {
  isPasswordVisible: boolean;
  toggleIsPasswordVisible: () => void;
};

export const PasswordVisibleSwitcher: FC<Props> = (props) => {
  const { toggleIsPasswordVisible, isPasswordVisible } = props;

  return (
    <Pressable onPress={toggleIsPasswordVisible}>
      <InputIcon
        as={isPasswordVisible ? EyeIcon : EyeOffIcon}
        color={Color.DARK_01}
      />
    </Pressable>
  );
};
