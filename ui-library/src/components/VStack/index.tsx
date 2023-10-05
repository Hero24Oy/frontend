import { VStack as VStackOrigin } from '@gluestack-ui/themed';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface VStackProps
  extends React.ComponentProps<typeof VStackOrigin> {}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const VStack: React.FC<VStackProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { children, ...rest } = props;

  return <VStackOrigin {...rest}>{children}</VStackOrigin>;
};
