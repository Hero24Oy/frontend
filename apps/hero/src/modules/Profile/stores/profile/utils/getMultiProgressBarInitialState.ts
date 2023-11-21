import omit from 'lodash/omit';

import { profileCreationInitialState } from '../store';

export const getMultiProgressBarInitialState = () => {
  return omit(profileCreationInitialState, ['welcome']);
};
