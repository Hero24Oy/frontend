import { Colors, IconSize } from 'configs';
import { FC } from 'react';

export interface Props {
  color?: Colors | string;
  size?: IconSize | number;
}

export type BaseIcon = FC<Props>;
