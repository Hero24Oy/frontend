import { FC, PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

import { KeyboardAwareScrollView } from '../KeyboardAwareScrollView';
import { SafeAreaView } from '../SafeAreaView';

import { LayoutStyles } from '$types';

type Props = PropsWithChildren & {
  style?: LayoutStyles;
};

export const SafeAreaKeyboardAwareView: FC<Props> = (props) => {
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
