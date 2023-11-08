import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Button, VStack } from '@hero24/ui';

import { Footer, Header, SignInProvidersButtons } from '../components';
import { PhoneSignInForm, PhoneSignInFormProps } from '../forms';

import { SafeAreaKeyboardAwareScrollView, TextDivider } from '$common/core';

type Props = PhoneSignInFormProps & {
  signInWithEmailCallback: () => void;
};

export const SignInScreen: FC<Props> = (props) => {
  const { signInWithPhoneCallback, signInWithEmailCallback } = props;

  return (
    <SafeAreaKeyboardAwareScrollView>
      <VStack style={styles.wrapper}>
        <Header />
        <PhoneSignInForm signInWithPhoneCallback={signInWithPhoneCallback} />
        {/* TODO replace with i18n call */}
        <TextDivider style={styles.divider}>Or</TextDivider>
        <SignInProvidersButtons />
        {/* TODO replace with i18n call */}
        <TextDivider style={styles.divider}>Or</TextDivider>
        {/* TODO replace with i18n call */}
        <Button
          variant="outline"
          action="secondary"
          onPress={signInWithEmailCallback}
        >
          Login with email
        </Button>
      </VStack>
      <Footer />
    </SafeAreaKeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  divider: {
    paddingTop: 32,
    paddingBottom: 16,
    justifyContent: 'center',
  },
});
