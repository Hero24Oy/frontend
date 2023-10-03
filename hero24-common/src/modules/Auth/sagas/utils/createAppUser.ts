// import { AppleAuthenticationCredential } from 'expo-apple-authentication';
// import { User } from 'firebase/auth/react-native';
// import { select } from 'redux-saga/effects';

// import { AppAuthProvider } from '$modules/Auth/constants';
// import {
//   selectAuthAppleAuthCredential,
//   selectAuthFirebaseUser,
//   selectAuthProvider,
// } from '$modules/Auth/selectors';
// import { getPushToken } from '$modules/Notifications/selectors';
// import { UserAdapter } from '$modules/User/graphql/fragments';
// import { createUserSaga } from '$modules/User/graphql/mutations';
// import { getLanguage } from '$utilities/getLanguage';

// type CreateUserVariables = Parameters<typeof createUserSaga>[0];

// export function* createAppUser(): Generator {
//   const provider = (yield select(selectAuthProvider)) as AppAuthProvider;
//   const firebaseUser = (yield select(selectAuthFirebaseUser)) as User;

//   const appleAuthCredential = (yield select(
//     selectAuthAppleAuthCredential,
//   )) as AppleAuthenticationCredential;

//   const expoPushToken = (yield select(getPushToken)) as string | null;

//   const creationVariables: CreateUserVariables = {
//     userId: firebaseUser.uid,
//     data: {
//       photoURL: firebaseUser.photoURL || '',
//       emailVerified: firebaseUser.emailVerified,
//       email: firebaseUser.email || '',
//       name: firebaseUser.displayName || '',
//       language: getLanguage(),
//       phone: '',
//     },
//   };

//   if (expoPushToken) {
//     creationVariables.data.pushToken = [expoPushToken];
//   }

//   if (provider === AppAuthProvider.APPLE) {
//     const { email, fullName } = appleAuthCredential;
//     const { familyName, givenName } = fullName || {};

//     if (email) {
//       creationVariables.data.email = email;
//     }

//     if (familyName || givenName) {
//       const firstName = givenName || '';
//       const lastName = familyName || '';

//       creationVariables.data.name = `${firstName} ${lastName}`;
//     }
//   }

//   const { createUserData, createUserErrors } =
//     yield* createUserSaga(creationVariables);

//   if (createUserErrors) {
//     throw new Error(`User didn't created: ${createUserErrors[0].message}`);
//   }

//   if (!createUserData) {
//     throw new Error('User not returned');
//   }

//   return UserAdapter.toFirebase(createUserData);
// }
