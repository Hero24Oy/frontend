import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { useFirebaseAuth } from '../context';

type UseFirebaseUser = () => {
  user: User | null;
};

export const useFirebaseUser: UseFirebaseUser = () => {
  const auth = useFirebaseAuth();

  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    auth.onAuthStateChanged((updatedUser) => {
      setUser(updatedUser);
    });
  }, []);

  return {
    user,
  };
};
