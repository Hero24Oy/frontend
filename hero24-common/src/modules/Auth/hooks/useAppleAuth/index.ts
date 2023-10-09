import * as AppleAuthentication from 'expo-apple-authentication';
import * as Crypto from 'expo-crypto';
import { OAuthCredential } from 'firebase/auth';
import { useCallback } from 'react';

import { WithCallback } from '../types';

import { AppleProvider, CSRF_END, NONCE_END, RADIX, START } from './constants';

type AppleAuthConfig = WithCallback;

type UseAppleAuth = (config: AppleAuthConfig) => {
  signInWithApple: () => Promise<void>;
};

export const useAppleAuth: UseAppleAuth = (config) => {
  const { onAuthSucceed } = config;

  const signInWithApple = useCallback(async () => {
    try {
      const csrfRandom: number = Math.random();
      const nonceRandom: number = Math.random();

      const csrf = csrfRandom.toString(RADIX).substring(START, CSRF_END);
      const nonce = nonceRandom.toString(RADIX).substring(START, NONCE_END);

      const hashedNonce: string = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        nonce,
      );

      const appleCredential: AppleAuthentication.AppleAuthenticationCredential =
        await AppleAuthentication.signInAsync({
          requestedScopes: [
            AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
            AppleAuthentication.AppleAuthenticationScope.EMAIL,
          ],
          state: csrf,
          nonce: hashedNonce,
        });

      const { identityToken } = appleCredential;

      if (!identityToken) {
        throw new Error("IdentityToken wasn't provided");
      }

      const credentials: OAuthCredential = AppleProvider.credential({
        idToken: identityToken,
        rawNonce: nonce,
      });

      await onAuthSucceed(credentials);
    } catch (error) {
      console.error(error);
    }
  }, [onAuthSucceed]);

  return { signInWithApple };
};
