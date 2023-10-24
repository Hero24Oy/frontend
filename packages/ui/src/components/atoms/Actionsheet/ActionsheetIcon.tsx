import { ActionsheetIcon as GluestackActionsheetIcon } from '@gluestack-ui/themed';
import React, { FC, PropsWithChildren } from 'react';

export const ActionsheetIcon: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return <GluestackActionsheetIcon>{children}</GluestackActionsheetIcon>;
};
