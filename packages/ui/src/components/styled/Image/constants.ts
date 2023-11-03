import { $Values } from 'utility-types';

import { SizeKeys } from '$theme';

export type ImageSize = Extract<
  SizeKeys,
  'XXS' | 'XS' | 'SM' | 'MD' | 'LG' | 'XL' | 'XXL' | 'FULL'
>;
export const ImageSize: Record<ImageSize, string> = {
  XXS: '2xs',
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
  XXL: '2xl',
  FULL: 'full',
};

export type ImageSizValues = $Values<typeof ImageSize>;
