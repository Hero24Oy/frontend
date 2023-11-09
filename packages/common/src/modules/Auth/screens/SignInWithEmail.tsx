import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Color, VStack } from '@hero24/ui';

import {
  EmailSignInForm,
  EmailSignInFormProps,
  Footer,
  Header,
  SignInProvidersButtons,
} from '../components';

import { StackKeyboardAwareScrollView, TextDivider } from '$common/core';

type Props = EmailSignInFormProps;

export const SignInWithEmailScreen: FC<Props> = (props) => {
  return (
    <StackKeyboardAwareScrollView>
      <VStack style={styles.wrapper}>
        <Header />
        <EmailSignInForm {...props} />
        {/* TODO replace with i18n call */}
        <TextDivider style={styles.divider} textStyle={styles.dividerText}>
          Or
        </TextDivider>
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
  dividerText: {
    color: Color.GREY_01,
  },
});
