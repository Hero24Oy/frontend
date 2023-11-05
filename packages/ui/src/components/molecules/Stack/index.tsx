import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Stack as ExpoStack } from 'expo-router';
import { FC, useCallback } from 'react';

import { Header } from '$components';
import { LeftIcon } from '$icons';

interface Props {
  title?: string;
}

export const Stack: FC<Props> = (props) => {
  const { title } = props;

  const header = useCallback(
    (headerProps: NativeStackHeaderProps) => {
      const { navigation } = headerProps;

      return (
        <Header
          goBack={navigation.goBack}
          title={title}
          goBackIcon={LeftIcon}
        />
      );
    },
    [title],
  );

  return (
    <ExpoStack
      screenOptions={() => ({
        header,
      })}
    />
  );
};
