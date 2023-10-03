import { all, call, put, select, take } from 'redux-saga/effects';

import { auth } from '$api/firebase';
import { clearBeforeLogoutActions, logoutSucceed } from '$modules/Auth/actions';
import { selectBeforeLogoutActions } from '$modules/Auth/selectors';

export function* logoutWorker(): Generator {
  const beforeLogoutActions = (yield select(
    selectBeforeLogoutActions,
  )) as string[];

  yield all(beforeLogoutActions.map((action) => take(action)));
  yield call([auth, auth.signOut]);

  yield put(clearBeforeLogoutActions());

  yield put(logoutSucceed());
}
