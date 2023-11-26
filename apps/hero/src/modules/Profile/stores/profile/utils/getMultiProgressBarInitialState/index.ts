import { HeroType } from 'hero24-types';
import omit from 'lodash/omit';

import { profileCreationInitialState } from '../../store';

import { omittedFormMapper } from './constants';

export const getMultiProgressBarInitialState = (heroType: HeroType) => {
  const omittedForm = omittedFormMapper[heroType];

  return omit(profileCreationInitialState, ['welcome', omittedForm]);
};
