import { useMemo } from 'react';

import { AttachmentGroupProps } from '../type';

import { UseLogicReturnType } from './types';

import { Attachment } from '$atoms/Attachment';

export const useLogic = (props: AttachmentGroupProps): UseLogicReturnType => {
  const { files, onDelete, type } = props;

  const attachments = useMemo(() => {
    return files.map((file) => (
      <Attachment key={file.id} file={file} onDelete={onDelete} type={type} />
    ));
  }, [files, onDelete, type]);

  return { attachments };
};
