import { FC } from 'react';

import { VStack } from '@hero24/ui';

import { DisclaimerProps } from '../types';

import { DisclaimerAlert } from './DisclaimerAlert';
import { DisclaimerCard } from './DisclaimerCard';

export const DisclaimerBody: FC<DisclaimerProps> = (props) => {
  return (
    <VStack>
      <DisclaimerCard {...props} />
      <DisclaimerAlert />
    </VStack>
  );
};
