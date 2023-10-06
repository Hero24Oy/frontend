import * as AppleAuthentication from 'expo-apple-authentication';
import * as Crypto from 'expo-crypto';
import { OAuthCredential, OAuthProvider } from 'firebase/auth';
import { useCallback } from 'react';

import { OnAuthSucceed } from './types';

export const RADIX = 36;

export const START = 2;

export const CSRF_END = 15;

export const NONCE_END = 10;

export const AppleProvider = new OAuthProvider('apple.com');

type AppleAuthConfig = {
  facebookAppId: string;
} & OnAuthSucceed;

type UseAppleAuth = (config: AppleAuthConfig) => () => Promise<void>;

export const useAppleAuth: UseAppleAuth = (config) => {
  const { onAuthSucceed } = config;

  const handleSignIn = useCallback(async () => {
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

    await onAuthSucceed(credentials).catch((error) => console.error(error));
  }, [onAuthSucceed]);

  return handleSignIn;
};
