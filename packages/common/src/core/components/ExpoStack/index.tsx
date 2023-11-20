import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Stack } from 'expo-router';
import { FC, useCallback } from 'react';

import { ChevronLeftIcon, Header } from '@hero24/ui';

import { stackConfig } from '$configs';

interface Props {
  title?: string;
}

export const ExpoStack: FC<Props> = (props) => {
  const { title } = props;

  const header = useCallback(
    (headerProps: NativeStackHeaderProps) => {
      const { navigation } = headerProps;

      return (
        <Header
          goBack={navigation.goBack}
          title={title}
          goBackIcon={ChevronLeftIcon}
        />
      );
    },
    [title],
  );

  return (
    <Stack
      screenOptions={() => ({
        header,
        ...stackConfig,
      })}
    />
  );
};
