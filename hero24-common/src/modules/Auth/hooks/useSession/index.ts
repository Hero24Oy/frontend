import { useContext } from 'react';

import { AuthContext } from '../../provider';
import { AuthContextProps } from '../../types';

export const useSession = (): AuthContextProps => {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error('useSession must be wrapped in a <SessionProvider />');
  }

  return value;
};
