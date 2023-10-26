import { LucideIcon } from 'lucide-react-native';
import React from 'react';

import { BaseIcon } from './types';

export const BaseIconFabric = (Icon: LucideIcon): BaseIcon =>
  function IconComponent(props) {
    return <Icon {...props} />;
  };
