import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { VStack } from '@hero24/ui';

import {
  Footer,
  Header,
  OrDivider,
  SignInProvidersButtons,
} from '../components';
import { EmailSignInForm, EmailSignInFormProps } from '../forms';

import { StyledKeyboardAwareScrollView } from '$common/core';

type Props = EmailSignInFormProps;

export const SignInWithEmailScreen: FC<Props> = (props) => {
  return (
    <StyledKeyboardAwareScrollView>
      <VStack style={styles.wrapper}>
        <Header />
        <EmailSignInForm {...props} />
        <OrDivider />
        <SignInProvidersButtons />
      </VStack>
      <Footer />
    </StyledKeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});
