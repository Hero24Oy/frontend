// import { createAction } from 'redux-act';
// import { put, take } from 'redux-saga/effects';

// import {
//   addBeforeLogoutAction,
//   logout,
//   removeBeforeLogoutAction,
// } from '$modules/Auth/actions';

// /**
//  * Call handleLogoutSaga with yield*
//  *
//  * @example
//  * yield* handleLogoutSaga(function*() {
//  *  yield cancel(task)
//  * })
//  */
// export function* handleLogoutSaga(handler: () => Generator): Generator {
//   const logoutEnded = createAction('Logout ended');

//   yield put(addBeforeLogoutAction(logoutEnded.getType()));

//   try {
//     yield take(logout.getType());

//     yield* handler();

//     yield put(logoutEnded());
//   } finally {
//     yield put(removeBeforeLogoutAction(logoutEnded.getType()));
//   }
// }
