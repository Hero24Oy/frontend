import { useMemo } from 'react';

import { AttachmentGroupProps } from './types';

import { Attachment } from '$atoms/Attachment';

export const useLogic = (props: AttachmentGroupProps) => {
  const { files, onDelete, type } = props;

  const attachments = useMemo(() => {
    return files.map((file) => {
      const deleteHandler = () => {
        onDelete(file.id);
      };

      return (
        <Attachment
          key={file.id}
          file={file}
          onDelete={deleteHandler}
          type={type}
        />
      );
    });
  }, [files, onDelete, type]);

  return { attachments };
};
