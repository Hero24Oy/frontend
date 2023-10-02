// import { authSucceed } from 'modules/Auth/actions';
// import { takeEvery } from 'redux-saga/effects';

import { attachPushTokenWorker } from './workers';

export function* attachPushTokenWatcher(): Generator {
  // yield takeEvery(authSucceed.getType(), attachPushTokenWorker);

  yield 1;
}
