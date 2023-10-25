import {
  ActionsheetIcon,
  ActionsheetItem,
  ActionsheetItemText,
} from '@gluestack-ui/themed';
import React, { FC } from 'react';

import { Item } from './types';

export type ActionsheetItemsProps = {
  items: Item[];
};

export const ActionsheetItems: FC<ActionsheetItemsProps> = (props) => {
  const { items } = props;

  return items.map(({ icon, text, ...restProps }, key) => (
    <ActionsheetItem key={key} {...restProps}>
      {icon && <ActionsheetIcon>{icon}</ActionsheetIcon>}
      <ActionsheetItemText>{text}</ActionsheetItemText>
    </ActionsheetItem>
  ));
};
