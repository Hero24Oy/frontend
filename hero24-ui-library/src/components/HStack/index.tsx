import { HStack as HStackOrigin } from '@gluestack-ui/themed';
import { FC, ReactNode } from 'react';
import { StyleSheet } from 'react-native';

import { PropsWithChildren, StackPropsStyle } from '../../types';

// eslint-disable-next-line @typescript-eslint/naming-convention -- TODO implement correct namingConventionRule
interface HStackProps extends PropsWithChildren<ReactNode> {
  style: StackPropsStyle;
}

export const HStack: FC<HStackProps> = (props) => {
  const { children, style } = props;

  return <HStackOrigin style={[styles.stack, style]}>{children}</HStackOrigin>;
};

const styles = StyleSheet.create({
  stack: {
    paddingHorizontal: 8,
  },
});
