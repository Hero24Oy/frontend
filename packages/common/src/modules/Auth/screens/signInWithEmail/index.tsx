import { EmailSignInForm, EmailSignInFormProps } from 'modules/Auth/forms';
import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { StackKeyboardAwareView, VStack } from '@hero24/ui';

import { Footer, Header, Or, SignInProvidersButtons } from '../../components';

type Props = EmailSignInFormProps;

export const SignInWithEmailScreen: FC<Props> = (props) => {
  return (
    <StackKeyboardAwareView>
      <VStack style={styles.wrapper}>
        <Header />
        <EmailSignInForm {...props} />
        <Or />
        <SignInProvidersButtons />
      </VStack>
      <Footer />
    </StackKeyboardAwareView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});
