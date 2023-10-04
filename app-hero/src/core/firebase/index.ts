// import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { initializeAuth } from 'firebase/auth';

import { firebaseConfig } from '$/configs';

export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  //   persistence: getReactNativePersistence(AsyncStorage), // TODO does not work with web if enabled
});

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
