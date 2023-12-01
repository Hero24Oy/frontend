import { Range } from '@hero24/common';
import { RadioOption } from '@hero24/ui';

export const chipOptions = [
  { label: 'Less than 1 year', value: { min: 0, max: 1 } },
  { label: '1-3 years', value: { min: 1, max: 3 } },
  { label: '3-5 years', value: { min: 3, max: 5 } },
  { label: '5+ years', value: { min: 5, max: 50 } },
] satisfies RadioOption<Range>[];

export const RESET_FIELD_DELAY_IN_MS = 45;
export const EXPERTISE_FIELD_NAME = 'expertise';
export const EXPERTISE_CATEGORIES_FIELD = 'expertise.expertiseCategories';
export const EXPERTISE_CATEGORIES_NAMES = 'expertise.categoriesNames';
export const PLACES_FIELD_NAME = 'places';
