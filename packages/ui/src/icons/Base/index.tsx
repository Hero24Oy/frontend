import { LucideIcon } from 'lucide-react-native';
import React from 'react';

import { BaseIcon } from './types';

// eslint-disable-next-line @typescript-eslint/naming-convention -- we pass icon as component here.
export const BaseIconFabric = (Icon: LucideIcon): BaseIcon =>
  function IconComponent(props) {
    return <Icon {...props} />;
  };
