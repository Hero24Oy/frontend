// import { User } from 'firebase/auth/react-native';
// import { call, select } from 'redux-saga/effects';

// import { selectAuthFirebaseUser } from '$modules/Auth/selectors';
// import { UserAdapter } from '$modules/User/graphql/fragments';
// import { getUserSaga } from '$modules/User/graphql/queries';

// export function* fetchAppUser(): Generator {
//   try {
//     const firebaseUser = (yield select(selectAuthFirebaseUser)) as User;

//     // TODO: get rid off network only after subscription was implemented
//     const { userData } = yield* getUserSaga(firebaseUser.uid, 'network-only');

//     if (!userData) {
//       return null;
//     }

//     return UserAdapter.toFirebase(userData);
//   } catch (err) {
//     yield call(console.error, err);
//   }

//   return null;
// }
