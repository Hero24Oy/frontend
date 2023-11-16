import { FC } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView as RnKeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { KeyboardAwareScrollViewProps } from './types';

export const KeyboardAwareScrollView: FC<KeyboardAwareScrollViewProps> = (
  props,
) => {
  const { children, ...restProps } = props;

  // eslint-disable-next-line no-magic-numbers -- Those are values for extra height above the keyboard
  const extraScrollHeight = Platform.OS === 'ios' ? 150 : 0;

  return (
    <RnKeyboardAwareScrollView
      enableAutomaticScroll
      enableOnAndroid
      keyboardShouldPersistTaps="handled"
      extraScrollHeight={extraScrollHeight}
      keyboardOpeningTime={0}
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

export * from './types';
