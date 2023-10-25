import {
  Menu as GluestackMenu,
  MenuItem as GluestackMenuItem,
  MenuItemLabel as GluestackItemLabel,
} from '@gluestack-ui/themed';
import React, { FC, PropsWithChildren, useCallback, useMemo } from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { MenuItem, Placement, SelectionChange } from './types';

type Props = PropsWithChildren & {
  items: MenuItem[];
  onSelect: (key: string) => void;
  placement?: Placement;
};

export const Menu: FC<Props> = (props) => {
  const { items, onSelect, placement, children } = props;

  const onSelectionChange: SelectionChange = useCallback(
    (keys) => {
      if (keys) {
        onSelect(Array.from(keys).at(0) as string);
      }
    },
    [onSelect],
  );

  const TriggerComponent = useCallback(
    (triggerProps: Record<string, unknown>) => (
      <Pressable style={styles.wrapper} {...triggerProps}>
        {children}
      </Pressable>
    ),
    [children],
  );

  const menuItems = useMemo(
    () =>
      items.map((item) => (
        <GluestackMenuItem key={item.key} textValue={item.value}>
          <GluestackItemLabel>{item.label}</GluestackItemLabel>
        </GluestackMenuItem>
      )),
    [],
  );

  return (
    <GluestackMenu
      placement={placement}
      trigger={TriggerComponent}
      selectionMode="single"
      onSelectionChange={onSelectionChange}
    >
      {menuItems}
    </GluestackMenu>
  );
};

const styles = StyleSheet.create({
  wrapper: { pointerEvents: 'box-only' },
});
