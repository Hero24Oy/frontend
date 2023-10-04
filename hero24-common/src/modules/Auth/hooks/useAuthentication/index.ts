import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { Auth } from 'firebase/auth';

import {
  // useAppleAuth,
  useEmailSignIn,
  // useEmailSignUp,
  // useFacebookAuth,
  // useGoogleAuth,
} from './providers';

// TODO: create interface for return
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type -- TODO remove it later
export const useAuthentication = (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  firebaseAuth: Auth,
) => {
  // const { signIn: signInApple } = useAppleAuth();
  // const { signIn: signInGoogle } = useGoogleAuth();
  // const { signIn: signInFacebook } = useFacebookAuth();
  const { signIn: signInEmail } = useEmailSignIn(apolloClient, firebaseAuth);
  // const { signUp: signUpEmail } = useEmailSignUp();
  const providers = {
    // signInApple,
    // signInFacebook,
    // signInGoogle,
    signInEmail,
    // signUpEmail,
  };

  return {
    providers,
  };
};
