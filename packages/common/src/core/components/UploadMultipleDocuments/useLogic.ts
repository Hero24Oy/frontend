import { FieldValues } from 'react-hook-form';

import { UploadMultipleDocumentsProps, UseLogicReturnType } from './types';

type Params = Pick<
  UploadMultipleDocumentsProps<FieldValues>,
  'files' | 'maxAttachments'
>;

export const useLogic = (params: Params): UseLogicReturnType => {
  const { files, maxAttachments } = params;

  const numberOfAttachments = files ? files.length : 0;

  const isAttachments = numberOfAttachments > 0;

  const isUploadButton = numberOfAttachments < maxAttachments;

  return { isAttachments, isUploadButton };
};
