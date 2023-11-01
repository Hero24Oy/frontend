import { Stack as ExpoStack } from 'expo-router';
import { FC } from 'react';

import { LeftIcon } from '$icons';
import { Header } from '$molecules';

interface Props {
  name?: string;
}

export const Stack: FC<Props> = (props) => {
  const { name } = props;

  if (!name) {
    return (
      <ExpoStack
        screenOptions={() => ({
          header: () => null,
        })}
      />
    );
  }

  return (
    <ExpoStack
      screenOptions={() => ({
        header: (headerProps) =>
          Header({
            back: headerProps.navigation.goBack,
            name,
            icon: LeftIcon,
          }),
      })}
    />
  );
};
