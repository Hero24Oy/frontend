import { FC, memo } from 'react';
import { Control } from 'react-hook-form';

import { Input } from '@hero24/ui';

import { PaymentField } from '../../types';

import { ProfileCreation } from '$modules/Profile/stores';

type Props = {
  control: Control<ProfileCreation['paymentData']>;
} & PaymentField;

export const PaymentDataField: FC<Props> = memo((props) => {
  return <Input {...props} />;
});
