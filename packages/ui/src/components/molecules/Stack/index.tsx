import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Stack as ExpoStack } from 'expo-router';
import { FC, useCallback } from 'react';

import { Header } from '$components';
import { LeftIcon } from '$icons';

interface Props {
  name?: string;
}

export const Stack: FC<Props> = (props) => {
  const { name } = props;

  const header = useCallback(
    (headerProps: NativeStackHeaderProps) => {
      const { navigation } = headerProps;

      if (!name) {
        return null;
      }

      return <Header back={navigation.goBack} name={name} icon={LeftIcon} />;
    },
    [name],
  );

  return (
    <ExpoStack
      screenOptions={() => ({
        header,
      })}
    />
  );
};
