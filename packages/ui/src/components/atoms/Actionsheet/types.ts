import { FC } from 'react';
import { Pressable } from 'types';

export type Item = {
  text: string;
  Icon?: FC;
} & Pressable;
