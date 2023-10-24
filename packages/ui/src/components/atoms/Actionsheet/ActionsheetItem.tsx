import { ActionsheetItem as GluestackActionsheetItem } from '@gluestack-ui/themed';
import React, { FC, PropsWithChildren, ReactNode } from 'react';

type GluestackActionsheetItemProps =
  (typeof GluestackActionsheetItem)['defaultProps'];

type ActionsheetItemProps = PropsWithChildren<GluestackActionsheetItemProps>;

export const ActionsheetItem: FC<ActionsheetItemProps> = (props) => {
  const { children } = props as { children: ReactNode }; // * Eslint argues about children type any
  const rest = props;

  return (
    <GluestackActionsheetItem {...rest}>{children}</GluestackActionsheetItem>
  );
};
