import { useMemo, useState } from 'react';
import { GestureResponderEvent } from 'react-native';

import { Item } from '@hero24/ui';

type ReturnType = {
  isOpen: boolean;
  items: Item[];
  onClose: () => void;
  onOpen: () => void;
};

export const useActionsheet = (actionsheetItems: Item[]): ReturnType => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClose = (): void => setIsOpen(false);

  const onOpen = (): void => setIsOpen(true);

  const items: Item[] = useMemo(
    () =>
      actionsheetItems.map((item) => ({
        ...item,
        onPress: (event: GestureResponderEvent) => {
          if (!item.onPress) {
            return;
          }

          item.onPress(event);
          onClose();
        },
      })),
    [actionsheetItems],
  );

  return {
    items,
    isOpen,
    onClose,
    onOpen,
  };
};
