import { FieldValues } from 'react-hook-form';

import { AttachmentGroupProps, FileType, Maybe } from '@hero24/ui';

import { UploadDocumentsProps } from '../UploadDocument';

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
  isAttachments: boolean;
  isUploadButton: boolean;
};
