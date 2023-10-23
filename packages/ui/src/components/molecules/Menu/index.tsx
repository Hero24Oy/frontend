import {
  Menu as GluestackMenu,
  MenuItem as GluestackMenuItem,
  MenuItemLabel as GluestackItemLabel,
} from '@gluestack-ui/themed';
import React, { FC } from 'react';

import { MenuItem, Placement, SelectionChange, Trigger } from './types';

interface Props {
  items: MenuItem[];
  onSelect: (key: string) => void;
  trigger: Trigger;
  placement?: Placement;
}

export const Menu: FC<Props> = (props) => {
  const { trigger, items, onSelect, placement } = props;

  const onSelectionChange: SelectionChange = (keys) => {
    if (keys) {
      onSelect(Array.from(keys).at(0) as string);
    }
  };

  return (
    <GluestackMenu
      placement={placement}
      trigger={trigger}
      selectionMode="single"
      onSelectionChange={onSelectionChange}
    >
      {items.map((item) => (
        <GluestackMenuItem key={item.key} textValue={item.value}>
          <GluestackItemLabel>{item.label}</GluestackItemLabel>
        </GluestackMenuItem>
      ))}
    </GluestackMenu>
  );
};
