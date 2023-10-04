import { auth } from './app';

export const getUid = async (): Promise<string | undefined> => {
  const token = await auth.currentUser?.getIdToken();

  return token;
};
