// import { createUserWithEmailAndPassword } from 'firebase/auth/react-native';
// import { SagaIterator } from 'redux-saga';
// import { call, select } from 'redux-saga/effects';

// import { selectAuthEmail, selectAuthPassword } from '../../../selectors';

// import { auth } from '$api/firebase';
// import { getFirebaseErrorMessage, isFirebaseError } from '$utilities/firebase';

// export function* signUpWithEmailPasswordProvider(): SagaIterator<void> {
//   try {
//     const email = (yield select(selectAuthEmail)) as string;
//     const password = (yield select(selectAuthPassword)) as string;

//     yield call(createUserWithEmailAndPassword, auth, email, password);
//   } catch (error) {
//     if (!isFirebaseError(error)) {
//       throw error;
//     }

//     const message = getFirebaseErrorMessage(error);

//     throw new Error(message);
//   }
// }
