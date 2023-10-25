import { FC } from 'react';
import { Sizes } from 'theme/enums';

export interface Props {
  color?: string;
  size?: Sizes | number;
}

export type BaseIcon = FC<Props>;
