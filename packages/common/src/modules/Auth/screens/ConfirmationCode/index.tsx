import { FC } from 'react';

import { ConfirmationCodeForm, ConfirmationCodeHeader } from '../../components';

import { useLogic } from './useLogic';

import { StackKeyboardAwareScrollView } from '$core';

export const ConfirmationCodeScreen: FC = () => {
  const { phone } = useLogic();

  return (
    <StackKeyboardAwareScrollView scrollEnabled={false}>
      <ConfirmationCodeHeader phone={phone} />
      <ConfirmationCodeForm />
    </StackKeyboardAwareScrollView>
  );
};
