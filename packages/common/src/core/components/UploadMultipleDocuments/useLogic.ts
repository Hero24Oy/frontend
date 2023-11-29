import { FieldValues, useController } from 'react-hook-form';

import { UploadMultipleDocumentsProps, UseLogicReturnType } from './types';

import { useActionsheet } from '$core/hooks';

type Params<Type extends FieldValues> = Pick<
  UploadMultipleDocumentsProps<Type>,
  'files' | 'maxAttachments' | 'name' | 'control' | 'actionsheetItems'
>;

export const useLogic = <Type extends FieldValues>(
  props: Params<Type>,
): UseLogicReturnType => {
  const { files, maxAttachments, name, control, actionsheetItems } = props;

  const {
    fieldState: { error },
  } = useController({ name, control });

  const { items, isOpen, onOpen, onClose } = useActionsheet(actionsheetItems);

  const attachmentsAmount = files?.length || 0;

  const hasAttachments = attachmentsAmount > 0;

  const showUploadButton = attachmentsAmount < maxAttachments;

  return {
    hasAttachments,
    showUploadButton,
    error,
    items,
    isOpen,
    onOpen,
    onClose,
  };
};
