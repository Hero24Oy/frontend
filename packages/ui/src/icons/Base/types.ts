import { IconSizes } from 'components';
import { FC } from 'react';

export interface Props {
  color?: string;
  size?: IconSizes | number;
}

export type BaseIcon = FC<Props>;
