// import { selectAuthUser } from 'modules/Auth/selectors';
// import { select } from 'redux-saga/effects';

// import { UserUpdatePresence } from '../../actions';
// import { editUserSaga } from '../../graphql/mutations';
// import { User } from '../../types';

export function* updateUserPresenceWorker(): Generator {
  // action: UserUpdatePresence,
  // const user = {
  //   id: 'str',
  // };
  // // const user: User | null = yield select(selectAuthUser);
  // if (!user) {
  //   return;
  // }
  // if (!action.isActive) {
  //   yield* editUserSaga({
  //     userId: user.id,
  //     data: {
  //       isActive: false,
  //       activeRoute: {},
  //     },
  //   });
  // } else {
  //   yield* editUserSaga({
  //     userId: user.id,
  //     data: {
  //       isActive: true,
  //     },
  //   });
  // }
}
