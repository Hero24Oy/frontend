// import { apolloMutation } from 'modules/ApolloClient/utils/saga';

import { MUTATION } from './mutation';

type Data = {
  unbindUserOfferRequests: boolean;
};

type Variables = {
  offerRequestIds: string[];
  userId: string;
};

export function* unbindUserOfferRequestsSaga(variables: Variables): Generator {
  // const { data, errors } = yield* apolloMutation<Data, Variables>({
  //   mutation: MUTATION,
  //   variables,
  // });
  // return {
  //   unbindUserOfferRequestsData: data && data.unbindUserOfferRequests,
  //   unbindUserOfferRequestsErrors: errors,
  // };
}
