import { styled } from '@gluestack-style/react';
import { Pressable, PressableProps } from 'react-native';

import { Variants } from './types';

export const Root = styled<PressableProps, Variants, string>(
  Pressable,
  {},
  {
    descendantStyle: ['_icon'],
    componentName: 'IconButton',
    ancestorStyle: ['_button'],
  },
);
