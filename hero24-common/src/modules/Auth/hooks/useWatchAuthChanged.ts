import { User } from 'firebase/auth';
import { useEffect } from 'react';

import { useFirebaseAuth } from '../../../core';

type UseWatchAuthChangesArguments = {
  callback: (newState: User | null) => void;
};

type UseWatchAuthChanges = (params: UseWatchAuthChangesArguments) => void;

export const useWatchAuthChanges: UseWatchAuthChanges = (params) => {
  const auth = useFirebaseAuth();
  const { callback } = params;

  useEffect(() => {
    auth.onAuthStateChanged(callback);
  }, []);
};
