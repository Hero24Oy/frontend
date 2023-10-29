import { FC } from 'react';

import { Text, TextProps } from '$atoms';

import { InputSize } from '../types';

const titleProps: Record<`${InputSize}`, Partial<TextProps>> = {
  [InputSize.SMALL]: {
    size: 'sm',
    weight: 'medium',
  },
  [InputSize.MEDIUM]: {
    size: 'md',
    weight: 'medium',
  },
};

type Props = {
  inputSize?: `${InputSize}`;
  value?: string;
};

export const Title: FC<Props> = (props) => {
  const { inputSize, value } = props;

  if (!value) {
    return null;
  }

  return (
    <Text {...titleProps[inputSize || 'sm']} color="GRAY_01">
      {value}
    </Text>
  );
};