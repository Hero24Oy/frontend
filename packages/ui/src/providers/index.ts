import { config } from '@gluestack-ui/config';
import { createConfig, GluestackUIProvider } from '@gluestack-ui/themed';
import { CombineProviders } from 'react-combine-providers';

import { Alert, AlertIcon } from '../theme/components/Alert';

export const uiLibraryConfig = createConfig({
  ...config,
  components: {
    ...config.components,
    AlertIcon,
    Alert,
  },
});

export const attachUiProviders = (manager: CombineProviders): void => {
  manager.push(GluestackUIProvider, { config: uiLibraryConfig });
};
