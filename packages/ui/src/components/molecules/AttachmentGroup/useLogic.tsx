import { useMemo } from 'react';

import { getWidthInPercent } from './helpers';
import { AttachmentGroupProps } from './types';

import { Attachment } from '$atoms/Attachment';
import { JsxElement } from '$types';

export const useLogic = (
  props: AttachmentGroupProps,
): { attachments: JsxElement[] } => {
  const { files, onDelete, type, numberOfColumns = 1 } = props;

  const paddings = 32;

  const gap = 8;

  const widthInPercent = getWidthInPercent(paddings, gap, numberOfColumns);

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
          widthInPercent={`${widthInPercent}%`}
        />
      );
    });
  }, [files, onDelete, type]);

  return { attachments };
};
