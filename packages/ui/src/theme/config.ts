import { createConfig } from '@gluestack-style/react';
import { config as defaultConfig } from '@gluestack-ui/config';

import { colors } from './colors';
import * as components from './components';
import { fonts } from './fonts';
import { fontSizes } from './fontSizes';
import { fontWeights } from './fontWeights';
import { lineHeights } from './lineHeight';

export const uiLibraryConfig = createConfig({
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    lineHeights,
    fontWeights,
    fontSizes,
    fonts,
    colors: {
      ...defaultConfig.tokens.colors,
      ...colors,
    },
  },
  components: {
    ...defaultConfig.components,
    ...components,
  },
});
