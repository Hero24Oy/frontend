import { useState } from 'react';
import { GestureResponderEvent } from 'react-native';

import { Item } from '@hero24/ui';

import { UseLogicReturnType } from './types';

export const useLogic = (actionSheetItems: Item[]): UseLogicReturnType => {
  const [isActionsheetOpen, setIsActionsheetOpen] = useState<boolean>(false);

  const onCloseActionsheet = (): void => setIsActionsheetOpen(false);

  const onOpenActionSheet = (): void => setIsActionsheetOpen(true);

  const items: Item[] = actionSheetItems.map((item) => {
    return {
      ...item,
      onPress: (event: GestureResponderEvent) => {
        if (!item.onPress) {
          return;
        }

        item.onPress(event);
        onCloseActionsheet();
      },
    };
  });

  return { items, isActionsheetOpen, onCloseActionsheet, onOpenActionSheet };
};
