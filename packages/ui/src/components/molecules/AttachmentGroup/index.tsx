import { FC } from 'react';

import { MimeComponents } from './constants';
import { AttachmentGroupProps } from './type';

import { Attachment } from '$atoms/Attachment';

export const AttachmentGroup: FC<AttachmentGroupProps> = (props) => {
  const { files, onDelete, mime } = props;

  const GroupComponent = MimeComponents[mime];

  return (
    <GroupComponent>
      {files.map((file) => (
        <Attachment key={file.id} file={file} onDelete={onDelete} mime={mime} />
      ))}
    </GroupComponent>
  );
};
