// import { selectAuthUser } from 'modules/Auth/selectors';
// import { select } from 'redux-saga/effects';

// import { UserUpdateActiveRoute } from '../../actions';
// import { editUserSaga } from '../../graphql/mutations';
// import { User } from '../../types';

export function* updateActiveRouteWorker(): Generator {
  // action: UserUpdateActiveRoute,
  // // const user: User | null = yield select(selectAuthUser);
  // const user = {
  //   id: '',
  // } as User;
  // if (user) {
  //   if (action.activeRoute) {
  //     yield* editUserSaga({
  //       userId: user.id,
  //       data: {
  //         activeRoute: {
  //           chatId: Object.values(action.activeRoute)[0],
  //         },
  //       },
  //     });
  //   } else {
  //     yield* editUserSaga({
  //       userId: user.id,
  //       data: {
  //         activeRoute: {},
  //       },
  //     });
  //   }
  // }
}
