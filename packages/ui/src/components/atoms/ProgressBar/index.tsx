import { Progress, ProgressFilledTrack } from '@gluestack-ui/themed';
import { FC } from 'react';

import { ProgressBarSize } from './types';

type Props = {
  size?: ProgressBarSize;
  value?: number;
};

export const ProgressBar: FC<Props> = (props) => {
  return (
    <Progress {...props}>
      <ProgressFilledTrack />
    </Progress>
  );
};

export * from './types';
