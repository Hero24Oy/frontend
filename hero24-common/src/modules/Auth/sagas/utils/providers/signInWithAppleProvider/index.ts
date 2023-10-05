// import * as AppleAuthentication from 'expo-apple-authentication';
// import * as Crypto from 'expo-crypto';
// import {
//   OAuthCredential,
//   OAuthProvider,
//   signInWithCredential,
// } from 'firebase/auth/react-native';
// import { SagaIterator } from 'redux-saga';
// import { call, put } from 'redux-saga/effects';

// import { setAppleAuthCredential } from '../../../../actions';

// import { CSRF_END, NONCE_END, RADIX, START } from './constants';

// import { auth } from '$api/firebase';

// export function* signInWithAppleProvider(): SagaIterator<void> {
//   const csrfRandom: number = yield call(Math.random);
//   const nonceRandom: number = yield call(Math.random);

//   const csrf = csrfRandom.toString(RADIX).substring(START, CSRF_END);
//   const nonce = nonceRandom.toString(RADIX).substring(START, NONCE_END);

//   const hashedNonce: string = yield call(
//     Crypto.digestStringAsync,
//     Crypto.CryptoDigestAlgorithm.SHA256,
//     nonce,
//   );

//   const appleCredential: AppleAuthentication.AppleAuthenticationCredential =
//     yield call(AppleAuthentication.signInAsync, {
//       requestedScopes: [
//         AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
//         AppleAuthentication.AppleAuthenticationScope.EMAIL,
//       ],
//       state: csrf,
//       nonce: hashedNonce,
//     });

//   yield put(setAppleAuthCredential(appleCredential));

//   const { identityToken } = appleCredential;

//   if (!identityToken) {
//     throw new Error("IdentityToken wasn't provided");
//   }

//   const provider = new OAuthProvider('apple.com');

//   const credential: OAuthCredential = yield call(
//     [provider, provider.credential],
//     {
//       idToken: identityToken,
//       rawNonce: nonce,
//     },
//   );

//   yield call(signInWithCredential, auth, credential);
// }
