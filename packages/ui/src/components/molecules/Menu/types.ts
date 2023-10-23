import { Selection } from '@react-types/shared';

export type Trigger = (props: Record<string, unknown>) => JSX.Element;

export type Placement =
  | 'bottom'
  | 'left'
  | 'right'
  | 'top'
  | 'top left'
  | 'top right'
  | 'bottom left'
  | 'bottom right'
  | 'right top'
  | 'right bottom'
  | 'left top'
  | 'left bottom'
  | undefined;

export type SelectionChange = (keys: Selection) => void;

export interface MenuItem {
  key: string;
  label: string;
  value: string;
}
