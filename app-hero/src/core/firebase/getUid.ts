import { auth } from './app';

export const getUid = (): string => {
  const token = auth.currentUser?.uid;

  return `Bearer ${token}`;
};
