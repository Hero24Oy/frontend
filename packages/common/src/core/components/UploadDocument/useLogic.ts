import { FieldError, FieldValues, useController } from 'react-hook-form';

import { UploadDocumentsProps } from './types';

import { useActionsheet, UseActionsheetReturnType } from '$core/hooks';

type Props<Type extends FieldValues> = Pick<
  UploadDocumentsProps<Type>,
  'file' | 'name' | 'control' | 'actionsheetItems'
>;

type ReturnType = {
  error: FieldError | undefined;
} & UseActionsheetReturnType;

export const useLogic = <Type extends FieldValues>(
  props: Props<Type>,
): ReturnType => {
  const { actionsheetItems, ...restProps } = props;

  const {
    fieldState: { error },
  } = useController(restProps);

  const { items, onOpen, ...restParams } = useActionsheet(actionsheetItems);

  return { error, items, onOpen, ...restParams };
};
