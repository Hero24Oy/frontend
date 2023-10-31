import { LucideIcon } from 'lucide-react-native';

import { BaseIcon } from './types';

export const IconFactory =
  (Icon: LucideIcon): BaseIcon =>
  (props) => {
    return <Icon {...props} />;
  };

export * from './types';
