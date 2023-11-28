import { useMemo } from 'react';

import { AttachmentGroupProps, UseLogicReturnType } from './types';

import { Attachment } from '$atoms/Attachment';
import { useDynamicWidth } from '$hooks';

type Props = {
  externalPaddingsSum: number;
  gap: number;
  numberOfColumns: number;
} & Pick<AttachmentGroupProps, 'onDelete' | 'files' | 'type'>;

export const useLogic = (props: Props): UseLogicReturnType => {
  const { files, onDelete, type, externalPaddingsSum, gap, numberOfColumns } =
    props;

  const { dynamicWidth } = useDynamicWidth({
    externalPaddingsSum,
    numberOfColumns,
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
