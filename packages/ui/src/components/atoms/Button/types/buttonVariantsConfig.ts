import { SxProps } from '@gluestack-style/react/lib/typescript/types';
import { Colors } from 'configs';
import { StyleProp, ViewStyle } from 'react-native';

export type ButtonVariantsConfig = {
  backgroundColor: Colors;
  borderColor: Colors;
  spinnerColor: Colors;
  sx: Partial<SxProps<StyleProp<ViewStyle>>>;
};
