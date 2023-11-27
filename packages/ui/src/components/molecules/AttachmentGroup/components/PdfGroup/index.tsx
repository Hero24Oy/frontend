import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { VStack } from '$atoms/VStack';
import { JsxElement } from '$types';

type Props = {
  children: JsxElement[];
};

export const PdfGroup: FC<Props> = (props) => {
  const { children } = props;

  return <VStack style={styles.container}>{children}</VStack>;
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
});
