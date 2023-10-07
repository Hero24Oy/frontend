import { FC } from 'react';
import {
  Platform,
  SafeAreaView as SafeAreaViewNative,
  StyleSheet,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { PropsWithNodeChildren } from '../../types';

const SAFE_AREA_PADDING_TOP_ANDROID = 32;

interface SafeAreaViewProps extends PropsWithNodeChildren {}

export const SafeAreaView: FC<SafeAreaViewProps> = (props) => {
  const { children } = props;

  return (
    <SafeAreaViewNative style={styles.view}>
      <KeyboardAwareScrollView
        enableOnAndroid
        style={styles.keyboardAware}
        contentContainerStyle={styles.keyboardAwareContainer}
      >
        {children}
      </KeyboardAwareScrollView>
    </SafeAreaViewNative>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? SAFE_AREA_PADDING_TOP_ANDROID : 0,
  },
  keyboardAware: {
    flexGrow: 1,
  },
  keyboardAwareContainer: {
    flexGrow: 1,
  },
});
