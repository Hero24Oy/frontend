import { Menu } from '@gluestack-ui/themed';
import { Selection } from '@react-types/shared';
import { ComponentProps } from 'react';

export type Trigger = ComponentProps<typeof Menu>['trigger'];

export type Placement = ComponentProps<typeof Menu>['placement'];

export type SelectionChange = (keys: Selection) => void;

export type MenuItem = {
  key: string;
  label: string;
  value: string;
  disabled?: boolean;
};
