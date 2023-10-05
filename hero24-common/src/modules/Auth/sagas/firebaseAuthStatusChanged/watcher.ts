// import { User } from 'firebase/auth/react-native';
// import { eventChannel, TakeableChannel } from 'redux-saga';
// import { takeLatest } from 'redux-saga/effects';

// import { firebaseAuthStatusChangedWorker } from './workers';

// import { auth } from '$api/firebase';

// export function* firebaseAuthStatusChangedWatcher(): Generator {
//   const channel: TakeableChannel<User | 'null'> = eventChannel((emit) =>
//     auth.onAuthStateChanged((user) => {
//       emit(user || 'null');
//     }),
//   );

//   yield takeLatest(channel, firebaseAuthStatusChangedWorker);
// }
