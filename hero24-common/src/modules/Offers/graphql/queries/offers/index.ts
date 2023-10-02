import { useCustomQuery, UseQueryWrapper } from '../../../../../core';
import { OFFERS_PER_PAGE, OfferUserRole } from '../../constants';

import { Data, PREFIX, QUERY, Variables } from './query';

type UseGetOffers = UseQueryWrapper<typeof PREFIX, Data, Variables>;

const useCustomGetOffers: UseGetOffers = (...args) =>
  useCustomQuery(PREFIX, QUERY, ...args);

// TODO refactor when all paginated resolvers at server are of same structure
export const useGetOffers: typeof useCustomGetOffers = (
  ...props: Parameters<UseGetOffers>
) => {
  const { getOffers } = useCustomGetOffers(...props);
  const { fetchMore } = getOffers;

  const customFetchMore: typeof fetchMore = () => {
    return fetchMore({
      variables: {
        input: {
          limit: OFFERS_PER_PAGE,
          offset: getOffers.data?.edges.length ?? 0,
          role: OfferUserRole.SELLER,
        },
      },
    });
  };

  return {
    getOffers: {
      ...getOffers,
      fetchMore: customFetchMore,
    },
  };
};
