import { VStack as GluestackVStack } from '@gluestack-ui/themed';
import { FC, PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import { LayoutStyles } from 'types';

interface Props extends PropsWithChildren {
  style?: LayoutStyles;
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
