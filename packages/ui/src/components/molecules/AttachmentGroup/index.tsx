import { FC } from 'react';

import { MimeComponents } from './constants';
import { AttachmentGroupProps } from './type';

import { Attachment } from '$atoms/Attachment';

export const AttachmentGroup: FC<AttachmentGroupProps> = (props) => {
  const { files, onDelete, type } = props;

  const GroupComponent = MimeComponents[type];

  return (
    <GroupComponent>
      {files.map((file) => (
        <Attachment key={file.id} file={file} onDelete={onDelete} type={type} />
      ))}
    </GroupComponent>
  );
};
