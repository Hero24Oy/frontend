import { parsePhoneNumber } from 'libphonenumber-js';
import { FC } from 'react';

import { ConfirmationCodeFormText } from '../components';
import { ConfirmationCodeForm, ConfirmationCodeFormProps } from '../forms';

import { StyledKeyboardAwareScrollView } from '$common/core';

type Props = ConfirmationCodeFormProps;

export const ConfirmationCodeScreen: FC<Props> = (props) => {
  // TODO replace with phone getter from store
  const phone = '+3581234567890';
  const phoneNumber = parsePhoneNumber(phone).formatInternational();

  return (
    <StyledKeyboardAwareScrollView>
      <ConfirmationCodeFormText phone={phoneNumber} />
      <ConfirmationCodeForm {...props} />
    </StyledKeyboardAwareScrollView>
  );
};
