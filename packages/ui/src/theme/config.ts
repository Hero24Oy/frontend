import { config as defaultConfig } from '@gluestack-ui/config';
import { createConfig } from '@gluestack-ui/themed';

import * as components from './components';
import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
} from './constants';

export const uiLibraryConfig = createConfig({
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    lineHeights,
    fontWeights,
    fontSizes,
    colors,
    fonts,
  },
  components,
});
