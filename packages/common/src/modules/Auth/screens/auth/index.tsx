import { PhoneSignInForm, PhoneSignInFormProps } from 'modules/Auth/forms';
import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Button, SafeAreaKeyboardAwareView, VStack } from '@hero24/ui';

import { Footer, Header, Or, SignInProvidersButtons } from '../../components';

type Props = PhoneSignInFormProps & {
  signInWithEmailHandler: () => void;
};

export const AuthScreen: FC<Props> = (props) => {
  const { signInWithPhoneHandler, signInWithEmailHandler } = props;

  return (
    <SafeAreaKeyboardAwareView>
      <VStack style={styles.wrapper}>
        <Header />
        <PhoneSignInForm signInWithPhoneHandler={signInWithPhoneHandler} />
        <Or />
        <SignInProvidersButtons />
        <Or />
        {/* TODO replace with i18n call */}
        <Button
          variant="outline"
          action="secondary"
          onPress={signInWithEmailHandler}
        >
          Login with email
        </Button>
      </VStack>
      <Footer />
    </SafeAreaKeyboardAwareView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
  },
});
