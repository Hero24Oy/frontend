import { ActionsheetItemText as GluestackActionsheetItemText } from '@gluestack-ui/themed';
import React, { FC, PropsWithChildren, ReactNode } from 'react';

type GluestackActionsheetItemTextProps =
  (typeof GluestackActionsheetItemText)['defaultProps'];

type ActionsheetTextProps =
  PropsWithChildren<GluestackActionsheetItemTextProps>;

export const ActionsheetItemText: FC<ActionsheetTextProps> = (props) => {
  const { children } = props as { children: ReactNode }; // * Eslint argues about children type any
  const rest = props;

  return (
    <GluestackActionsheetItemText {...rest}>
      {children}
    </GluestackActionsheetItemText>
  );
};
