// import { AppleAuthenticationCredential } from 'expo-apple-authentication';
// import { User } from 'firebase/auth/react-native';
// import { UserDB } from 'hero24-types';

// import { EmailPasswordData, SignInAction } from './types';

// // Auth actions
// export const setFirebaseAuthUser = createAction<User | null>(
//   'Set firebase auth user',
// );

// export const authSucceed = createAction<UserDB & { id: string }>(
//   'Mark that auth succeed',
// );

// export type AuthSucceedAction = ReturnType<typeof authSucceed>;

// export const setAuthUser = createAction<UserDB & { id: string }>(
//   'Set auth user',
// );

// export const setAuthError = createAction<string>('Set auth error');

// export const firebaseAuthStatusChanged = createAction<User | null>(
//   'Firebase Auth Status Changed',
// );

// // Apple provider actions
// export const setAppleAuthCredential =
//   createAction<AppleAuthenticationCredential>('Set apple auth credential');

// // Sign in actions
// export const signInWithProvider = createAction<SignInAction>(
//   'Chose auth provider and sign in',
// );

// export const setSignInStarted = createAction('Set sign in started');

// export const setSignInEnded = createAction('Set sign in ended');

// export const signInSucceed = createAction('Sign in succeed');

// // Email password provider actions
// export const setAuthEmailData = createAction<EmailPasswordData>(
//   'Set email and password data',
// );

// // Logout
// export const logout = createAction('Call logout');

// export const logoutSucceed = createAction('Logout succeed');

// export const addBeforeLogoutAction = createAction<string>(
//   'Add before logout action',
// );

// export const removeBeforeLogoutAction = createAction<string>(
//   'Remove before logout action',
// );

// export const clearBeforeLogoutActions = createAction(
//   'Clear before logout actions',
// );
