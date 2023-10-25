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
import React, { FC, useMemo } from 'react';

import { ActionsheetDragIndicator } from './ActionsheetDragIndicator';
import { ActionsheetItems } from './ActionsheetItems';
import { Item } from './types';

type ActionsheetProps = {
  isOpen: boolean;
  items: Item[];
  onClose?: () => void;
  showDragIndicator?: boolean;
  zIndex?: number;
};

export const Actionsheet: FC<ActionsheetProps> = (props) => {
  const { showDragIndicator, items, isOpen = false, ...restProps } = props;

  const actionsheetItems = useMemo(
    () => <ActionsheetItems items={items} />,
    [items],
  );

  return (
    <GluestackActionsheet isOpen={isOpen} {...restProps}>
      <ActionsheetBackdrop />
      <ActionsheetContent>
        {showDragIndicator && <ActionsheetDragIndicator />}
        {actionsheetItems}
      </ActionsheetContent>
    </GluestackActionsheet>
  );
};
