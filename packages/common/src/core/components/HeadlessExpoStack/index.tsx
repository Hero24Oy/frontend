import { Stack } from 'expo-router';
import { FC } from 'react';

export const HeadlessExpoStack: FC = () => {
  return <Stack screenOptions={{ headerShown: false }} />;
};
