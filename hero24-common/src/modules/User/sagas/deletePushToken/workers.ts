// import { selectAuthUser } from 'modules/Auth/selectors';
// import { getPushToken } from 'modules/Notifications/selectors';
// import { select } from 'redux-saga/effects';

import { editUserSaga } from '../../graphql/mutations';
import { User } from '../../types';

export function* deletePushTokenWorker(): Generator {
  // const user: User | null = yield select(selectAuthUser);
  // const pushToken: string | undefined = yield select(getPushToken);

  // if (!user) {
  //   return;
  // }

  // const tokens = Object.keys(user.data.pushToken || {});

  yield* editUserSaga({
    userId: '',
    data: {
      // pushToken: tokens.filter((token) => token !== pushToken),
      pushToken: [],
    },
  });
}
