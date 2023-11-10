import { PropsWithChildren } from 'react';
import { KeyboardAwareScrollViewProps as GluestackKeyboardAwareScrollViewProps } from 'react-native-keyboard-aware-scroll-view';

type PickedKeyboardAwareScrollViewProps = Pick<
  GluestackKeyboardAwareScrollViewProps,
  'contentContainerStyle' | 'scrollEnabled'
>;

export type KeyboardAwareScrollViewProps =
  PropsWithChildren<PickedKeyboardAwareScrollViewProps>;
