import { VStack as VStackOrigin } from '@gluestack-ui/themed';
import React, { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

import { StackPropsStyle } from '../../types/StackPropsStyle';

// eslint-disable-next-line @typescript-eslint/naming-convention -- TODO add regex to naming convention array
export interface VStackProps extends PropsWithChildren {
  style: StackPropsStyle;
}

// eslint-disable-next-line @typescript-eslint/naming-convention -- TODO add regex to naming convention array
export const VStack: React.FC<VStackProps> = (props) => {
  const { children, style } = props;

  return <VStackOrigin style={[styles.stack, style]}>{children}</VStackOrigin>;
};

const styles = StyleSheet.create({
  stack: {
    paddingHorizontal: 8,
  },
});
