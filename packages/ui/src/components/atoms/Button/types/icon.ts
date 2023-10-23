import { BaseIcon } from 'icons/Base/types';

export enum Direction {
  LEFT = 'left',
  RIGHT = 'right',
  TOP = 'top',
}

export type Icon = {
  direction: `${Direction}`;
  src: BaseIcon;
  size?: number;
};
