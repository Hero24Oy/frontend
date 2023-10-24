// * On closing Actionsheet on web this error occurs, but this component is rarely used in web, rather in mobile
// * module.js:581 Uncaught TypeError: Failed to execute 'createTreeWalker' on 'Document': parameter 1 is not of type 'Node'.
// *  at $9bf71ea28793e738$export$2d6ec8fc375ceafa (module.js:581:27)
// *  at $9bf71ea28793e738$var$focusFirstInScope (module.js:407:14)
// *  at module.js:337:15

import {
  Actionsheet as GluestackActionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
} from '@gluestack-ui/themed';
import type { AccessibleActionsheet } from '@gluestack-ui/themed/build/components/Actionsheet';
import React, { FC, PropsWithChildren, ReactNode } from 'react';

import { ActionsheetDragIndicator } from './ActionsheetDragIndicator';

export * from './ActionsheetItem';

export * from './ActionsheetText';

export * from './ActionsheetIcon';

interface ActionsheetProps
  extends PropsWithChildren<(typeof AccessibleActionsheet)['defaultProps']> {
  children: ReactNode;
  showDragIndicator?: boolean;
}

export const Actionsheet: FC<ActionsheetProps> = (props) => {
  const { children, showDragIndicator, ...rest } = props;

  return (
    <GluestackActionsheet {...rest}>
      <ActionsheetBackdrop />
      <ActionsheetContent zIndex={999}>
        {showDragIndicator && <ActionsheetDragIndicator />}
        {children}
      </ActionsheetContent>
    </GluestackActionsheet>
  );
};
