import { FC } from 'react';
import { ViewStyle } from 'react-native';

import { HStack, Text } from '@hero24/ui';

type Props = {
  children: string;
  style?: ViewStyle;
};

export const TextDivider: FC<Props> = (props) => {
  const { children, style } = props;

  return (
    <HStack style={style}>
      {/* TODO replace "Or" with i18n call */}
      <Text>{children}</Text>
    </HStack>
  );
};
