import { create } from 'zustand';

import { ScreensForms, Setters, ZustandStore } from './types';
import { createSetters } from './utils';

export const createMultiScreenStore = <Forms extends ScreensForms>(
  forms: Forms,
): ZustandStore<Forms> => {
  return create<Forms & Setters<Forms>>((set) => {
    const setters = createSetters(forms, set);

    return { ...forms, ...setters };
  });
};

export * from './types';
