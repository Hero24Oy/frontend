import {
  ActionsheetItem as GluestackActionsheetItem,
  ActionsheetItemText,
} from '@gluestack-ui/themed';
import React, { FC, PropsWithChildren } from 'react';

export const ActionsheetItem: FC<PropsWithChildren> = () => {
  return (
    <GluestackActionsheetItem>
      <ActionsheetItemText>Cancel</ActionsheetItemText>
    </GluestackActionsheetItem>
  );
};
