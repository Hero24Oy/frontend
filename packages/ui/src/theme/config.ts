import { config as defaultConfig } from '@gluestack-ui/config';
import omit from 'lodash/omit';

import * as components from './components';

const defaultComponents = omit(
  defaultConfig.components,
  Object.keys(components),
);

export const uiLibraryConfig = {
  ...defaultConfig,
  components: {
    ...defaultComponents,
    ...components,
  },
};
