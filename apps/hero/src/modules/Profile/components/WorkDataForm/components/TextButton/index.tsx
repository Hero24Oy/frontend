import { FC } from 'react';
import { ViewStyle } from 'react-native';

import { Button } from '@hero24/ui';

type Props = {
  onPress: () => void;
  title: string;
  styles?: ViewStyle;
};

export const TextButton: FC<Props> = (props) => {
  const { title, onPress, styles } = props;

  return (
    <Button variant="link" onPress={onPress} style={styles}>
      {title}
    </Button>
  );
};
