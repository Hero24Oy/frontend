import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Button, Color, TextDivider, VStack } from '@hero24/ui';

import {
  Footer,
  Header,
  PhoneSignInForm,
  PhoneSignInFormProps,
  SignInProvidersButtons,
} from '../components';

import { SafeAreaKeyboardAwareScrollView } from '$common';

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
        <TextDivider style={styles.divider} textStyle={styles.dividerText}>
          Or
        </TextDivider>
        <SignInProvidersButtons />
        {/* TODO replace with i18n call */}
        <TextDivider style={styles.divider} textStyle={styles.dividerText}>
          Or
        </TextDivider>
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
  dividerText: {
    color: Color.GREY_01,
  },
});
