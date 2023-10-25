import { ReactNode } from 'react';

export type Item = {
  onPress: () => void;
  text: string;
  icon?: ReactNode;
};
