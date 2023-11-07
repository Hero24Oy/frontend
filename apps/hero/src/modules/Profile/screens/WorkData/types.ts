import { CompanyCreation } from '$modules/Profile/stores';

export type WorkData = CompanyCreation['workData'];

export type ValidatedFieldsWorkData = Omit<
  CompanyCreation['workData'],
  'certificate' | 'insurance'
>;
