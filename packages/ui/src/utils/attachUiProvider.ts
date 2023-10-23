import { UiProvider } from 'components';
import { CombineProviders } from 'react-combine-providers';

export const attachUiProviders = (manager: CombineProviders): void => {
  manager.push(UiProvider);
};
