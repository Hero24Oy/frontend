// import { useDispatch } from 'react-redux';

// import { signInWithProvider } from '../../../actions';
// import { AppAuthProvider } from '../../../constants';

import { SignInReturn } from './types';

export const useAppleAuth = (): SignInReturn => {
  // const dispatch = useDispatch();

  return {
    signIn: async (): Promise<void> => {
      // dispatch(signInWithProvider({ provider: AppAuthProvider.APPLE }));
    },
  };
};
