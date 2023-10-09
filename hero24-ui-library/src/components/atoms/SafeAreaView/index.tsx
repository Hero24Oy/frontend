import { FC, PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView as RnSafeAreaView } from 'react-native-safe-area-context';

interface SafeAreaViewProps extends PropsWithChildren {}

export const SafeAreaView: FC<SafeAreaViewProps> = (props) => {
  const { children } = props;

  return <RnSafeAreaView style={styles.view}>{children}</RnSafeAreaView>;
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});