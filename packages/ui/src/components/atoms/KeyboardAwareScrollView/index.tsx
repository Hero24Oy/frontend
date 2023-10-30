import { FC, PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import { KeyboardAwareScrollView as RnKeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const KeyboardAwareScrollView: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <RnKeyboardAwareScrollView style={styles.main}>
      {children}
    </RnKeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  main: { flex: 1 },
});
