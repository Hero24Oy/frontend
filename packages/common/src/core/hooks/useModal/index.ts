import { useCallback, useState } from 'react';
import {
  FieldValues,
  Path,
  PathValue,
  UseFormGetValues,
  UseFormResetField,
} from 'react-hook-form';

import { RESET_FIELD_DELAY_IN_MS } from './constants';

type Params<Type extends FieldValues> = {
  getValues: UseFormGetValues<Type>;
  initialState: PathValue<Type, Path<Type>>;
  name: Path<Type>;
  resetField: UseFormResetField<Type>;
  isResetDelayed?: boolean;
};

type ReturnType = {
  isOpen: boolean;
  onApplyHandler: () => void;
  onCloseHandler: () => void;
  onOpenHandler: () => void;
};

export const useModal = <Type extends FieldValues>(
  params: Params<Type>,
): ReturnType => {
  const {
    getValues,
    initialState,
    resetField,
    name,
    isResetDelayed = true,
  } = params;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [fieldState, setFieldState] =
    useState<PathValue<Type, Path<Type>>>(initialState);

  const onOpenHandler = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onApplyHandler = () => {
    setIsOpen(false);
    setFieldState(getValues(name));
  };

  const onResetHandler = () => {
    if (isResetDelayed) {
      setTimeout(() => {
        resetField(name, { defaultValue: fieldState });
      }, RESET_FIELD_DELAY_IN_MS);
    } else {
      resetField(name, { defaultValue: fieldState });
    }
  };

  const onCloseHandler = () => {
    setIsOpen(false);
    onResetHandler();
  };

  return {
    isOpen,
    onApplyHandler,
    onCloseHandler,
    onOpenHandler,
  };
};
