// import { UserDB } from 'hero24-types';
// import get from 'lodash/get';
// import omit from 'lodash/omit';

// import { UpdateUser } from '../../actions';
// import { UserData } from '../../graphql/fragments';
// import { editUserSaga } from '../../graphql/mutations';

export function* updateUserWorker(): Generator {
  // _action: UpdateUser
  // const userData: UserDB['data'] = {
  //   ...action.user.data,
  // };
  // if (userData.name?.length < 2 && userData.firstName) {
  //   const firstName = get(userData, 'firstName', '');
  //   const lastName = get(userData, 'lastName', '');
  //   userData.name = [firstName, lastName].join(' ').trim();
  // }
  // const graphQLUserData = UserDataAdapter.toGraphQL(userData) as UserData;
  // yield* editUserSaga({
  //   userId: action.user.id,
  //   data: omit(graphQLUserData, ['createdAt', 'updatedAt', 'deletedAt']),
  // });
}
