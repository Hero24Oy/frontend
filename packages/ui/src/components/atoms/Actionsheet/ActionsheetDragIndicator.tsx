import {
  ActionsheetDragIndicator as GluestackActionsheetDragIndicatorWrapper,
  ActionsheetDragIndicatorWrapper,
} from '@gluestack-ui/themed';
import React, { FC } from 'react';

export const ActionsheetDragIndicator: FC = () => {
  return (
    <ActionsheetDragIndicatorWrapper>
      <GluestackActionsheetDragIndicatorWrapper />
    </ActionsheetDragIndicatorWrapper>
  );
};
