// import { DatabaseReference } from 'components/types';
// import firebase from 'firebase/compat/app';
// import { UserDB } from 'hero24-types';

// import { EventChannel } from 'redux-saga';
// import { call, put, take } from 'redux-saga/effects';
// import { getEventChannelForFirebaseRef } from 'utilities/Redux/sagaHelpers';
// import { userUpdated } from '../../actions';
// import { FIREBASE_PATH as FIREBASE_PATH_USERS } from '../../constants';

// type EventData = {
//   values: UserDB;
// };

export function* subscribeToUserWorker(_userId: string): Generator {
  // const userRef: DatabaseReference = yield firebase
  //   .database()
  //   .ref(FIREBASE_PATH_USERS)
  //   .child(userId);
  // const channel: EventChannel<EventData> = yield call(
  //   getEventChannelForFirebaseRef,
  //   userRef,
  // );
  // try {
  //   while (true) {
  //     const { values: user }: EventData = yield take(channel);
  //     yield put(
  //       userUpdated({
  //         id: userId,
  //         ...user,
  //       }),
  //     );
  //   }
  // } finally {
  //   channel.close();
  // }
}
