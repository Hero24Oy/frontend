import { FC, PropsWithChildren } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { KeyboardAwareScrollView, LayoutStyles } from '@hero24/ui';

type Props = PropsWithChildren & {
  style?: LayoutStyles;
};

// Use this wrapper instead of SafeAreaKeyboardAwareScrollView
// for screen with Stack header to avoid additional top padding
export const StackKeyboardAwareScrollView: FC<Props> = (props) => {
  const { children, style } = props;
  const styles = useStyles();

  return (
    <KeyboardAwareScrollView contentContainerStyle={[styles.content, style]}>
      {children}
    </KeyboardAwareScrollView>
  );
};

const useStyles = (): Record<'content', ViewStyle> => {
  const insets = useSafeAreaInsets();

  return StyleSheet.create({
    content: {
      flex: 1,
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingBottom: insets.bottom,
    },
  });
};
