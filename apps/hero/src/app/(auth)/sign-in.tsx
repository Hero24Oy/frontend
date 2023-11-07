/* eslint-disable @cspell/spellchecker -- TODO add to ignore */

import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { OAuthCredential, PhoneAuthProvider } from 'firebase/auth';
import { FC, useRef, useState } from 'react';
import { TextInput } from 'react-native';

import { useAuthentication } from '@hero24/common';
// import { AuthScreen } from '@hero24/common';
import { Button, SafeAreaView } from '@hero24/ui';

import { firebaseConfig } from '$/configs';
import { auth } from '$core';

const phoneProvider = new PhoneAuthProvider(auth);

const Auth: FC = () => {
  const recaptchaVerifier = useRef(null);

  const { signInWithCredentials } = useAuthentication();

  // TODO make nice captcha window
  // TODO test on andorid
  const [verificationCode, setVerificationCode] = useState<string>();

  const [verificationId, setVerificationId] = useState<string>();

  return (
    <SafeAreaView>
      {/* <AuthScreen /> */}
      <TextInput
        value={verificationCode}
        onChangeText={(text) => setVerificationCode(text)}
      />
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
        attemptInvisibleVerification
      />
      <Button
        onPress={async () => {
          try {
            if (!verificationId || !verificationCode) {
              return;
            }

            // TODO make this with usage of onAuthSucceed callback
            const credentials = PhoneAuthProvider.credential(
              verificationId,
              verificationCode,
            ) as unknown as OAuthCredential; // ts argues about type mismatch, but actually they are of type OAuthCredential

            await signInWithCredentials(credentials);
          } catch (error) {
            console.error(error);
          }
        }}
      >
        Verify code
      </Button>
      <Button
        onPress={async () => {
          // The FirebaseRecaptchaVerifierModal ref implements the
          // FirebaseAuthApplicationVerifier interface and can be
          // passed directly to `verifyPhoneNumber`.
          // console.log('recaptchaVerifier.current', recaptchaVerifier.current);

          if (!recaptchaVerifier.current) {
            return;
          }

          const newVerificationId = await phoneProvider.verifyPhoneNumber(
            '+380988818221',
            recaptchaVerifier.current,
          );

          setVerificationId(newVerificationId);
        }}
      >
        send code
      </Button>
    </SafeAreaView>
  );
};

export default Auth;
