import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { VStack } from '@hero24/ui';

import { Footer, Header, SignInProvidersButtons } from '../components';
import { EmailSignInForm, EmailSignInFormProps } from '../forms';

import { StackKeyboardAwareScrollView, TextDivider } from '$common/core';

type Props = EmailSignInFormProps;

export const SignInWithEmailScreen: FC<Props> = (props) => {
  return (
    <StackKeyboardAwareScrollView>
      <VStack style={styles.wrapper}>
        <Header />
        <EmailSignInForm {...props} />
        {/* TODO replace with i18n call */}
        <TextDivider style={styles.divider}>Or</TextDivider>
        <SignInProvidersButtons />
      </VStack>
      <Footer />
    </StackKeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  divider: {
    paddingTop: 32,
    paddingBottom: 16,
    justifyContent: 'center',
  },
});
