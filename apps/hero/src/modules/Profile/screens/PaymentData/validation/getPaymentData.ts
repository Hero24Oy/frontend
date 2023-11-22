import { HeroType } from 'hero24-types';
import * as yup from 'yup';

import { ibanValidationSchema, ValidationHints } from '@hero24/common';

export const getPaymentDataSchema = (heroType: HeroType) => {
  const isProfessional = heroType === HeroType.PROFESSIONAL;

  return yup.object({
    IBAN: ibanValidationSchema.required(ValidationHints.REQUIRED),
    companyId: isProfessional
      ? yup.string().required(ValidationHints.REQUIRED)
      : yup.string().default(null).notRequired(),
  });
};
