import { User } from 'firebase/auth';
import { useEffect } from 'react';

import { useFirebaseAuth } from '../../../core';

type UseWatchAuthChangesParams = {
  callback: (newState: User | null) => void;
};

type UseWatchAuthChanges = (params: UseWatchAuthChangesParams) => void;

export const useWatchAuthChanges: UseWatchAuthChanges = (params) => {
  const auth = useFirebaseAuth();
  const { callback } = params;

  useEffect(() => {
    auth.onAuthStateChanged(callback);
  }, [callback]);
};
