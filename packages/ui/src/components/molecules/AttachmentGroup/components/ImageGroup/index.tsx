import { FC, PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

import { HStack } from '$atoms/HStack';

export const ImageGroup: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return <HStack style={styles.container}>{children}</HStack>;
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    gap: 8,
  },
});
