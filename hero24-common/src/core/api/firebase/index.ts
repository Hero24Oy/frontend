// // init firebase storage and auth
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { FirebaseOptions, initializeApp } from 'firebase/app';
// import {
//   Auth,
//   getAuth,
//   getReactNativePersistence,
//   initializeAuth,
// } from 'firebase/auth/react-native';
// import { getDatabase } from 'firebase/database';
// import { getFunctions } from 'firebase/functions';
// import { getStorage } from 'firebase/storage';

// export * from './utils';

// export type FirebaseApp = {
//   app: ReturnType<typeof initializeApp>;
//   auth: ReturnType<typeof getAuth>;
//   database: ReturnType<typeof getDatabase>;
//   functions: ReturnType<typeof getFunctions>;
//   storage: ReturnType<typeof getStorage>;
// };

// export const createFirebaseApp = (options: FirebaseOptions): FirebaseApp => {
//   const app = initializeApp(options);

//   const storage = getStorage(app);

//   const database = getDatabase(app);

//   const functions = getFunctions(app);

//   let preAuth: Auth;

//   try {
//     preAuth = initializeAuth(app, {
//       persistence: getReactNativePersistence(AsyncStorage),
//     });
//   } catch (err) {
//     // it sometimes cause auth/already-initialized // TODO check it
//     preAuth = getAuth(app);
//   }

//   return {
//     app,
//     storage, // ? TODO do we need this?
//     database,
//     auth: preAuth,
//     functions,
//   };
// };
