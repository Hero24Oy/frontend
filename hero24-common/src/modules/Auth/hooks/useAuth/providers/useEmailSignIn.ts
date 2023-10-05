import { useCallback } from 'react';

import { EmailPasswordData } from '../../../types';

// import { AppAuthProvider } from '$modules/Auth/constants';
// import { useDispatch } from 'react-redux';
// import { signInWithProvider } from '../../../actions';
import { SignInReturn } from './types';

export const useEmailSignIn = (): SignInReturn => {
  // const dispatch = useDispatch();

  return {
    signIn: useCallback(async (_data: EmailPasswordData) => {
      // dispatch(
      //   signInWithProvider({
      //     provider: AppAuthProvider.EMAIL_PASSWORD_SIGN_IN,
      //     options: data,
      //   }),
      // );
    }, []),
  };
};
