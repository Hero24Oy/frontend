import { HStack as HStackOrigin } from '@gluestack-ui/themed';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/naming-convention -- TODO add regex to naming convention array
export interface HStackProps
  extends React.ComponentProps<typeof HStackOrigin> {}

// eslint-disable-next-line @typescript-eslint/naming-convention -- TODO add regex to naming convention array
export const HStack: React.FC<HStackProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- TODO remove this after add typing for children props in HStackProps
  const { children, ...rest } = props;

  return <HStackOrigin {...rest}>{children}</HStackOrigin>;
};
