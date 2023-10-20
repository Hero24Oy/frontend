import { FC } from "react";

export type Direction = 
  | 'left' 
  | 'right' 
  | 'upper';

export type Icon = {
  direction: Direction;
  src: FC;
}