import { View } from '@gluestack-ui/themed';
import { FC } from 'react';
import { FieldError } from 'react-hook-form';

import { Text } from '$atoms';
import { LineHeight } from '$theme';

type Props = {
  error?: FieldError;
};

export const Helper: FC<Props> = (props): JSX.Element => {
  const { error } = props;

  if (!error) {
    return <View height={LineHeight.DEFAULT} />;
  }

  const errorText = error?.message?.toString() || '';

  return <Text>{errorText}</Text>;
};