import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { useEffect, useRef } from 'react';

import { useFirebaseAuth, usePhoneAuthStore } from '$modules/Auth/stores';

export const useLogic = () => {
  const { setReCaptcha } = usePhoneAuthStore();
  const recaptchaVerifier = useRef<FirebaseRecaptchaVerifierModal>(null);
  const auth = useFirebaseAuth();

  useEffect(() => {
    if (!recaptchaVerifier.current) {
      return;
    }

    setReCaptcha(recaptchaVerifier.current);
  }, [recaptchaVerifier.current]);

  return {
    firebaseConfig: auth.config,
    reCaptchaRef: recaptchaVerifier,
  };
};
