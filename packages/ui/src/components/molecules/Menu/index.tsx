import {
  Menu as GluestackMenu,
  MenuItem as GluestackMenuItem,
  MenuItemLabel as GluestackItemLabel,
} from '@gluestack-ui/themed';
import React, { FC, PropsWithChildren, useCallback } from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { MenuItem, Placement, SelectionChange } from './types';

interface Props extends PropsWithChildren {
  items: MenuItem[];
  onSelect: (key: string) => void;
  placement?: Placement;
}

export const Menu: FC<Props> = (props) => {
  const { items, onSelect, placement, children } = props;

  const onSelectionChange: SelectionChange = (keys) => {
    if (keys) {
      onSelect(Array.from(keys).at(0) as string);
    }
  };

  const TriggerComponent = useCallback(
    (triggerProps: Record<string, unknown>) => (
      <Pressable style={styles.wrapper} {...triggerProps}>
        {children}
      </Pressable>
    ),
    [children],
  );

  return (
    <GluestackMenu
      placement={placement}
      trigger={TriggerComponent}
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

const styles = StyleSheet.create({
  wrapper: { pointerEvents: 'box-only' },
});
