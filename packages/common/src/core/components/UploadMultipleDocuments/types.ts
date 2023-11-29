import { FieldError, FieldValues } from 'react-hook-form';

import { AttachmentGroupProps, FileType, Maybe } from '@hero24/ui';

import { UploadDocumentsProps } from '../UploadDocument';

import { UseActionsheetReturnType } from '$core/hooks';

export type UploadMultipleDocumentsProps<Type extends FieldValues> = {
  files: Maybe<FileType[]>;
  maxAttachments: number;
  onDelete: (id: number) => void;
  label?: string;
} & Pick<
  AttachmentGroupProps,
  'gap' | 'externalPaddingsSum' | 'numberOfColumns'
> &
  Omit<UploadDocumentsProps<Type>, 'onDelete' | 'attachmentWidth' | 'file'>;

export type UseLogicReturnType = {
  error: FieldError | undefined;
  hasAttachments: boolean;
  showUploadButton: boolean;
} & UseActionsheetReturnType;
