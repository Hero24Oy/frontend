import { Item } from '@hero24/ui';

export type UseLogicReturnType = {
  isActionSheetOpen: boolean;
  items: Item[];
  toggleActionSheet: () => void;
};
