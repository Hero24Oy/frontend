import { FC } from 'react';

import {
  ConfirmationCodeForm,
  ConfirmationCodeScreenText,
} from '../../components';

import { StackKeyboardAwareScrollView } from '$common';

export const ConfirmationCodeScreen: FC = () => {
  return (
    <StackKeyboardAwareScrollView>
      <ConfirmationCodeScreenText />
      <ConfirmationCodeForm />
    </StackKeyboardAwareScrollView>
  );
};
