import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { FC, useEffect, useRef } from 'react';

import { usePhoneAuthStore } from '../../../hooks';
import { useFirebaseAuth } from '../../../stores';

export const RecaptchaModal: FC = () => {
  const { setReCaptcha } = usePhoneAuthStore();
  const recaptchaVerifier = useRef(null);
  const auth = useFirebaseAuth();

  useEffect(() => {
    if (!recaptchaVerifier.current) {
      return;
    }

    setReCaptcha(recaptchaVerifier.current);
  }, [recaptchaVerifier.current]);

  return (
    <FirebaseRecaptchaVerifierModal
      ref={recaptchaVerifier}
      firebaseConfig={auth.config}
      attemptInvisibleVerification
    />
  );
};
