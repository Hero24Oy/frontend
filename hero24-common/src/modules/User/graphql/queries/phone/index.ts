// import { apolloQuery } from 'modules/ApolloClient/utils/saga';

import { QUERY } from './query';

type Data = {
  phone: string;
};

type Variables = {
  userId: string;
};

export function* getPhoneSaga(userId: string): Generator {
  // const { data, error } = yield* apolloQuery<Data, Variables>({
  //   query: QUERY,
  //   variables: {
  //     userId,
  //   },
  // });
  // return {
  //   phoneData: data?.phone || null,
  //   phoneError: error,
  // };
}
