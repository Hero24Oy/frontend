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
import React, { FC } from 'react';
import { CommonStyles } from 'types';

import { ActionsheetDragIndicator } from './ActionsheetDragIndicator';
import { ActionsheetItems } from './ActionsheetItems';
import { GluestackActionsheetProps, Item } from './types';

type PickedProps = CommonStyles &
  Pick<GluestackActionsheetProps, 'isOpen' | 'onOpen' | 'onClose'>;

type CustomProps = {
  items: Item[];
  showDragIndicator?: boolean;
};

export type ActionsheetProps = CustomProps & PickedProps;

export const Actionsheet: FC<ActionsheetProps> = (props) => {
  const { showDragIndicator, items, ...restProps } = props;

  return (
    <GluestackActionsheet {...restProps}>
      <ActionsheetBackdrop />
      <ActionsheetContent>
        {showDragIndicator && <ActionsheetDragIndicator />}
        <ActionsheetItems items={items} />
      </ActionsheetContent>
    </GluestackActionsheet>
  );
};
