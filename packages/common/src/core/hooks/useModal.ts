import { useCallback, useState } from 'react';
import {
  FieldValues,
  Path,
  PathValue,
  UseFormGetValues,
  UseFormResetField,
} from 'react-hook-form';

type Params<Type extends FieldValues> = {
  getValues: UseFormGetValues<Type>;
  initialState: PathValue<Type, Path<Type>>;
  name: Path<Type>;
  resetField: UseFormResetField<Type>;
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
  const { getValues, initialState, resetField, name } = params;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [fieldState, setFieldState] =
    useState<PathValue<Type, Path<Type>>>(initialState);

  const onOpenHandler = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onApplyHandler = useCallback(() => {
    setIsOpen(false);
    setFieldState(getValues(name));
  }, [getValues, name]);

  const onCloseHandler = useCallback(() => {
    setIsOpen(false);
    resetField(name, { defaultValue: fieldState });
  }, [resetField, name, fieldState]);

  return {
    isOpen,
    onApplyHandler,
    onCloseHandler,
    onOpenHandler,
  };
};
