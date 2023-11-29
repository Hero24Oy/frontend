import { Control, FieldValues, Path } from 'react-hook-form';

import { AttachmentProps, FileType, Item, Maybe } from '@hero24/ui';

export type UploadDocumentsProps<Type extends FieldValues> = {
  actionsheetItems: Item[];
  control: Control<Type>;
  file: Maybe<FileType>;
  name: Path<Type>;
  title: string;
  actionsheetTitle?: string;
  attachmentWidth?: number;
} & Pick<AttachmentProps, 'onDelete' | 'type'>;
