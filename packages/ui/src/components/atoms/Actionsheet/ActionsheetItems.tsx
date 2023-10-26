import { ActionsheetItem, ActionsheetItemText } from '@gluestack-ui/themed';
import React, { FC, useMemo } from 'react';

import { Item } from './types';

export type ActionsheetItemsProps = {
  items: Item[];
};

export const ActionsheetItems: FC<ActionsheetItemsProps> = (props) => {
  const { items } = props;

  const actionsheetItems = useMemo(
    () =>
      items.map(({ Icon, text, ...restProps }, key) => (
        <ActionsheetItem key={key} {...restProps}>
          {Icon && <Icon />}
          <ActionsheetItemText>{text}</ActionsheetItemText>
        </ActionsheetItem>
      )),
    [items],
  );

  return actionsheetItems;
};
