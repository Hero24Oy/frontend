// import { authSucceed, AuthSucceedAction } from 'modules/Auth/actions';
// import { handleLogoutSaga } from 'modules/Auth/sagas/utils';
// import { Task } from 'redux-saga';
// import { cancel, fork, take } from 'redux-saga/effects';

// import { subscribeToUserWorker } from './workers';

export function* initialUserWatcher(): Generator {
  while (true) {
    // const action: AuthSucceedAction = yield take(authSucceed.getType());
    // const { payload: user } = action;
    // const task: Task = yield fork(subscribeToUserWorker, user.id);
    // yield* handleLogoutSaga(function* () {
    //   yield cancel(task);
    // });

    yield 1;
  }
}
