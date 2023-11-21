import { useState } from 'react';
import { GestureResponderEvent } from 'react-native';

import { Item } from '@hero24/ui';

import { UseLogicReturnType } from './types';

export const useLogic = (actionSheetItems: Item[]): UseLogicReturnType => {
  const [isActionSheetOpen, setIsActionSheetOpen] = useState<boolean>(false);

  const toggleActionSheet = (): void =>
    setIsActionSheetOpen(!isActionSheetOpen);

  const items: Item[] = actionSheetItems.map((item) => {
    return {
      ...item,
      onPress: (event: GestureResponderEvent) => {
        if (!item.onPress) {
          return;
        }

        item.onPress(event);
        toggleActionSheet();
      },
    };
  });

  return { items, isActionSheetOpen, toggleActionSheet };
};
