import { ITheme, SxProps } from '@gluestack-style/react/lib/typescript/types';
import { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { AncestorStyleName, DescendantStyleName } from '$theme/enums';

export type SxValues<StyleType = ViewStyle> = SxProps<StyleProp<StyleType>>;

type ComponentConfig = {
  ancestorStyle?: `${AncestorStyleName}`[];
  componentName?: string;
  descendantStyle?: `${DescendantStyleName}`[];
};

export type ComponentTheme<
  ComponentProps extends Parameters<FC>[0],
  Variants extends Record<string, Record<string, SxValues>> | null = null,
> = {
  theme: ITheme<Variants, ComponentProps>;
  componentConfig?: ComponentConfig;
};
