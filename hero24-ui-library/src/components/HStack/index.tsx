import { HStack as HStackOrigin } from '@gluestack-ui/themed';
import React, { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

import { StackPropsStyle } from '../../types/StackPropsStyle';

// eslint-disable-next-line @typescript-eslint/naming-convention -- TODO add regex to naming convention array
export interface HStackProps extends PropsWithChildren {
  style: StackPropsStyle;
}

// eslint-disable-next-line @typescript-eslint/naming-convention -- TODO add regex to naming convention array
export const HStack: React.FC<HStackProps> = (props) => {
  const { children, style } = props;

  return (
    <HStackOrigin style={{ ...styles.stack, ...style }}>
      {children}
    </HStackOrigin>
  );
};

const styles = StyleSheet.create({
  stack: {
    paddingHorizontal: 8,
  },
});
