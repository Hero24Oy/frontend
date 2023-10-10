import { User } from 'firebase/auth';
import { useEffect } from 'react';

import { useFirebaseAuth } from '../../../core';

type UseWatchAuthChanges = (props: Props) => void;

type Props = {
  callback: (newState: User | null) => void;
};

export const useWatchAuthChanges: UseWatchAuthChanges = (props) => {
  const auth = useFirebaseAuth();
  const { callback } = props;

  useEffect(() => {
    auth.onAuthStateChanged(callback);
  }, []);
};
