// import { AuthSessionResult } from 'expo-auth-session';
// import {
//   FacebookAuthProvider,
//   OAuthCredential,
//   signInWithCredential,
// } from 'firebase/auth/react-native';
// import { SagaIterator } from 'redux-saga';
// import { call } from 'redux-saga/effects';

// import { auth } from '$api/firebase';

// export function* signInWithFacebookProvider(
//   result: AuthSessionResult,
// ): SagaIterator<void> {
//   if (!result) {
//     throw new Error("Session result wasn't provided");
//   }

//   if (result.type !== 'success') {
//     throw new Error(`Facebook authentication error: ${result.type}`);
//   }

//   const credential: OAuthCredential = yield call(
//     [FacebookAuthProvider, FacebookAuthProvider.credential],
//     result.params.access_token,
//   );

//   yield call(signInWithCredential, auth, credential);
// }
