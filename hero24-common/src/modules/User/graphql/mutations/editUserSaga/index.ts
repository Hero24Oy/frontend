// import { apolloMutation } from 'modules/ApolloClient/utils/saga';

import { UserData } from '$common';

// type Data = {
//   editUserData: User;
// };

type Variables = {
  data: Omit<Partial<UserData>, 'createdAt' | 'updatedAt' | 'deletedAt'>;
  userId: string;
};

export function* editUserSaga(_variables: Variables): Generator {
  // const result = yield* apolloMutation<Data, Variables>({
  //   mutation: MUTATION,
  //   variables,
  // });
  // return {
  //   editUserData: result.data?.editUserData,
  //   editUserErrors: result.errors,
  // };
}
