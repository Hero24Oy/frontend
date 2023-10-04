// import { authSucceed } from 'modules/Auth/actions';
// import { handleLogoutSaga } from 'modules/Auth/sagas/utils';
// import { Task } from 'redux-saga';
// import { cancel, take, takeEvery } from 'redux-saga/effects';

// import { USER_UPDATE_PRESENCE } from '../../actionTypes';

// import { updateUserPresenceWorker } from './workers';

export function* updatePresenceWatcher(): Generator {
  while (true) {
    yield 1;
    // yield take(authSucceed.getType());
    // const task: Task = yield takeEvery(
    //   USER_UPDATE_PRESENCE,
    //   updateUserPresenceWorker,
    // );
    // yield* handleLogoutSaga(function* () {
    //   yield cancel(task);
    // });
  }
}
