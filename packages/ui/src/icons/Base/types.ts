import { FC } from 'react';

import { Size } from '$theme/types';

type Props = {
  color?: string;
  size?: Size | number;
};

export type BaseIcon = FC<Props>;
