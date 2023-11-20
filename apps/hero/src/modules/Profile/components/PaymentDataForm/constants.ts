import { PaymentField } from './types';

import { HeroType } from '$modules/Profile/stores';

// TODO replace text with i18n calls.
export const fieldsMapper = {
  [HeroType.PROFESSIONAL]: [
    {
      name: 'companyId',
      placeholder: '0000000-0',
      title: 'Company ID',
    },
    {
      name: 'IBAN',
      placeholder: 'FI0000000000000000',
      title: 'Company bank IBAN',
    },
  ],
  [HeroType.INDIVIDUAL]: [
    {
      name: 'IBAN',
      placeholder: 'FI0000000000000000',
      title: 'Your bank IBAN',
    },
  ],
} satisfies Record<HeroType, PaymentField[]>;
