import { ActionsheetIcon as GluestackActionsheetIcon } from '@gluestack-ui/themed';
import React, { FC, PropsWithChildren, ReactNode } from 'react';

type GluestackActionsheetIconProps =
  (typeof GluestackActionsheetIcon)['defaultProps'];

type ActionsheetIconProps = PropsWithChildren<GluestackActionsheetIconProps>;

export const ActionsheetIcon: FC<ActionsheetIconProps> = (props) => {
  const { children } = props as { children: ReactNode }; // * Eslint argues about children type any
  const rest = props;

  return (
    <GluestackActionsheetIcon {...rest}>{children}</GluestackActionsheetIcon>
  );
};
