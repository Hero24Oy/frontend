import { RadioOption } from '@hero24/common';

export const chipOptions = [
  { label: '0-10', value: { min: 0, max: 10 } },
  { label: '10-30', value: { min: 10, max: 30 } },
  { label: '30-50', value: { min: 30, max: 50 } },
  { label: '50-100', value: { min: 50, max: 100 } },
  { label: '100-200', value: { min: 100, max: 200 } },
  { label: '200+', value: { min: 200, max: 1000 } },
] satisfies RadioOption[];
