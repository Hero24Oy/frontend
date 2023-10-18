import { VStack as VStackOrigin } from '@gluestack-ui/themed';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/naming-convention -- TODO add regex to naming convention array
export interface VStackProps
  extends React.ComponentProps<typeof VStackOrigin> {}

// eslint-disable-next-line @typescript-eslint/naming-convention -- TODO add regex to naming convention array
export const VStack: React.FC<VStackProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- TODO remove this after add typing for children props in VStackProps
  const { children, ...rest } = props;

  return <VStackOrigin {...rest}>{children}</VStackOrigin>;
};
