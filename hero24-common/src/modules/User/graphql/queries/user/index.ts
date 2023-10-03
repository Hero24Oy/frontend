import { FetchPolicy } from '@apollo/client';

// import { apolloQuery } from 'modules/ApolloClient/utils/saga';
// import { User } from '../../fragments';

// import { QUERY } from './query';

// type Variables = {
//   id: string;
// };

// type Data = {
//   user: User | null;
// };

export function* getUserSaga(
  _id: string,
  _fetchPolicy?: FetchPolicy,
): Generator {
  // const { data, error } = yield* apolloQuery<Data, Variables>({
  //   query: QUERY,
  //   variables: {
  //     id,
  //   },
  //   fetchPolicy,
  // });
  // return {
  //   userData: data?.user,
  //   userError: error,
  // };
}
