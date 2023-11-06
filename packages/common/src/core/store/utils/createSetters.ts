import { $Keys } from 'utility-types';

import { ScreensForms, Setters, Store } from '../types';

import { capitalize } from '$common/core';

export const createSetters = <Forms extends ScreensForms>(
  forms: Forms,
  set: (value: Store<Forms>, replace: boolean) => void,
): Setters<Forms> => {
  const screenNames: $Keys<Forms>[] = Object.keys(forms);

  return Object.fromEntries(
    screenNames.map((screenName) => {
      return [
        `set${capitalize(screenName as string)}`,
        (form: Forms[typeof screenName]) =>
          set({ [screenName]: form } as unknown as Store<Forms>, false),
      ];
    }),
  ) as unknown as Setters<Forms>;
};
