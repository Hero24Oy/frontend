import { useState } from 'react';
import { GestureResponderEvent } from 'react-native';

import { Item } from '@hero24/ui';

import { UseLogicReturnType } from './types';

export const useLogic = (actionSheetItems: Item[]): UseLogicReturnType => {
  const [showActionSheet, setShowActionSheet] = useState<boolean>(false);

  const toggleActionSheet = (): void => setShowActionSheet(!showActionSheet);

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

  return { items, showActionSheet, toggleActionSheet };
};
