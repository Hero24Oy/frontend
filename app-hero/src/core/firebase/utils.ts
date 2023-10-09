import { auth } from './auth';

export const getAuthToken = async (): Promise<string | undefined> => {
  const token = await auth.currentUser?.getIdToken();

  return token;
};

export const getUid = (): string | undefined => {
  const uid = auth.currentUser?.uid;

  return uid;
};
