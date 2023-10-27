import {
  ActionsheetItem,
  ActionsheetItemText,
  AlertIcon,
} from '@gluestack-ui/themed';
import { FC, memo } from 'react';

import { Item } from './types';

export type ActionsheetItemsProps = {
  items: Item[];
};

export const ActionsheetItems: FC<ActionsheetItemsProps> = memo((props) => {
  const { items } = props;

  return items.map(({ Icon, text, ...restProps }, key) => (
    <ActionsheetItem key={key} {...restProps}>
      <AlertIcon as={Icon} />
      <ActionsheetItemText>{text}</ActionsheetItemText>
    </ActionsheetItem>
  ));
});
