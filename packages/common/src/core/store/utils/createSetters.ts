import { capitalize } from 'core/utils';
import { $Keys } from 'utility-types';

import { ScreensForms, Setters, Store } from '../types';

export const createSetters = <Forms extends ScreensForms>(
  forms: Forms,
  set: (value: Store<Forms>, replace: boolean) => void,
): Setters<Forms> => {
  const screenNames: $Keys<Forms>[] = Object.keys(forms);

  const setters = screenNames.reduce((setterAccumulator, screenName) => {
    const name = `set${capitalize(screenName as string)}`;

    const setter = (form: Forms[typeof screenName]) =>
      set({ [screenName]: form } as unknown as Store<Forms>, false);

    return { ...setterAccumulator, [name]: setter };
  }, {});

  return setters as Setters<Forms>;
};
