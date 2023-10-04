// import { apolloMutation } from 'modules/ApolloClient/utils/saga';

// import MUTATION from './mutation';

import { UserData } from '$common';

// type Data = {
//   createUser: User;
// };

type Variables = {
  data: Omit<
    UserData,
    'createdAt' | 'updatedAt' | 'deletedAt' | 'lastAskedReviewTime'
  >;
  userId?: string;
};

export function* createUserSaga(_variables: Variables): Generator {
  // const result = yield* apolloMutation<Data, Variables>({
  //   mutation: MUTATION,
  //   variables,
  // });
  // return {
  //   createUserData: result.data?.createUser,
  //   createUserErrors: result.errors,
  // };
}
