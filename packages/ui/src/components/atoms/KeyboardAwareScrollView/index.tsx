import { FC, PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import {
  KeyboardAwareScrollView as RnKeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view';

type Props = PropsWithChildren &
  Pick<KeyboardAwareScrollViewProps, 'contentContainerStyle'>;

export const KeyboardAwareScrollView: FC<Props> = (props) => {
  const { children, ...restProps } = props;

  return (
    <RnKeyboardAwareScrollView
      enableAutomaticScroll
      enableOnAndroid
      keyboardShouldPersistTaps="handled"
      style={styles.main}
      {...restProps}
    >
      {children}
    </RnKeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  main: { flexGrow: 1 },
});
