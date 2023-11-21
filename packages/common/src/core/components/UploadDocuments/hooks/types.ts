import { Item } from '@hero24/ui';

export type UseLogicReturnType = {
  isActionsheetOpen: boolean;
  items: Item[];
  onCloseActionsheet: () => void;
  onOpenActionsheet: () => void;
};
