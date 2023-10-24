import { ActionsheetItemText as GluestackActionsheetItemText } from '@gluestack-ui/themed';
import React, { FC, PropsWithChildren } from 'react';

export const ActionsheetText: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <GluestackActionsheetItemText>{children}</GluestackActionsheetItemText>
  );
};
