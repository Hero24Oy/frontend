import { JsxElement } from '@hero24/ui';

export type SetStateReturn<Name extends string> = {
  [Key in Name as `setVisible${Capitalize<Key>}`]: (state: boolean) => void;
};

export type ModalReturn<Name extends string> = {
  [Key in Name as `modal${Capitalize<Key>}`]: JsxElement;
};

export type UseModalReturnValue<Name extends string> = SetStateReturn<Name> &
  ModalReturn<Name>;
