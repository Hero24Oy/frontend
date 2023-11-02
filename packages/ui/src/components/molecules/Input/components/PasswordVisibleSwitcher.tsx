import { InputIcon, Pressable } from '@gluestack-ui/themed';
import { EyeIcon, EyeOffIcon } from 'lucide-react-native';
import { FC } from 'react';

type Props = {
  isPasswordVisible: boolean;
  toggleIsPasswordVisible: () => void;
};

export const PasswordVisibleSwitcher: FC<Props> = (props) => {
  const { toggleIsPasswordVisible, isPasswordVisible } = props;

  return (
    <Pressable onPress={toggleIsPasswordVisible}>
      <InputIcon as={isPasswordVisible ? EyeIcon : EyeOffIcon} />
    </Pressable>
  );
};
