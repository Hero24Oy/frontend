import { FC } from 'react';

import { ConfirmationCodeForm, ConfirmationCodeHeader } from '../../components';

import { useLogic } from './useLogic';

import { StackKeyboardAwareScrollView } from '$common';

export const ConfirmationCodeScreen: FC = () => {
  const { phone } = useLogic();

  return (
    <StackKeyboardAwareScrollView>
      <ConfirmationCodeHeader phone={phone} />
      <ConfirmationCodeForm />
    </StackKeyboardAwareScrollView>
  );
};
