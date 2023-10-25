import { ReactNode } from 'react';
import { Pressable } from 'types';

export type Item = {
  text: string;
  icon?: ReactNode;
} & Pressable;
