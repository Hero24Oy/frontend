import { UserDB } from 'hero24-types';
import { call, put } from 'redux-saga/effects';

import { fetchAppUser } from '../utils';

import { setAuthUser } from '$modules/Auth/actions';

export function* updateAuthUserWorker(): Generator {
  const user = (yield call(fetchAppUser)) as UserDB & { id: string };

  yield put(setAuthUser(user));
}
