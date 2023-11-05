import { FC, PropsWithChildren } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { KeyboardAwareScrollView } from '../KeyboardAwareScrollView';

import { LayoutStyles } from '$types';

type Props = PropsWithChildren & {
  style?: LayoutStyles;
};

export const StackKeyboardAwareView: FC<Props> = (props) => {
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
