import { config as defaultConfig } from '@gluestack-ui/config';
import { createConfig } from '@gluestack-ui/themed';

import * as components from './components';
import { Color, Font, FontSize, FontWeight, LineHeight } from './constants';

export const uiLibraryConfig = createConfig({
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    lineHeights: {
      ...defaultConfig.tokens.lineHeights,
      ...LineHeight,
    },
    fontWeights: {
      ...defaultConfig.tokens.fontWeights,
      ...FontWeight,
    },
    fontSizes: {
      ...defaultConfig.tokens.fontSizes,
      ...FontSize,
    },
    colors: {
      ...defaultConfig.tokens.colors,
      ...Color,
    },
    fonts: Font,
  },
  components: {
    ...components,
  },
});
