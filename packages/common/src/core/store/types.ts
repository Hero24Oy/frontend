import { $Keys } from 'utility-types';
import { StoreApi, UseBoundStore } from 'zustand';

export type ScreenForm = Record<string, unknown>;

export type ScreensForms = Record<string, ScreenForm>;

export type Setters<Forms extends ScreensForms> = {
  [Key in $Keys<Forms> as `set${Capitalize<string & Key>}`]: (
    form: Forms[Key],
  ) => void;
};

export type ZustandStore<Forms extends ScreensForms> = UseBoundStore<
  StoreApi<Forms & Setters<Forms>>
>;
