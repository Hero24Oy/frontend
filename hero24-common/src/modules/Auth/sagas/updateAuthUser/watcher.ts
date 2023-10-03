import { Task } from 'redux-saga';
import { cancel, take, takeLatest } from 'redux-saga/effects';

import { handleLogoutSaga } from '../utils';

import { updateAuthUserWorker } from './workers';

import { authSucceed } from '$modules/Auth/actions';
import { USER_UPDATED } from '$modules/User/actionTypes';

export function* updateAuthUserWatcher(): Generator {
  while (true) {
    yield take(authSucceed.getType());

    const task = (yield takeLatest(USER_UPDATED, updateAuthUserWorker)) as Task;

    yield* handleLogoutSaga(function* () {
      yield cancel(task);
    });
  }
}
