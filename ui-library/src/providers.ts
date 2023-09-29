import { GluestackUIProvider } from '@gluestack-ui/themed';
import { CombineProviders } from 'react-combine-providers';

export const initializeProviders = (manager: CombineProviders) => {
    manager.push(GluestackUIProvider);
}


