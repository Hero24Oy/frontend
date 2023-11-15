import { FC } from 'react';
import { StyleSheet } from 'react-native';
import { KeyboardAwareScrollView as RnKeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { KeyboardAwareScrollViewProps } from './types';

export const KeyboardAwareScrollView: FC<KeyboardAwareScrollViewProps> = (
  props,
) => {
  const { children, ...restProps } = props;

  // * keyboardOpeningTime={Number.MAX_SAFE_INTEGER}
  // * Workaround to prevent screen bouncing when scrolling to input
  // * but when using Number.MAX_SAFE_INTEGER automatic scrolling does not work when scroll is disabled
  // Github Issue
  // https://github.com/APSL/react-native-keyboard-aware-scroll-view/issues/418

  return (
    <RnKeyboardAwareScrollView
      enableAutomaticScroll
      enableOnAndroid
      extraScrollHeight={100} // * Keep in mind autosuggestion container above the keyboard on IOS
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

export * from './types';
