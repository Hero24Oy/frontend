import { styled } from '@gluestack-style/react';
import { Pressable, PressableProps } from 'react-native';

import { Variants } from './types';

import { AncestorStyleName, DescendantStyleName } from '$theme';

export const Root = styled<PressableProps, Variants, string>(
  Pressable,
  {},
  {
    descendantStyle: [DescendantStyleName.ICON],
    componentName: 'IconButton',
    ancestorStyle: [AncestorStyleName.BUTTON],
  },
);
