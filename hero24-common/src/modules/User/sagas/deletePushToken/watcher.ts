// import { authSucceed } from 'modules/Auth/actions';
// import { handleLogoutSaga } from 'modules/Auth/sagas/utils';
// import { call, take } from 'redux-saga/effects';

// import { deletePushTokenWorker } from './workers';

export function* deletePushTokenWatcher(): Generator {
  while (true) {
    // yield take(authSucceed.getType());
    // yield* handleLogoutSaga(function* () {
    //   yield call(deletePushTokenWorker);
    // });

    yield 1;
  }
}
