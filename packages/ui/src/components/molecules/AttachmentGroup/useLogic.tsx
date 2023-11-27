import { useMemo } from 'react';

import { AttachmentGroupProps, UseLogicReturnType } from './types';

import { Attachment } from '$atoms/Attachment';
import { useDynamicWidth } from '$hooks';

export const useLogic = (props: AttachmentGroupProps): UseLogicReturnType => {
  const {
    files,
    onDelete,
    type,
    externalPaddingsSum,
    gap,
    numberOfColumns = 1,
  } = props;

  const { dynamicWidth } = useDynamicWidth({
    externalPaddingsSum,
    divisor: numberOfColumns,
    gap,
  });

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
          width={dynamicWidth}
        />
      );
    });
  }, [files, onDelete, type]);

  return { attachments };
};
