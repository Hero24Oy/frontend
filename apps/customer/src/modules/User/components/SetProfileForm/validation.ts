import { boolean, InferType, object, string } from 'yup';

export const validationSchema = object({
  email: string().required(),
  firstName: string().required(),
  lastName: string().required(),
  businessCustomer: boolean().required(),
});

export type SetProfileFormData = InferType<typeof validationSchema>;
