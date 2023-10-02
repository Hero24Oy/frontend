// import { apolloMutation } from 'modules/ApolloClient/utils/saga';

import { User, UserData } from '../../fragments';

import MUTATION from './mutation';

type Data = {
  editUserData: User;
};

type Variables = {
  data: Omit<Partial<UserData>, 'createdAt' | 'updatedAt' | 'deletedAt'>;
  userId: string;
};

export function* editUserSaga(variables: Variables): Generator {
  // const result = yield* apolloMutation<Data, Variables>({
  //   mutation: MUTATION,
  //   variables,
  // });
  // return {
  //   editUserData: result.data?.editUserData,
  //   editUserErrors: result.errors,
  // };
}
