import { auth } from './app';

export const getUid = (): string | undefined => {
  const token = auth.currentUser?.uid;

  return token;
};
