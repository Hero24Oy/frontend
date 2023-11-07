import { parsePhoneNumber } from 'libphonenumber-js';
import { FC } from 'react';

import { ConfirmationCodeFormText } from '../components';
import { ConfirmationCodeForm } from '../forms';

import { StyledKeyboardAwareScrollView } from '$common/core';

export const ConfirmationCodeScreen: FC = () => {
  // TODO replace with phone getter from store
  const phone = '+3581234567890';
  const phoneNumber = parsePhoneNumber(phone).formatInternational();

  return (
    <StyledKeyboardAwareScrollView>
      <ConfirmationCodeFormText phone={phoneNumber} />
      <ConfirmationCodeForm />
    </StyledKeyboardAwareScrollView>
  );
};