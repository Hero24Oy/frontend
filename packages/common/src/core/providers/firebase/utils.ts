import { Auth } from 'firebase/auth';

type GetAuthTokenGetter = (auth: Auth) => () => Promise<string | undefined>;
type GetUidGetter = (auth: Auth) => () => string | undefined;

export const getAuthTokenGetter: GetAuthTokenGetter = (auth) => async () =>
  auth.currentUser?.getIdToken();

export const getUidGetter: GetUidGetter = (auth) => (): string | undefined =>
  auth.currentUser?.uid;
