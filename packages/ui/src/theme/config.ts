import { config as defaultConfig } from '@gluestack-ui/config';
import { createConfig } from '@gluestack-ui/themed';

import * as components from './components';
import {
  Colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
} from './constants';

export const uiLibraryConfig = createConfig({
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    lineHeights: {
      ...defaultConfig.tokens.lineHeights,
      ...lineHeights,
    },
    fontWeights: {
      ...defaultConfig.tokens.fontWeights,
      ...fontWeights,
    },
    fontSizes: {
      ...defaultConfig.tokens.fontSizes,
      ...fontSizes,
    },
    fonts: {
      ...defaultConfig.tokens.fonts,
      ...fonts,
    },
    colors: {
      ...defaultConfig.tokens.colors,
      ...Colors,
    },
  },
  components: {
    ...components,
  },
});
