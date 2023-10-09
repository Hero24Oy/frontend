import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth } from 'firebase/auth';
import { getReactNativePersistence } from 'firebase/auth/react-native';

import { app } from './app';

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
