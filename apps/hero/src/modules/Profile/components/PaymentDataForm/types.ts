import { Path } from 'react-hook-form';

import { ProfileCreation } from '$modules/Profile/stores';

export type PaymentField = {
  name: Path<ProfileCreation['paymentData']>;
  placeholder: string;
  title: string;
};
