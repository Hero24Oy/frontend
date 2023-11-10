import { FC, PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

import {
  KeyboardAwareScrollView,
  LayoutStyles,
  SafeAreaView,
} from '@hero24/ui';

type Props = PropsWithChildren & {
  style?: LayoutStyles;
};

export const SafeAreaKeyboardAwareScrollView: FC<Props> = (props) => {
  const { children, style } = props;

  return (
    <SafeAreaView>
      <KeyboardAwareScrollView
        contentContainerStyle={[styles.scrollViewContent, style]}
      >
        {children}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
});
