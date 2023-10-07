import { VStack as VStackOrigin } from '@gluestack-ui/themed';
import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { PropsWithNodeChildren, StackPropsStyle } from '../../types';

// eslint-disable-next-line @typescript-eslint/naming-convention -- TODO implement correct namingConventionRule
interface VStackProps extends PropsWithNodeChildren {
  style: StackPropsStyle;
}

export const VStack: FC<VStackProps> = (props) => {
  const { children, style } = props;

  return <VStackOrigin style={[styles.stack, style]}>{children}</VStackOrigin>;
};

const styles = StyleSheet.create({
  stack: {
    paddingHorizontal: 8,
  },
});
