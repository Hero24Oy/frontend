import { LucideIcon } from 'lucide-react-native';
import React from 'react';

import { BaseIcon } from './types';

export const IconFactory =
  (Icon: LucideIcon): BaseIcon =>
  (props) => {
    return <Icon {...props} />;
  };
