import { useCallback } from 'react';

import { EmailPasswordData } from '../../../types';

// import { useDispatch } from 'react-redux';
import { SignUpReturn } from './types';

// import { signInWithProvider } from '$modules/Auth/actions';
// import { AppAuthProvider } from '$modules/Auth/constants';
// import { EmailPasswordData } from '$modules/Auth/types';

export const useEmailSignUp = (): SignUpReturn => {
  // const dispatch = useDispatch();

  //
  return {
    signUp: useCallback(async (_data: EmailPasswordData) => {
      // dispatch(
      //   signInWithProvider({
      //     provider: AppAuthProvider.EMAIL_PASSWORD_SIGN_UP,
      //     options: data,
      //   }),
      // );
    }, []),
  };
};
