import { HStack as HStackOrigin } from '@gluestack-ui/themed';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface HStackProps
  extends React.ComponentProps<typeof HStackOrigin> {}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const HStack: React.FC<HStackProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { children, ...rest } = props;

  return <HStackOrigin {...rest}>{children}</HStackOrigin>;
};
