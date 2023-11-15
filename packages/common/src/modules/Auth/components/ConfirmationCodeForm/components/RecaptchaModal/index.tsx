import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { FC } from 'react';

import { useLogic } from './useLogic';

export const ReCaptchaModal: FC = () => {
  const { firebaseConfig, reCaptchaRef } = useLogic();

  return (
    <FirebaseRecaptchaVerifierModal
      ref={reCaptchaRef}
      firebaseConfig={firebaseConfig}
      attemptInvisibleVerification
    />
  );
};
