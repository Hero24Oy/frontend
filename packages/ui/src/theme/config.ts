import { config as defaultConfig } from '@gluestack-ui/config';
import { createConfig } from '@gluestack-ui/themed';

import * as components from './components';
import { Color, Font, FontSize, FontWeight, LineHeight } from './constants';

export const uiLibraryConfig = createConfig({
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    lineHeights: LineHeight,
    fontWeights: FontWeight,
    fontSizes: FontSize,
    colors: Color,
    fonts: Font,
  },
  components: {
    ...components,
  },
});
