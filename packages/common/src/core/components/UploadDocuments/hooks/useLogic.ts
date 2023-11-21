import { useState } from 'react';
import { GestureResponderEvent } from 'react-native';

import { Item } from '@hero24/ui';

import { UseLogicReturnType } from './types';

export const useLogic = (actionSheetItems: Item[]): UseLogicReturnType => {
  const [isActionsheetOpen, setIsActionsheetOpen] = useState<boolean>(false);

  const toggleActionsheet = (): void =>
    setIsActionsheetOpen(!isActionsheetOpen);

  const items: Item[] = actionSheetItems.map((item) => {
    return {
      ...item,
      onPress: (event: GestureResponderEvent) => {
        if (!item.onPress) {
          return;
        }

        item.onPress(event);
        toggleActionsheet();
      },
    };
  });

  return { items, isActionsheetOpen, toggleActionsheet };
};
