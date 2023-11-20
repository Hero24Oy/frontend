import * as yup from 'yup';

import { ibanValidationSchema, ValidationHints } from '@hero24/common';

import { HeroType } from '$modules/Profile/stores';

export const getPaymentDataSchema = (heroType: HeroType) => {
  const isProfessional = heroType === HeroType.PROFESSIONAL;

  return yup.object({
    IBAN: ibanValidationSchema.required(ValidationHints.REQUIRED),
    companyId: isProfessional
      ? yup.string().required(ValidationHints.REQUIRED)
      : yup.string().default(null).notRequired(),
  });
};
