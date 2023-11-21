import { Item } from '@hero24/ui';

export type UseLogicReturnType = {
  items: Item[];
  showActionSheet: boolean;
  toggleActionSheet: () => void;
};
