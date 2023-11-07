/* eslint-disable @cspell/spellchecker */
import {
  FirebaseRecaptchaBanner,
  FirebaseRecaptchaVerifierModal,
} from 'expo-firebase-recaptcha';
import {
  getAuth,
  PhoneAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from 'firebase/auth';
import { FC, useEffect, useRef, useState } from 'react';

import { AuthScreen } from '@hero24/common';
import { Button, SafeAreaView, View } from '@hero24/ui';

import { firebaseConfig } from '$/configs';
import { app, auth } from '$core';

// const appVerifier = new RecaptchaVerifier(
//   'recaptcha-container',
//   {
//     size: 'normal',
//     callback: (response) => {
//       // reCAPTCHA solved, allow signInWithPhoneNumber.
//       // ...
//     },
//   },
//   auth,
// );

const Auth: FC = () => {
  // useEffect(() => {
  //   // signInWithPhoneNumber(auth, '+380932554113', appVerifier)
  //   //   .then((confirmationResult) => {
  //   //     // SMS sent. Prompt user to type the code from the message, then sign the
  //   //     // user in with confirmationResult.confirm(code).
  //   //     // window.confirmationResult = confirmationResult;
  //   //     // ...
  //   //   })
  //   //   .catch((error) => {
  //   //     // Error; SMS not sent
  //   //     // ...
  //   //   });
  // }, []);
  const recaptchaVerifier = useRef(null);
  const [verificationId, setVerificationId] = useState<string>();
  const [verificationCode, setVerificationCode] = useState();

  return (
    <SafeAreaView>
      {/* <AuthScreen /> */}
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
        attemptInvisibleVerification
      />
      <Button
        onPress={async () => {
          // The FirebaseRecaptchaVerifierModal ref implements the
          // FirebaseAuthApplicationVerifier interface and can be
          // passed directly to `verifyPhoneNumber`.
          // console.log('recaptchaVerifier.current', recaptchaVerifier.current);

          if (!recaptchaVerifier.current) {
            return;
          }

          // const phoneProvider = new PhoneAuthProvider(auth);

          // const newVerificationId = await phoneProvider.verifyPhoneNumber(
          //   ,
          //   recaptchaVerifier.current,
          // );

          // console.log('newVerificationId', newVerificationId);

          signInWithPhoneNumber(
            auth,
            '+380932554113',
            recaptchaVerifier.current,
          )
            .then((confirmationResult) => {
              console.log('confirmationResult', confirmationResult);
              setVerificationId(confirmationResult.verificationId);

              confirmationResult.confirm('123456').then((result) => {
                const { user } = result;

                console.log('user', user);
              });
              // SMS sent. Prompt user to type the code from the message, then sign the
              // user in with confirmationResult.confirm(code).
              // window.confirmationResult = confirmationResult;
              // ...
            })
            .catch((error) => {
              console.error(error);
              // Error; SMS not sent
              // ...
            });
        }}
      >
        Login phone
      </Button>
    </SafeAreaView>
  );
};

export default Auth;
