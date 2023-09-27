import { setContext } from '@apollo/client/link/context';

// import { getIdToken } from '$/api/firebase';

// eslint-disable-next-line @typescript-eslint/require-await -- TODO when getIdToken is in place, this will be async
export const authLink = setContext(async (_, { headers }) => {
  // * get the authentication token from firebase if it exists
  // const authorization = await getIdToken(); // TODO when firebase is migrated, uncomment this line

  return {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- Headers are of type Record<string,any>, so this is safe
    headers: {
      ...headers,
      authorization: '',
    },
  };
});
