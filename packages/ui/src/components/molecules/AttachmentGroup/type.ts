import { AttachmentProps, AttachmentType, FileType } from '$components/atoms';

export type AttachmentGroupProps = {
  files: FileType[];
  type: `${AttachmentType}`;
} & Pick<AttachmentProps, 'onDelete'>;
