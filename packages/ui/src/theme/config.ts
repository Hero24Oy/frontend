import { config as defaultConfig } from '@gluestack-ui/config';
import { createConfig } from '@gluestack-ui/themed';

import * as components from './components';

export const uiLibraryConfig = createConfig({
  ...defaultConfig,
  components,
});
