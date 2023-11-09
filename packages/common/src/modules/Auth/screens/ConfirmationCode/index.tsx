import { FC } from 'react';

import {
  ConfirmationCodeForm,
  ConfirmationCodeScreenText,
} from '../../components';

// import { useLogic } from './useLogic';
import { StackKeyboardAwareScrollView } from '$common';

export const ConfirmationCodeScreen: FC = () => {
  // const phoneNumber = useLogic();

  return (
    <StackKeyboardAwareScrollView>
      <ConfirmationCodeScreenText />
      <ConfirmationCodeForm />
    </StackKeyboardAwareScrollView>
  );
};
