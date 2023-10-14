import { auth } from './auth';

export const getAuthToken = async (): Promise<string | undefined> =>
  auth.currentUser?.getIdToken();

export const getUid = (): string | undefined => auth.currentUser?.uid;
