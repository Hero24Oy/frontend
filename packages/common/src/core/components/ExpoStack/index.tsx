import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Stack } from 'expo-router';
import { FC, useCallback } from 'react';

import { Header, LeftIcon } from '@hero24/ui';

interface Props {
  canGoBack?: boolean;
  title?: string;
}

export const ExpoStack: FC<Props> = (props) => {
  const { title, canGoBack } = props;

  const header = useCallback(
    (headerProps: NativeStackHeaderProps) => {
      const { navigation } = headerProps;

      return (
        <Header
          goBack={navigation.goBack}
          title={title}
          goBackIcon={LeftIcon}
          canGoBack={canGoBack}
        />
      );
    },
    [title],
  );

  return (
    <Stack
      screenOptions={() => ({
        header,
      })}
    />
  );
};
