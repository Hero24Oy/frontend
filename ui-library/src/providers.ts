import { GluestackUIProvider } from '@gluestack-ui/themed';
import { ProviderManager } from './utils';

export const providers = new ProviderManager()

providers.push(GluestackUIProvider);
