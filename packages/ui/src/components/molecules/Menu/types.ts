import { Menu } from '@gluestack-ui/themed';
import { Selection } from '@react-types/shared';
import { ComponentProps, FC } from 'react';

export type TriggerType =
  FC; /* (props: Record<string, unknown>) => JSX.Element; */

export type Placement = ComponentProps<typeof Menu>['placement'];

export type SelectionChange = (keys: Selection) => void;

export interface MenuItem {
  key: string;
  label: string;
  value: string;
}
