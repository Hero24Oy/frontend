// import { all, fork } from 'redux-saga/effects';

import { attachPushTokenWatcher } from './attachPushToken';
import { deletePushTokenWatcher } from './deletePushToken';
import { initialUserWatcher } from './initialUser';
import { pickUserByIdPhoneWatcher } from './pickUserByIdPhone';
import { updateActiveRouteWatcher } from './updateActiveRoute';
import { updatePresenceWatcher } from './updatePresence';
import { updateUserWatcher } from './updateUser';
import { updateUserAskedReviewTimeWatcher } from './updateUserAskedReviewTime';

export default function* userSaga(): Generator {
  const sagas = [
    attachPushTokenWatcher,
    initialUserWatcher,
    updatePresenceWatcher,
    deletePushTokenWatcher,
    updateUserWatcher,
    updateActiveRouteWatcher,
    pickUserByIdPhoneWatcher,
    updateUserAskedReviewTimeWatcher,
  ];

  yield sagas;

  // yield all(sagas.map(fork));
}
