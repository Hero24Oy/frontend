import { HStack as GluestackHStack } from '@gluestack-ui/themed';
import { FC, PropsWithChildren } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';

import { LayoutStyles } from '../../../types';

interface Props extends PropsWithChildren {
  style: Pick<ViewStyle, LayoutStyles>;
}

export const HStack: FC<Props> = (props) => {
  const { children, style } = props;

  return (
    <GluestackHStack style={[styles.stack, style]}>{children}</GluestackHStack>
  );
};

const styles = StyleSheet.create({
  stack: {
    paddingHorizontal: 8,
  },
});
