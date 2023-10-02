// import { apolloQuery } from 'modules/ApolloClient/utils/saga';
// import { GraphQLPagination } from 'modules/Common/graphql/types';

import { User } from '../../fragments';

import { QUERY } from './query';

type Data = {
  users: GraphQLPagination<User>;
};

type Variables = {
  limit?: number;
  offset?: number;
  search?: string;
};

export function* getUserListSaga(variables: Variables): Generator {
  // const { data, error } = yield* apolloQuery<Data, Variables>({
  //   query: QUERY,
  //   variables,
  // });
  // return {
  //   userListData: data && data.users,
  //   userListError: error,
  // };
}
