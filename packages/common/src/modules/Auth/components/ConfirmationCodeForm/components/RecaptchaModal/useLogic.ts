import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { useEffect, useRef } from 'react';

import { useFirebaseAuth, usePhoneAuthStore } from '$modules/Auth/stores';

export const useLogic = () => {
  const { setReCaptcha } = usePhoneAuthStore();
  const reCaptchaVerifier = useRef<FirebaseRecaptchaVerifierModal>(null);
  const auth = useFirebaseAuth();

  useEffect(() => {
    if (!reCaptchaVerifier.current) {
      return;
    }

    setReCaptcha(reCaptchaVerifier.current);
  }, [reCaptchaVerifier.current]);

  return {
    firebaseConfig: auth.config,
    reCaptchaRef: reCaptchaVerifier,
  };
};
