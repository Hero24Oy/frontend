import { GluestackUIProvider } from '@gluestack-ui/themed';
import { CombineProviders } from 'react-combine-providers';

import { uiLibraryConfig as config } from '$theme';

// import { config } from '../config/gluestack-ui.config';

export const attachUiProviders = (manager: CombineProviders): void => {
  manager.push(GluestackUIProvider, { config });
};
