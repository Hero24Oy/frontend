/* eslint-disable @cspell/spellchecker -- TODO add to ignore */

import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { FC, useRef, useState } from 'react';
import { TextInput } from 'react-native';

import { usePhoneAuth } from '@hero24/common';
// import { AuthScreen } from '@hero24/common';
import { Button, SafeAreaView } from '@hero24/ui';

import { firebaseConfig } from '$/configs';

const Auth: FC = () => {
  const recaptchaVerifier = useRef(null);
  // TODO make nice captcha window
  // TODO test on android
  const [verificationCode, setVerificationCode] = useState<string>();
  const { sendVerificationCode, signInWithPhone } = usePhoneAuth();

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
          if (!verificationCode) {
            return;
          }

          await signInWithPhone({ verificationCode });
        }}
      >
        Verify code
      </Button>
      <Button
        onPress={async () => {
          if (!recaptchaVerifier.current) {
            return;
          }

          await sendVerificationCode({
            phoneNumber: '+380932554113',
            reCaptcha: recaptchaVerifier.current,
          });
        }}
      >
        send code
      </Button>
    </SafeAreaView>
  );
};

export default Auth;
