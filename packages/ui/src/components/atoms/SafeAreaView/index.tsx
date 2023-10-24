import React, { FC, PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView as RnSafeAreaView } from 'react-native-safe-area-context';

interface Props extends PropsWithChildren {}

export const SafeAreaView: FC<Props> = (props) => {
  const { children } = props;

  return <RnSafeAreaView style={styles.view}>{children}</RnSafeAreaView>;
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});
