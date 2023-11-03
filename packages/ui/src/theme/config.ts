import { config as defaultConfig } from '@gluestack-ui/config';

import * as components from './components';

export const uiLibraryConfig = {
  ...defaultConfig,
  components: {
    ...defaultConfig.components,
    ...components,
  },
} as unknown; // TODO: remove id after @gluestack-ui fixed types
