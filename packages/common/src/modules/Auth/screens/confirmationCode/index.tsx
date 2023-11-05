import { parsePhoneNumber } from 'libphonenumber-js';
import { ConfirmationCodeFormText } from 'modules/Auth/components';
import {
  ConfirmationCodeForm,
  ConfirmationCodeFormProps,
} from 'modules/Auth/forms';
import { FC } from 'react';

import { StackKeyboardAwareView } from '@hero24/ui';

type Props = ConfirmationCodeFormProps;

export const ConfirmationCodeScreen: FC<Props> = (props) => {
  // TODO replace with phone getter from store
  const phone = '+3581234567890';
  const phoneNumber = parsePhoneNumber(phone).formatInternational();

  return (
    <StackKeyboardAwareView>
      <ConfirmationCodeFormText phone={phoneNumber} />
      <ConfirmationCodeForm {...props} />
    </StackKeyboardAwareView>
  );
};
