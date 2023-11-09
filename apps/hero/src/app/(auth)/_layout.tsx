/* eslint-disable @cspell/spellchecker -- TODO fix this */
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { Redirect } from 'expo-router';
import { FC, useEffect, useRef } from 'react';

import {
  HeadlessExpoStack,
  useFirebaseAuth,
  useFirebaseUser,
  usePhoneAuthStore,
} from '@hero24/common';

const AppLayout: FC = () => {
  const { user } = useFirebaseUser();
  const auth = useFirebaseAuth();
  const recaptchaVerifier = useRef(null);
  const { setReCaptcha } = usePhoneAuthStore();

  useEffect(() => {
    if (!recaptchaVerifier.current) {
      return;
    }

    setReCaptcha(recaptchaVerifier.current);
  }, [recaptchaVerifier]);

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (user) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/" />;
  }

  // This layout can be deferred because it's not the root layout.
  return (
    <>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={auth.config}
        attemptInvisibleVerification
      />
      <HeadlessExpoStack />
    </>
  );
};

export default AppLayout;
