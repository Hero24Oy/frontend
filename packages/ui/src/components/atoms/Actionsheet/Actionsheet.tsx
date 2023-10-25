// * On closing Actionsheet on web this error occurs, but this component is rarely used in web, rather in mobile
// * module.js:581 Uncaught TypeError: Failed to execute 'createTreeWalker' on 'Document': parameter 1 is not of type 'Node'.
// *  at $9bf71ea28793e738$export$2d6ec8fc375ceafa (module.js:581:27)
// *  at $9bf71ea28793e738$var$focusFirstInScope (module.js:407:14)
// *  at module.js:337:15

import {
  Actionsheet as GluestackActionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetIcon,
  ActionsheetItem,
  ActionsheetItemText,
} from '@gluestack-ui/themed';
import React, { FC, useMemo } from 'react';

import { ActionsheetDragIndicator } from './ActionsheetDragIndicator';
import { Item } from './types';

type ActionsheetProps = {
  isOpen: boolean;
  items: Item[];
  onClose?: () => void;
  showDragIndicator?: boolean;
  zIndex?: number;
};

export const Actionsheet: FC<ActionsheetProps> = (props) => {
  const { showDragIndicator, items, isOpen = false, ...rest } = props;

  const itemsToRender = useMemo(
    () =>
      items.map(({ icon, text, ...restProps }, key) => (
        // eslint-disable-next-line react/no-array-index-key -- We just want to render the list
        <ActionsheetItem {...restProps} key={key}>
          {icon && <ActionsheetIcon>{icon}</ActionsheetIcon>}
          <ActionsheetItemText>{text}</ActionsheetItemText>
        </ActionsheetItem>
      )),
    [items],
  );

  return (
    <GluestackActionsheet isOpen={isOpen} {...rest}>
      <ActionsheetBackdrop />
      <ActionsheetContent>
        {showDragIndicator && <ActionsheetDragIndicator />}
        {itemsToRender}
      </ActionsheetContent>
    </GluestackActionsheet>
  );
};
