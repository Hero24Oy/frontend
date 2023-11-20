import { styled } from '@gluestack-style/react';
import { Text as GluestackText } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

import { Variants } from '../types';

import { AncestorStyleName } from '$theme';

export const StyledSelectText = styled<
  ComponentProps<typeof GluestackText>,
  Variants,
  string
>(
  GluestackText,
  {},
  {
    componentName: 'SelectText',
    ancestorStyle: [AncestorStyleName.TEXT],
  },
);
