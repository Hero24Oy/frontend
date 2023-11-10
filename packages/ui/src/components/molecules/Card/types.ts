import { Pressable } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';
import { ViewStyle } from 'react-native';

export type CardStyles = Pick<
  ViewStyle,
  'backgroundColor' | 'borderColor' | 'borderRadius' | 'maxWidth'
>;

export type GluestackCardProps = Pick<
  ComponentProps<typeof Pressable>,
  'onPress'
>;
