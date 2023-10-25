import { Menu } from '@gluestack-ui/themed';
import { Selection } from '@react-types/shared';
import { ComponentProps, FC } from 'react';

export type TriggerType = FC;

export type Placement = ComponentProps<typeof Menu>['placement'];

export type SelectionChange = (keys: Selection) => void;

export type MenuItem = {
  key: string;
  label: string;
  value: string;
};
