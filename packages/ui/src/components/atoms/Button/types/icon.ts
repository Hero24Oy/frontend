import { FC } from 'react';

export enum Direction {
  LEFT = 'left',
  RIGHT = 'right',
  TOP = 'top',
}

export type Icon = {
  direction: `${Direction}`;
  src: FC;
  size?: number;
};
