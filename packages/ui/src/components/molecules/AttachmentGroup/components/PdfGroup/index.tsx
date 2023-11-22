import { FC, PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

import { VStack } from '$atoms/VStack';

export const PdfGroup: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return <VStack style={styles.container}>{children}</VStack>;
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
});
