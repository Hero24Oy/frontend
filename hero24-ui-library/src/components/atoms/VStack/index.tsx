import { VStack as GluestackVStack } from '@gluestack-ui/themed';
import { FC, PropsWithChildren } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';

import { LayoutStyles } from '../../../types';

interface Props extends PropsWithChildren {
  style: Pick<ViewStyle, LayoutStyles>;
}

export const VStack: FC<Props> = (props) => {
  const { children, style } = props;

  return (
    <GluestackVStack style={[styles.stack, style]}>{children}</GluestackVStack>
  );
};

const styles = StyleSheet.create({
  stack: {
    paddingHorizontal: 8,
  },
});
