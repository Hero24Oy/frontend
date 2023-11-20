import { styled } from '@gluestack-style/react';
import { Pressable as GluestackPressable } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

import { Variants } from './types';

import { AncestorStyleName, DescendantStyleName } from '$theme';

export const StyledSelect = styled<
  ComponentProps<typeof GluestackPressable>,
  Variants,
  string
>(
  GluestackPressable,
  {},
  {
    descendantStyle: [
      DescendantStyleName.ICON,
      DescendantStyleName.TEXT,
      DescendantStyleName.DIVIDER,
    ],
    componentName: 'CustomSelect',
    ancestorStyle: [AncestorStyleName.SELECT],
  },
);
