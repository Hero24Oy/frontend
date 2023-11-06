import { Stack as ExpoStack } from 'expo-router';
import { FC } from 'react';

export const HeadlessStack: FC = () => {
  return (
    <ExpoStack screenOptions={{ headerShown: false, header: () => null }} />
  );
};
