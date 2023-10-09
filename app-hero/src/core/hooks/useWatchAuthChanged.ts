import { User } from 'firebase/auth';
import { useEffect } from 'react';

import { auth } from '../firebase';

type UseWatchAuthChanges = (firebaseAuth: Props) => void;

type Props = {
  callback: (newState: User | null) => void;
};

export const useWatchAuthChanges: UseWatchAuthChanges = (props) => {
  const { callback } = props;

  useEffect(() => {
    auth.onAuthStateChanged(callback);
  }, []);
};
