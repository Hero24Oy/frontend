import { FC } from 'react';

import { Size } from '$theme';

type Props = {
  color?: string;
  size?: Size | number;
};

export type BaseIcon = FC<Props>;
