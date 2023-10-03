import { Auth } from 'firebase/auth/react-native';

export const getIdToken = async (auth: Auth): Promise<string | undefined> => {
  const token = await auth.currentUser?.getIdToken();

  return token;
};
