import { Size, SizeKeys } from '$theme';

export type ImageSize = Extract<
  SizeKeys,
  'XXS' | 'XS' | 'SM' | 'MD' | 'LG' | 'XL' | 'XXL' | 'FULL'
>;

export type ImageSizeValues = (typeof Size)[ImageSize];
