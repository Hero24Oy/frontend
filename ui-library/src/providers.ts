import { GluestackUIProvider } from '@gluestack-ui/themed';
import { combineProviders } from 'react-combine-providers';

export const providers = combineProviders();

providers.push(GluestackUIProvider);

export const MasterProvider = providers.master();
