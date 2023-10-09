import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { auth } from '../firebase';

type UseFirebaseUser = () => {
  user: User | null;
};

export const useFirebaseUser: UseFirebaseUser = () => {
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
