import { Stack } from 'expo-router';
import { FC } from 'react';

import { stackConfig } from '$configs';

export const HeadlessExpoStack: FC = () => {
  return <Stack screenOptions={{ headerShown: false, ...stackConfig }} />;
};
