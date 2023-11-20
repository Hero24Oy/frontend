import { styled } from '@gluestack-style/react';
import { Divider as GluestackDivider } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

import { Variants } from '../types';

import { AncestorStyleName } from '$theme';

export const StyledSelectDivider = styled<
  ComponentProps<typeof GluestackDivider>,
  Variants,
  string
>(
  GluestackDivider,
  {},
  {
    componentName: 'SelectDivider',
    ancestorStyle: [AncestorStyleName.DIVIDER],
  },
);
