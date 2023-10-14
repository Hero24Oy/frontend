import { GluestackUIProvider } from '@gluestack-ui/themed';
import { CombineProviders } from 'react-combine-providers';

export const attachUiProviders = (manager: CombineProviders) => {
    manager.push(GluestackUIProvider);
}


