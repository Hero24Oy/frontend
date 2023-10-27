import {
  ActionsheetItem,
  ActionsheetItemText,
  AlertIcon,
} from '@gluestack-ui/themed';
import { FC, memo } from 'react';

import { Item } from '../types';

type Props = {
  items: Item[];
};

export const ActionsheetItems: FC<Props> = memo((props) => {
  const { items } = props;

  return items.map(({ Icon, text, ...restProps }, key) => (
    <ActionsheetItem key={key} {...restProps}>
      <AlertIcon as={Icon} />
      <ActionsheetItemText>{text}</ActionsheetItemText>
    </ActionsheetItem>
  ));
});
