import {
  Button,
  ButtonText,
  Input,
  InputField,
  View,
} from '@gluestack-ui/themed';
import * as AppleAuthentication from 'expo-apple-authentication';
import { Redirect } from 'expo-router';
import React, { FC, useState } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { authConfig } from '$/configs';
import {
  useAppleAuth,
  useAuthentication,
  useEmailSignIn,
  useEmailSignUp,
  useFacebookAuth,
  useFirebaseUser,
  useGoogleAuth,
} from '$common';

const styles = StyleSheet.create({
  appleButton: {
    height: 50,
  },
});

const Home: FC = () => {
  const [password, setPassword] = useState('');
  const { user } = useFirebaseUser();
  const [email, setEmail] = useState('');

  const { signInWithCredentials } = useAuthentication();
  const { signInWithEmail } = useEmailSignIn();
  const { signUpWithEmail } = useEmailSignUp();

  const { signInWithGoogle } = useGoogleAuth({
    onAuthSucceed: signInWithCredentials,
    androidClientId: authConfig.androidClientId,
    iosClientId: authConfig.iosClientId,
    webClientId: authConfig.webClientId,
  });

  const { signInWithFacebook } = useFacebookAuth({
    onAuthSucceed: signInWithCredentials,
    facebookAppId: authConfig.facebookAppId,
  });

  const { signInWithApple } = useAppleAuth({
    onAuthSucceed: signInWithCredentials,
  });

  const registerHandler = (): void => {
    signUpWithEmail({
      email,
      password,
    }).catch((err) => console.error(err));
  };

  const authHandler = (): void => {
    signInWithEmail({
      email,
      password,
    }).catch((err) => console.error(err));
  };

  if (user) {
    return <Redirect href="/profile" />;
  }

  return (
    <SafeAreaView>
      <View>
        <Button
          onPress={(): void => {
            signInWithGoogle().catch((err) => console.error(err));
          }}
        >
          <ButtonText>Sign in google</ButtonText>
        </Button>
        {Platform.OS === 'ios' && (
          <AppleAuthentication.AppleAuthenticationButton
            buttonType={
              AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN
            }
            buttonStyle={
              AppleAuthentication.AppleAuthenticationButtonStyle.BLACK
            }
            cornerRadius={5}
            style={styles.appleButton}
            onPress={(): void => {
              signInWithApple().catch((err) => console.error(err));
            }}
          />
        )}
        <Button
          onPress={(): void => {
            signInWithFacebook().catch((err) => console.error(err));
          }}
        >
          <ButtonText>Sign in facebook</ButtonText>
        </Button>
        <View>
          <Input>
            <InputField
              value={email}
              onChangeText={(text): void => setEmail(text)}
              placeholder="email"
            />
          </Input>
          <Input>
            <InputField
              value={password}
              onChangeText={(text): void => setPassword(text)}
              placeholder="password"
            />
          </Input>
          <Button onPress={registerHandler}>
            <ButtonText>Register</ButtonText>
          </Button>
          <Button onPress={authHandler}>
            <ButtonText>Login</ButtonText>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
