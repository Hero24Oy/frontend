// import { AuthSessionResult } from 'expo-auth-session';
// import {
//   GoogleAuthProvider,
//   OAuthCredential,
//   signInWithCredential,
// } from 'firebase/auth/react-native';
// import { SagaIterator } from 'redux-saga';
// import { call } from 'redux-saga/effects';

// import { auth } from '$api/firebase';

// export function* signInWithGoogleProvider(
//   result: AuthSessionResult,
// ): SagaIterator<void> {
//   if (!result) {
//     throw new Error("Session result wasn't provided");
//   }

//   if (result.type !== 'success') {
//     throw new Error(
//       `GoogleSignInExpo: Google sign in failed with:  ${result.type}`,
//     );
//   }

//   const credential: OAuthCredential = yield call(
//     [GoogleAuthProvider, GoogleAuthProvider.credential],
//     result.params.id_token,
//   );

//   yield call(signInWithCredential, auth, credential);
// }
