import { Task } from 'redux-saga';
import { call, cancel, put, take, takeLatest } from 'redux-saga/effects';

import { createAppUser, fetchAppUser } from '../../utils';

import { signInWithProviderWorker } from './signInWithProviderWorker';

import { auth } from '$api/firebase';
import {
  authSucceed,
  setFirebaseAuthUser,
  setSignInEnded,
  setSignInStarted,
  signInSucceed,
  signInWithProvider,
} from '$modules/Auth/actions';
import { User } from '$modules/User/types';

function* signInWithProviderSaga(): Generator {
  const task = (yield takeLatest(
    signInWithProvider.getType(),
    signInWithProviderWorker,
  )) as Task;

  yield take(signInSucceed.getType());

  yield cancel(task);
}

export function* authenticateWorker(): Generator {
  try {
    if (!auth.currentUser) {
      yield call(signInWithProviderSaga);
    }

    yield put(setSignInStarted());
    yield put(setFirebaseAuthUser(auth.currentUser));

    let user = (yield call(fetchAppUser)) as User | null;

    if (!user) {
      user = (yield call(createAppUser)) as User;
    }

    yield put(authSucceed(user));
  } finally {
    yield put(setSignInEnded());
  }
}
