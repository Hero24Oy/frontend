import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { CombineProviders } from 'react-combine-providers';

// * Waiting for https://github.com/Helpdor/frontend/pull/29 to merge
// TODO this should be added to provider in order for styles to work
// import { Alert, AlertIcon } from '../theme/components/Alert';

export const attachUiProviders = (manager: CombineProviders): void => {
  manager.push(GluestackUIProvider, { config });
};
