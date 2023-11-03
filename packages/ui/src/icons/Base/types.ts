import { FC } from 'react';

import { Size } from '$theme';

type Props = {
  color?: string;
  size?: Extract<Size, 'sm' | 'lg' | 'md'> | number;
};

export type BaseIcon = FC<Props>;
