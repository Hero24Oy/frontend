import { Progress, ProgressFilledTrack } from '@gluestack-ui/themed';
import { FC } from 'react';

import { ProgressBarSize } from './types';

import { CommonStyles } from '$types';

type Props = {
  size?: `${ProgressBarSize}`;
  styles?: CommonStyles;
  value?: number;
};

export const ProgressBar: FC<Props> = (props) => {
  const { value = 0, ...restProps } = props;

  return (
    <Progress value={value} {...restProps}>
      <ProgressFilledTrack />
    </Progress>
  );
};

export * from './types';
